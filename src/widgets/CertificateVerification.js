import React, {useState} from 'react';
import './LinuxConsole.css';
import LinuxConsole from "./LinuxConsole";
import {motion} from "framer-motion";
import { Container } from '@material-ui/core';

export default function CertificateVerification() {

    const [keyFrame, setKeyFrame] = useState(0);

    const variants = [
        {x: 0},
        {x: 200},
    ]

    const clickAnimation = () => {
        console.log("clicked");
        setKeyFrame((keyFrame + 1) % 2);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
            <div style={{flex: "3", margin: "10px"}}>
                <motion.div onClick={() => clickAnimation()} initial={false} animate={variants[keyFrame]}>
                    <svg width="264" height="420" viewBox="58 65 265 421" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <rect stroke="#000" rx="25" height="419.99999" width="263.99999" y="65.45313" x="58.50001" strokeWidth="1.5" fill="#fff"/>
                            <rect rx="7" height="22" width="210" y="96.45313" x="84.5" strokeWidth="0" stroke="#ff0000" fill="#f44336"/>
                            <rect stroke="#ff0000" rx="7" height="22" width="179" y="137.45313" x="115.5" strokeWidth="0" fill="#29b6f6"/>
                            <rect stroke="#ff0000" rx="7" height="22" width="179" y="179.45313" x="115.5" strokeWidth="0" fill="#66bb6a"/>
                            <rect stroke="#ff0000" rx="7" height="22" width="179" y="219.45313" x="115.5" strokeWidth="0" fill="#98ee99"/>
                            <rect rx="7" height="22" width="210" y="260.45313" x="84.5" strokeWidth="0" stroke="#ff0000" fill="#f44336"/>
                            <rect stroke="#ff0000" rx="7" height="22" width="179" y="301.45313" x="115.5" strokeWidth="0" fill="#ff77a9"/>
                            <rect stroke="#ff0000" rx="7" height="22" width="179" y="417.45313" x="115.5" strokeWidth="0" fill="#ff77a9"/>
                            <rect stroke="#ff0000" height="119" width="179" y="311.45313" x="115.5" strokeWidth="0" fill="#ff77a9"/>
                            <text fontWeight="bold" textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="14" y="112.45313" x="90.5" strokeWidth="0" stroke="#ff0000" fill="#ffffff">DATA</text>
                            <text fontWeight="bold" textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="14" y="276.45313" x="90.5" strokeWidth="0" stroke="#ff0000" fill="#ffffff">SIGNATURE</text>
                        </g>
                    </svg>
                </motion.div>
            </div>
            <Container style={{backgroundColor: "white", borderRadius: "10px", marginBottom: "5px", maxHeight: "100px", minHeight:"100px", overflowY: "scroll", padding: "15px", fontSize: "14pt", borderColor:"black", borderStyle: "solid", borderWidth: "1px"}}  maxWidth="md">
                I'm half machine. I'm a monster. Well, what do you expect, mother? No! I was ashamed to be SEEN with you. I like being with you. Army had half a day. I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense.
                There's so many poorly chosen words in that sentence. Army had half a day.</Container>
            <LinuxConsole rawText="SIGNATURE_HEX=$(openssl x509 -in *.google.com.cer -inform DER -text -noout -certopt ca_default -certopt no_validity -certopt no_serial -certopt no_subject -certopt no_extensions -certopt no_signame | grep -v 'Signature Algorithm' | tr -d '[:space:]:')"/>
        </div>
    );
}
