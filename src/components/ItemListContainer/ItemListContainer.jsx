import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import React from 'react'


const ItemListContainer = (props) => {
  return (
    <>
        <div className='itemContainer'>
            {/* <div className='buttonContainer'>
                <button>Add to cart</button>
            </div> */}
            <div className='product'>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.product}</h3>
                    <h4>S/.{props.price}</h4>
                    <p className='stock'>(Stock: {props.stock})</p>
                    <p>{props.description}</p>
                </div>
                <ItemCount className = 'itemCount' amount = {props.stock}></ItemCount>
            </div>
        </div>
    </>
  )
}

export default ItemListContainer