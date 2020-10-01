import React from 'react';
import './LinuxConsole.css';
import {motion} from "framer-motion";
import Container from "@material-ui/core/Container";

export default function FileArea({state}) {

    return (
        <Container style={{height: "70px"}} maxWidth="md">
            <motion.img className="orig-cert" style={{height: "inherit", opacity: 0}} animate={state.certificateImg ?? {}} src={require("../../images/cert-img.png")}/>
        </Container>
    );
}
