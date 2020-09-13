import React, {useEffect, useRef, useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import "./GoldenRatio.css";
import clsx from "clsx";

export default function GoldenRatio() {

    const classes = makeStyles(theme => ({
        container: {
            paddingTop: "100px"
        },
        textArea: {
            width: "500px",
            fontFamily: "roboto",
            fontSize: "medium"
        }
    }))();

    const circleNumber = 6;
    const phi = 1.61803398875;

    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("");

    const [textArray, setTextArray] = useState([]);
    const [anchorTextIndex, setAnchorTextIndex] = useState(0);

    const [isTyping, setIsTyping] = useState(false);
    const [isInitialInput, setIsInitialInput] = useState(false);

    useEffect(() => {
        console.log("initialising");
        let arr = [...textArray];
        arr[0] = "12.34";
        setTextArray(updatePhiValues(arr, 0));
    }, []);

    // the listeners need to be recreated each time the text array is changed while typing,
    // so the new state data is used
    useEffect(() => {
        if (isTyping) {
            document.addEventListener("keydown", updateEditedTextField);
            document.addEventListener("click", stopTextEditing);
            return () => {
                document.removeEventListener("keydown", updateEditedTextField);
                document.removeEventListener("click", stopTextEditing);
            }
        } else {
            document.removeEventListener("keydown", updateEditedTextField);
            document.removeEventListener("click", stopTextEditing);
        }
    }, [isTyping, textArray]);

    const updatePhiValues = (array, anchorInd) => {
        for(let i = anchorInd; i > 0; i--) {
            array[i - 1] = (array[i] * phi).toFixed(2);
        }
        for(let i = anchorInd; i < circleNumber - 1; i++) {
            array[i + 1] = (array[i] / phi).toFixed(2);
        }
        return array;
    }

    const startAnimation = direction => {
        if(!isAnimating) {
            setDirection(direction);
            setIsAnimating(true);
        }
    }

    const updateAfterAnimation = () => {
        let arr = [...textArray];
        let newAnchorIndex
        // shift text values to the right or left, and calculate and add the new values
        // TODO refactor to be a more performant slice and splice operation
        if(direction === "right") {
            for(let i = circleNumber - 1; i >= 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = ""
            newAnchorIndex = Math.min(circleNumber - 1, anchorTextIndex + 1);
        } else if(direction === "left") {
            for(let i = 0; i < circleNumber; i++) {
                arr[i] = arr[i + 1];
            }
            arr[circleNumber] = "";
            newAnchorIndex = Math.max(anchorTextIndex - 1, 0);
        }
        // set the next text values and clear animation data
        setAnchorTextIndex(newAnchorIndex);
        setTextArray(updatePhiValues(arr, newAnchorIndex));
        setIsAnimating(false);
        setDirection(null);
    }

    const startTextEditing = (index) => {
        setIsTyping(true);
        setIsInitialInput(true);
        setAnchorTextIndex(index);
    }

    const updateEditedTextField = (evt) => {
        let index = anchorTextIndex;
        let arr = [...textArray];
        if (isInitialInput) {
            arr[index] = "";
            setIsInitialInput(false);
        }
        if (!isNaN(evt.key) || evt.key === ".") {
            arr[index] = arr[index] + evt.key;
            setTextArray(arr);
        } else if (evt.key === "Backspace") {
            arr[index] = arr[index].slice(0,arr[index].length - 1)
            setTextArray(arr);
        } else if (evt.key === "Enter") {
            stopTextEditing();
        }
    }

    const stopTextEditing = () => {
        setIsTyping(false);
        let arr = [...textArray];
        // round entered value to 2 decimal places
        arr[anchorTextIndex] = parseFloat(arr[anchorTextIndex]).toFixed(2);
        setTextArray(updatePhiValues(arr, anchorTextIndex));
    }


    return (
        <Container className={classes.container}>
            <svg width="1056" height="656" viewBox="0 0 528 328" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <title>Layer 1</title>
                    <ellipse onAnimationEnd={updateAfterAnimation} className={clsx("circle-0", direction)} stroke="none"
                             ry="161" rx="161" id="svg_10" cy="163.45312" cx="162.7"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#ffcd38" opacity="0"/>
                    <ellipse className={clsx("circle-1", direction, {selected:isTyping && anchorTextIndex === 0})} stroke="none" ry="161" rx="161" id="svg_10"
                             cy="163.45312" cx="162.7"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#ffcd38"/>
                    <ellipse className={clsx("circle-2", direction, {selected:isTyping && anchorTextIndex === 1})} ry="99.3" rx="99.3" id="svg_11" cy="100.5" cx="425"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="none" fill="#ffef62"/>
                    <ellipse className={clsx("circle-3", direction, {selected:isTyping && anchorTextIndex === 2})} ry="61.5" rx="61.5" id="svg_12" cy="263.45313"
                             cx="463"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="none" fill="#d7e360"/>
                    <ellipse className={clsx("circle-4", direction, {selected:isTyping && anchorTextIndex === 3})} stroke="none" ry="38" rx="38" id="svg_13"
                             cy="286.5" cx="362"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#a2cf6e"/>
                    <ellipse className={clsx("circle-5", direction, {selected:isTyping && anchorTextIndex === 4})} stroke="none" ry="23" rx="22.5" id="svg_14"
                             cy="224.45313" cx="347.8"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#6fbf73"/>
                    <ellipse className={clsx("circle-6", direction, {selected:isTyping && anchorTextIndex === 5})} stroke="none" ry="14" rx="14" id="svg_15" cy="215"
                             cx="386.5"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#33ab9f"/>
                    <text onDoubleClick={() => startTextEditing(0)}
                          className={clsx("text-circle-1", "non-selectable", direction)} x="162.7" y="163.45312" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="35px"
                          fill="white">{textArray[0]}</text>
                    <text onDoubleClick={() => startTextEditing(1)}
                          className={clsx("text-circle-2", "non-selectable", direction)} x="425" y="100.5" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="25px"
                          fill="white">{textArray[1]}</text>
                    <text onDoubleClick={() => startTextEditing(2)}
                          className={clsx("text-circle-3", "non-selectable", direction)} x="463" y="263.45313" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="15px"
                          fill="white">{textArray[2]}</text>
                    <text onDoubleClick={() => startTextEditing(3)}
                          className={clsx("text-circle-4", "non-selectable", direction)} x="362" y="286.5" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px"
                          fill="white">{textArray[3]}</text>
                    <text onDoubleClick={() => startTextEditing(4)}
                          className={clsx("text-circle-5", "non-selectable", direction)} x="347.8" y="224.45313" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px"
                          fill="white">{textArray[4]}</text>
                    <text onDoubleClick={() => startTextEditing(5)}
                          className={clsx("text-circle-6", "non-selectable", direction)} x="386.5" y="215" textAnchor="middle"
                          alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px"
                          fill="white">{textArray[5]}</text>
                </g>
            </svg>
            <button onClick={() => startAnimation("left")}>left</button>
            <button onClick={() => startAnimation("right")}>right</button>
        </Container>
    );
}
