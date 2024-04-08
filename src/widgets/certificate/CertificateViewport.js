import React from 'react';
import makeStyles from "@mui/styles/makeStyles";
import CertificateBodySvg from './CertificateBodySvg';

export default function CertificateViewport({reference}) {

    const classes = makeStyles(theme => ({
        viewport: {
            width: "700px",
            height: "300px",
            backgroundColor: "white",
            borderRadius: "10px",
            textAlign: "left",
            overflowY: "scroll",
            padding: "10px",
            margin: "30px 10px 30px 10px",
            borderWidth: "thin",
            borderStyle: "solid"
        }
    }))();


    return (
            <div ref={reference} className={classes.viewport}>
                <CertificateBodySvg/>
            </div>
    );
}
