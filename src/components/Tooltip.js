import React from "react";


const Tooltip = ({current}) => {

    return(

        <div>
            { current===1 && <h2>This is a tooltip</h2>}
            { current===2 && <p>This is another tooltip</p>}
        </div>

    )


}

export default Tooltip