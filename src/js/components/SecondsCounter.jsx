import React from "react";

const SecondsCounter = (props) => {
  let text = (props.seconds ?? 0).toString().padStart(6, "0");

  return (
    <div className="container-fluid bg-dark py-4">
      
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="d-flex gap-2">
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">
              <i className="fa-solid fa-clock"></i>
            </div>

            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[0]}</div>
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[1]}</div>
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[2]}</div>
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[3]}</div>
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[4]}</div>
            <div className="box text-white d-flex justify-content-center align-items-center flex-fill">{text[5]}</div>
          
          </div>
        </div>
      </div>

    </div>
  );
};
export default SecondsCounter