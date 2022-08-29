import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home.js";
import Service from "./Component/Service.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
