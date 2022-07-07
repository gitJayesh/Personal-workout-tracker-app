import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WORKOUT_CREATE_RESET } from "../../constants/workoutConstants";
import { useNavigate } from "react-router";
import {
  listWorkout,
  deleteWorkout,
  createWorkout,
} from "../../action/workoutAction";
const WorkoutListScreen = ({}) => {
  const dispatch = useDispatch();

  const workoutList = useSelector((state) => state.workoutList);
  const { loading, error, workouts } = workoutList;

  const workoutCreate = useSelector((state) => state.workoutCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    workout: createdWorkout,
  } = workoutCreate;

  const workoutDelete = useSelector((state) => state.workoutDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = workoutDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: WORKOUT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/workout/${createdWorkout._id}/edit`);
    } else {
      dispatch(listWorkout());
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdWorkout,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ")) {
      // DELETE WORKOUT
      console.log(dispatch(deleteWorkout(id)));
    }
  };

  const createWorkoutHandler = () => {
    //create product
    dispatch(createWorkout());
  };
  console.log(workouts);

  return (
    <>
      <div className="row align-items-center ">
        <div className="col">
          <h1>Workouts</h1>
        </div>
        <div className="col">
          <button className="btn my-3" onClick={createWorkoutHandler}>
            <i className="fas fa-plus"></i>create workout
          </button>
        </div>
      </div>
      {errorDelete && <h3>{errorDelete}</h3>}
      {loadingDelete && <h3>loadingDelete</h3>}
      {errorCreate && <h3>{errorCreate}</h3>}
      {loadingCreate && <h3>loadingCreate</h3>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>TRAINER</th>
          </tr>
        </thead>
        <tbody>
          {workouts &&
            workouts.map((workout) => (
              <tr key={workout._id}>
                <td>{workout._id}</td>
                <td>{workout.name}</td>
                <td>{workout.category}</td>
                <td>{workout.seller} </td>
                <td>
                  <Link to={`/admin/workout/${workout._id}/edit`}>
                    <button className="btn bg-light">
                      <i className="fas fa-edit"></i>
                    </button>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => deleteHandler(workout._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default WorkoutListScreen;
