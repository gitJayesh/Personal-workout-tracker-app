import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  workoutListReducer,
  workoutDetailsReducer,
} from "./reducers/workoutReducers";
import {
  userLoginReducer,
  userListReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  workoutList: workoutListReducer,
  workoutDetails: workoutDetailsReducer,
  userLogin: userLoginReducer,
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
