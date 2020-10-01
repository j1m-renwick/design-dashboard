import React, {useRef, useState} from 'react';
import {transform} from "framer-motion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {motion} from "framer-motion";
import CertificateMockSvg from './CertificateMockSvg';
import CertificateBodySvg from './CertificateBodySvg';

export default function CertificateView({state}) {

    const [showViewport, setShowViewport] = useState(false);
    const [magnifierTopOffset, setMagnifierTopOffset] = useState(0);

    const certificateHeightPixelRange = [0, 420 - 70] // 420 is the height, 70 is a magic number I think
    const viewportCertificatePixelRange = [0, 3200]

    const ref = useRef();

    const moveViewport = evt => {
        let boundingBox = evt.currentTarget.getBBox()
        let viewportYCenter = Math.min(Math.max(0, evt.clientY - boundingBox.y), boundingBox.height - 100)
        setMagnifierTopOffset(viewportYCenter);
        if (ref.current) {
            ref.current.scrollTop = transform(viewportYCenter, certificateHeightPixelRange, viewportCertificatePixelRange)
        }
    }

    const startViewport = evt => {
        setShowViewport(true)
        moveViewport(evt);
    }

    const classes = makeStyles(theme => ({
        magnifier: {
            position: "absolute",
            left: `0px`,
            top: `${magnifierTopOffset}px`,
            width: "264px",
            height: "100px",
            pointerEvents: "none",
            backgroundColor: "rgb(12,12,12,0.5)"
        },
        viewport: {
            position: "absolute",
            top: "100px",
            left: "300px",
            width: "700px",
            height: "300px",
            backgroundColor: "white",
            borderRadius: "10px",
            textAlign: "left",
            overflowY: "scroll",
            padding: "10px"
        }
    }))();


    return (
        <motion.div animate={state} style={{opacity: 0, position: "absolute", left: "450px"}}>
            <CertificateMockSvg mouseEnterCb={startViewport} mouseMoveCb={moveViewport} mouseLeaveCb={() => setShowViewport(false)}/>
            {showViewport ?
                <>
                    <div className={classes.magnifier}/>
                    <div ref={ref} className={classes.viewport}>
                        <CertificateBodySvg/>
                    </div>
                </>
                : <></>}
        </motion.div>
    );
}
