import { FormControl } from "@mui/material";
import ExrciseForm from "../Components/exreciseForm";

const NewWorkout = () => {
    const FormStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

	return (
        <FormControl style={FormStyle}>

            <ExrciseForm/>
        </FormControl>
	);
};

export default NewWorkout;