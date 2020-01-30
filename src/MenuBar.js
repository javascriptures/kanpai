import React from 'react'
import {Link} from 'react-router-dom'
import './MenuBar.css';

function MenuBar () {

    return(
        <nav>
            <div className="menu">
            <img className="clink"src="https://media.giphy.com/media/YoDYkbjc69znlCLujJ/giphy.gif"/>
                <div className="centered">
                    <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch&display=swap" rel="stylesheet"></link>
                <h1 className="title">Welcome to Kanpai</h1>
                </div>
            </div>
        </nav>
    )

}

export default MenuBar