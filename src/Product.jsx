import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvide';
function Product({title,price,img,rating,id}) {
    const [{basket}, dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:
            {   
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                 <p className="product_price">
                      <small>Rs</small>
                      <strong>{price}</strong>
                 </p>
                 <div className="product_rating">
                 {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p>
                ))}
             </div>
            </div>
            <img 
             src={img}
             alt=""
             />
             <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
