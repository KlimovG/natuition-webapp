import "./style.css"
import React from "react"
import image from './logo.svg'
const Logo = ({children}) => {
    return (
        <img
            src={image}
            alt="Logo of Natuition"/>
    )
}

export default Logo;