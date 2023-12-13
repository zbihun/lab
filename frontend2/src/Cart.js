import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from './redux/actions';
import { List, ListItem, ListItemText, IconButton, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import image0 from "./images/cards/image0.jpg";
import image1 from "./images/cards/image1.jpg";
import image2 from "./images/cards/image2.jpg";
import image3 from "./images/cards/image3.jpg";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const images = [image0, image1, image2, image3];

  const cartData = cartItems.length ? (
    cartItems.map((item, index) => (
      <div key={index}>
        <ListItem>
          <img src={ index < images.length ? images[index] : images[Math.floor(index % images.length)] } alt={item.title} style={{ width: '150px' }}/>
          <ListItemText style={{ marginLeft: '10px' }} primary={item.name} secondary={`Price: ${item.price} UAH`} />
          <IconButton onClick={() => dispatch(addToCart(item))}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(removeFromCart(index))} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        {index < cartItems.length - 1 && <Divider />}
      </div>
    ))
  ) : (
    <Typography variant="body2">Nothing in your Shopping Cart</Typography>
  );

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0).toFixed(2);
  };

  return (
    <div>
      <Typography variant="h6">Shopping Cart</Typography>
      <List>{cartData}</List>
      <Typography variant="h6">Total: {calculateTotal()} UAH</Typography>
    </div>
  );
};

export default Cart;
