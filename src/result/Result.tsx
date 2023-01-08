import React from "react";
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';

const Result = ({review}: any) => {

  const reviewStyle: any = {
    textAlign: 'justify',
    wordSpacing: '2px',
    wordBreak: 'keep-all',
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
            <p style={reviewStyle}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(review)
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
                options={{
                  delay: 20,
                }}
              />
            </p>
          ) : null
        }
      </Box>
    </>
  )
}

export default Result;