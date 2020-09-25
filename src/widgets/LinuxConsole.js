import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import './LinuxConsole.css';

export default function LinuxConsole({rawText}) {

    // TODO refactor this into scalable arrays
    // TODO display warning if text exceeds display size

    const line1Ref = useRef();
    const line2Ref = useRef();
    const line3Ref = useRef();
    const line4Ref = useRef();
    const line5Ref = useRef();
    const [caretEndPosition1, setCaretEndPosition1] = useState(0);
    const [caretEndPosition2, setCaretEndPosition2] = useState(0);
    const [caretEndPosition3, setCaretEndPosition3] = useState(0);
    const [caretEndPosition4, setCaretEndPosition4] = useState(0);
    const [caretEndPosition5, setCaretEndPosition5] = useState(0);
    const [clipZoneWidth1, setClipZoneWidth1] = useState(0);
    const [clipZoneWidth2, setClipZoneWidth2] = useState(0);
    const [clipZoneWidth3, setClipZoneWidth3] = useState(0);
    const [clipZoneWidth4, setClipZoneWidth4] = useState(0);
    const [clipZoneWidth5, setClipZoneWidth5] = useState(0);
    const [textLines, setTextLines] = useState([]);
    const [lastLineIndex, setLastLineIndex] = useState(0);

    const lineHeight = 18;
    const rootUserPrefixCharacters = 13;
    const typingSpeed = 0.02 // seconds per character
    // TODO don't hardcode this
    const maxCharacters = 85;

    useEffect(() => {
        if (textLines.length > 0 && line1Ref.current && line2Ref.current && line3Ref.current && line4Ref.current && line5Ref.current) {
            let boundingBox = line1Ref.current.getBBox();
            setClipZoneWidth1(boundingBox.width);
            setCaretEndPosition1(boundingBox.x + boundingBox.width);
            boundingBox = line2Ref.current.getBBox();
            setClipZoneWidth2(boundingBox.width);
            setCaretEndPosition2(boundingBox.x + boundingBox.width);
            boundingBox = line3Ref.current.getBBox();
            setClipZoneWidth3(boundingBox.width);
            setCaretEndPosition3(boundingBox.x + boundingBox.width);
            boundingBox = line4Ref.current.getBBox();
            setClipZoneWidth4(boundingBox.width);
            setCaretEndPosition4(boundingBox.x + boundingBox.width);
            boundingBox = line5Ref.current.getBBox();
            setClipZoneWidth5(boundingBox.width);
            setCaretEndPosition5(boundingBox.x + boundingBox.width);
            console.log("here");
        }
    },[textLines, line1Ref, line2Ref, line3Ref, line4Ref, line5Ref])

    useEffect(() => {
        const arr = [];
        if (rawText.length > maxCharacters - rootUserPrefixCharacters) {
            let index = rawText.lastIndexOf(" ", maxCharacters - rootUserPrefixCharacters);
            arr[0] = rawText.slice(0, index)
            let textToSplit = rawText.slice(index)
            let i = 1;
            while (textToSplit.length > maxCharacters) {
                let index = textToSplit.lastIndexOf(" ", maxCharacters);
                arr[i] = textToSplit.slice(0, index)
                textToSplit = textToSplit.slice(index)
                i++
            }
            arr[i] = textToSplit;
            setLastLineIndex(i);
        } else {
            arr[0] = rawText;
        }
        console.log(arr);
        setTextLines(arr);
    }, [rawText])

    const text1Control = useAnimation()
    const caret1Control = useAnimation()
    const text2Control = useAnimation()
    const caret2Control = useAnimation()
    const text3Control = useAnimation()
    const caret3Control = useAnimation()
    const text4Control = useAnimation()
    const caret4Control = useAnimation()
    const text5Control = useAnimation()
    const caret5Control = useAnimation()

    useEffect(() => {
        if (caretEndPosition1 !== 0) {
            const sequence = async() => {
                await Promise.all([
                    caret1Control.start({
                        x1: caretEndPosition1,
                        x2: caretEndPosition1,
                        transition: {
                            duration: textLines[0].length * typingSpeed,
                            ease: "linear"
                        },
                        transitionEnd: {
                            visibility: lastLineIndex === 0 ? "visible" : "hidden",
                        }
                    }),
                    text1Control.start({
                        width: clipZoneWidth1,
                        transition: {
                            duration: textLines[0].length * typingSpeed,
                            ease: "linear"
                        }
                    })
                ])
                if (lastLineIndex >= 1) {
                    await Promise.all([
                        caret2Control.start({
                            x1: caretEndPosition2,
                            x2: caretEndPosition2,
                            transition: {
                                duration: textLines[1].length * typingSpeed,
                                ease: "linear"
                            },
                            transitionEnd: {
                                visibility: lastLineIndex === 1 ? "visible" : "hidden",
                            }
                        }),
                        text2Control.start({
                            width: clipZoneWidth2,
                            transition: {
                                duration: textLines[1].length * typingSpeed,
                                ease: "linear"
                            }
                        })
                    ])
                }
                if (lastLineIndex >= 2) {
                    await Promise.all([
                        caret3Control.start({
                            x1: caretEndPosition3,
                            x2: caretEndPosition3,
                            transition: {
                                duration: textLines[2].length * typingSpeed,
                                ease: "linear"
                            },
                            transitionEnd: {
                                visibility: lastLineIndex === 2 ? "visible" : "hidden",
                            }
                        }),
                        text3Control.start({
                            width: clipZoneWidth3,
                            transition: {
                                duration: textLines[2].length * typingSpeed,
                                ease: "linear"
                            }
                        })
                    ])
                }
                if (lastLineIndex >= 3) {
                    await Promise.all([
                        caret4Control.start({
                            x1: caretEndPosition4,
                            x2: caretEndPosition4,
                            transition: {
                                duration: textLines[3].length * typingSpeed,
                                ease: "linear"
                            },
                            transitionEnd: {
                                visibility: lastLineIndex === 3 ? "visible" : "hidden",
                            }
                        }),
                        text4Control.start({
                            width: clipZoneWidth4,
                            transition: {
                                duration: textLines[3].length * typingSpeed,
                                ease: "linear"
                            }
                        })
                    ])
                }
                if (lastLineIndex >= 4) {
                    await Promise.all([
                        caret5Control.start({
                            x1: caretEndPosition5,
                            x2: caretEndPosition5,
                            transition: {
                                duration: textLines[4].length * typingSpeed,
                                ease: "linear"
                            },
                            transitionEnd: {
                                visibility: lastLineIndex === 4 ? "visible" : "hidden",
                            }
                        }),
                        text5Control.start({
                            width: clipZoneWidth5,
                            transition: {
                                duration: textLines[4].length * typingSpeed,
                                ease: "linear"
                            }
                        })
                    ])
                }
            }
            sequence();
        }
    }, [caretEndPosition1, caretEndPosition2, caret1Control, caret2Control, clipZoneWidth1, clipZoneWidth2, lastLineIndex, text1Control, text2Control, caret3Control, caretEndPosition3, text3Control, clipZoneWidth3, caret4Control, caretEndPosition4, clipZoneWidth4, caretEndPosition5, clipZoneWidth5])


    return (
        <div>
            <svg width="800" height="200" viewBox="40 30 735 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="line1">
                        <motion.rect x="160" y="72" animate={text1Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line2">
                        <motion.rect x="52" y="87" animate={text2Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line3">
                        <motion.rect x="52" y="102" animate={text3Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line4">
                        <motion.rect x="52" y="117" animate={text4Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line5">
                        <motion.rect x="52" y="132" animate={text5Control} width={0} height={lineHeight}/>
                    </clipPath>
                </defs>
                <g>
                    <path d="M47,35 h720 q5,0 5,5 v22 h-730 v-22 q0,-5 5,-5 z" fill="grey" stroke="none"/>
                    <rect id="svg_5" height="130" width="730" y="62" x="42" strokeOpacity="null" strokeWidth="1.5" stroke="none" fill="#000"/>
                    <text fontWeight="bold" fontFamily="sans-serif" fontSize="14" y="54" x="407" textAnchor="middle" strokeWidth="0" stroke="#ff0000" fill="white">
                        Terminal
                    </text>
                    <text fontWeight="bold" fontFamily="monospace" fontSize="14" y="85" x="52" fill="#8dd247">
                        root-user:~$
                    </text>
                    <g clipPath="url(#line1)">
                        <text ref={line1Ref} fontFamily="monospace" fontSize="14" y="85" x="160" fill="white">{textLines[0]}</text>
                        <motion.line className="caret" x1="160" x2="160" y1="72" y2="90" animate={caret1Control} stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line2)">
                        <text ref={line2Ref} fontFamily="monospace" fontSize="14" y="100" x="52" fill="white">{textLines[1]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="87" y2="105" animate={caret2Control} stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line3)">
                        <text ref={line3Ref} fontFamily="monospace" fontSize="14" y="115" x="52" fill="white">{textLines[2]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="102" y2="120" animate={caret3Control} stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line4)">
                        <text ref={line4Ref} fontFamily="monospace" fontSize="14" y="130" x="52" fill="white">{textLines[3]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="117" y2="135" animate={caret4Control} stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line5)">
                        <text ref={line5Ref} fontFamily="monospace" fontSize="14" y="145" x="52" fill="white">{textLines[4]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="132" y2="150" animate={caret5Control} stroke="white" strokeWidth="2"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}
