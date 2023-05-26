import React, { useState } from "react";
import css from "./CarItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/ItemsReducer";
function CarItem(props) {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((prev) => {
      if (prev === 9) return 9;
      else return prev + 1;
    });
  };
  const decrementHandler = () => {
    setCounter((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };
  const dispatch = useDispatch();
  const submitHandler = () => {
    if (counter === 0) return;
    dispatch(addItem({ ...props.car, count: counter, id: props.car.name }));
  };
  return (
    <div className={`${css.item}`}>
      <img src={props.car.image} alt="car" className={css.img} />
      <h3 className={css.titel}>{props.car.class}</h3>
      <p className={css.car_name}>{props.car.name}</p>
      <p className={css.text}>{props.car.description}</p>
      <div className={css.footer}>
        <div className={css.info}>
          <p>
            <span className={css.icon}>
              <ion-icon name="people"></ion-icon>
            </span>
            <span className={css.seats}>{props.car.seats} Seats</span>
          </p>
          <p>
            <span className={css.icon}>
              <ion-icon name="bag"></ion-icon>
            </span>
            <span className={css.luggage}>{props.car.luggage} Luggage</span>
          </p>
        </div>
        <div className={css.controls}>
          <button onClick={decrementHandler}>-</button>
          <span className={css.input}>{counter}</span>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
      <button onClick={submitHandler} className={css.submit}>
        Add to Cart
      </button>
    </div>
  );
}
export default CarItem;
