import { useEffect, useState } from "react";
import "./App.css";
import { Stopwatch } from "stopwatch.js";
import SingleCard from "./components/SingleCard";
import StartScreen from "./components/StartScreen";

let timer = false;
var min = 0;
var sec = 0;

const globalStopwatch = new Stopwatch();

const cardImages = [
  { src: "/img/image1.png", matched: false },
  { src: "/img/image2.png", matched: false },
  { src: "/img/image3.png", matched: false },
  { src: "/img/image4.png", matched: false },
  { src: "/img/image5.png", matched: false },
  { src: "/img/image6.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  //this function doubles the cards and shuffles them
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    globalStopwatch.reset();

    timer = false;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
  };

  //choice handler
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards, handle what happens if they do/don't
  useEffect(() => {
    if (!timer) {
      timer = true;
      globalStopwatch.start((time) => {
        min = time.split(":")[1];
        sec = time.split(":")[2];
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
      });
    }
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 850);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted && <StartScreen onStartClick={startGame} />}
      <div className="left-container">
        <div className="top-container">
          <h1 className="title">Yellow Jacket Match-It</h1>
          <p className="turns">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_7_107)">
                <path
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                  stroke="#EEEEEE"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 4.5V9L12 10.5"
                  stroke="#EEEEEE"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_107">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <div id="time">
              <span class="digit" id="min">
                00
              </span>
              <span class="txt">:</span>
              <span class="digit" id="sec">
                00
              </span>
            </div>
          </p>
          <p className="turns">Turns: {turns}</p>
        </div>
        <button className="restart-button" onClick={shuffleCards}>
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
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
