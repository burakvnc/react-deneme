import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import products from "./product.json";
import Basket from "./components/Basket";
import Product from "./components/Product";
import { BsFillBagFill } from "react-icons/bs";

function App() {
  const [money, setmoney] = useState(5500);
  const [basket, setbasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");
  const resetBasket = () => {
    setbasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header
        resetBasket={resetBasket}
        total={total}
        products={products}
        basket={basket}
        money={money}
        setmoney={setmoney}
        query={query}
        setQuery={setQuery}
      />
      <div className="body">
        <div className="left">
        </div>
        <div className="prod">
          {products.map((product) => (
            <Product
              key={product.id}
              total={total}
              money={money}
              basket={basket}
              setbasket={setbasket}
              product={product}
            />
          ))}
        </div>
        <div className="right">
          <div className="dropdown">
            <button className="dropbtn" placeholder="Sepetimiz">
              <BsFillBagFill />
            </button>
            <div className="dropdown-content">
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
        </div>
      </div>
    </>
  );
}
export default App;
