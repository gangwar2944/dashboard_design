import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface BasicRatingProps{
  value:number
}
export default function BasicRating({value}:BasicRatingProps) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
      />
    </Box>
  );
}
