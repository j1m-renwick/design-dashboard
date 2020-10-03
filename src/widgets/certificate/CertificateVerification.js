import React, {useState} from 'react';
import LinuxConsole from "./LinuxConsole";
import InstructionBox from "./InstructionBox";
import FileArea from "./FileArea";
import CertificateScroller from "./CertificateScroller";
import HashComparison from "./HashComparison";
import {states} from "./animationStates";
import Overlay from "./Overlay";
import {motion} from "framer-motion";


export default function CertificateVerification() {

    const [keyFrame, setKeyFrame] = useState(0);

    const clickAnimation = () => {
        setKeyFrame((keyFrame + 1) % states.length);
    }

    return (
        <div onClick={() => clickAnimation()} style={{position: "relative", display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
            <Overlay state={states[keyFrame].modal??{}}/>
            {/*equals sign for the final comparison*/}
            <motion.img animate={states[keyFrame].equalsSign??{}} style={{position: "absolute", height: "400px", width: "400px", zIndex: 4, left: "calc(100% - 50% - 200px)", display: "none"}} src={require("./../../images/equals.gif")}/>
            <div style={{margin: "10px"}}>
                <CertificateScroller state={states[keyFrame].certificateView??{}}/>
            </div>
            <HashComparison hashState={states[keyFrame].hashes??{}}/>
            <FileArea state={states[keyFrame]}/>
            <InstructionBox onClick={e => e.stopPropagation()} text={states[keyFrame].instructionText??""}/>
            <LinuxConsole onClick={e => e.stopPropagation()} consoleText={states[keyFrame].consoleText??""} output={states[keyFrame].consoleOutputText??""}/>
        </div>
    );
}
