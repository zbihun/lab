import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCard = ({ item }) => {
  const { name, animals, visitors } = item;

  return (
    <Card variant="outlined" sx={{ maxWidth: 500, minWidth: 375, marginRight: 3, marginBottom: 3 }}>
        <CardMedia
            component="img"
            alt="zoo"
            height="160"
            image="/static/images/cards/image.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
                Animals: {animals}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
                Visitors: {visitors}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">View More</Button>
        </CardActions>
    </Card>
  );
};

export default ItemCard;
