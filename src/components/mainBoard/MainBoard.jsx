import React, { useRef, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Box, AppBar, Toolbar, Container, Grid } from '@mui/material';
import Draggable from 'react-draggable';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Terminal from './Terminal';
import RightSideBar from './rightSideBar/RightSideBar';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const  Icon = styled(ContentPasteSearchOutlinedIcon)({

    width: '45%',
    height: '45%',
    color:'#969696',
    
    borderRadius: '5px',
  });
  const LineArrow = styled(ExpandLessOutlinedIcon)({

    width: '1rem',
    height: '1rem',
    border:'0.5px solid #969696',
    color:'#969696',
    transform:'rotate(90deg)',
    cursor:'pointer',
    borderRadius: '5px',
  });

const MainBoard = () => {
  const componentRef = useRef(null)
  const [boardItems, setBoardItems] = useState([ ]);
  const [point, setPoint] = useState({start:null, end:null})
  const [connection, setConnection] = useState([])

  const updateXarrow = useXarrow();

   
  const setEndPoints = (e, id) => {
    e.stopPropagation();
  
    if (point.start && point.start !== id) {
      setPoint({ ...point, end: id });
  
      const componentNode = componentRef.current;
      componentNode.style.borderColor = '#c108e6';
  
      // Check if the connection already exists
      const exists = connection.some((conn) => conn.start === point.start && conn.end === id);
      if (exists) {
        return;
      }
  
      setConnection([...connection, { start: point.start, end: id }]);
    } else {
      setPoint({ ...point, start: id });
  
      const componentNode = componentRef.current;
      componentNode.style.borderColor = '#c108e6';
    }
  };
    console.log(connection)

  const handleDrop = (event) => {
    event.stopPropagation(); 
    const item = JSON.parse(event.dataTransfer.getData('text/plain'));
    const newPosition = {
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    };
    setBoardItems([...boardItems, { ...item, position: newPosition }]);
  };
  

   const stopConnection = e =>{
    document.onmousemove =null,
    document.onmousedown = null
   }

    const removeConnection = (e, item) => {
      e.stopPropagation();
    
      const newConnections = connection.filter((conn) => conn !== item);
      setConnection(newConnections);
    
      document.getElementById(item.start).style.backgroundColor = "#242527";
      document.getElementById(item.end).style.backgroundColor = "#242527";
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
            <Xwrapper>

          {/* Render board items */}
                    {boardItems.map((item, i) => (
                        <Draggable key={i}  bounds="parent" defaultPosition={item.position}  onDrag={updateXarrow} onStop={updateXarrow} >
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
                            ref={componentRef}
                            id={item.id}
                            onClick={e => setEndPoints(e, item.id)}
                        >
                            <Icon  /> 
                            <Typography variant='body2'>
                            {item.subtitle}
                                </Typography> 
                        </div>
                        </Draggable>
                    ))}
                  
                   {connection.length && connection.map((item) => {
                        return(
                            <Xarrow start={item.start} end={item.end} label={<p  style={{cursor:"pointer"}}
                             onClick={()=> removeConnection(item)} >x</p>}  color='gray' 
                             labels={<LineArrow  onClick={(e)=> removeConnection(e,item)}/> } 
                             showHead={false} strokeWidth={1}/>
                        )
                    }) }
                   
            </Xwrapper>

          {/* Render flow lines */}
         
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
