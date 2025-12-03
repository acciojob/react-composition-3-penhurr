import React from "react";


const Tooltip = ({current}) => {

    return(

        <div>
            { current===1 && <>This is a tooltip</>}
            { current===2 && <>This is another tooltip</>}
        </div>

    )


}

export default Tooltip