import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SingleRightflow from './SingleRightFlow';
import { accordionData } from '../../../data/Workflow';
import { styled } from '@mui/system';


const AccordianList =styled(AccordionDetails)({
  backgroundColor: 'black', 
  margin: '0', 
  padding: '0',
  height:'10rem',
  width:'100%',
  overflowY:'scroll',
  scrollbarWidth: 'none', /* Firefox */
  msOverflowStyle: 'none', /* Internet Explorer 10+ */
  '&::-webkit-scrollbar': {
    display: 'none', /* Safari and Chrome */
  } 
}) 

const RightSideBar = ({setBoardItems, boardItems}) => {
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : '');
  };

  const handleFlowClick = (param) =>{
    setBoardItems([...boardItems, param])
  }

  return (
    <Box sx={{ width: '30%' }}>
      {/* List of Accordions */}
      <Accordion
        expanded={expandedAccordion === 'panel1'}
        onChange={handleChangeAccordion('panel1')}
        style={{ padding: 0, backgroundColor: 'black' }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            padding: '0 0.2rem',
            margin: '0.1rem 0',
            alignItems: 'center',
            borderRadius: '5px',
            flexDirection: 'row',
            backgroundColor: '#181a1d',
            justifyContent: 'flex-start',
          }}
        >
          <MenuIcon style={{ color: 'gray', marginRight: '0.5rem' }} />
          <SearchIcon style={{ color: 'gray', marginRight: '0.5rem' }} />
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

      {accordionData.map((data, i) => {
        return (
          <Accordion
            key={i}
            expanded={expandedAccordion === `panel${data.id}`}
            onChange={handleChangeAccordion(`panel${data.id}`)}
            style={{ padding: 0, backgroundColor: 'black' }}
          >
            <AccordionSummary
              aria-controls={`panel${data.id}d-content`}
              id={`panel${data.id}d-header`}
              sx={{
                padding: '0 0.2rem',
                alignItems: 'center',
                margin: '0.1rem 0',
                flexDirection: 'row',
                borderRadius: '5px',
                backgroundColor: '#181a1d',
                justifyContent: 'flex-start',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>
                <ExpandMore style={{ color: 'gray', transform: expandedAccordion === `panel${data.id}` ? 'rotate(0deg)' : 'rotate(270deg)' }} />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: '600', color: expandedAccordion === `panel${data.id}` ? 'white' : 'gray'}}>
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordianList >
              {data.details.map((details) => {
 
                return (
                <div key={details.id} onClick={ ()=> handleFlowClick(details)}>

                  <SingleRightflow    data={details} />
                </div>
                
                );
              })}
            </AccordianList>
          </Accordion>
        );
      })}

      {/* Add more accordions here */}
    </Box>
  );
};

export default RightSideBar;
