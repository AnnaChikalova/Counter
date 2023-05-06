import React from 'react';
import './App.css';

import {CounterDisplayAndSettings} from "./CounterDisplayAndSettings";
import {CounterDisplayOrSettings} from "./CounterDisplayOrSettings";
import {DisplayWithRedux} from "./DisplayWithReduxnew";

function App() {

    return (
        <div>

           <CounterDisplayAndSettings/>
            <CounterDisplayOrSettings/>
            <DisplayWithRedux/>



        </div>

    )
}

export default App;
