import express from "express";
import {
  getWorkouts,
  getWorkoutById,
} from "../controller/workoutController.js";

const router = express.Router();

router.route("/").get(getWorkouts);

router.route("/:id").get(getWorkoutById);

export default router;
