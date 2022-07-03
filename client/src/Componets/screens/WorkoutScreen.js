import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Workouts from "../Workouts/Workouts";
import { listWorkout } from "../../action/workoutAction";

const WorkoutScreen = () => {
  // const [workouts, setWorkouts] = useState([]);

  const dispatch = useDispatch();

  const workoutList = useSelector((state) => state.workoutList);

  const { loading, error, workouts } = workoutList;

  useEffect(() => {
    dispatch(listWorkout());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="my-3 grid-3">
          {workouts.map((workout) => (
            <Workouts key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </>
  );
};

export default WorkoutScreen;
