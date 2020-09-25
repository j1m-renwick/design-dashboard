import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import './LinuxConsole.css';

export default function LinuxConsole({rawText}) {

    const lineOneRef = useRef();
    const lineTwoRef = useRef();
    const [caretEndPositionOne, setCaretEndPositionOne] = useState(0);
    const [caretEndPositionTwo, setCaretEndPositionTwo] = useState(0);
    const [clipZoneWidthOne, setClipZoneWidthOne] = useState(0);
    const [clipZoneWidthTwo, setClipZoneWidthTwo] = useState(0);
    const [textLines, setTextLines] = useState([]);
    const [lastLineIndex, setLastLineIndex] = useState(0);

    const lineHeight = 18;
    const rootUserPrefixCharacters = 13;
    // TODO don't hardcode this
    const maxCharacters = 85;

    useEffect(() => {
        if (textLines.length > 0) {
            let boundingBox = lineOneRef.current.getBBox();
            setClipZoneWidthOne(boundingBox.width);
            setCaretEndPositionOne(boundingBox.x + boundingBox.width);
            boundingBox = lineTwoRef.current.getBBox();
            setClipZoneWidthTwo(boundingBox.width);
            setCaretEndPositionTwo(boundingBox.x + boundingBox.width);
        }
    },[textLines])

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

    const textOneControl = useAnimation()
    const caretOneControl = useAnimation()
    const textTwoControl = useAnimation()
    const caretTwoControl = useAnimation()

    useEffect(() => {
        if (caretEndPositionOne !== 0) {
            const sequence = async() => {
                await Promise.all([
                    caretOneControl.start({
                        x1: caretEndPositionOne,
                        x2: caretEndPositionOne,
                        transition: {
                            duration: 2,
                            ease: "linear"
                        },
                        transitionEnd: {
                            visibility: lastLineIndex === 0 ? "visible" : "hidden",
                        }
                    }),
                    textOneControl.start({
                        width: clipZoneWidthOne,
                        transition: {
                            duration: 2,
                            ease: "linear"
                        }
                    })
                ])
                if (lastLineIndex >= 1) {
                    await Promise.all([
                        caretTwoControl.start({
                            x1: caretEndPositionTwo,
                            x2: caretEndPositionTwo,
                            transition: {
                                duration: 2,
                                ease: "linear"
                            },
                            transitionEnd: {
                                visibility: lastLineIndex === 1 ? "visible" : "hidden",
                            }
                        }),
                        textTwoControl.start({
                            width: clipZoneWidthTwo,
                            transition: {
                                duration: 2,
                                ease: "linear"
                            }
                        })
                    ])
                }
            }
            sequence();
        }
    }, [caretEndPositionOne, caretEndPositionTwo, caretOneControl, caretTwoControl, clipZoneWidthOne, clipZoneWidthTwo, lastLineIndex, textOneControl, textTwoControl])


    return (
        <div>
            <svg width="800" height="200" viewBox="40 30 735 170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="line1">
                        <motion.rect x="160" y="72" animate={textOneControl} width={0} height={lineHeight}/>
                    </clipPath>
                    <clipPath id="line2">
                        <motion.rect x="52" y="87" animate={textTwoControl} width={0} height={lineHeight}/>
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
                        <text ref={lineOneRef} fontFamily="monospace" fontSize="14" y="85" x="160" fill="white">{textLines[0]}</text>
                        <motion.line className="caret" x1="160" x2="160" y1="72" y2="90" animate={caretOneControl} stroke="white" strokeWidth="2"/>
                    </g>
                    <g clipPath="url(#line2)">
                        <text ref={lineTwoRef} fontFamily="monospace" fontSize="14" y="100" x="52" fill="white">{textLines[1]}</text>
                        <motion.line className="caret" x1="52" x2="52" y1="87" y2="105" animate={caretTwoControl} stroke="white" strokeWidth="2"/>
                        {/*<motion.line className="caret" x1="52" x2="52" y1="87" y2="105" animate={{x1: caretEndPositionOne, x2: caretEndPositionOne}} transition={{duration: 2, ease: "linear"}} stroke="white" strokeWidth="2"/>*/}
                    </g>
                </g>
            </svg>
        </div>
    );
}
