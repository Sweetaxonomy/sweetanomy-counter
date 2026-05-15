import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = (props) => {
  return (
    <div>
      <SecondsCounter seconds={props.seconds} />

      <div className="container-fluid my-5 px-3">
        <div className="row justify-content-start mb-5"> 
          
          <div className="col-auto">
            <button className="btn btn-dark" onClick={props.toggleCounter}>
              Change counter to: {props.isRegressive ? "progressive" : "regressive"}
            </button> 
          </div>

        </div>

        <div className="row g-3 justify-content-start mb-5">
          
          <div className="col-auto">
            <button className="btn btn-dark" onClick={props.stop}>
              Stop
            </button>
          </div>

          <div className="col-auto">
            <button className="btn btn-dark" onClick={props.resume}>
              Resume
            </button>
          </div>

          <div className="col-auto">
            <button className="btn btn-dark" onClick={props.reset}>
              Reset
            </button>
          </div>

        </div>

        <div className="row g-3 justify-content-start">
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              placeholder="Alert time"
              id="alertTime"/>
          </div>

          <div className="col-auto">
            <button
              className="btn btn-dark"
              onClick={() => {
                const input = document.getElementById("alertTime");
                props.setAlert(input.value);
              }}>
              Alert
            </button>
          </div>

        </div>

        <div className="row g-3 justify-content-start mt-4">

          <div className="col-4">
              <input
                type="number"
                className = "form-control"
                id="countdownStart"
              />
          </div>

          <div className="col-auto">
              <button
                className="btn btn-dark"
                onClick={() => {
                  const input = document.getElementById("countdownStart");
                  props.setCountdownStart(input.value);
                }}
              >
                Start countdown
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;