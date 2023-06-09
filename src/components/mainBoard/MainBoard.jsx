import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Box, AppBar, Toolbar, Container, Grid } from '@mui/material';
import Draggable from 'react-draggable';
import { Arrow } from 'react-arrows';
import Terminal from './Terminal';
import RightSideBar from './rightSIdeBar/RightSIdeBar';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';


const  Icon = styled(ContentPasteSearchOutlinedIcon)({

    width: '45%',
    height: '45%',
    color:'#969696',
    
    borderRadius: '5px',
  });

const MainBoard = () => {
  const [boardItems, setBoardItems] = useState([ ]);


const [connections, setConnections] = useState([]);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDrop = (event) => {
    event.stopPropagation(); 
    const item = JSON.parse(event.dataTransfer.getData('text/plain'));
    const newPosition = {
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    };
    setBoardItems([...boardItems, { ...item, position: newPosition }]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleLineConnect = (startId, endId) => {
    // Connect the elements with a flow line
    // You can implement your own logic here to store the connections
    console.log(`Connect ${startId} to ${endId}`);
    const updatedConnections = [...connections, { startId, endId }];
     setConnections(updatedConnections);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '3rem' }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          OpenAI helper
        </Typography>
        <Grid container direction="row">
          <Grid container direction="row">
            <Typography variant="body2" sx={{ color: '#c108e6', backgroundColor: '#3f2b4299', marginRight: '0.3rem' }}>
              Configure workflow
            </Typography>
            <Typography variant="body2">Uses OpenAI to get do multiple things -- v1.0.4</Typography>
          </Grid>
        </Grid>
      </Box>
      <Container sx={{ flexGrow: 1, display: 'flex' }}>
        <Box
          sx={{ width: '100%', margin: '0.5rem', backgroundColor: '#181a1d', height: '90%' ,position:'relative'}}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          {/* Render board items */}
          {boardItems.map((item, i) => (
            <Draggable key={i}  bounds="parent" defaultPosition={item.position} >
              <div
                style={{
                  position: 'absolute',
                  width: '5.5rem',
                  height: '5.5rem',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:"column",
                  borderRadius:"1rem",
                  border:"1px solid gray",
                  backgroundColor: '#242527',
                  cursor: 'grab',
                  color:"#969696"
                }}
                
              >
                <Icon  /> 
                <Typography variant='body2'>
                {item.subtitle}
                    </Typography> 
              </div>
            </Draggable>
          ))}

          {/* Render flow lines */}
          {boardItems.map((startItem) =>
            boardItems.map((endItem) => {
              if (startItem.id !== endItem.id) {
                // return (
                //   <Arrow
                //     key={`${startItem.id}-${endItem.id}`}
                //     from={{ x: startItem.position.x + 50, y: startItem.position.y + 25 }}
                //     to={{ x: endItem.position.x, y: endItem.position.y + 25 }}
                //     onClick={() => handleLineConnect(startItem.id, endItem.id)}
                //     shaftWidth={4}
                //     headWidth={12}
                //     headLength={12}
                //     fill="white"
                //     stroke="white"
                //     strokeWidth={2}
                //     curveness={0.3}
                //   />
                // );
              }
              return null;
            })
          )}
        </Box>
        <RightSideBar setBoardItems={setBoardItems}  boardItems={boardItems} />
      </Container>

      <Box sx={{ backgroundColor: '#181a1d', color: '#ffffff', borderRadius: '0.5rem' }}>
        <Terminal />
      </Box>
    </Box>
  );
};

export default MainBoard;
