export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
export const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];

    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    case CART_INCREASE_QUANTITY:
      return state.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case CART_DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          if (item.quantity === 1) {
            return null;
          } else { 
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

    default:
      return state;
  }
}
