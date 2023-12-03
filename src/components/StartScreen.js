import React from "react";
import "./StartScreen.css";


const StartScreen = ({ onStartClick }) => {
  return (
    <div className="start-screen">
      <h1 className="start-title">Yellowjacket Match-It!</h1>
      <button className="start-button" onClick={onStartClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.33337 2L12.6667 8L3.33337 14V2Z"
            stroke="#EEEEEE"
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>  
        Play
      </button>
    </div>
  );
};

export default StartScreen;
