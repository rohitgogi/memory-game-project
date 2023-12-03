import React from "react";

const Popup = ({ turns, onClose }) => {
    
  return (
    <div className="popup">
      <h2>Congratulations, you won!</h2>
      <p>Your stats:</p>
      <p>Turns: {turns}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;