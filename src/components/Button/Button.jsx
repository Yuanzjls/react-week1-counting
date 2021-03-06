import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  myButton:{
    color:'black',
    background:'white',
    "&:focus":{      
        background:'gray',      
    }
  }
});

function Button(props){
    const classes = useStyles();
    const className = (props.btnType!="reset")?"btn toggle-btn":"";

    return (
        <button type="button"
          className={classes.myButton} disabled={props.btnEnable} onClick={props.btnFunc} accessKey={props.btnKey}>
        <span>{props.btnText}</span>
        </button>
    );
}
export default Button;
