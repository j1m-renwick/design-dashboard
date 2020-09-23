import React, {useState} from 'react';
import {motion} from "framer-motion";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CertificateVerification() {

    // const [keyFrame, setKeyFrame] = useState(0);
    //
    // const variants = [
    //     {x: 0},
    //     {x: 200},
    // ]
    //
    // const clickAnimation = () => {
    //     console.log("clicked");
    //     setKeyFrame((keyFrame + 1) % 2);
    // }

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{height: "75vh", margin: "10px"}}>
                <div style={{position: "absolute", margin: "10px"}}>
                <svg width="264" height="420" viewBox="58 65 265 421" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <title>Layer 1</title>
                        <rect stroke="#000" rx="25" height="419.99999" width="263.99999" y="65.45313" x="58.50001" stroke-width="1.5" fill="#fff"/>
                        <rect rx="7" height="22" width="210" y="96.45313" x="84.5" stroke-width="0" stroke="#ff0000" fill="#f44336"/>
                        <rect stroke="#ff0000" rx="7" height="22" width="179" y="137.45313" x="115.5" stroke-width="0" fill="#29b6f6"/>
                        <rect stroke="#ff0000" rx="7" height="22" width="179" y="179.45313" x="115.5" stroke-width="0" fill="#66bb6a"/>
                        <rect stroke="#ff0000" rx="7" height="22" width="179" y="219.45313" x="115.5" stroke-width="0" fill="#98ee99"/>
                        <rect rx="7" height="22" width="210" y="260.45313" x="84.5" stroke-width="0" stroke="#ff0000" fill="#f44336"/>
                        <rect stroke="#ff0000" rx="7" height="22" width="179" y="301.45313" x="115.5" stroke-width="0" fill="#ff77a9"/>
                        <rect stroke="#ff0000" rx="7" height="22" width="179" y="417.45313" x="115.5" stroke-width="0" fill="#ff77a9"/>
                        <rect stroke="#ff0000" height="119" width="179" y="311.45313" x="115.5" stroke-width="0" fill="#ff77a9"/>
                        <text font-weight="bold" text-anchor="start" font-family="Arvo, sans-serif" font-size="14" y="112.45313" x="90.5" stroke-width="0" stroke="#ff0000" fill="#ffffff">DATA</text>
                        <text font-weight="bold" text-anchor="start" font-family="Arvo, sans-serif" font-size="14" y="276.45313" x="90.5" stroke-width="0" stroke="#ff0000" fill="#ffffff">SIGNATURE</text>
                    </g>
                </svg>
                </div>
            </div>

            <div>
                <svg width="800" height="200" viewBox="40 30 735 170" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M47,35 h720 q5,0 5,5 v22 h-730 v-22 q0,-5 5,-5 z" fill="grey" stroke="#000"/>
                        <rect id="svg_5" height="130" width="730" y="62" x="42" stroke-opacity="null" stroke-width="1.5" stroke="#000"
                              fill="#000"/>
                        <text font-weight="bold" font-family="sans-serif" font-size="14" y="54" x="407" text-anchor="middle" stroke-width="0" stroke="#ff0000"
                              fill="white">Terminal
                        </text>
                        <text font-weight="bold" font-family="monospace" font-size="14" y="85" x="52" fill="#8dd247">root-user:~$</text>
                        <text font-family="monospace" font-size="14" y="85" x="160" fill="white">some text</text>
                    </g>
                </svg>
            </div>

        </div>
        // // <motion.div onClick={clickAnimation} animate={variants[keyFrame]}>
        //
        //     {/*<Typography component="div" variant="body1" style={{background: "white"}}>*/}
        //     {/*    <Box color="primary.main">primary.main</Box>*/}
        //     {/*    <Box color="secondary.main">secondary.main</Box>*/}
        //     {/*    <Box color="error.main">error.main</Box>*/}
        //     {/*    <Box color="warning.main">warning.main</Box>*/}
        //     {/*    <Box color="info.main">info.main</Box>*/}
        //     {/*    <Box color="success.main">success.main</Box>*/}
        //     {/*    <Box color="text.primary">text.primary</Box>*/}
        //     {/*    <Box color="text.secondary">text.secondary</Box>*/}
        //     {/*    <Box color="text.disabled">text.disabled</Box>*/}
        //     {/*</Typography>*/}
        // // </motion.div>
    );
}
