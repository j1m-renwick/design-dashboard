import React, {useState} from 'react';
import './LinuxConsole.css';
import LinuxConsole from "./LinuxConsole";
import InstructionBox from "./InstructionBox";
import FileArea from "./FileArea";
import CertificateView from "./CertificateView";
import {states} from "./animationStates";

export default function CertificateVerification() {

    const [keyFrame, setKeyFrame] = useState(0);

    const clickAnimation = () => {
        setKeyFrame((keyFrame + 1) % states.length);
    }

    return (
        <div onClick={() => clickAnimation()} style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
            <div style={{flex: "3", margin: "10px"}}>
                <CertificateView state={states[keyFrame].certificateView??{}}/>
            </div>
            <FileArea state={states[keyFrame]}/>
            <InstructionBox onClick={e => e.stopPropagation()} text={states[keyFrame].instructionText??""}/>
            <LinuxConsole onClick={e => e.stopPropagation()} consoleText={states[keyFrame].consoleText??""} output={states[keyFrame].consoleOutputText??""}/>
        </div>
    );
}
