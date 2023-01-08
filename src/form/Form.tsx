import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import { API_URL } from "../config";
import { useState, useCallback, useEffect } from "react";
import Result from '../result/Result';
import Grid from '@mui/material/Grid';

const Form = () => {

  const [reviewData, setReviewData] = useState('');
  const [movieData, setMovieData] = useState('');

  const handleRequest = useCallback(async () => {
    try {
      console.log('event sent');
      const commandReq = {
        movie: movieData
      }
      const response = await axios.post(API_URL+'/command/test/review', commandReq);
      console.log('API RESPONSE');
      console.log(response.data?.review);
      setReviewData(response.data?.review);
    } catch (err) {
      console.log(err);
    }
  },[movieData, setReviewData]);

  const handleChange = useCallback((e: any) => {
    setMovieData(e.target.value);
  },[setMovieData]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: 500,
              paddingTop: "100px",
              maxWidth: "100%",
            }}
          >
            <h1>Movie Review Chatbot</h1>
            <TextField 
              fullWidth 
              label="type a movie title" name="movieTitle" 
              onChange={handleChange}/>
            <Button
              sx={{
                marginTop: "5px",
                color: "#000000",
              }}
              type="submit"
              variant="outlined"
              onClick={handleRequest}
            >
              Send
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Result review={reviewData}></Result>
        </Grid>
      </Grid>
    </Box>
  )
}


export default Form;