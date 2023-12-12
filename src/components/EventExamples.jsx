import React from 'react';
// import './App.css';


function EventExamples() {
  const handleClick = () => console.log("button has been clicked!");
  // function handleClick () {
  //   console.log("button has been clicked!")
  // }
  function handleChange (event, message) {
    console.log(message);
    console.log(event.target.value)
  }

  function handleChangeNoParam (event) {
    console.log(event.target.value)
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => console.log("button has been clicked!")}>Click me2!</button>
      <input type="text" onChange={handleChangeNoParam}/>
      <input type="text" onChange={(event) => handleChange(event, "this is the message to be logged")} />
    </React.Fragment>
  )
}


export default EventExamples
