import React from "react";
import "./Component/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home.js";
import Service from "./Component/Service.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import Navbarr from "./Component/Navbarr.js";

const App = () => {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
