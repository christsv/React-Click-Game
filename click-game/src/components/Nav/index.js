import React from "react";
import "./style.css";
//import NavMessage from "../NavMessage";


function Nav(props){
    return (
        // this is where we return the html that we want
        <nav className="navbar">
            <ul>
                <li>
                    {/*the href routes the clicky game back to itself*/}
                    <a href="/">Click Game</a>
                </li>

                <li>
                    {/*props.score means when you decide to use Nav in another component you would call this function via score*/}
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
        
            </ul>
        </nav>

    )
}

export default Nav;