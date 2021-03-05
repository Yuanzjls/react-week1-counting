import React, {useState, useEffect} from "react";

function Button(props){
    
    return (
        <button type="button"
          className="btn toggle-btn" disabled={props.btnEnable} onClick={props.btnFunc} accessKey={props.btnText}>
        <span>{props.btnText}</span>
        </button>
    );
}

export default Button;