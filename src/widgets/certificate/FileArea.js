import React from 'react';
import './LinuxConsole.css';
import {motion} from "framer-motion";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

export default function FileArea({state}) {

    const classes = makeStyles(theme => ({
            container: {
                marginBottom: "5px",
                maxHeight: "120px",
                minHeight: "120px",
                padding: "15px",
                fontSize: "14pt",
                display: "flex",
                justifyContent: "space-around"
            },
            image: {
                height: "70px",
                width: "auto",
                opacity: 0
            },
            certWrapper: {
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        })
    )();

    return (
        <Container className={classes.container} maxWidth="md">
            <motion.div animate={state.certificateFileImg ?? {}} className={classes.certWrapper}>
                <motion.img animate={state.certificateFileImg ?? {}} className={classes.image} src={require("../../images/cert-template.png")}/>
                    *.google.com.cer
            </motion.div>
            <motion.div animate={state.certificateIssuerImg ?? {}} className={classes.certWrapper}>
                <motion.img animate={state.certificateIssuerImg ?? {}} className={classes.image} src={require("../../images/cert-template.png")}/>
                issuer.crt
            </motion.div>
            <motion.div animate={state.certificateIssuerPubKeyImg ?? {}} className={classes.certWrapper}>
                <motion.img animate={state.certificateIssuerPubKeyImg ?? {}} className={classes.image} src={require("../../images/pem-template.png")}/>
                issuer-pubkey.pem
            </motion.div>
            <motion.div animate={state.certificateHexBinImg ?? {}} className={classes.certWrapper}>
                <motion.img animate={state.certificateHexBinImg ?? {}} className={classes.image} src={require("../../images/bin-template.png")}/>
                hex-sig.bin
            </motion.div>
            <motion.div animate={state.certificateHashedImg ?? {}} className={classes.certWrapper}>
                <motion.img animate={state.certificateHashedImg ?? {}} className={classes.image} src={require("../../images/bin-template.png")}/>
                certificate-hash.bin
            </motion.div>
        </Container>
    );
}
