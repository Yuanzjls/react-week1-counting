import React, { useState} from "react";
import Button from "./components/Button";
import Text from "./components/Text"


function App(props) {
  const [currentNumber, setNumber] = useState(90);

  const plusEnable = currentNumber<props.maxCapacity;
  const minusEnable = currentNumber>0;
  function numPlus(){
    if (plusEnable) {
      setNumber(currentNumber+1);
    }
  }
  function numMinus(){
    if (minusEnable) {
      setNumber(currentNumber-1);
    }
  }

  return (

    
    <div className="count stack-large">
      <button>Reset</button>
      <Text maxCapacity={props.maxCapacity} currentNumber={currentNumber}/>
      <div className="filters btn-group stack-exception">
        <Button btnText="+" btnFunc={numPlus} btnEnable={plusEnable?false:true}/>
        <Button btnText="-" btnFunc={numMinus} btnEnable={minusEnable?false:true}/>        
      </div>
      
    </div>
    
  );
}

export default App;
