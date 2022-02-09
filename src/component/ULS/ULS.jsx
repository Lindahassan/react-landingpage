import React from "react";
import UserIcon from "../../assets/user.png";
import LocationIcon from "../../assets/user.png";
import ServerIcon from "../../assets/user.png";
import './ULS.css';
const ULS = () => {

  const data = [
    { icon:  UserIcon, number: 90 , text: "Users" },
    { icon:  LocationIcon, number: 30, text: "Locations" },
    { icon:  ServerIcon, number: 50, text: "Servers" },
  ];

  return (
    <div className="StaticsAll">
      {data.map((StaticData) => (
        <div className="Statics">
          <img src={StaticData.icon}  />
          <h4>{StaticData.number}+</h4>  
          <p>{StaticData.text}</p>
              </div>
      ))}
    </div>
  );
};

export default ULS;
