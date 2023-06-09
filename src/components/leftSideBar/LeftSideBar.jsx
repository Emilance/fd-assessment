import React , { useState } from 'react';
import { styled } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import NestCamWiredStandOutlinedIcon from '@mui/icons-material/NestCamWiredStandOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import DrawerComponent from './Drawer';

const SidebarContainer = styled('div')({
  width: 50,
  backgroundColor: '#181a1d',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:"space-between",
  padding:0,
  zIndex:"100",
});

const SidebarListItem = styled(ListItem)(({ variant }) => ({
  backgroundColor: variant === 'expandIcon' ? '#36393fa9' : 'transparent',
  marginBottom :(variant === 'expandIcon' || variant === "option") ? "1.5rem" : "0.6rem",
  justifyContent: 'center',
  borderRadius:variant ==="option"? '0': "50%",
  height: variant ==="option"? '1rem': '2rem',
  width:variant ==="option"? '100%': '2rem',
  padding:0,
}));

const Container = styled('div')({
  display:"flex"
})

const LeftSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleDrawerToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleDrawerClose = () => {
      setIsOpen(false);
    };
  return (
  <Container>
      <SidebarContainer>
      <List>
        <SidebarListItem variant="option" button>
          <MoreHorizRoundedIcon  style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <Divider />
        <SidebarListItem onClick={handleDrawerToggle} variant="expandIcon" button>
          <ExpandMoreRoundedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <LightbulbOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <SchemaOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <NestCamWiredStandOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <NestCamWiredStandOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <NestCamWiredStandOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
      </List>
      <List>
        <SidebarListItem  button>
          <AlbumOutlinedIcon  style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem  button>
          <AlbumOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem  button>
          <AlbumOutlinedIcon  style={{ color: '#ffffff' }} />
        </SidebarListItem>
        <SidebarListItem button>
          <AlbumOutlinedIcon fontSize="small" style={{ color: '#ffffff' }} />
        </SidebarListItem>
        
      </List>
    </SidebarContainer>
    <DrawerComponent  isOpen={isOpen} handleDrawerClose={handleDrawerClose}/>
  </Container>
  );
};

export default LeftSidebar;
