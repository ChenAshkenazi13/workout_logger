import {Schema, model} from 'mongoose';

const workoutSchema = new Schema(
    {
        date : Date,
        rating : Number,
        exerciseList : [], 
    }
);

const WorkoutModel = model('Workout', workoutSchema);
export { WorkoutModel };