import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import './LinuxConsole.css';

export default function LinuxConsole() {

    const lineOneRef = useRef();
    const lineTwoRef = useRef();
    const [caretEndPositionOne, setCaretEndPositionOne] = useState(0);
    const [caretEndPositionTwo, setCaretEndPositionTwo] = useState(0);
    const [clipZoneWidthOne, setClipZoneWidthOne] = useState(0);
    const [clipZoneWidthTwo, setClipZoneWidthTwo] = useState(0);
    const rawText = "You seem malnourished. Are you suffering from intestinal parasites? Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! This is the worst kind of discrimination: the kind against me! Enough about your promiscuous mother, Hermes! We have bigger problems. You can crush me but you can't crush my spirit! Oh, I think we should just stay friends. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'! This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Shut up and get to the point! I love this planet! I've got wealth, fame, and access to the depths of sleaze that those things bring. Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… But I know you in the future. I cleaned your poop. The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate. Well, let's just dump it in the sewer and say we delivered it. You've killed me! Oh, you've killed me!"
    const [textLines, setTextLines] = useState([]);

    // TODO don't hardcode these
    const maxCharacters = 85;
    const rootUserPrefixCharacters = 13;
    const lineHeight = 18;

    useEffect(() => {
        if (lineOneRef.current) {
            const boundingBox = lineOneRef.current.getBBox();
            setClipZoneWidthOne(boundingBox.width);
            setCaretEndPositionOne(boundingBox.x + boundingBox.width);
        }
    },[lineOneRef, textLines])

    useEffect(() => {
        if (lineTwoRef.current) {
            const boundingBox = lineTwoRef.current.getBBox();
            // setClipZoneHeight(boundingBox.height);
            setClipZoneWidthTwo(boundingBox.width);
            setCaretEndPositionTwo(boundingBox.x + boundingBox.width);
        }
    },[lineTwoRef, textLines])

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
        } else {
            arr[0] = rawText;
        }
        setTextLines(arr);
    }, [])

    const textOneControl = useAnimation()
    const caretOneControl = useAnimation()
    const textTwoControl = useAnimation()
    const caretTwoControl = useAnimation()

    useEffect(() => {
        if (caretEndPositionOne !== 0 && caretEndPositionTwo !== 0) {
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
                            visibility: "hidden",
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
                return await Promise.all([
                    caretTwoControl.start({
                        x1: caretEndPositionTwo,
                        x2: caretEndPositionTwo,
                        transition: {
                            duration: 2,
                            ease: "linear"
                        },
                        transitionEnd: {
                            visibility: "hidden",
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
            sequence();
        }
    }, [caretEndPositionOne, caretEndPositionTwo])


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
