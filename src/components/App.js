import React, { Component, useState,useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };
  const handlePress=(event)=>{
  if(event.keyCode===37) {
     let value = x - 5;
      setX(value);
      setBallPosition({
        left: value + "px",
        top: y + "px"
      });
  }
         
    else   if(event.keyCode===38) {
      let value = y+5;
      setY(value);
      setBallPosition({
        left: x + "px",
        top: value + "px"
      });
        
  }
      else  if(event.keyCode===39) {
      let value = x + 5;
      setX(value);
      setBallPosition({
        left: value + "px",
        top: y + "px"
      });
  }
     else  if(event.keyCode===40) {
      let value = y-5;
      setY(value);
      setBallPosition({
        left: x + "px",
        top: value + "px"
      });
  }
      
  }
  useEffect(()=>{
    
  document.addEventListener("keydown", (event) => handlePress(event))}
   return ()=>{document.removeEventListener("keydown",handlePress);   
   
  });
 
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={() => setRenderBall(true)}>
          start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}:
    </div>
  );
};

export default App;
