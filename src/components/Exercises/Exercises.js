import React from "react";
import "./Exercises.css";

const Exercises = (props) => {
  const { name, img, time } = props.exercise;

  return (
    <div className="practice">
      <img src={img} alt="" />
      <div className="exercise-info">
        <p className="exercise-name">{name}</p>
        {/* <p>Price: ${price}</p> */}
        <p>{/* <small>Seller: {seller}</small> */}</p>
        <p>{/* <small>Ratings: {ratings} Stars</small> */}</p>
      </div>
      <button
        onClick={() => props.handleAddToDetails(props.exercise)}
        className="btn-exercise"
      >
        <p className="btn-text">Add to Details</p>
        {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
      </button>
    </div>
  );
};

export default Exercises;