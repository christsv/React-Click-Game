import React from "react";
import "./style.css";

function FriendCard(props){
    return (
        /* here we are adding a listener that calls a function handleClick(id) and passs the parameter id */
        // so think of this handleClick as dynaically creating a function with a parameter similiar to saying 
        // props.image and then when we need we call image in this function
        // for this the funciton is called handleClick to call it and the parameter is called id
        <div className = "card" 
           role ="img"
            //style = {{ backgroundImage: `url("${props.image}")`}}
            onClick={()=> props.handleClick(props.id)}
        >
            <img src = {props.image}/>
        </div>
    )
}

export default FriendCard;