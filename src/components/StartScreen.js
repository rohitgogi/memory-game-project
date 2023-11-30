import React from "react";

const StartScreen = ({ onStartClick }) => {
  return (
    <div className="start-screen">
      <img src="/img/homescreen.png" alt="Start Screen Image" className="start-image" />
      <button className="start-button" onClick={onStartClick}>
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
