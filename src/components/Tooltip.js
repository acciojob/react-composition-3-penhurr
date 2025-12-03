import React from "react";


const Tooltip = ({current}) => {

    return(

        <div>
            { current===1 ? <h2>This is a tooltip</h2> : null }
            { current===2 ? <p>This is another tooltip</p> : null }
        </div>

    )


}

export default Tooltip