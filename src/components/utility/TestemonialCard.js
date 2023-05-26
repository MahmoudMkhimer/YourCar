import React from "react";
import css from "./TestemonialCard.module.css";
function TestemonialCard(props) {
  const rating = [];
  for (let i = 0; i < Math.floor(props.comment.rating); i++) {
    rating.push(<ion-icon name="heart" key={i}></ion-icon>);
  }
  if (Math.ceil(props.comment.rating) != props.comment.rating) {
    rating.push(
      <ion-icon key={props.comment.rating} name="heart-half"></ion-icon>
    );
  }
  return (
    <div className={css.card}>
      <p className={css.text}>{props.comment.text}</p>
      <div className={css.rating}>{rating}</div>
      <div className={css.info}>
        <p className={css.name}>{props.comment.name}</p>
        <p className={css.address}>{props.comment.location}</p>
      </div>
    </div>
  );
}
export default TestemonialCard;
