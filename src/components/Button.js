import React, {useState, useEffect} from "react";

function Button(props){
    
    return (
        <button type="button"
          className={props.classAttr} disabled={props.btnEnable} onClick={props.btnFunc} accessKey={props.btnKey}>
        <span>{props.btnText}</span>
        </button>
    );
}

export default Button;