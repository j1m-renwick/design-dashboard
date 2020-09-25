import React from 'react';
import './LinuxConsole.css';
import LinuxConsole from "./LinuxConsole";

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
                </div>
            </div>
            <LinuxConsole/>
        </div>
    );
}
