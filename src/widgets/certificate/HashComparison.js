import React from 'react';
import {motion} from "framer-motion";
import {makeStyles} from "@mui/styles";


export default function HashComparison({hashState}) {

    const classes = makeStyles(theme => ({
        container: {
            position: "relative",
            height: "50px",
            opacity: 0
        },
        innerContainer: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        label: {
            fontWeight: "bold",
            marginBottom: "5px"
        },
        hash: {
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            zIndex: 4
        }
    }))();

    return (
        <>
            <motion.div className={classes.container} animate={hashState.certificateWrapper??{}}>
                <div className={classes.innerContainer} style={{marginBottom: "10px"}}>
                    <div className={classes.label}>Decrypted Signature Hash</div>
                    <motion.div className={classes.hash} animate={hashState.certificate??{}}>
                        CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className={classes.container} animate={hashState.signatureWrapper??{}}>
                <div className={classes.innerContainer}>
                    <div className={classes.label}>Certificate Hash</div>
                    <motion.div className={classes.hash} animate={hashState.signature??{}}>
                        CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
