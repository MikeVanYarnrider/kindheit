import React from "react";

export const Card = props => {
  const { card, flipped } = props;

  const handleClick = card => {
    props.onClick(card);
  };

  return (
    <div
      className={`card ${flipped ? "turned" : ""}`.trimRight()}
      onClick={() => handleClick(card.name)}
    >
      <div className="card-back"></div>
      <div className="card-front">
        <img src={card.img} alt={card.name} />
      </div>
    </div>
  );
};
