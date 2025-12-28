import React from "react";


const Tooltip = ({text}) => {

    return(

        <div style={{ pointerEvents: "none" }}>
            { text}
        </div>

    )


}

export default Tooltip