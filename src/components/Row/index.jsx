import React from "react"
const Row = ({children, styles}) => {
    return (
        <div className={"flex " + (styles || "")}>
            {children}
        </div>
    )
}

export default Row;