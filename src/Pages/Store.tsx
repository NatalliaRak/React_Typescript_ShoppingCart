import React from 'react';
import storeItems from '../data/items.json';
import StoreItem from '../Components/StoreItem';


const Store = () => {
  return (
    <div>
        <h1>Store</h1>
        <div className='row'>
           {storeItems.map(i => (
            <div className='col-sm col-md-4 col-lg-4' key={i.id}>
                <StoreItem {...i}/>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Store;