import React from "react";
import css from "./Cart.module.css";
import CartItem from "./utility/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../store/ItemsReducer";
function Cart() {
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearAll());
  };
  const myItems = useSelector((state) => state.items.items);
  return (
    <div className={css.cartContainer}>
      <div className={css.relative}>
        <div className={css.cart}>
          {/* <CartItem></CartItem> */}
          {myItems.map((item) => {
            return <CartItem item={item}></CartItem>;
          })}
        </div>
        <p className={css.btn} onClick={clearHandler}>
          Clear <ion-icon name="trash"></ion-icon> All
        </p>
      </div>
    </div>
  );
}
export default Cart;
