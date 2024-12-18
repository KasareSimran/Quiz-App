
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Quiz.css'

const Quiz =()=>{
    return(<div className="container">
        <h1>Quiz App</h1>
        <hr/>
        <h2>1. Which device is use for internet connection?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>Pen derive</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>)
}
export default Quiz