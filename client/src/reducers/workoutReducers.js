import {
  WORKOUT_LIST_FAIL,
  WORKOUT_LIST_REQUEST,
  WORKOUT_LIST_SUCCESS,
  WORKOUT_DETAIL_REQUEST,
  WORKOUT_DETAIL_SUCCESS,
  WORKOUT_DETAIL_FAIL,
} from "../constants/workoutConstants";

export const workoutListReducer = (state = { workouts: [] }, action) => {
  switch (action.type) {
    case WORKOUT_LIST_REQUEST:
      return { loading: true };
    case WORKOUT_LIST_SUCCESS:
      return { loading: false, workouts: action.payload };
    case WORKOUT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const workoutDetailsReducer = (
  state = { workout: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case WORKOUT_DETAIL_REQUEST:
      return { loading: true, ...state };
    case WORKOUT_DETAIL_SUCCESS:
      return { loading: false, workout: action.payload };
    case WORKOUT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
