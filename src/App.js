import React, { useState ,useEffect} from "react";
import Button from "./components/Button";
import Text from "./components/Text"

const initialNumber=0; // Set initial amount of people as zero
function App(props) {
  const [currentNumber, setNumber] = useState(initialNumber); 
  const plusEnable = currentNumber<props.maxCapacity; // check if the current number is less than capacity.
  const minusEnable = currentNumber>0; // check if the current number is greater than 0

  function numPlus(){
    if (plusEnable) { // condition satisfies, add one to current number
      setNumber(currentNumber+1);
    }
  }
  
  function numMinus(){
    if (minusEnable) { // condition satisfies, minus one to current number
      setNumber(currentNumber-1);
    }
  }
  
  function resetNumber(){
    setNumber(initialNumber); // reset current to initial number.
  }

  useEffect(()=>{
    if (!plusEnable) alert("Max capacity is reached!");
  }, [plusEnable]);  // Is reached maximum, alert.
  
  
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
