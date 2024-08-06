
import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Badge, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => (
  <Drawer anchor="left" open={open} onClose={onClose}>
    <List>
      <Tooltip title="Home" placement="right">
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Tooltip>
      <Tooltip title="About" placement="right">
        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Contact" placement="right">
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </Tooltip>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={4} color="primary">
            <CategoryIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Category 1" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={2} color="secondary">
            <CategoryIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Category 2" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
