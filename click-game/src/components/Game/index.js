import React from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import FriendCard from "../FriendCard";
import data from "../../data.json";

// we want Game to inherit the components of React
class Game extends React.Component{

    // here we are starting the rendering of images. so we can access the JSON we create 
    // by this.state.data.etc...
    state ={
        data
    }

    // arrow function handleClick that utilizes a parameter id 
    handleClickCheck = (id) => {
        // we want to check if data.clicked is false
        // we receive id 
        
        alert(id)
  
    }

    // why do we need to render here?
    // I learned that its best to have functions outside of render because it can take perforance hits and its also messier
    // render is a good place to have your html place
    render(){
        return (
            <div>
                <Nav>

                </Nav>
                <Header>

                </Header>

                    {/* Here is where we use the container to hold all of our images 20/16 for map() review*/}
                     {/* its beter to seperate the container and the friend image into to components just to utilizes reacts potential */}
                    <Container>
                    {this.state.data.map(item => (
                        <FriendCard
                        // so setting id = item.id we have set that prop for all parameters that need id
                        // in the FriendCard componenet the onclick requires a props.id parameter so this is how it 
                        // makes each card unique
                        // here we are propping the function to the function we created above 
                         id = {item.id}
                         // this (what we clicked on) will take on the funciton we created above and set it to the function prop
                         handleClick= {this.handleClickCheck}
                         image = {item.image}
                         // so below "key" is not a prop in the container function but is recommended by react to add uniqueness
                         // Keys help React identify which items have changed, are added, or are removed. Keys should be given to the
                         // elements inside the array to give the elements a stable identity
                         key= {item.id}
                         />
                    ))}
                    </Container>
 
            </div>
        )
    }

}

export default Game;