import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {useRecoilValue} from "recoil";
import {characterLimitEnabled as limitEnabledAtom, maxCharacters as maxCharAtom} from "../atoms/widgetAtoms";
import TextArea from "../TextArea";

export default function CharacterCounter() {

    const maxCharacters = useRecoilValue(maxCharAtom)
    const [characterCount, setCharacterCount] = useState(0);
    const characterLimitEnabled = useRecoilValue(limitEnabledAtom);

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

    return (
        <Container className={classes.container}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {characterLimitEnabled ?
                    (
                        <div style={{padding: "10px"}}>
                            <label style={{color: "red"}}>
                                {`${maxCharacters - characterCount} characters remaining`}
                            </label>
                        </div>
                    ) : null
                }
                <TextArea maxCharacters={maxCharacters} characterLimitEnabled={characterLimitEnabled}
                          cb={count => setCharacterCount(count)}/>
                <label style={{fontSize: "32px", color: "red"}}>{`${characterCount} characters`}</label>
            </div>
        </Container>
    );
}
