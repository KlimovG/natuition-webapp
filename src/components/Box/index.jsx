import React from "react"
const Box = ({children, styles}) => {
    return (
        <div className={"mx-auto " + (styles || null)}>
            {children}
        </div>
    )
}

export default Box;