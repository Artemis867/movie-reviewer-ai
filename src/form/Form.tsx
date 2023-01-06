import React from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

async function sendMovieRequest(event: any) {
  event.preventDefault();
  try {
    console.log('event sent');
  } catch(err) {
    console.log(err);
  }
}


function Form() {
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <form onSubmit={sendMovieRequest}>
          <TextField fullWidth label="type a movie title" name="movieTitle" />
          <Button 
            sx={{
              marginTop: "5px",
              color: "#000000",
            }}
            type="submit"
            variant="outlined"
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  )
}

export default Form;