import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container, StyledTextField } from './exerciseForm.styles';

const WorkoutForm = () => {
  const [exercise, setExercise] = React.useState('');
  const [sets, setSets] = React.useState('');
  const [reps, setReps] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
      <Container>
        <h1 value={exercise}/>
      <Typography variant="h6" style={{ marginBottom: '16px', color: '#333' }}>
        Exercise Name
      </Typography>
      <StyledTextField
        label="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <Box style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <StyledTextField
          label="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          variant="outlined"
        />
        <StyledTextField
          label="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          variant="outlined"
        />
        <StyledTextField
          label="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          variant="outlined"
        />

      </Box>
      <StyledTextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
    </Container>
  );
};

export default WorkoutForm;
