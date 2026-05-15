import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS
import "../styles/index.css";

// Components
import Home from "./components/Home";

//Buttons variables

let counter = 0;
let isRegressive = false;
let isPaused = false;
let alertTime = null;
let alertShown = false;
////Final Featuresç
let countdownStart = 0;



const root = ReactDOM.createRoot(document.getElementById("root"));
//Change Counter
const toggleCounter = () =>{
  isRegressive = !isRegressive
}
//Pause counter
const stop = () =>{
  isPaused = true
}
//Reset Counter
const  reset = () =>{
  counter = 0;
}
//Continue counter
const resume = () =>{
  isPaused = false
}
//Alert
const setAlert = (time) => {
  alertTime = Number(time);
  alertShown = false;
}
////
const setCountdownStart = (number) => {
  counter = Number(number);
  isRegressive = true;
};

/////////////////////////////////////////

setInterval(() => {


  if(!isPaused){
    if(isRegressive){
      if(counter > 0){counter --}
    }else{
      counter ++
    }
  }

  if(!alertShown && alertTime !== null && counter === alertTime){
    alert(`Counter reached: ${alertTime}`)
    alertShown = true;
  }
  root.render(
  <Home 
  seconds={counter} 
  isRegressive={isRegressive}
  toggleCounter={toggleCounter}
  stop = {stop}
  resume ={resume}
  reset = {reset}
  setAlert = {setAlert}
  setCountdownStart={setCountdownStart}
  />);
  
}, 1000);