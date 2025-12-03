import React from "react";


const Tooltip = ({current}) => {

    return(

        <>
            { current===1 && <>This is a tooltip</>}
            { current===2 && <>This is another tooltip</>}
        </>

    )


}

export default Tooltip