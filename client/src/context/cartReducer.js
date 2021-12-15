export const cartReducer = (state, action) => {
  const {
    payload: { quantity, product },
  } = action;

  switch (action.type) {
    case "ADD_TO_CART":
      const nextCart = [...state.cart];
      const existingIndex = nextCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex >= 0) {
        const currentQuantity = parseInt(nextCart[existingIndex].quantity);

        nextCart[existingIndex] = {
          ...action.payload.product,
          quantity: currentQuantity + quantity,
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
        cart: state.cart.filter((p) => {
          return p.id !== product.id;
        }),
      };
    default:
      return state;
  }
};
