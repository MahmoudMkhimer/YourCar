import React, { useState } from "react";
import css from "./Testemonials.module.css";
import TestemonialCard from "./utility/TestemonialCard";
// let idx = 0;

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    location: "Los Angeles, CA",
    text: "I had a great experience renting a car from this agency. The staff was friendly and helpful, and the car was in excellent condition. I would definitely recommend them to anyone in the area!",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4.5,
    location: "New York, NY",
    text: "I recently rented a car from this agency and was very satisfied with the service. The car was clean and well-maintained, and the staff was knowledgeable and accommodating. The only issue was that the rental process took a bit longer than expected.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    rating: 4,
    location: "Chicago, IL",
    text: "I have rented from this agency several times and have always had a good experience with them. The cars are reliable and the staff is friendly and helpful.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    rating: 3.5,
    location: "San Francisco, CA",
    text: "The rental process was smooth and the car was in good condition. Howeverit took longer than expected to return the car due to a long wait at the drop-off location.",
  },
  {
    id: 5,
    name: "Mark Johnson",
    rating: 4,
    location: "Houston, TX",
    text: "I had a great experience with this agency. The staff was very helpful and the car was clean and in good condition. I would definitely rent from them again.",
  },
];
// let idx = 0;

const Testimonials = () => {
  const [_, set_] = useState(0);
  const changeHandler = (_) => {
    set_(_);
  };
  const pagination = [];
  for (let i = 0; i < testimonialsData.length; i++) {
    let classes = "";
    if (i === _) {
      classes = "active";
    }
    pagination.push(
      <span
        className={`${css.dot} ${css[classes]}`}
        key={i}
        onClick={changeHandler.bind(this, i)}
      ></span>
    );
  }
  return (
    <section className={css.testimonials}>
      <div className={css.header}>
        <h2 className={css.big}>TESTEMONIALS</h2>
        <h3 className={css.small}>Testemonials</h3>
      </div>

      {<TestemonialCard comment={testimonialsData[_]} key={Math.random()} />}
      <div className={css.img_container}>
        <img
          className={css.img}
          src="images\mercedes-benz-s-class.jpg"
          alt=""
        />
      </div>
      <div className={css.dots}>{pagination}</div>
    </section>
  );
};

export default Testimonials;
