import React from "react";
import styles from "./Services.module.css";
function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.overlay}></div>
      <div className={styles.services_body}>
        <div className={styles.titels}>
          <h2>SERVICES</h2>
          <h3>Services</h3>
        </div>
        <div className={styles.offers}>
          <div className={styles.item}>
            <p className={styles.icon}>
              <img src="images\Group 1084.png" alt="" />
            </p>
            <p className={styles.service_title}> Car sales</p>
            <p className={styles.text}>
              At YourCar, we offer a wide selection of luxury vehicles for sale.
              Whether you're in the market for a sleek sports car or a spacious
              SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.icon}>
              <img src="images\Group.png" alt="" />
            </p>
            <p className={styles.service_title}>Car rental </p>
            <p className={styles.text}>
              If you're in need of a luxury car rental, look no further than
              YourCar. Our fleet of high-end vehicles is regularly maintained
              and serviced to ensure that you have a safe and comfortable
              driving experience.
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.icon}>
              <img src="images\Vector (1).png" alt="" />
            </p>
            <p className={styles.service_title}>Car selling </p>
            <p className={styles.text}>
              At YourCar, we make it easy to sell your car. Simply bring your
              vehicle in for an appraisal, and we'll handle the rest. We offer
              fair prices and a hassle-free selling process, so you can get your
              vehicle with minimal effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
