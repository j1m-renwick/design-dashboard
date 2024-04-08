import React from 'react';
import {Container} from '@mui/material';
import {makeStyles} from "@mui/styles";

export default function InstructionBox({text, onClick}) {

    const classes = makeStyles(theme => ({
            container: {
                backgroundColor: "white",
                borderRadius: "10px",
                marginBottom: "5px",
                maxHeight: "80px",
                minHeight: "80px",
                overflowY: "scroll",
                padding: "15px",
                fontSize: "14pt",
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "1px"
            }
        })
    )();

    return (
        <Container onClick={onClick} dangerouslySetInnerHTML={{__html: text}} className={classes.container} maxWidth="md"/>
    );
}
