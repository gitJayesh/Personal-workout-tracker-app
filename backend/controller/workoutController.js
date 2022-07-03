import asyncHandler from "express-async-handler";
import Workouts from "../Models/workoutModel.js";

// @desc    Fetch all workouts
// @route   GET /api/workouts
// @access  Public

const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workouts.find({});
  res.json(workouts);
});

// @desc    Fetch a single workout
// @route   GET /api/workouts/:id
// @access  Public

const getWorkoutById = asyncHandler(async (req, res) => {
  const workout = await Workouts.findById(req.params.id);

  if (workout) {
    res.json(workout);
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

export { getWorkouts, getWorkoutById };
