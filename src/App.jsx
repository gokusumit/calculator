import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
 const [calVal,setcalVal]=useState("");
 const onButtonClick=(buttonText)=>{
  if(buttonText=="C"){
    setcalVal("");

  }else if(buttonText=="="){
    const result=eval(calVal);
    setcalVal(result);

  }
  else{
    const newdisplayvalue=calVal+buttonText;
    setcalVal(newdisplayvalue);
  }
}

 

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>

    </div>
  )
}

export default App
