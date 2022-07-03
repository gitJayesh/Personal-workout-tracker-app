import React from "react";
import Showcase from "../Layout/Showcase";
import WorkoutScreen from "./WorkoutScreen";

const Homescreen = () => {
  return (
    <div>
      <Showcase />
      <div className="container">
        <WorkoutScreen />
      </div>
    </div>
  );
};

export default Homescreen;
