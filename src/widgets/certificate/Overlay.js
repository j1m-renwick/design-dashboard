import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {motion} from "framer-motion";

export default function Overlay({state}) {

    const classes = makeStyles(theme => (
        {
            modal: {
                display: "none",
                position: "fixed",
                zIndex: 3,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255,255,255,0)",
                // backdropFilter: "blur(2px)"
            }
        })
    )();

    return (
        <motion.div onClick={e => console.log("HI")} animate={state} className={classes.modal}/>
    )

}