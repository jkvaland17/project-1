import React from "react";
import Common from "../Component/Common.js";
import img from "../image/01.png";


const Home = () => {
 
  return (
    <div>
      <Common
        name="Grow your business with"
        imgsrc={img}
        visit="./Service"
        btname="Get Started"
      />
    </div>
  );
};

export default Home;
