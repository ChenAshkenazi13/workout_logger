import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: theme.spacing(2),
}));

const StyledTextField = styled(TextField)({
  minWidth: '300px',
});

const WorkoutForm = () => {
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '' }]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '' }]);
  };

  const handleChange = (index, field) => (event) => {
    const newExercises = [...exercises];
    newExercises[index][field] = event.target.value;
    setExercises(newExercises);
  };

  return (
    <StyledContainer>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4" gutterBottom>
          Workout Plan
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddExercise}>
          Add Exercise
        </Button>
      </Stack>
      {exercises.map((exercise, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <StyledTextField
            label="Exercise Name"
            variant="outlined"
            value={exercise.name}
            onChange={handleChange(index, 'name')}
          />
          <StyledTextField
            label="Sets"
            type="number"
            variant="outlined"
            value={exercise.sets}
            onChange={handleChange(index, 'sets')}
          />
          <StyledTextField
            label="Reps"
            type="number"
            variant="outlined"
            value={exercise.reps}
            onChange={handleChange(index, 'reps')}
          />
        </Box>
      ))}
    </StyledContainer>
  );
};

export default WorkoutForm;
