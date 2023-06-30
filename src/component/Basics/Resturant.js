import React from "react";
import "./style.css";

const Resturant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggie</h2>
            <span className="card-description subtle">
              I love Maggie really oo Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aperiam iste suscipit cum expedita consectetur
              vero adipisci ipsam dolorum placeat nesciunt sunt ratione
              doloremque deleniti nulla vitae impedit, cumque maxime sequi.
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src={image} alt="images" className="card-media" />
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Resturant;
