import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listWorkoutDetails } from "../../action/workoutAction";

const WorkoutDescScreen = () => {
  const dispatch = useDispatch();

  const workoutDetails = useSelector((state) => state.workoutDetails);
  const { loading, error, workout } = workoutDetails;

  // const [name, category, seller, description] = workout;

  let { id } = useParams();
  useEffect(() => {
    dispatch(listWorkoutDetails(id));
  }, [dispatch, id]);

  // console.log(workout);
  // const workout = {};
  // const loading = false;
  // const error = "";

  return (
    <div style={{ minHeight: "100vh" }}>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <div className="workout-showcase">
          <h1 className="my-3">{workout.name}</h1>
          <div className="w-showcase-sub">
            <em>
              <p>
                <label htmlFor="category">Category: </label> {workout.category}
              </p>
            </em>
            <em>
              <p>
                <label htmlFor="seller">Seller: </label> {workout.seller}
              </p>
            </em>
          </div>
        </div>
      )}
      {/* {workout.description} */}
    </div>
  );
};

export default WorkoutDescScreen;
