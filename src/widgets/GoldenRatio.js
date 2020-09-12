import React, {useEffect, useState} from 'react';
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

    const [direction, setDirection] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

    const [circle1Text, setCircle1Text] = useState("");
    const [circle2Text, setCircle2Text] = useState("");
    const [circle3Text, setCircle3Text] = useState("");
    const [circle4Text, setCircle4Text] = useState("");
    const [circle5Text, setCircle5Text] = useState("");
    const [circle6Text, setCircle6Text] = useState("");

    useEffect(() => {
        console.log("initialising");
        setCircle1Text("9.99")
    }, []);

    const animate = direction => {
        if (!isAnimating) {
            setDirection(direction);
            setIsAnimating(true);
        }
    }

    const adjustAfterAnimation = () =>  {
        setIsAnimating(false);
        switch(direction) {
            case "right":
                setCircle6Text(circle5Text);
                setCircle5Text(circle4Text);
                setCircle4Text(circle3Text);
                setCircle3Text(circle2Text);
                setCircle2Text(circle1Text);
                setCircle1Text("");
                break;
            case "left":
                setCircle1Text(circle2Text);
                setCircle2Text(circle3Text);
                setCircle3Text(circle4Text);
                setCircle4Text(circle5Text);
                setCircle5Text(circle6Text);
                setCircle6Text("");
        }
        setDirection(null)
    }


    return (
        <Container className={classes.container}>
            <svg width="1056" height="656" viewBox="0 0 528 328" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <title>Layer 1</title>
                    <ellipse onAnimationEnd={adjustAfterAnimation} className={clsx("circle-0", direction)} stroke="none" ry="161" rx="161" id="svg_10" cy="163.45312" cx="162.7"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#ffcd38" opacity="0"/>
                    <ellipse onClick={() => console.log("HI!")} className={clsx("circle-1", direction)} stroke="none" ry="161" rx="161" id="svg_10" cy="163.45312" cx="162.7"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#ffcd38"/>
                    <ellipse className={clsx("circle-2", direction)} ry="99.3" rx="99.3" id="svg_11" cy="100.5" cx="425"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="none" fill="#ffef62"/>
                    <ellipse className={clsx("circle-3", direction)} ry="61.5" rx="61.5" id="svg_12" cy="263.45313" cx="463"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="none" fill="#d7e360"/>
                    <ellipse className={clsx("circle-4", direction)} stroke="none" ry="38" rx="38" id="svg_13" cy="286.5" cx="362"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#a2cf6e"/>
                    <ellipse className={clsx("circle-5", direction)} stroke="none" ry="23" rx="22.5" id="svg_14" cy="224.45313" cx="347.8"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#6fbf73"/>
                    <ellipse className={clsx("circle-6", direction)} stroke="none" ry="14" rx="14" id="svg_15" cy="215" cx="386.5"
                             fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="#33ab9f"/>
                    <text className={clsx("text-circle-1", direction)} x="162.7" y="163.45312" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="35px" fill="white">{circle1Text}</text>
                    <text className={clsx("text-circle-2", direction)} x="425" y="100.5" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="25px" fill="white">{circle2Text}</text>
                    <text className={clsx("text-circle-3", direction)} x="463" y="263.45313" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="15px" fill="white">{circle3Text}</text>
                    <text className={clsx("text-circle-4", direction)} x="362" y="286.5" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px" fill="white">{circle4Text}</text>
                    <text className={clsx("text-circle-5", direction)} x="347.8" y="224.45313" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px" fill="white">{circle5Text}</text>
                    <text className={clsx("text-circle-6", direction)} x="386.5" y="215" textAnchor="middle" alignmentBaseline="middle" fontFamily="Verdana" fontSize="10px" fill="white">{circle6Text}</text>
                </g>
            </svg>
            <button onClick={() => animate("left")}>left</button>
            <button onClick={() => animate("right")}>right</button>

        </Container>
    );
}
