import React from 'react';
import {motion} from "framer-motion";


export default function HashComparison({hashState}) {

    return (
        <>
            <motion.div style={{position: "relative", height: "50px", opacity: 0}} animate={hashState.certificateWrapper??{}}>
                <div style={{width: "100%", position: "relative", marginBottom: "10px", height: "100%"}}>
                    <div style={{fontWeight: "bold", marginBottom: "5px"}}>Decrypted Signature Hash</div>
                    <motion.div style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, zIndex: 4}}
                                animate={hashState.certificate??{}}>
                        CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505
                    </motion.div>
                </div>
            </motion.div>
            <motion.div style={{position: "relative", height: "50px", opacity: 0}} animate={hashState.signatureWrapper??{}}>
                <div style={{width: "100%", position: "relative", height: "100%"}}>
                    <div style={{fontWeight: "bold", marginBottom: "5px"}}>Certificate Hash</div>
                    <motion.div style={{position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, zIndex: 4}}
                         animate={hashState.signature??{}}>
                        CD55BA8E69BCC9A1C2AABA552982ABD5519051F5708CB6F9885CD3A7D28CD505
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
