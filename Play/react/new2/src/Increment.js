import React, {useState} from 'react';

const Increment = () => {
    let [digit, setDigit] = useState(0);

    const inc = () => {
        setDigit(digit += 1)
    }
    const dec = () => {
        setDigit(digit -= 1)
    }
    return (
        <div>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <h3>{digit}</h3>
        </div>
    );
};

export default Increment;