import React from 'react';
import storeItems from '../data/items.json';
import FormatCurrency from '../utilites/FormatCurrency';
import { useShoppingCart } from '../Context/ShoppingCartContext';

type StoreItemProps = {
    id: number,
    title: string,
    author: string,
    price: number,
    imag: string
}

function StoreItem({ id, title, author, price, imag }:StoreItemProps) {
   const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();

   const quantity = getItemQuantity(id);

  return (
    <>
       <div className="card h-100">
            <img className="card-img-top" src={imag}
            style={{ objectFit: 'cover' }} alt="Card image" height="400px" />
            <div className="card-body">
               <span className="card-title">{title}</span>
               <br/>
                <span className="card-text"> <i>{author}</i></span>
                <br/>
                <span className="card-text align-bottom"><b>{FormatCurrency(price)}</b></span>
            </div>
            <div className='align-bottom'>
                    {
                    quantity === 0 ? (
                      <button
                      type="button" 
                      className="btn btn-outline-success  btn-block mt-auto w-100
                      justify-content-center"
                      onClick={()=> increaseItemQuantity(id)}
                     >
                        
                         Add to cart </button>
                    ) : 
                    <div className='flex-column'
                     style={{ gap: '5.rem'}}
                     >
                        <div className='d-flex align-items justify-content-center'
                        style={{ gap: '5.rem'}}>
                          
                           <button
                           type="button" className="btn btn-outline-primary"
                           onClick={()=> decreaseItemQuantity(id)}>-</button>
                           <div>
                               <span className='fs-3'>{quantity}</span>
                               In cart
                           </div>
                           <button
                           type="button" className="btn btn-outline-primary"
                           onClick={()=> increaseItemQuantity(id)}
                           >+</button>   
                        </div>
                        <button
                           type="button" className="btn btn-danger btn-sm"
                           onClick={()=> removeFromCart(id)}>Remove</button> 
                    </div>
                    }

                </div>
        </div>
    </>
    
  )
}

export default StoreItem