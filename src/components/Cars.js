import React, { useState, useEffect } from "react";
import css from "./cars.module.css";
import myCars from "./data.json";
import CarItem from "./utility/CarItem";
let intidx = 1;

// myCars.cars.forEach((car) => {
//   const currCar = <CarItem car={car} />;
//   mySubArray.push(currCar);
//   // console.log(currCar);
//   if (intidx % 3 === 0) {
//     myItems.push([...mySubArray]);
//     while (mySubArray.length) {
//       mySubArray.pop();
//     }
//   }
//   intidx++;
// });

function Cars() {
  const [width, setWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", resizeHandler);
  let itemPerPage = 0;
  if (width >= 1400) itemPerPage = 3;
  else if (width >= 900) itemPerPage = 2;
  else itemPerPage = 1;
  const myItems = [];
  const mySubArray = [];
  myCars.cars.forEach((car) => {
    const currCar = <CarItem car={car} key={car.name} />;
    mySubArray.push(currCar);
    if (intidx % itemPerPage === 0) {
      myItems.push([...mySubArray]);
      while (mySubArray.length) {
        mySubArray.pop();
      }
    }
    intidx++;
  });
  const btns = [];
  const [idx, setIdx] = useState(0);

  function changeIdxHandler(num) {
    const index = (num + myItems.length) % myItems.length;
    setIdx(index);
  }

  // useEffect(() => {
  //   const items = document.querySelectorAll(`.${css.item}`);
  //   items.forEach((item) => {
  //     item.classList.remove(css.fade_in);
  //   });
  //   setTimeout(() => {
  //     items.forEach((item) => {
  //       item.classList.add(css.fade_in);
  //     });
  //   }, 100);
  // }, [idx]);

  for (let i = 0; i < myItems.length; i++) {
    let classes = "";
    if (i === idx) {
      classes = "active";
    }
    const btn = (
      <span
        key={i}
        className={`${css.sliderDot} ${css[classes]}`}
        onClick={changeIdxHandler.bind(this, i)}
      ></span>
    );
    btns.push(btn);
  }

  return (
    <div id="cars" className={css.cars}>
      <div className={css.titels}>
        <h2>CARS</h2>
        <h3>Cars</h3>
      </div>
      <div className={css.items}>
        <button
          className={css.custom_btn}
          onClick={changeIdxHandler.bind(this, idx - 1)}
        >
          <ion-icon name="caret-back"></ion-icon>
        </button>
        {myItems[idx]}
        <button
          className={css.custom_btn}
          onClick={changeIdxHandler.bind(this, idx + 1)}
        >
          <ion-icon name="caret-forward"></ion-icon>
        </button>
      </div>
      <div className={css.sliderDots}> {btns}</div>
    </div>
  );
}

export default Cars;
