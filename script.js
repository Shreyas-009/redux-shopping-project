import { combineReducers, createStore } from "redux";
import { productsList } from "./productsList.js";
import cartReducer, {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INCREASE_QUANTITY,
  CART_DECREASE_QUANTITY,
} from "./cartReducer.js";

import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
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


const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 1 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: CART_DECREASE_QUANTITY, payload: { productId: 1 } });
store.dispatch({ type: CART_DECREASE_QUANTITY, payload: { productId: 1 } });
