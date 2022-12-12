import React from 'react';
import { Grid, Typography } from '@mui/material';

const FluidGrid = () => {
  return (
    <Grid
      container
      mx='auto'
      rowSpacing={4}
      columnSpacing={{ sm: 2, md: 2, lg: 4 }}
      columns={12}
    >
      <Grid key={index} item xs={12} sm={6} md={4} width='100%'>
        <Typography
          mb={2}
          sx={{
            fontFamily: 'inherit',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: {
              xs: '1.4rem',
              sm: '1.4rem',
              md: '1.5rem',
              lg: '1.75rem',
            },
          }}
        >
          Quick Links
        </Typography>
        <Stack
          direction='column'
          sx={{
            '& a': {
              marginBottom: '0.75rem',
              fontFamily: 'Poppins',
              fontWeight: 300,
            },
          }}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About us</Link>
          <Link href='/faq'>FAQs</Link>
          <Link href='/contact'>Contact</Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FluidGrid;
