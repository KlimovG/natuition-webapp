import "./style.css"
import React from "react"

const Button = ({children, styles}) => {
  return (
    <button className={"py-4 px-6 rounded text-base Montserrat-Regular hover:shadow-none transition duration-300 "+(styles || "")}>
      {children}
    </button>
  )
}

export default Button;