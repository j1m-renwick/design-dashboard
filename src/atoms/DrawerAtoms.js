import {atom} from "recoil";

const generateKey = key => `drawer-${key}`

export const selectedWidget = atom({
    key: generateKey("selectedWidget"),
    default: null
});