import React from "react";
import { Common, Scard } from "../Component/Common.js";
import img from "../image/03.png";

const Service = () => {
  return (
    <div>
      <div>
        <Common
          name="Welcome To The Service Page"
          imgsrc={img}
          visit="./Contect"
          btname="Contact Now"
        />
      </div>
      <div>
        <Scard
          sname="Research"
          serone="Examing the field"
          sertwo="Project limitations"
          serthree="Legal procedures"
        />
        <Scard
          sname="UX/UI Design"
          serone="User research"
          sertwo="Wire frames"
          serthree="Visual design"
        />
        <Scard
          sname="Mobile development"
          serone="Native support"
          sertwo="Cross plate form app"
          serthree="development"
        />
        <Scard
          sname="Web app design"
          serone="Front-end design"
          sertwo="Custom functionality"
          serthree="Redesign"
        />
        <Scard
          sname="Software dev & ERP"
          serone="Bespoke solution"
          sertwo="Development of MVPs"
          serthree="Multi-device functionality"
        />
        <Scard
          sname="Enterprise backend"
          serone="Scalable server"
          sertwo="Data storage & warehouse"
          serthree="Serverless architecture"
        />
        <Scard
          sname="Online marketing"
          serone="E-mail marketing automation"
          sertwo="Monthly performance audit"
          serthree="Third-party Ad tracking"
        />
        <Scard
          sname="Digital signage"
          serone="Digital menu boards"
          sertwo="Ads and video walls"
          serthree="Digital directory boards"
        />
      </div>
    </div>
  );
};

export default Service;
