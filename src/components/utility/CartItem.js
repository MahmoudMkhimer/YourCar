import React from "react";
import css from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../store/ItemsReducer";
function CartItem(props) {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(addItem({ ...props.item, key: props.item.id, count: 1 }));
  };
  const decrementHandler = () => {
    dispatch(removeItem(props.item.name));
  };
  const clearHandler = () => {
    dispatch(clearItem(props.item.name));
  };
  return (
    <div className={css.item}>
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.class}</p>
        <div className={css.controls}>
          <span className={css.btn} onClick={decrementHandler}>
            -
          </span>{" "}
          <span className={css.input}> {props.item.count}</span>
          <span onClick={increaseHandler} className={css.btn}>
            +
          </span>
          <span onClick={clearHandler} className={`${css.btn} ${css.icon}`}>
            <ion-icon name="trash"></ion-icon>
          </span>
        </div>
      </div>
      <div>
        <img src={props.item.image} alt="" />
      </div>
    </div>
  );
}
export default CartItem;
