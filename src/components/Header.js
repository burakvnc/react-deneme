import React from "react";
import { moneyFormat } from "./helpers";
import "../App.css";
import Product from "../product.json";
const Header = ({
  query,
  setQuery,
  resetBasket,
  products,
  basket,
  total,
  money,
}) => {

  return (
    <div className="header">
      <div className="heads">
        {total > 0 && money - total !== 0 && (
          <div>
            Harcamak için <span>{moneyFormat(money - total)}</span> TL paranız
            var!
          </div>
        )}
        {total === 0 && (
          <div>
            Harcamak için <span>{moneyFormat(money)}</span> TL paranız var!
          </div>
        )}
        {money - total === 0 && <div>Paran Bitti.</div>}
      </div>
      <div className="ara">
      <input
        type="text"
        placeholder="Arama"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Product.filter((products) =>
          products.title.toLowerCase().includes(query)
        ).map((products) => (
          <li key={products.id} className="listItem">
            {products.title}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Header;
