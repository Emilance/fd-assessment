import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';

const Icon = styled(ContentPasteSearchOutlinedIcon)({
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '100%',
  color:'gray',
  
  borderRadius: '5px',
});

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: "4px",
  margin: '0.2rem 0',
  width: '100%',
  height:"3.6rem",
  flexGrow: 1,
  backgroundColor:"transparent",
  borderRadius: '5px',
  boxSizing:'border-box',

  cursor:"pointer",
  '&:hover': {
    backgroundColor: '#181a1d',
  },
}));
const Text = styled(Typography)(({ variant }) => ({
    fontWeight: variant === "title" ? "600" :"400",
    fontSize: variant === "title" ? "0.8rem" :"0.6rem",
    color: variant === "title" ? "white" :"gray",

    padding:"0",
    margin:"0",
  }));

function SingleRightflow({data}) {
  return (
    <CustomPaper >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{backgroundColor: '#181a1d', width: '2.8rem', height: '2.8rem' }}>
            <Icon />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container direction="column">
           
              <Text gutterBottom variant="title" >
                {data.subtitle}
              </Text>
              <Text variant="body" >
                {data.desc}
              </Text>
        
        </Grid>
      </Grid>
    </CustomPaper>
  );
}

export default SingleRightflow;
