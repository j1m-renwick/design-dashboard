import React from 'react';
import {motion} from "framer-motion";


export default function HashComparison() {

    return (
        <>
            <div style={{position: "relative", height: "50px"}}>
                <div style={{width: "100%", position: "relative", marginBottom: "10px", height: "100%"}}>
                    <div style={{fontWeight: "bold", marginBottom: "5px"}}>Decrypted Signature Hash</div>
                    <motion.div style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0}} animate={{y: -100}}>CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505</motion.div>
                </div>
            </div>
            <div style={{position: "relative", height: "50px"}}>
                <div style={{width: "100%", position: "relative", height: "100%"}}>
                    <div style={{fontWeight: "bold", marginBottom: "5px"}}>Certificate Hash</div>
                    <motion.div style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0}} animate={{y: -100}}>cd55ba8e69bcc9a1c2aaba552982abd5519051f5708cb6f9885cd3a7d28cd505</motion.div>
                </div>
            </div>
        </>
    );
}
