import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import products from "./product.json";
import Product from "./components/Product";
function App() {
  const [money, setmoney] = useState(100);
  return (
    <>
      <Header money={money} />
      {products.map(product =>(
        <Product product={product}/>
      ))}
    </>
  );
}
export default App;
