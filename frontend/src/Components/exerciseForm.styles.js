import styled from 'styled-components';
import { TextField, Box, IconButton } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 16px !important;

  & .MuiInputBase-root {
    background-color: #fff;
    color: #333;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #ccc;
  }

  & .MuiInputLabel-root {
    color: #666;
  }
`;

