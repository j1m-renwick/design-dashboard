import React, {useState} from 'react';
import './LinuxConsole.css';
import LinuxConsole from "./LinuxConsole";
import {motion} from "framer-motion";
import InstructionBox from "./InstructionBox";
import FileArea from "./FileArea";
import CertificateView from "./CertificateView";

const states = [
    {
        instructionText: "Drag the certificate icon from a website to the target directory to get the certificate file. <br/><b>In this example, the certificate is DER-encrypted.</b>",
        certificateImg: {opacity: 0}
    },
    {
        instructionText: "Drag the certificate icon from a website to the target directory to get the certificate file. <br/><b>In this example, the certificate is DER-encrypted.</b>",
        certificateImg: {opacity: 1}
    },
    {
        instructionText: "Open the certificate in plain text format, and get the CA Issuer URL",
        consoleText: "openssl x509 -in *.google.com.cer -inform DER -text -noout | grep -o 'CA Issuers - URI:.*' | cut -d ':' -f2-"
    }
]


export default function CertificateVerification() {

    const [keyFrame, setKeyFrame] = useState(0);

    const variants = [
        {x: 0},
        {x: 0},
        {x: 200},
    ]

    const clickAnimation = () => {
        setKeyFrame((keyFrame + 1) % states.length);
    }

    return (
        <div onClick={() => clickAnimation()} style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
            <div style={{flex: "3", margin: "10px"}}>
                <CertificateView state={variants[keyFrame]}/>
            </div>
            <FileArea state={states[keyFrame]}/>
            <InstructionBox onClick={e => e.stopPropagation()} text={states[keyFrame].instructionText??""}/>
            <LinuxConsole onClick={e => e.stopPropagation()} consoleText={states[keyFrame].consoleText??""}/>
        </div>
    );
}
