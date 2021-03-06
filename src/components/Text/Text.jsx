import React from "react";

function Text(props){    
    const displayWarning=props.currentNumber>=props.maxCapacity? "Max capacity is reached!":"Welcome"; // display message depends on wether reaches capacity or not.

    return (
        <div className="label__lg">
            <h2>Capacity:{props.maxCapacity}</h2>
                <p className="num-p">{props.currentNumber}</p>
            <h2>{displayWarning}</h2>
        </div>
    );
}

export default Text;
