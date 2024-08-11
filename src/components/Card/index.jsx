import React from "react";
import "./index.scss";

const Card = ({ product }) => {
  return (
    <div className="card">
      <h3 className="card-title">{product.title}</h3>

      <div className="card-image">
        <img src={product.images[0]} alt={product.title} width="300" />
      </div>

      <div className="card-desc">
        <p>{product.description}</p>
      </div>
      <div className="card-price">
        <p>Цена: {product.price} руб.</p>
      </div>
    </div>
  );
};

export default Card;
