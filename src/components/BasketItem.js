import React from "react";
import '../App.css'
function BasketItem({ total, resetBasket, item, product }) {
  return (
    <>
        <div className="basket">
          <img src={product.image} alt=""></img>
         <h2> {item.amount} Adet {product.title}</h2>
      </div>
      <hr></hr>
      </>
  );
}

export default BasketItem;
