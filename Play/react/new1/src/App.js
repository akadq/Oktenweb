import React, {useState} from "react";
import Counter from "./Components/Counter";

function App(props) {

    return (
        <div className="App">
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
