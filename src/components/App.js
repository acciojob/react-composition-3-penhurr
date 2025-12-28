
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [current, setCurrent] = useState(0)

  return (
    <>
      {/* Do not remove the main div */}
      
        
        <h2 className="tooltip" 
        onMouseOver={() => {setCurrent(1)
          console.log("mouse over fired")
        }} 
        onMouseOut={() => {setCurrent(0)
          console.log("mouse out fired")
        }}>
          { current===1 && <Tooltip text="This is a tooltip" />}
          <span>Hover over me</span>
        </h2>
      
      <hr />
      
        
        <p className="tooltip" 
        onMouseOver={() => setCurrent(2)} 
        
        onMouseOut={() => setCurrent(0)}>
          { current===2 && <Tooltip text="This is another tooltip"/>}
          <span>Hover over me to see another tooltip</span>
        </p>
      
    </>
  )
}

export default App
