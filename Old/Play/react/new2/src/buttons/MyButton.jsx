import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = (props) => {
    const buttonText = props.text;
    return (
        <button className={classes.myBtn}>{buttonText} {props.number}</button>
    );
};

export default MyButton;