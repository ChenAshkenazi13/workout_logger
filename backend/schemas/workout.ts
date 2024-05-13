import {Schema, model} from 'mongoose';

const workoutSchema = new Schema(
    {
        data : Date,
        rating : Number,
        exerciseList : [], 
    }
);

const exportedModule = model('Workout', workoutSchema);
export { exportedModule };