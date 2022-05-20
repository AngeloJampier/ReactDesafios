import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const priceFormat = price =>{
  return price.length > 3 && !price.includes('.') ? price.slice(0,1) + "," + price.slice(1,price.length) : price
}

const ItemDetail = ({item, customStyle}) => {

  return (
    <div className='itemDetailC' style={customStyle}>
      { item != null ? (
        <div className='product'>
          <img src={ item.image }  alt="" />
          <div>
              <h3>{ item.productName }</h3>
              <h4>S/{ priceFormat(item.price) }</h4>
              <p className='stock'>(Stock: { item.stock })</p>
              <p>{ item.description }</p>
          </div>
          <ItemCount className = 'itemCount' amount = { item.stock }></ItemCount>
        </div>
      ):(
        <h1>Cargando...</h1>
      )}
      
    </div>
  )
}

export default ItemDetail