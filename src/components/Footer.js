import React from "react";
import css from "./footer.module.css";
function Footer() {
  return (
    <footer className={css.footer} id="contact">
      <div className={css.container}>
        <div className={css.first}>
          <p className={css.title}>
            <span>Your</span>
            Car
          </p>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        <div className={css.second}>
          <p className={css.title}>News Letter</p>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div>
            <input className={css.input} type="email" placeholder="Email" />
            <button className={css.btn}>Subscribe</button>
          </div>
        </div>
        <div className={css.third}>
          <p className={css.title}>Contact</p>
          <p>
            <ion-icon name="location"></ion-icon>
            <span>
              2038 2nd Avenue,
              <br /> Las Vegas, United States
            </span>
          </p>
          <p>
            <ion-icon name="call"></ion-icon>
            <span>
              01444773421423 <br />
              01477678449405
            </span>
          </p>
          <p>
            <ion-icon name="mail"></ion-icon>
            <span>info@YourCar.com</span>
          </p>
        </div>
      </div>
      <div className={css.icons}>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <p className={css.line}></p>
      <p className={css.copy}>
        © Copyright 2023 · <span>YourCar</span> All rights reserved{" "}
      </p>
    </footer>
  );
}

export default Footer;
