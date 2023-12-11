import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import zooImage from "./itemImage.jpg"
import Loader from './Loader';
import api from './api/api';


const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [zooDetails, setZooDetails] = useState(null);

  useEffect(() => {
    const fetchZooDetails = async () => {
      try {
        const delay = 500;
        const data = await api.getZooDetails(id);

        setTimeout(() => {
          setZooDetails(data);
          setLoading(false);
        }, delay);
      } catch (error) {
        console.error('Error while fetching zoo details:', error);
        setLoading(false);
      }
    };

    fetchZooDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!zooDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginTop: "120px" }}>
        <Card variant="outlined" sx={{marginRight: 3, marginBottom: 3 }}>
            <Box display="flex" style={{ margin: "20px 0" }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={zooImage}
                    alt="Your Image Alt Text"
                    style={{ width: '600px', padding: '25px' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {zooDetails.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="textSecondary" component="div">
                        Animals: {zooDetails.animals}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        Visitors: {zooDetails.visitors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        Ticket Price: 100 UAH
                    </Typography>
                    <CardActions>
                        <Button>Go Back</Button>
                        <Button variant="contained" color="primary">Buy Ticket</Button>
                    </CardActions>
                </CardContent>
            </Box>

        </Card>
    </div>
  );
};

export default ItemDetails;
