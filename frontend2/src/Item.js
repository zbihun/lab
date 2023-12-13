import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image0 from "./images/cards/image0.jpg";
import image1 from "./images/cards/image1.jpg";
import image2 from "./images/cards/image2.jpg";
import image3 from "./images/cards/image3.jpg";


const ItemCard = ({ item, i }) => {
    const navigate = useNavigate();
    const { id, name, animals, visitors } = item;

    const handleViewMoreClick = () => {
        navigate(`/details/${id}`);
    };
    const images = [image0, image1, image2, image3];

    return (
        <Card variant="outlined" sx={{ maxWidth: 500, minWidth: 375, marginRight: 3, marginBottom: 3 }}>
            <CardMedia
                component="img"
                alt="zoo"
                height="160"
                image={ i < images.length ? images[i] : images[Math.floor(i % images.length)]}
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
                <Button size="small" onClick={handleViewMoreClick}>View More</Button>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
