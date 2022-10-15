import React from "react";
import profiles from "../fakedata";
import "./ProfileCard.css";

console.log(profiles);
const profilecard = ({image, name, title, description}) => {
  return (
    <div style={{ backgroundColor: "white",margin:'10px', padding:10, borderRadius:'15px' }}>
      <div style={{ display: "flex" , justifyContent:'center'}}>
        <img
          src={image}
          alt=""
          height="50px"
          style={{ borderRadius:10, margin:'10px'}}
        />
        <div>
          <h2 style={{ marginLeft: "10px" }}>{name}</h2>
          <h4 style={{ marginLeft: "10px" }}>{title}</h4>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <p style={{fontSize:'20px', padding: 5}}>{description}</p>
    </div>

    </div>
  );
};

export default profilecard;
