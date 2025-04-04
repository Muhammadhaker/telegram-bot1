import React, { useState } from "react";
import "./card.css";
import Button from "./../button/button";

const Card = (props) => {
  const [ count, setCount ] = useState(0);
  const { course, onAddItem, onRemoveItem } = props;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItem(course);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
    onRemoveItem(course);
  };

  return (
    <div className="card">
      <span className={`${count !== 0 ? "card_badge" : "card_badge_hidden "}`}>
        {count}
      </span>

      <div className="image_container">
        <img
          src={course.Image}
          alt={course.title}
          width="100%"
          height="230px"
        />
      </div>
      <div className="card_body">
        <h2 className="card_title">{course.title}</h2>
        <div className="card_price">
          {course.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
      <div className="hr"></div>

      <div className="btn_container">
        <Button title="+" type="add" onClick={handleIncrement} />
        <Button title="-" type="remove" onClick={handleDecrement} />
      </div>
    </div>
  );
};

export default Card;
