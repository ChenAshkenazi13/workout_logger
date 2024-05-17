import mongoose from "mongoose";
import { WorkoutModel } from "./schemas/workout.ts";

async function connectToMongo(): Promise<void> {
  const DBConnectionString : string = "mongodb+srv://Chen:Chen123456@cluster0.5xtgtce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const workout = new WorkoutModel({
    date: new Date(),
    rating: 9,
    exerciseList: ["Bench press", "Squats", "Biceps curls"],
  });
  console.log("Here");

  try {
    console.log("HERE");
    await mongoose.connect(DBConnectionString);
    console.log(`${JSON.stringify(workout)}`);
    console.log(`Connected to MongoDB successfully`);

    await workout.save();
    console.log(`saved model`);
  } catch (error) {
    console.error(error);
  }
}

import { Document } from 'mongoose';

interface Exercise {
    name: string;
    repetitions: number;
}

interface Workout {
    date: Date;
    rating: number;
    exerciseList: Exercise[];
}

const createWorkout = (workoutData: Workout): Document => {
    const newWorkout = new WorkoutModel(workoutData);
    return newWorkout;
};

// Example usage:
const exampleWorkout = {
    date: new Date(),
    rating: 5,
    exerciseList: [
        { name: 'Push Up', repetitions: 20 },
        { name: 'Squat', repetitions: 15 }
    ]
};

const workout = createWorkout(exampleWorkout);
console.log(workout);

export { connectToMongo };
