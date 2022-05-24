import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
const itemDetailContainer = {
  width: '20%',
}

const img = {
  width: '150px',
  height: 'auto'
}
const product = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '-5px 0px 15px black',
  width: '100%',
}
const priceFormat = price =>{
  return price.length > 3 && !price.includes('.') ? price.slice(0,1) + "," + price.slice(1,price.length) : price
}

const ItemDetail = ({item, customStyle}) => {
  const [amountAdded, setAmountAdded] = useState(0)

  const onAdd = (amount) =>{
    localStorage.setItem('amount', amount)
    console.log(`Se añadieron ${amount} productos al cart`)
    setAmountAdded(amount)
  }
  return (
    <div className='itemDetailContainer' style={itemDetailContainer}>
      { item != null ? (
 <div className='product' style={product}>
  <img src={ item.image }  alt="" style={img}/>
          <div>
              <h3>{ item.productName }</h3>
              <h4>S/{ priceFormat(item.price) }</h4>
              <p className='stock'>(Stock: { item.stock })</p>
              <p>{ item.description }</p>
          </div>
          <ItemCount onAdd = {onAdd} className = 'itemCount' amount = { item.stock }></ItemCount>
        </div>
      ):(
        <h1>Cargando...</h1>
      )}
      
    </div>
  )
}

export default ItemDetail