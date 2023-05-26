import React from "react";
// import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Wall from "./components/Wall";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Testimonials from "./components/Testemonials";
import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer";

function App() {
  const cart = useSelector((state) => state.visible.isVisible);

  return (
    <div className="App">
      {/* <Nav /> */}
      {cart && <Cart></Cart>}
      <Home>
        <Nav />
      </Home>
      <About />
      <Services />
      <Cars />
      <Wall />
      <Testimonials />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;
