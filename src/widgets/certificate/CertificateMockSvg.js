import React from 'react';

export default function CertificateMockSvg({mouseEnterCb, mouseMoveCb, mouseLeaveCb}) {

    return (
        <svg onMouseEnter={e => mouseEnterCb(e)} onMouseMove={e => mouseMoveCb(e)}
             onMouseLeave={() => mouseLeaveCb()} width="264" height="420" viewBox="58 65 265 421"
             xmlns="http://www.w3.org/2000/svg">
            <g>
                    <rect stroke="#000" rx="25" height="420" width="264" y="65" x="58.5"
                          strokeWidth="1.5" fill="#fff"/>
                    <rect rx="7" height="22" width="210" y="96" x="84.5" strokeWidth="0" stroke="#ff0000"
                          fill="#f44336"/>
                    <rect stroke="#ff0000" rx="7" height="42" width="179" y="135" x="115.5"
                          strokeWidth="0" fill="#29b6f6"/>
                    <rect stroke="#ff0000" rx="7" height="42" width="179" y="193" x="115.5"
                          strokeWidth="0" fill="#66bb6a"/>
                    <rect stroke="#ff0000" rx="7" height="42" width="179" y="252" x="115.5"
                          strokeWidth="0" fill="#98ee99"/>
                    <rect rx="7" height="22" width="210" y="311" x="84.5" strokeWidth="0" stroke="#ff0000"
                          fill="#f44336"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="350" x="115.5"
                          strokeWidth="0" fill="#ff77a9"/>
                    <rect stroke="#ff0000" height="80" width="179" y="361" x="115.5" strokeWidth="0"
                          fill="#ff77a9"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="430" x="115.5"
                          strokeWidth="0" fill="#ff77a9"/>
            </g>
        </svg>
    )
}