import React from "react";
import { Link } from "react-router-dom";
const Workouts = ({ workout }) => {
  return (
    // homepage workout Cards
    <div className="card ">
      <h4 className="text-center">
        <Link to={`/workout/${workout._id}`}>{workout.name}</Link>
      </h4>
      <center><p>
        <label htmlFor="Seller">Trainer: </label>
        {workout.seller}
      </p>
      <p>{workout.category}</p>
{/* changed the layout of the price and gave price tag */}
      <p>&#8377;{ workout.price}</p>
      <p>{workout.rating}</p>
      <p>{workout.numReviews}</p>
      </center>
    </div>
  );
};

export default Workouts;


