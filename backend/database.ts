import mongoose from "mongoose";
import { Workout, WorkoutModel } from "./schemas/workout.ts";

class DatabaseHandler {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(<string>process.env.DBConnectionURL);
    } catch (error) {
      console.error(error);
    }
  }

  public async saveWorkout(workout: Workout) {
    console.log(JSON.stringify(workout));
    new WorkoutModel(workout).save();
  }
}

export { DatabaseHandler };
