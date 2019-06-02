import React from "react";
import "./style.css";

// this component simply holds the container
function Container(props){
    return <div className="container"> 
        {props.children}
     </div>
}

export default Container;