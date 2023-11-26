import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import logo from './logo.png'; // Import your logo


const Footer = () => {
  return (
    <div style={{position: "fixed", left: "0", "bottom": "0", right: "0"}}>
    <AppBar position="static" style={{backgroundColor: "#7071E8", color: "#fff"}}>
      <Toolbar>
        <Typography variant="body2" color="inherit" style={{ marginLeft: '20px' }}>
            Lviv, Lukasha 4
        </Typography>
        <Typography variant="h6" component="div" style={{marginLeft: "37%"}}>
            <img src={logo} alt="Logo" style={{ width: "70px", right: "0" }} />
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ color: '#fff', marginLeft: '10px' }} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: '#fff', marginLeft: '10px' }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ color: '#fff', marginLeft: '10px' }} />
          </a>
        </div>
      </Toolbar>
      <Divider style={{ background: 'white' }} />
      <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2">
            2023 IoT © Copyright all rights reserved
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Footer;
