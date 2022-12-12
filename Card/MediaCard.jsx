import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { KingBedSharp, BathtubSharp, WeekendSharp } from '@mui/icons-material';

const MediaCard = (props) => {
  const theme = useTheme();

  return (
    <Card
      mx='auto'
      width='100%'
      sx={{
        minHeight: '50vh',
        height: '350px',
        display: 'grid',
        position: 'relative',
        borderRadius: '1rem',
        boxShadow: '1px 1px 32px rgb(0, 0, 0, 0.1)',
        '& *': {
          fontFamily: 'inherit',
        },
      }}
    >
      <Box
        p={2}
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          borderRadius: '2rem',
        }}
        color='#fff'
        bgcolor='var(--primary)'
      >
        <Typography sx={{ fontWeight: 500 }}>N100,000</Typography>
      </Box>
      <CardMedia
        component='img'
        sx={{ height: '200px', borderRadius: '0.5rem 0.5rem 0 0' }}
        image={props.image}
        alt=''
      />
      <Box width='100%' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent width='100%' px={0} py={2}>
          <Typography
            component='div'
            variant='h6'
            sx={{ fontFamily: 'inherit' }}
          >
            Lorem, ipsum.
          </Typography>
          <Typography
            color='text.secondary'
            component='div'
            sx={{ fontSize: '14px', fontFamily: 'inherit' }}
          >
            Lorem, ipsum.
          </Typography>
        </CardContent>
        <Box
          px={2}
          width='100%'
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            alignItems: 'center',
            pb: 2,
            gap: 1,
            color: '#777',
          }}
        >
          <Stack direction='row' gap={1} mr={1}>
            <KingBedSharp sx={{ height: 20, width: 20 }} />
            <Typography sx={{ fontSize: '14px' }}>Lorem, ipsum.</Typography>
          </Stack>
          <Stack direction='row' gap={1} mr={1}>
            <BathtubSharp sx={{ height: 20, width: 20 }} />
            <Typography sx={{ fontSize: '14px' }}>Lorem, ipsum.</Typography>
          </Stack>
          {props.furnished && (
            <Stack direction='row' gap={1} mr={1}>
              <WeekendSharp sx={{ height: 20, width: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>Lorem, ipsum.</Typography>
            </Stack>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
