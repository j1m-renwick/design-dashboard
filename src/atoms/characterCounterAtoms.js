import {atom} from "recoil";

const generateKey = key => `characterCounter-${key}`

export const characterLimitEnabled = atom({
    key: generateKey("limitEnabled"),
    default: false
});

export const maxCharacters = atom({
    key: generateKey("limitCount"),
    default: 20
});

export const stopOrHighlight = atom({
    key: generateKey('stopOrHighlight'),
    default: "STOP"
});