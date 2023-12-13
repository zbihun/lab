const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        const newCartItems = [...state.cartItems];
        newCartItems.splice(action.payload, 1);
        return {
          ...state,
          cartItems: newCartItems,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  