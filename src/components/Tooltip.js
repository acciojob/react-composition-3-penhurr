import React from "react";


const Tooltip = ({current,text}) => {

    return(

        <div>
            { current===1 && text}
            { current===2 && text}
        </div>

    )


}

export default Tooltip