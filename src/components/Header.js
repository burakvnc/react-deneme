import React from "react";
import { moneyFormat } from "./helpers";
import "../App.css";
import Basket from "./Basket";
import { BsFillBagFill } from 'react-icons/bs';

const Header = ({ resetBasket, products, basket, total, money }) => {
  return (
    <div className="header">
      <div className="dropdown">
        <button className="dropbtn" placeholder="Sepetimiz"><BsFillBagFill/>
        </button>
        <div class="dropdown-content">
          {total > 0 && (
            <Basket
              resetBasket={resetBasket}
              total={total}
              products={products}
              basket={basket}
            />
          )}
        </div>
      </div>
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
    </div>
  );
};

export default Header;
