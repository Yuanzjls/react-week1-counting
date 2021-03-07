import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  myButton:{
    color:'black',
    background:'white',
    "&:focus":{      
        background:'gray',      
    }
  },
  myResetButton:{
    color:'#4d4d4d;',
    background:'white',
    "&:focus":{      
        background:'gray',      
    }
  }
});

function Button(props){
    const classes = useStyles();
    const classButton = (props.btnType!=="reset")?classes.myButton:classes.myResetButton;

    return (
        <button type="button"
          className={classButton} disabled={props.btnEnable} onClick={props.btnFunc} accessKey={props.btnKey}>
        <span>{props.btnText}</span>
        </button>
    );
}
export default Button;
