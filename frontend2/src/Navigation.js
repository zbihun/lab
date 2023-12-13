import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
  return (
    <div style={{ position: 'sticky', width: '100%', zIndex: '1000' }}>
      <List className='navigation' style={{ 
      backgroundColor: "#e0d8e2",
        color: "#fff",
        display: "flex",
        justifyContent: 'center',
        position: 'sticky',
     }}>
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
    </div>
  );
};

export default Navigation;
