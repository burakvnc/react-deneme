import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
       <h2>{product.title}</h2>
       <div className='price'>{product.price} TL</div>
       <style jsx>{`
       .product{
        padding:10px;
        background:#fff;
        border:1px solid #ddd;
        width:25%;
        flex-direction: column;
       }
       `}</style>
        </div>
  )
}

export default Product