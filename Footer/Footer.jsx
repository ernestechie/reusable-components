import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import FluidWrapper from '../Layout/FluidWrapper';

const Footer = () => {
  return (
    <Box>
      <FluidWrapper>
        <Grid
          container
          mx='auto'
          rowSpacing={4}
          columnSpacing={{ sm: 2, md: 2, lg: 4 }}
          columns={12}
        >
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
            <Link href='/'>Website Logo</Link>
            <Typography
              py={2}
              mb={4}
              sx={{
                fontFamily: 'inherit',
                color: 'var(--primary)',
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </Grid>
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
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
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width='100%'>
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
              Contact Us
            </Typography>
            <Box
              sx={{
                '& p': {
                  marginBottom: '0.75rem',
                  fontFamily: 'inherit',
                  fontWeight: 300,
                },
              }}
            >
              <Typography>@twitterhandle</Typography>
              <Typography>support@website.com</Typography>
              <Typography>(+234) 0801 234 5678</Typography>
              <Typography>The Hive, Yenagoa, Delta, Bayelsa.</Typography>
            </Box>
          </Grid>
        </Grid>
      </FluidWrapper>
    </Box>
  );
};

export default Footer;
