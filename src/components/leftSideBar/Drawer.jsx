import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Drawer, TextField, List, ListItem, ListItemIcon, ListItemText, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SingleWorkflow from './SingleWorkFlow';
import { recommendations, workflow } from '../../data/Workflow';




const DrawerContainer = styled('div')({
  width: '16rem',
  padding: '8px',
  backgroundColor: 'trasparent',
  height:"100vh",
  boxSizing:"border-box",
  display:"flex",
  flexDirection:'column',
  justifyContent:'space-between'
});
const UpperDrawer = styled('div')({
    backgroundColor:" #181a1d",
    borderRadius:"0.5rem",
    margin: "0.1rem",
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    padding:"0 0.5rem ",
  });
  const BottomDrawer = styled('div')({
    backgroundColor:" #181a1d",
    borderRadius:"0.5rem",
    margin: "0.2rem",
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    padding:"0.5rem",
    
  });

const SearchBarContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  border: '1px solid #181a1d',
  borderRadius: '1rem',
  height: '1.7rem',
  width:"90%",
  padding: '0.5rem',
  backgroundColor:"black"
});


const IconCon = styled('div')({
    backgroundColor :"#181a1d",
    color: "white",
    borderRadius: "5px",
    display:"flex",
    alignItems:"center"
})

const SearchBar = styled(TextField)(({ theme }) => ({
    flex: 1,
    margin:"0",
    '& .MuiOutlinedInput-root': {
        height:'1.7rem',
        '&:hover': {
        borderColor: 'transparent',
      },
      '&.Mui-focused': {
        borderColor: 'transparent',
        boxShadow: 'none',
        outline: 'none',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  }));
  
const TransparentDrawer = styled("div")`
  .MuiPaper-root {
    background-color: transparent; 
  }
`;
const FullWidthList = styled(List)(({ theme }) => ({
    width: '100%',
    maxWidth: 'none',
    height: '40vh',
    overflowY: 'scroll',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* Internet Explorer 10+ */
    '&::-webkit-scrollbar': {
      display: 'none', /* Safari and Chrome */
    }
  }));
  const RecommendationList = styled(List)(({ theme }) => ({
    width: '100%',
    maxWidth: 'none',
  }));

  const FullWidthListItem = styled(ListItem)(({ theme }) => ({
    width: '100%',
    padding: 0,
    margin:0,
}));
const Heading = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontWeight:"700",
    textAlign:'left',
    width:"100%"
  }));
  const Text = styled(Typography)(({ theme }) => ({
    backgroundColor:" #181a1d",
    color:"white",
    fontWeight:"200",
    textAlign:'center',
    padding:"0.7rem 1rem ",
    fontSize:"0.7rem",
    borderRadius:"0.3rem",
    marginRight:"0.2rem"
  }));
  const BottomDiv = styled('div')({
   
    display:'flex',
    alignItems:'center',
    justifyContent:"space-between",
    margin: "0 0.4rem",
  });


const DrawerComponent = ({ isOpen, handleDrawerClose }) => {
    const [searchValue, setSearchValue] = useState('');
    const filteredWorkflow = workflow.filter(
      (data) =>
        data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue.trim() === ''
    );
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
  return (
    <div>
      <TransparentDrawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            marginLeft: '45px', // Add desired margin here
          },
        }}
      >
        <DrawerContainer>
          <UpperDrawer>


          <SearchBarContainer>
              <SearchIcon  style={{color:"grey"}} />
            <SearchBar
              variant="outlined"
              fullWidth
              value={searchValue}
              onChange={handleSearchChange}
              InputProps={{
                style: {
                  outline: 'none',
                  color:"white"
                },
              }}
            />
            <IconCon >
            <MoreHorizRoundedIcon  />
            </IconCon>
          </SearchBarContainer>
          <Heading>Installed</Heading>

          <FullWidthList>
            {filteredWorkflow.map((data, i)=> {
                return(
                    <FullWidthListItem key={i} >
                    <SingleWorkflow  data={data}/>
                    </FullWidthListItem>
                )
            })}
            
          </FullWidthList>
          </UpperDrawer>
          <div>
          <BottomDrawer>
          <RecommendationList>
            <Heading>Recommendation</Heading>
            {recommendations.map((data, i)=> {
                return(
                    <FullWidthListItem key={i} >
                    <SingleWorkflow  data={data}/>
                    </FullWidthListItem>
                )
            })}
            
          </RecommendationList>
          </BottomDrawer>
             <BottomDiv>
                 <Text>Go to Community</Text> 
                 <div  style={{display:"flex"}}>
                 <Text>-</Text> 
                 <Text>+</Text> 
                 </div>
             </BottomDiv>
            </div>
        </DrawerContainer>
      </TransparentDrawer>
    </div>
  );
};

export default DrawerComponent;
