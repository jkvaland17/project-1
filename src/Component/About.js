import React from "react";
import Common from "../Component/Common.js";
import Aboutimg from "../image/02.png";

const About = () => {
  return (
    <div>
      <Common
        name="Welcome To The About Page"
        imgsrc={Aboutimg}
        visit="./Contect"
        btname="Contact Now"
      />
    </div>
  );
};

export default About;
