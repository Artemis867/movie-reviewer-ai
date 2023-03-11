import React from "react";
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
import { Typography } from "@mui/material";

const Result = ({ review }: any) => {

  const reviewStyle: any = {
    textAlign: 'justify',
    wordSpacing: '2px',
    wordBreak: 'keep-all',
    fontSize: '18px',
  }

  return (
    <>
      <Box
        sx={{
          paddingLeft: {
            md: "150px",
            xs: "0px",
          },
          paddingTop: {
            md: "0px",
            xs: "50px",
          },
        }}
        className="result-container"
      >
        {/* {review} */}
        {review !== '' ?
          (
            <Typography component={"span"} variant={'body2'} sx={reviewStyle}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(review)
                    // .callFunction(() => {
                    //   console.log('String typed out!');
                    // })
                    .pauseFor(2500)
                    // .callFunction(() => {
                    //   console.log('All strings were deleted');
                    // })
                    .start();
                }}
                options={{
                  delay: 18,
                }}
              />
            </Typography>
          ) : null
        }
      </Box>
    </>
  )
}

export default Result;