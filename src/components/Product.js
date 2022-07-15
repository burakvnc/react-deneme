import React from "react";

const Product = ({total,money, product, basket, setbasket }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addbasket = () => {
    const checkbasket = basket.find((item) => item.id === product.id);
    if (checkbasket) {
      checkbasket.amount += 1;
      setbasket([
        ...basket.filter((item) => item.id !== product.id),
        checkbasket,
      ]);
    } else {
      setbasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const delbasket = () => {
    const currentbasket = basket.find((item) => item.id === product.id);
    const basketwithoutcurrent = basket.filter(item => item.id !== product.id)
      currentbasket.amount -= 1;
      if (currentbasket.amount === 0) {
        setbasket([...basketwithoutcurrent])
      } else {
        setbasket([
          ...basketwithoutcurrent,
          currentbasket,
        ]);
      }
    
  };
  return (
    <div className="product">
      <img src={product.image} alt=""></img>
      <h2>{product.title}</h2>
      <div className="price">{product.price} TL</div>
      <div className="actions">
        <button className="del" disabled={!basketItem} onClick={delbasket}>Sil</button>
        <button className="add" disabled={total + product.price > money} onClick={addbasket}>Ekle</button>
        <div className="amount">{(basketItem && basketItem.amount) || 0} Adet</div>
      </div>
    </div>
  );
};

export default Product;
