import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

import AccordionContent from './AccordionContent';

import { therapyAreasData } from '../shared/data';

const TherapyAreasSection = forwardRef((props, ref) => {
  const initialStates = therapyAreasData.reduce((acc, area) => {
    acc[area.id] = true;
    return acc;
  }, {});
  
  const [accordionStates, setAccordionStates] = useState(initialStates);
  const accordionRefs = useRef({});

  therapyAreasData.forEach(area => {
    if (!accordionRefs.current[area.id]) {
      accordionRefs.current[area.id] = React.createRef();
    }
  });


  useImperativeHandle(ref, () => ({
    scrollToAccordion: (accordionKey) => {
      if (!accordionStates[accordionKey]) {
        setAccordionStates(prev => ({
          ...prev,
          [accordionKey]: true
        }));
      }
      
      setTimeout(() => {
        accordionRefs.current[accordionKey]?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }));

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setAccordionStates(prev => ({
      ...prev,
      [panel]: isExpanded
    }));
  };

  return (
    <Container id="therapy-areas" maxWidth="lg" sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#ff6b35' }}>
        Therapy Areas
      </Typography>

      {therapyAreasData.map((area) => (
        <Accordion 
          key={area.id}
          ref={accordionRefs.current[area.id]}
          expanded={accordionStates[area.id]}
          onChange={handleAccordionChange(area.id)}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ 
              bgcolor: '#FAF6F4',
              '& .MuiAccordionSummary-expandIconWrapper': { color: '#ff6b35' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                bgcolor: '#ff6b35', 
                color: '#ff6b35', 
                borderRadius: '50%', 
                width: 30, 
                height: 30,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                <img
                  src={area.image}
                  alt="Arrow right"
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#ff6b35' }}>{area.title}</Typography>
            </Box>
          </AccordionSummary>
          
          <AccordionContent 
            title={area.mainTitle}
            description={area.mainDescription}
            sections={area.sections}
          />
        </Accordion>
      ))}
    </Container>
  );
});

export default TherapyAreasSection; 