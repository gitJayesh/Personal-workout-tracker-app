import {
  WORKOUT_LIST_REQUEST,
  WORKOUT_LIST_SUCCESS,
  WORKOUT_LIST_FAIL,
  WORKOUT_DETAIL_REQUEST,
  WORKOUT_DETAIL_SUCCESS,
  WORKOUT_DETAIL_FAIL,
} from "../constants/workoutConstants";
import axios from "axios";

export const listWorkout = () => async (dispatch) => {
  try {
    dispatch({
      type: WORKOUT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/workouts");

    dispatch({
      type: WORKOUT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WORKOUT_LIST_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message,
    });
  }
};

export const listWorkoutDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: WORKOUT_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`/api/workouts/${id}`);

    dispatch({
      type: WORKOUT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WORKOUT_DETAIL_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message,
    });
  }
};
