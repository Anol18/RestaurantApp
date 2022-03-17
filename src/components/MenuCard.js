import React from "react";
import "./menuCard.css";

function MenuCard(props) {
  let { title, description, image, price } = props;
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <strong></strong><p>{price}</p>
            <button className="btn btn-light border btn-sm">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
