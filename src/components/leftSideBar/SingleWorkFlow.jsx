import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: "5px",
  margin: 'auto',
  width: '100%',
  height:"2.6rem",
  color: theme.palette.common.white,
  flexGrow: 1,
  backgroundColor: theme.palette.common.white,
  borderRadius: '5px',
  cursor:"pointer",
  '&:hover': {
    backgroundColor: 'black',
  },
}));
const Text = styled(Typography)(({ variant }) => ({
    fontWeight: variant === "title" ? "700" :"500",
    fontSize: variant === "title" ? "1rem" :"0.7rem",
    padding:"0",
    margin:"0",
    color:'gray',
  }));

function SingleWorkflow({data}) {
  return (
    <CustomPaper>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: '2.6rem', height: '2.6rem' }}>
            <Img alt="complex" src={data.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container direction="column">
           
              <Text gutterBottom variant="title" >
                {data.title}
              </Text>
              <Text variant="body" >
                {data.description}
              </Text>
        
        </Grid>
      </Grid>
    </CustomPaper>
  );
}

export default SingleWorkflow;
