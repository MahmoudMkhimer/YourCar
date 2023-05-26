import React, { useState } from "react";
import styles from "./nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/CartShow";

function Nav() {
  const [visible, setVisible] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  // const resizeHandler = () => {
  //   setWidth(window.innerWidth);
  // };

  // window.addEventListener("resize", resizeHandler);
  // if (width >= 1153) {
  //   setVisible(false);
  // }

  function showHandler() {
    setVisible(!visible);
  }
  const amount = useSelector((state) => state.items.amount);
  const dispatch = useDispatch();
  const toogleHandler = () => {
    dispatch(toggle());
    setVisible(false);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul_links}>
        <li className={styles["main-title"]}>
          <span>Your</span>
          Car
        </li>

        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#cars">Cars</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li className={styles.icon} onClick={toogleHandler}>
          <ion-icon name="cart-outline"></ion-icon>
          <span className={styles.amount}>{amount}</span>
        </li>
        <li onClick={showHandler} className={styles.menue}>
          <ion-icon name="menu"></ion-icon>
        </li>
      </ul>
      {visible && (
        <div className={styles.menueItems}>
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#cars">Cars</a>

          <a href="#contact">Contact us</a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
