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
        // data is all the data from the data.json file
        data,
        score: 0,
        topScore: 0
    }


    correct = data => {
        // alert("correct");
        // var topScore = this.state.topScore, var score = this.state.score
        const {topScore , score} = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        
        // here we are setting the score to the newScore in the state above
        //setstate() tells react that this component and its children need to be rerenderd with the update.
        // think of it as a request rather than a command to update
        this.setState({
            data: this.shuffleData(data),
            score: newScore,
            topScore: newTopScore
        })
     
    }

    incorrect = data => {
        //alert("incorrect");
        // if its incorrect the score gets resetted
        this.setState({
            //data: this.shuffleData(data),
            score: 0
        })
    }

    shuffleData = data => {

        // data.length = 12 - 1 = 11
        let i = data.length -1;
        while(i > 0) {
            // random number from i + 1: 12, 11, 10... 1
            const j = Math.floor(Math.random() * (i + 1));
            // hold the temp =  data[11, ... 0];
            const temp = data[i]
        //  console.log("temp " + temp);
            // data[11] = data[random]
            data[i] = data[j];
        //  console.log("data[i]: " + data[i].image);
            // data[random] = data[11,... 0];
            data[j] = temp;
        // console.log("data[j]: " + data[j].image);
            i--;
        }
        return data;

        /* my way
        const arr = [];
        while(arr.length < 12){
            const rand = Math.floor(Math.random() * 12);
            if (arr.indexOf(rand) == -1){
                const temp = data[arr.length];
                data[arr.length] = data[rand];
                console.log(data);
                data[rand] = temp;
                arr.push(rand);
            }
        }
        return data;
        */
        
    }

    // arrow function handleClick that utilizes a parameter id 
    handleClickCheck = (id) => {

        let guess = false;
        // here we are mapping a new array with the state.data that we created
        // the data is imported from the data.json
        const newData = this.state.data.map(item => { 
            // "item" contains the id, image, and clicked object from data.json 
            

            // since the item will update on array we want to have a reference to all items in that update array
            // ... is a spread operator that basically calls everthing in the object
            //const newItem = {...item}; Dont think we need this

            //in the map loop we grab the id in the json file and match with the user click
            if (item.id === id){
                // if click is false, then make it true and make the guess be corrct (true)
                if(!item.clicked){
                    item.clicked = true;
                    guess = true;
                }
            }

            // so we have the item.clicked = true if it has been clicked
            return item;
        });

        // if the guess was changed to true then call the correct function. 
        if(guess){
            // if you dont put "this" itll say correct is not define
            this.correct(newData);
        }
        else{
            this.incorrect(newData);
        }
        console.log(newData);
  
    }

    // why do we need to render here?
    // I learned that its best to have functions outside of render because it can take perforance hits and its also messier
    // render is a good place to have your html place
    render(){
        return (
            <div>
                <Nav score = {this.state.score}
                    topScore = {this.state.topScore}
                />
                <Header>

                </Header>

                    {/* Here is where we use the container to hold all of our images 20/16 for map() review*/}
                     {/* its beter to seperate the container and the friend image into to components just to utilizes reacts potential */}
                    <Container>
                    {this.state.data.map(item => (
                        <FriendCard
                        // so below "key" is not a prop in the container function but is recommended by react to add uniqueness
                        // Keys help React identify which items have changed, are added, or are removed. Keys should be given to the
                        // elements inside the array to give the elements a stable identity
                        key= {item.id}
                        // so setting id = item.id we have set that prop for all parameters that need id
                        // in the FriendCard componenet the onclick requires a props.id parameter so this is how it 
                        // makes each card unique
                        // here we are propping the function to the function we created above 
                         id = {item.id}
                         // this (what we clicked on) will take on the funciton we created above and set it to the function prop
                         handleClick= {this.handleClickCheck}
                         image = {item.image}

                         />
                    ))}
                    </Container>
 
            </div>
        )
    }

}

export default Game;