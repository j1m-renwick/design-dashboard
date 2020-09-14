import React from 'react';
import './App.css';
import 'fontsource-roboto';
import StaticDrawer from "./drawer/StaticDrawer";
import {RecoilRoot} from "recoil";
import Widget from "./Widget";

function App() {

    return (
        <div className="App">
            <RecoilRoot>
                <StaticDrawer/>
                <Widget/>
            </RecoilRoot>
        </div>
    );
}

export default App;
