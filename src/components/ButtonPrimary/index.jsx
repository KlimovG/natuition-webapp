import Button from '../Button'
import "./style.css"

import React from "react"

const ButtonPrimary = () =>{
    return(
        <Button
            styles="bg-green
            shadow-primary-btn
            text-white
            hover:bg-green-light
            hover:text-green-dark
            border-2 border-green
            hover:border-2
            hover:border-green-dark">
            Sign In
        </Button>
    )
}

export default ButtonPrimary;