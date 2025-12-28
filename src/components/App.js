
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [current, setCurrent] = useState(0)

  return (
    <div>
      {/* Do not remove the main div */}
      <div>
        
        <h2 className="tooltip" onMouseOver={() => setCurrent(1)} onMouseOut={() => setCurrent(0)}>{ current===1 && <Tooltip text="This is a tooltip" />}Hover over me</h2>
      </div>
      <hr />
      <div >
        
        <p className="tooltip" onMouseOver={() => setCurrent(2)} onMouseOut={() => setCurrent(0)}>{ current===2 && <Tooltip text="This is another tooltip"/>}Hover over me to see another tooltip</p>
      </div>
    </div>
  )
}

export default App
