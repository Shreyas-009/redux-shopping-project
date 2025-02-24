import { combineReducers, createStore } from "redux";
import { productsList } from "./productsList.js";

import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./cartReducer.js";

import wishListReducer, {
  addItemToWishlist,
  removeItemFromWishlist,
} from "./wishListReducer.js";

import productReducer from "./productReducer.js";


let clutter = "";

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
                    <div class="f-left">
                    <p class="productPrice">${product.price} $</p>
                    <p>${product.rating.rate} : ${product.rating.count}</p>
                    </div>
                    <div class="f-right">
                    <button id="${product.id}" class="card-buttom">Add to Cart</button>
                    </div>
                </div>
            </div>`;
});

products.innerHTML = clutter;

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addItemToCart(1));
store.dispatch(removeItemFromCart(1));
store.dispatch(addItemToCart(1));
store.dispatch(increaseItemQuantity(1));
store.dispatch(decreaseItemQuantity(1));
store.dispatch(decreaseItemQuantity(1));
store.dispatch(addItemToWishlist(2));
store.dispatch(removeItemFromWishlist(2));