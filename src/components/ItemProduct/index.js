import React from "react";
import "./style.scss";

function ItemProduct(props) {
  const { img, price } = props;
  return (
    <div className="card">
      <img src={img} />
      <p>${price}</p>
    </div>
  );
}

export default ItemProduct;
