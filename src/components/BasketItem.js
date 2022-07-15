import React from "react";
import '../App.css'
function BasketItem({ total, resetBasket, item, product }) {
  return (

        <div className="basket">
          <img src={product.image} alt=""></img>
          {item.amount} Adet {product.title}
      </div>
  );
}

export default BasketItem;
