import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import zooImage from "./image.jpg"

const Header = () => {
  return (

    <Card style={{ margin: "30px 0" }}>
      <Box display="flex" style={{ margin: "20px 0" }}>
        <CardMedia
          component="img"
          height="350"
          image={zooImage}
          alt="Your Image Alt Text"
          style={{ width: '600px', padding: '25px' }}
        />
        <CardContent>
          <Typography variant="h4" component="div" style={{ color: "#C683D7"}}>
            Visit Zoo
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Box>
  </Card>
  );
};

export default Header;
