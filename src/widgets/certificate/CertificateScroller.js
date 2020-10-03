import React, {useRef, useState} from 'react';
import {motion, transform} from "framer-motion";
import CertificateMockSvg from './CertificateMockSvg';
import CertificateViewport from './CertificateViewport';
import {makeStyles} from "@material-ui/core/styles";

export default function CertificateScroller({state}) {

    const [showViewport, setShowViewport] = useState(false);
    const [magnifierTopOffset, setMagnifierTopOffset] = useState(0);

    const viewportCertificatePixelRange = [0, 3200]

    const viewport = useRef();
    const magnifierRef = useRef();

    const moveViewport = evt => {
        if (magnifierRef.current) {
            let boundingBoxContainer = evt.currentTarget.getBoundingClientRect();
            let svgBoxContainer = evt.currentTarget.getBBox();
            let magnifierHeight = magnifierRef.current.offsetHeight
            let lowerBoundYValue = Math.max(0, evt.clientY - boundingBoxContainer.y - (magnifierHeight / 2))
            let upperBoundYValue = boundingBoxContainer.height - magnifierHeight
            let magnifierLocation = Math.min(lowerBoundYValue, upperBoundYValue)
            let scale = boundingBoxContainer.height / 100
            setMagnifierTopOffset(magnifierLocation / scale);
            if(viewport.current) {
                let certificateHeightPixelRange = [0, boundingBoxContainer.height - svgBoxContainer.y + (magnifierHeight / 2)]
                viewport.current.scrollTop = transform(magnifierLocation, certificateHeightPixelRange, viewportCertificatePixelRange)
            }
        }
    }

    const startViewport = evt => {
        setShowViewport(true)
        moveViewport(evt);
    }

    const classes = makeStyles(theme => ({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0
        }
    }))();


    return (
        <motion.div className={classes.container} animate={state}>
            <CertificateMockSvg magnifierRef={magnifierRef} magnifierOffset={magnifierTopOffset} showViewport={showViewport} mouseEnterCb={startViewport} mouseMoveCb={moveViewport} mouseLeaveCb={() => setShowViewport(false)}/>
            {/*{showViewport ?*/}
            <CertificateViewport reference={viewport}/>
            {/*: <></>}*/}
        </motion.div>
    );
}
