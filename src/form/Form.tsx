import React from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
function Form() {
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="type a movie title" />
        <Button 
          sx={{
            marginTop: "5px",
            color: "#000000",
          }} 
          variant="outlined"
        >
          Send
        </Button>
      </Box>
    </>
  )
}

export default Form;