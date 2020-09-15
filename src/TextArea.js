import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {stopOrHighlight as stopOrHighlightAtom} from "./atoms/characterCounterAtoms";
import {useRecoilValue} from "recoil/dist";

export default function TextArea({maxCharacters, characterLimitEnabled, cb}) {

    const classes = makeStyles(theme => ({
        textarea: {
            borderWidth: "thin",
            borderStyle: "solid",
            padding: "10px",
            minHeight: "500px",
            maxHeight: "500px",
            minWidth: "70%",
            maxWidth: "70%",
            background: "white",
            textAlign: "left",
            overflowY: "auto"
        }
    }))();

    const stopOrHighlight = useRecoilValue(stopOrHighlightAtom);

    const updateText = evt => {
        let textContent = evt.currentTarget.textContent;
        let inLimitText = textContent.substring(0, maxCharacters);
        if (textContent.length > maxCharacters && characterLimitEnabled) {
            switch(stopOrHighlight) {
                case "STOP":
                    evt.currentTarget.innerHTML = inLimitText
                    cb(maxCharacters);
                    break;
                case "HIGHLIGHT":
                    let additionalTextHtml = `<mark style="background-color: aquamarine">${textContent.substring(maxCharacters)}</mark>`
                    evt.currentTarget.innerHTML = inLimitText + additionalTextHtml;
                    cb(textContent.length)
                    break;
                default:
                    break;
            }
        } else {
            cb(textContent.length)
        }
        // move caret to end of the text (NB: not compatible with IE 9-, but who cares)
        let range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(evt.currentTarget);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        let selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }

    const adjustText = evt => {
        let textContent = evt.currentTarget.textContent;
        if(characterLimitEnabled && textContent.length > maxCharacters ) {
            let inLimitText = textContent.substring(0, maxCharacters);
            switch(stopOrHighlight) {
                case "STOP":
                    evt.currentTarget.textContent = inLimitText;
                    cb(inLimitText.length);
                    break;
                case "HIGHLIGHT":
                    let additionalTextHtml = `<mark style="background-color: aquamarine">${textContent.substring(maxCharacters)}</mark>`
                    evt.currentTarget.innerHTML = inLimitText + additionalTextHtml;
                    cb(textContent.length)
                    break;
                default:
                    break;
            }
        }
    }

    return <div contentEditable="true" onFocus={e => adjustText(e)} onInput={e => updateText(e)} className={classes.textarea}/>

}