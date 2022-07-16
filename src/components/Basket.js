import React from 'react'
import BasketItem from './BasketItem'
import '../App.css'
function Basket({basket,products,total, resetBasket}) {
  return (
    <>
    {basket.map(item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id)}/>
        ))}
        <div className='basket2'>
            Toplam: {total} TL <p>
            <button onClick={resetBasket}>Sepeti Sıfırla</button></p>
        </div>
    </>
  )
}

export default Basket