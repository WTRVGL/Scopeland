export const cartReducer = (state, action) => {

  const {payload: {quantity, product}} = action

  switch (action.type) {
    case "ADD_TO_CART":
      const nextCart = [...state.cart];
      const existingIndex = nextCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex >= 0) {
        const newQuantity = parseInt(nextCart[existingIndex].quantity + 1);

        nextCart[existingIndex] = {
          ...action.payload.product,
          quantity: newQuantity,
        };
      } else {
        nextCart.push({ ...product, quantity: 1 });
      }

      return {
        ...state,
        cart: nextCart,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((pr) => {
          return pr.id !== product.id;
        }),
      };
    default:
      return state;
  }
};
