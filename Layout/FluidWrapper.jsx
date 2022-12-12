import { Box } from '@mui/material';
import React from 'react';

const FluidWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: '4rem 1rem',
          sm: '4rem 2rem',
          lg: '5rem 4rem',
          xl: '6rem 5rem',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default FluidWrapper;
