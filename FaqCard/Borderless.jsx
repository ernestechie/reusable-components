import React, { useState } from 'react';
import { Layout } from '../../';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '../../../static/Data';

export default function FAQs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <Typography
        component='h2'
        mb={4}
        color='#060606'
        sx={{
          fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
          },
          fontWeight: 600,
          fontFamily: 'inherit',
          textAlign: 'center',
        }}
      >
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index + faq.question}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{
            padding: 0,
            boxShadow: 'none',
            borderBottom: '1px solid rgb(0, 0, 0, 0.2)',
            '&:first-of-type': {
              borderRadius: 0,
            },
            '&:last-of-type': {
              borderRadius: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{ fontSize: '2rem', color: 'primary.main' }}
              />
            }
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{ px: 0, py: 1 }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: '1.1rem',
                  sm: '1.2rem',
                  md: '1.3rem',
                },
                fontFamily: 'inherit',
                color: '#060606',
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: 'inherit',
                color: '#1b1b1b',
                fontSize: { md: '1.1rem' },
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Layout>
  );
}
