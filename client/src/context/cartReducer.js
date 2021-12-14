export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const nextCart = [...state.cart];
      const existingIndex = nextCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        const newQuantity = parseInt(nextCart[existingIndex].quantity + 1);

        nextCart[existingIndex] = {
          ...action.payload,
          quantity: newQuantity,
        };
      } else {
        nextCart.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cart: nextCart,
      };
    // return {
    //   ...state,
    //   cart: [...state.cart, item],
    // };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
