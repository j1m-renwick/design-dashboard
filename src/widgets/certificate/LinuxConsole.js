import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import './LinuxConsole.css';
import { Container } from '@mui/material';
import {makeStyles} from "@mui/styles";

export default function LinuxConsole({consoleText, onClick, output}) {

    // TODO refactor this into scalable arrays
    // TODO display warning if text exceeds display size

    const line1Ref = useRef();
    const line2Ref = useRef();
    const line3Ref = useRef();
    const line4Ref = useRef();
    const line5Ref = useRef();
    const lineOutputRef = useRef();
    const [caretEndPosition1, setCaretEndPosition1] = useState(-1);
    const [caretEndPosition2, setCaretEndPosition2] = useState(0);
    const [caretEndPosition3, setCaretEndPosition3] = useState(0);
    const [caretEndPosition4, setCaretEndPosition4] = useState(0);
    const [caretEndPosition5, setCaretEndPosition5] = useState(0);
    const [clipZoneWidth1, setClipZoneWidth1] = useState(0);
    const [clipZoneWidth2, setClipZoneWidth2] = useState(0);
    const [clipZoneWidth3, setClipZoneWidth3] = useState(0);
    const [clipZoneWidth4, setClipZoneWidth4] = useState(0);
    const [clipZoneWidth5, setClipZoneWidth5] = useState(0);
    const [clipZoneWidthOutput, setClipZoneWidthOutput] = useState(0);
    const [textLines, setTextLines] = useState([]);
    const [outputText, setOutputText] = useState("");
    const [lastLineIndex, setLastLineIndex] = useState(0);

    const maxNumberOfLines = 5;
    const lineHeight = 18;
    const rootUserPrefixCharacters = 13;
    const typingSpeed = 0.03 // seconds per character
    const maxCharactersPerLine = 84;

    useEffect(() => {
        if (textLines.length > 0 && line1Ref.current && line2Ref.current && line3Ref.current && line4Ref.current && line5Ref.current && lineOutputRef.current) {
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
            boundingBox = lineOutputRef.current.getBBox();
            setClipZoneWidthOutput(boundingBox.width);
        }
    },[textLines, line1Ref, line2Ref, line3Ref, line4Ref, line5Ref, lineOutputRef])

    useEffect(() => {
        const arr = [];
        if (consoleText.length > maxCharactersPerLine - rootUserPrefixCharacters) {
            let index = consoleText.lastIndexOf(" ", maxCharactersPerLine - rootUserPrefixCharacters);
            arr[0] = consoleText.slice(0, index)
            let textToSplit = consoleText.slice(index)
            let i = 1;
            while (textToSplit.length > maxCharactersPerLine && i < (maxNumberOfLines - 1)) {
                let index = textToSplit.lastIndexOf(" ", maxCharactersPerLine);
                arr[i] = textToSplit.slice(0, index)
                textToSplit = textToSplit.slice(index)
                i++
            }

            if (textToSplit.length > maxCharactersPerLine) {
                arr[i] = textToSplit.substring(0, maxCharactersPerLine - 5) + "..."
            } else {
                arr[i] = textToSplit;
            }
            setLastLineIndex(i);
        } else {
            arr[0] = consoleText;
            setLastLineIndex(0);
        }
        // cancel pending animations
        caret1Control.stop();
        caret1Control.unmount();
        caret1Control.mount();
        caret2Control.stop();
        caret3Control.stop();
        caret4Control.stop();
        caret5Control.stop();
        text1Control.stop();
        text2Control.stop();
        text3Control.stop();
        text4Control.stop();
        text5Control.stop();
        textOutputControl.stop();
        setTextLines(arr);
        setOutputText(output)
    }, [consoleText])

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
    const textOutputControl = useAnimation()

    useEffect(() => {
        if (caretEndPosition1 !== -1) {
            const sequence = async() => {
                // reset all items to initial locations and visibilities
                await Promise.all([
                    caret1Control.start({
                        x1: 160,
                        x2: 160,
                        visibility: "visible",
                        transition: {
                            duration: 0.001
                        },
                    }),
                    text1Control.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    }),
                    caret2Control.start({
                        x1: 52,
                        x2: 52,
                        visibility: "visible",
                        transition: {
                            duration: 0.001
                        },
                    }),
                    text2Control.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    }),
                    caret3Control.start({
                        x1: 52,
                        x2: 52,
                        visibility: "visible",
                        transition: {
                            duration: 0.001
                        },
                    }),
                    text3Control.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    }),
                    caret4Control.start({
                        x1: 52,
                        x2: 52,
                        visibility: "visible",
                        transition: {
                            duration: 0.001
                        },
                    }),
                    text4Control.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    }),
                    caret5Control.start({
                        x1: 52,
                        x2: 52,
                        visibility: "visible",
                        transition: {
                            duration: 0.001
                        },
                    }),
                    text5Control.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    }),
                    textOutputControl.start({
                        width: 0,
                        transition: {
                            duration: 0.001
                        },
                    })
                ]);
                await Promise.all([
                    caret1Control.start({
                        x1: caretEndPosition1,
                        x2: caretEndPosition1,
                        transition: {
                            duration: textLines[0].length * typingSpeed,
                            ease: "linear"
                        },
                        transitionEnd: {
                            visibility: "hidden"
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
                                visibility: "hidden"
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
                                visibility: "hidden"
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
                                visibility: "hidden"
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
                                visibility: "hidden"
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
                if (outputText.length > 0) {
                    await textOutputControl.start({
                        width: clipZoneWidthOutput,
                        transition: {
                            duration: 0.001,
                            delay: 1
                        }
                    })
                }
            }
            sequence();
        }
    }, [caretEndPosition1, caretEndPosition2, caret1Control, caret2Control, clipZoneWidth1, clipZoneWidth2,
        lastLineIndex, text1Control, text2Control, caret3Control, caretEndPosition3, text3Control, clipZoneWidth3,
        caret4Control, caretEndPosition4, clipZoneWidth4, caretEndPosition5, clipZoneWidth5, textLines, text4Control,
        caret5Control, text5Control, textOutputControl, clipZoneWidthOutput])

    const classes = makeStyles(theme => ({
        container: {
            flex: 1,
            marginBottom: "10px"
        }
    }))();


    return (
        <Container onClick={onClick} maxWidth="md" className={classes.container}>
            <svg viewBox="40 67 735 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="line1">
                        <motion.rect x="160" y="77" animate={text1Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line2">
                        <motion.rect x="52" y="92" animate={text2Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line3">
                        <motion.rect x="52" y="107" animate={text3Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line4">
                        <motion.rect x="52" y="122" animate={text4Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line5">
                        <motion.rect x="52" y="137" animate={text5Control} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="output">
                        <motion.rect x="52" y="195" animate={textOutputControl} width={0} height={lineHeight}/>
                    </clipPath>
                </defs>
                <g>
                    {/*TODO make the header and text component attributes*/}
                    {/*<path d="M47,35 h720 q5,0 5,5 v22 h-730 v-22 q0,-5 5,-5 z" fill="darkgrey" stroke="none"/>*/}
                    {/*<text fontWeight="bold" fontFamily="sans-serif" fontSize="14" y="54" x="407" textAnchor="middle" strokeWidth="0" stroke="#ff0000" fill="white">*/}
                    {/*    Terminal*/}
                    {/*</text>*/}
                    <rect id="svg_5" height="180" width="730" y="62" x="42" strokeOpacity="null" strokeWidth="1.5" stroke="none" fill="#000"/>
                    <text fontWeight="bold" fontFamily="monospace" fontSize="14" y="90" x="52" fill="#8dd247">
                        root-user:~$
                    </text>
                    <g clipPath="url(#line1)">
                        <text ref={line1Ref} fontFamily="monospace" fontSize="14" y="90" x="160" fill="white">{textLines[0]}</text>
                        <motion.line className="caret" x1="160" x2="160" y1="77" y2="95" animate={caret1Control} visibility="visible" stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line2)">
                        <text ref={line2Ref} fontFamily="monospace" fontSize="14" y="105" x="52" fill="white">{textLines[1]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="92" y2="110" animate={caret2Control} visibility="visible" stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line3)">
                        <text ref={line3Ref} fontFamily="monospace" fontSize="14" y="120" x="52" fill="white">{textLines[2]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="107" y2="125" animate={caret3Control} visibility="visible" stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line4)">
                        <text ref={line4Ref} fontFamily="monospace" fontSize="14" y="135" x="52" fill="white">{textLines[3]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="122" y2="140" animate={caret4Control} visibility="visible" stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line5)">
                        <text ref={line5Ref} fontFamily="monospace" fontSize="14" y="150" x="52" fill="white">{textLines[4]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="137" y2="155" animate={caret5Control} visibility="visible" stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#output)">
                        <text ref={lineOutputRef} fontWeight="bold" fontFamily="monospace" fontSize="14" y="205" x="52" fill="#8dd247">
                            -> {outputText}
                        </text>
                    </g>
                </g>
                <svg x="300px" y="100px" viewBox="-1150 -770 1200 1200">
                    <g onClick={() => navigator.clipboard.writeText(consoleText)} className="copy">
                        <path fill="white" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02
                            v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02
                            c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1
                            c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7
                            h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02
                            c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01
                            c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65
                            v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02
                            h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01
                            c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02
                            v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/>
                    </g>
                </svg>
            </svg>
        </Container>
    );
}
