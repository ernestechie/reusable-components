import { CloseRounded, MenuRounded } from '@mui/icons-material';
import { Button, Stack, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowForwardRounded } from '@mui/icons-material';

const links = [
  { name: 'Home', url: '' },
  { name: 'About Us', url: 'about' },
  { name: 'Services', url: 'services' },
  { name: 'Contact', url: 'contact' },
];

const StyledNavOverlay = styled('div')(({ theme }) => ({
  padding: '1rem',
  width: '100%',
  height: '100vh',
  zIndex: 15,
  background: 'rgba(0,0,0,0.5)',
  position: 'fixed',
  backdropFilter: 'blur(5px)',
  [theme.breakpoints.up('md')]: {
    transform: 'scale(0)',
  },
  transition: '0.4s ease-out',
}));

const StyledNav = styled('div')(() => ({
  padding: '2rem',
  width: '90%',
  height: '65%',
  zIndex: 20,
  background: '#fff',
  position: 'absolute',
  top: '5%',
  left: '5%',
  borderRadius: '0.5rem',
  boxShadow: '1px 1px 64px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: '0.8s ease-in',
}));

const StyledFooter = styled('div')(() => ({
  background: '#060606',
  width: '100%',
  height: '20%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  right: 0,
  padding: '1rem',
  color: '#fff',
}));

const Navbar = () => {
  const page = useRouter().pathname;
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <>
      <StyledNavOverlay
        sx={{
          transform: `${
            showNav ? 'translateY(0) scale(1)' : 'translateY(-150%) scale(1)'
          }`,
        }}
      >
        <StyledNav>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <span>
              <img src='' alt='Logo' style={{ width: '10rem' }} />
            </span>
            <span>
              <CloseRounded
                onClick={toggleNav}
                sx={{
                  cursor: 'pointer',
                  fontSize: '2rem',
                }}
              />
            </span>
          </Stack>
          <Stack
            direction='column'
            spacing={4}
            mt={6}
            pl={2}
            component='ul'
            sx={{
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
            }}
          >
            {links.map((link, index) => (
              <li
                key={`${index}_${link.name}`}
                onClick={() => {
                  toggleNav();
                }}
              >
                <Link href={`/${link.url}`} className='sansation'>
                  <span
                    style={{
                      color: '#1b1b1b',
                      fontSize: '1.5rem',
                    }}
                  ></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </Stack>
          <StyledFooter>
            <Stack
              direction='row'
              spacing={2}
              my={2}
              alignItems='center'
              justifyContent='center'
            >
              <Button
                variant='contained'
                href='/register'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '0.75rem 2rem',
                  color: '#fff',
                  background: 'primary.main',
                  textTransform: 'capitalize',
                  '&:hover': {
                    background: '#5224B5',
                  },
                  fontWeight: 500,
                  fontFamily: 'inherit',
                }}
              >
                Register
              </Button>
              <Button
                variant='outlined'
                href='/login'
                disableElevation
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: '2rem',
                  padding: '0.75rem 2rem',
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                }}
              >
                Login
              </Button>
            </Stack>
          </StyledFooter>
        </StyledNav>
      </StyledNavOverlay>
      <Stack
        direction='row'
        spacing={2}
        component='nav'
        sx={{
          position: 'fixed',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: '0',
          left: '0',
          width: '100%',
          padding: {
            xs: '1.5rem',
            md: '1.5rem 2rem',
            lg: '1.5rem 4rem',
            xl: '1.5rem 6rem',
          },
          background: '#fff',
          transition: '.5s ease-in-out',
          zIndex: '10',
          borderBottom: '1px solid rgba(90, 114, 239, 0.2)',
        }}
      >
        <Link href='/'>
          <img src='' alt='Logo' className='' />
        </Link>
        <Stack
          direction='row'
          spacing={2}
          component='ul'
          sx={{
            width: { md: '50%', lg: '40%', xl: '30%' },
            alignItems: 'center',
            justifyContent: 'space-between',
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          {links.map((link, index) => (
            <li key={`${index}_${link.name}`}>
              <Link href={`/${link.url}`} className='sansation'>
                <span
                  style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                ></span>
                {link.name}
              </Link>
            </li>
          ))}
        </Stack>
        <Button
          variant='contained'
          href='/register'
          disableElevation
          sx={{
            borderRadius: '2rem',
            padding: '0.8rem 2rem',
            color: '#fff',
            background: 'primary.main',
            textTransform: 'capitalize',
            fontSize: '1rem',
            '&:hover': {
              background: '#5224B5',
            },
            display: { xs: 'none', md: 'block' },
            fontWeight: 500,
            fontFamily: 'inherit',
          }}
        >
          Get Started
        </Button>
        <MenuRounded
          sx={{
            cursor: 'pointer',
            color: 'primary.dark',
            fontSize: '2rem',
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}
          onClick={toggleNav}
        />
      </Stack>
    </>
  );
};

export default Navbar;
