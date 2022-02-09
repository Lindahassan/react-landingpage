import React from "react";
import img2 from "../../assets/Illustration 2.png";
import circle from "../../assets/circule.png";
import "./Feature.css";

const Feature = () => {
  return(

  <div className="main2">
    <div>
      <img className="ills2" src={img2} alt="" />
    </div>
    <div className="feature">
      <h2>We Provide Many Features You Can Use</h2>
      <p>
        You can explore the features that we provide with fun and have their own
        functions each feature
      </p>
      <ul >
        <li >  < img src={circle}/>Powerfull online protection.</li>
        <li> < img src={circle}/>Internet without borders.</li>
        <li>< img src={circle}/>Supercharged VPN</li>
         <li>< img src={circle}/>No specific time limits.</li>
      </ul>
    </div>
  </div>)
};

export default Feature;
