import React from "react";
import "./Popup.css";

const Popup = ({ turns, min, sec, onClose }) => {

  return (
    <div className="popup">
      <h2>Congratulations, <br/> you won!</h2>
      <div className="stats"> 
        <p>Time Elapsed: {turns}</p>
        <p>Total Turns: {min}:{sec}</p>
      </div>
      <button onClick={onClose}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M1.875 1.49998V5.99998H6.375M1.995 11.6775C2.60581 13.2736 3.74339 14.6132 5.2194 15.4745C6.69541 16.3359 8.42133 16.6674 10.1114 16.414C11.8015 16.1607 13.3544 15.3377 14.513 14.0815C15.6715 12.8252 16.3663 11.2109 16.4823 9.50586C16.5983 7.80083 16.1285 6.10733 15.1507 4.70573C14.1729 3.30413 12.7458 2.27849 11.1055 1.79863C9.46533 1.31876 7.71042 1.41345 6.13137 2.06701C4.55231 2.72057 3.24381 3.89381 2.4225 5.39248"
              stroke="#EEEEEE"
              stroke-width="1.26562"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
        Restart
        </button>
      
    </div>
  );
};

export default Popup;