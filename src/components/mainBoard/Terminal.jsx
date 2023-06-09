import React, { useState } from 'react';
import { Box, Grid, TextField, Typography,  } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleRunCommand();
    }
  };

  const handleRunCommand = () => {
    // Simulate running the command
    setOutput("logging Started...");
    setCommand('');
  };

  return (
    <Box sx={{ padding: '0.3rem  0.5rem ', backgroundColor: '#181a1d', color: '#ffffff', borderRadius:'0.5rem' }}>
        <Grid container direction="row" wrap="nowrap" justifyContent="space-between" alignItems="center"  sx={{width:"100%",  borderBottom:"0.6px solid #464c55",padding:"0.4rem", fontSize:"0.7rem"}}>
               <Grid  container direction="row"  justifyContent="space-between" alignItems="center" sx={{width:"33%"}} >
                    <PlayArrowIcon  style={{ color: '#ffffff' , fontSize:"20"}} />
                    <UnfoldMoreIcon  style={{ color: '#ffffff' , fontSize:"20"}} />
                    <Typography variant='body2' sx={{ color: 'gray', fontWeight:"700"  }}>
                        Debugging running 
                    </Typography>
                    <Typography variant='body2'   sx={{ color: 'gray' }}>
                        -article progress 
                    </Typography>
               </Grid>
               <Grid  container direction="row" wrap="nowrap" justifyContent="space-between" alignItems="center"  sx={{width:"40%"}}   >
                    <Grid  container direction="row" justifyContent="space-between" alignItems="center" >
                            <Typography variant='body2' sx={{ color: 'gray'  }}>
                            All information 
                            </Typography>
                            <UnfoldMoreIcon  style={{ color: '#ffffff' , fontSize:"20"}} />
                    </Grid>
                    <Grid  container direction="row" justifyContent="space-between" alignItems="center" >
                            <Typography variant='body2' sx={{ color: 'gray'  }}>
                            This workflow 
                            </Typography>
                            <UnfoldMoreIcon  style={{ color: '#ffffff' , fontSize:"20"}} />
                    </Grid>
                    <Grid  container direction="row" justifyContent="space-between" alignItems="center" >
                            <Typography variant='body2' sx={{ color: 'gray'  }}>
                            Selected object(s) 
                            </Typography>
                            <UnfoldMoreIcon  style={{ color: '#ffffff' , fontSize:"20"}} />
                    </Grid>
                

               </Grid>
        </Grid>
    
   
        <Box sx={{ margin: '0.6rem', }}>
          <Typography variant='body2' sx={{ color: 'gray' }}> [14:29:57.900] Logging Started...</Typography>
        </Box>
    
    </Box>
  );
};

export default Terminal;
