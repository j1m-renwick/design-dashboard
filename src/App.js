import React from 'react';
import './App.css';
import 'fontsource-roboto';
import CharacterCounter from "./widgets/CharacterCounter";
import StaticDrawer, {drawerWidth} from "./drawer/StaticDrawer";
import {makeStyles} from "@material-ui/core/styles";
import {RecoilRoot} from "recoil";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#2c387e",
        height: "100vw"
    }
}));

function App() {

    const classes = useStyles();

    return (
        <div className="App">
            <RecoilRoot>
                <StaticDrawer/>
                <div className={classes.mainContainer}>
                    <CharacterCounter/>
                </div>
            </RecoilRoot>
        </div>
    );
}

export default App;
