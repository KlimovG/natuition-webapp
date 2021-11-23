import React from "react"
const Container = ({children, styles}) => {
    return (
        <div className={"px-6 mx-auto max-w-xl " + (styles || "")}>
            {children}
        </div>
    )
}

export default Container;