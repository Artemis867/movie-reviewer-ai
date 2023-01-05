import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Form from './form/Form';
import './App.css';

function App() {
  return (
    <Container 
      fixed
      sx={{
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{
          paddingTop: "100px",
        }}
      >
        <h1>Movie Review Chatbot</h1>
        <Form></Form>
      </Box>
    </Container>
  );
}

export default App;
