import React from 'react';
import './App.css';
import 'fontsource-roboto';
import CharacterCounter from "./widgets/CharacterCounter";
import {drawerWidth} from "./drawer/StaticDrawer";
import {makeStyles} from "@material-ui/core/styles";
import GoldenRatio from "./widgets/GoldenRatio";
import {useRecoilValue} from "recoil/dist";
import {selectedWidget as selectedWidgetAtom} from "./atoms/DrawerAtoms";
import CertificateVerification from "./widgets/certificate/CertificateVerification";

export default function Widget() {

    const classes = makeStyles((theme) => ({
        mainContainer: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: "#90caf9",
            height: "100vh"
        }
    }))();

    const selectedWidget = useRecoilValue(selectedWidgetAtom);

    const renderWidget = () => {
        switch(selectedWidget) {
            case "Letter Count":
                return <CharacterCounter/>
            case "Golden Ratio":
                return <GoldenRatio/>
            default:
                return <CertificateVerification/>
        }
    }

    return (
        <div className={classes.mainContainer}>
            {renderWidget()}
        </div>
    );
}
