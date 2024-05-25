import http from "http";
import { DatabaseHandler } from './database.ts';
import * as dotenv from 'dotenv';
import { Workout } from "./schemas/workout.ts";

dotenv.config();
const PORT = 3001;
const database : DatabaseHandler = new DatabaseHandler();

const workoutTemplate : Workout = {
  date: new Date(),
  rating: 10,
  exerciseList: ["Clean & Jerk" , "F.Squats"],
};

const server = http.createServer((req, res) => {
  database.connect();
  database.saveWorkout(workoutTemplate);
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
