import React, { useState ,useEffect} from "react";
import Button from "./components/Button";
import Text from "./components/Text"

const initialNumber=0;
function App(props) {
  const [currentNumber, setNumber] = useState(initialNumber);
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
  
  function resetNumber(){
    setNumber(initialNumber);
  }

  useEffect(()=>{if (!plusEnable) alert("Max capacity is reached!");}, [plusEnable]);
  
  
  return (

    
    <div className="count stack-large">
      <Button btnText="Reset" btnKey="r" btnFunc={resetNumber}/>
      <Text maxCapacity={props.maxCapacity} currentNumber={currentNumber}/>
      <div className="filters btn-group stack-exception">
        <Button classAttr="btn toggle-btn" btnText="+" btnFunc={numPlus} btnEnable={plusEnable?false:true} btnKey="+"/>
        <Button classAttr="btn toggle-btn" btnText="-" btnFunc={numMinus} btnEnable={minusEnable?false:true} btnKey="-"/>        
      </div>
      
    </div>
    
  );
}

export default App;
