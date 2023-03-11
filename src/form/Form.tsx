import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import { API_URL } from "../config";
import { useState, useCallback, useEffect } from "react";
import Result from '../result/Result';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { subheaderStyle } from './style';

const Form = () => {

  const [reviewData, setReviewData] = useState('');
  const [movieData, setMovieData] = useState('');
  const [onGenerating, setOnGenerating] = useState(false);

  const handleRequest = useCallback(async () => {
    try {
      setReviewData('');
      setOnGenerating(true);
      const commandReq = {
        movie: movieData
      }
      const response = await axios.post(API_URL + '/command/review', commandReq);
      console.log('API RESPONSE');
      console.log(response.data);

      setReviewData(response.data?.review);
      setOnGenerating(false);
    } catch (err) {
      console.log(err);
    }
  }, [movieData, setReviewData, setOnGenerating]);

  const handleChange = useCallback((e: any) => {
    setMovieData(e.target.value);
  }, [setMovieData]);

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
            <Typography component={"h4"} variant="h4">
              Myubi
            </Typography>
            <Typography variant="body2" component={"h4"} sx={subheaderStyle} gutterBottom>
              Myubi is a movie reviewer chatbot that will help you to create or give insights of a specific movie with a precise review to provide a useful and substantial ideas.
            </Typography>

            <TextField
              fullWidth
              disabled={onGenerating}
              label="Movie Title" name="movieTitle"
              onChange={handleChange} />
            <Button
              sx={{
                marginTop: "5px",
                color: "#000000",
              }}
              type="submit"
              variant="outlined"
              disabled={onGenerating}
              onClick={handleRequest}
            >
              {onGenerating && 'Sending...'}
              {!onGenerating && 'Send'}
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