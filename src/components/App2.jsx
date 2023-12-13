import React, { useEffect, useState } from 'react';
import './App.css';


function App2() {
  // let myName = "Emily"
  const [myName, setMyName] = useState("Emily");
  const [inputValue, setInputValue] = useState("");


  // console.log(myName)
  // console.log(setMyName)

  console.log("component is rendered")

  function handleClick () {
    // myName = input.value;
    setMyName(inputValue);
    console.log("myName from click", myName);
  }

  useEffect(() => {
    console.log("use effect has run")
  },[])


  return (
    <React.Fragment>
      <h1>My name is {myName}!</h1>
      {/* { console.log("myName from return", myName) } */}
      <input value={inputValue} type='text' onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleClick}>change name</button>
    </React.Fragment>
  )
}


export default App2
