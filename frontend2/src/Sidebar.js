import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import "./styles.css";

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List className="sidebar">
        <ListItem button component={Link} to="/home" activeclassname="active-link">
          <ListItemText style={{textAlign: "center"}} primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/catalog" activeclassname="active-link">
          <ListItemText style={{textAlign: "center"}} primary="Catalog" />
        </ListItem>
        <ListItem button component={Link} to="/cart" activeclassname="active-link">
          <ListItemText style={{textAlign: "center"}} primary="Cart" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
