import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import {useRecoilState} from "recoil";
import {
    characterLimitEnabled as charLimitEnabledAtom,
    maxCharacters as maxCharsAtom,
    stopOrHighlight as stopOrHighlightAtom
} from "../atoms/characterCounterAtoms";
import {useResetRecoilState} from "recoil/dist";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export default function CharacterCounterConfig() {

    const [characterLimitEnabled, setCharacterLimitEnabled] = useRecoilState(charLimitEnabledAtom);
    const [maxCharacterLimit, setMaxCharacterLimit] = useRecoilState(maxCharsAtom);
    const [stopOrHighlight, setStopOrHighlight] = useRecoilState(stopOrHighlightAtom);
    const maxCharReset = useResetRecoilState(maxCharsAtom);

    const maxCounterLength = 5;

    const enforceNumericalInput = evt => {
        let value = evt.target.value
        value = value.replace(/[^0-9]/g, '');
        if(value.length > maxCounterLength) {
            evt.target.value = value.substring(0, value.length - 1);
            evt.stopPropagation();
        } else {
            evt.target.value = value;
            setMaxCharacterLimit(value);
        }
    }

    const assessReset = evt => {
        if(evt.target.value == 0) {
            maxCharReset()
        }
    }

    const renderOptions = () => {
        if(characterLimitEnabled) {
            return (
                <>
                    <ListItem style={{display: "flex", width: "100%", justifyContent: "center"}}>
                        <TextField
                            id="character-limit"
                            label="Character Limit"
                            variant="outlined"
                            color="secondary"
                            size="small"
                            value={maxCharacterLimit}
                            onChange={enforceNumericalInput}
                            onBlur={assessReset}
                            inputProps={{min: 0, style: {textAlign: 'center'}}}
                        />
                    </ListItem>
                    <ListItem style={{display: "flex", width: "100%", justifyContent: "center", paddingTop: "20px"}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Limit behaviour</FormLabel>
                            <RadioGroup aria-label="behaviour-options" name="behaviour-options" value={stopOrHighlight}
                                        onChange={e => setStopOrHighlight(e.target.value)}>
                                <FormControlLabel value="STOP" control={<Radio/>} label="Stop"/>
                                <FormControlLabel value="HIGHLIGHT" control={<Radio/>} label="Highlight"/>
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                    {/*<ListItem>*/}
                    {/*    <Checkbox/>*/}
                    {/*    <ListItemText primary="Verbositise text to fit limit"/>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem>*/}
                    {/*    <Checkbox/>*/}
                    {/*    <ListItemText primary="Shorten text to fit limit"/>*/}
                    {/*</ListItem>*/}
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <List>
            <ListItem>
                <Checkbox
                    checked={characterLimitEnabled}
                    onChange={(event) => setCharacterLimitEnabled(event.target.checked)}
                />
                <ListItemText primary="Enable character limit"/>
            </ListItem>
            {renderOptions()}
        </List>
    );
}