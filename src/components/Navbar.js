import React from "react"
import logo from "../images/globe.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt=""/>
            <h4 className="nav--header">my travel journal.</h4>
        </nav>
    )
}