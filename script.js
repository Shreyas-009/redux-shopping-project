import { productsList } from "./productsList.js";
const products = document.getElementById("products");
import { createStore } from "redux";

let clutter = "";

const initialState = {
  products: productsList,
  cartItems: [],
  wishlist: [],
};

productsList.forEach((product) => {
  clutter += `<div class="card">
                <div class="header">
                    <img src="${product.image}" alt="">
                </div>
                <div class="card-body">
                    <h1 class="title">${product.title}</h1>
                    <p class="discreption">${product.description}</p>
                </div>
                <div class="card-footer">
                    <div class="f-left">${product.price}
                    <p>${product.rating.rate} : ${product.rating.count}</p>
                    </div>
                    <div class="f-right">
                    <button id="${product.id}" class="card-buttom">Add to Cart</button>
                    </div>
                </div>
            </div>`;
});

products.innerHTML = clutter;

document.querySelectorAll(".card-buttom").forEach((button) => {
  button.addEventListener("click", (e) => {
    store.dispatch({
      type: CART_ADD_ITEM,
      payload: { productId: e.target.id, quantity: 1 },
    });
  });
});

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";
const WISHLIST_ADD_ITEM = "wishlist/addItem";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case WISHLIST_ADD_ITEM:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case CART_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            if (item.quantity === 1) {
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        }),
      };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: CART_DECREASE_QUANTITY, payload: { productId: 1 } });
