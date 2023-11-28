import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : "not-flipped"}>
        <img className="front" src={card.src} alt="card front"/>
        <div
          className="back"
          onClick={handleClick}
        ><h1>?</h1></div>
      </div>
    </div>
  );
}
