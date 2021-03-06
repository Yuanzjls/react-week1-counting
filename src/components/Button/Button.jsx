import React, {useState, useEffect} from "react";

function Button(props){

    const className = (props.btnType!="reset")?"btn toggle-btn":"";

    return (
        <button type="button"
          className={className} disabled={props.btnEnable} onClick={props.btnFunc} accessKey={props.btnKey}>
        <span>{props.btnText}</span>
        </button>
    );
}
export default Button;