import React, { Component, useState } from "react";
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
    setX(0);
    setY(0);
  };
  useEffect(()=>{
    
  document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          setX(x - 5);
          break;
        case 38:
          setX(y + 5);
          break;
        case 39:
          setX(x + 5);
          break;
        case 40:
          setY(y - 5);
          break;
        default:
          break;
      }
      setBallPosition({ left: x + "px", top: y + "px" });
    });
  })
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
