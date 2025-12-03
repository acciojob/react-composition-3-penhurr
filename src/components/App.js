
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [current, setCurrent] = useState(0)

  return (
    <div>
      {/* Do not remove the main div */}
      <div onMouseEnter={() => setCurrent(1)} onMouseLeave={() => setCurrent(0)}>
        { current===1 && <Tooltip current={current} />}
        <h2 >Hover over me</h2>
      </div>
      <hr />
      <div onMouseEnter={() => setCurrent(2)} onMouseLeave={() => setCurrent(0)}>
        { current===2 && <Tooltip current={current} />}
        <p >Hover over me to see another tooltip</p>
      </div>
    </div>
  )
}

export default App
