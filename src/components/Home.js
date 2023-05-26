import React from "react";
import styles from "./home.module.css";
function Home(props) {
  return (
    <div id="home" className={styles.home}>
      {props.children}
      <div className={styles.home_body}>
        <h1>Find the perfect car for you at YourCar.</h1>
        <p>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <span className={styles.home_btn}>
          Discover
          <span className={styles.icon}>
            <ion-icon name="trending-up-outline"></ion-icon>
          </span>
        </span>
      </div>
    </div>
  );
}
export default Home;
