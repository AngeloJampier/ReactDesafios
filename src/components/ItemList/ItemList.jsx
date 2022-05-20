import './ItemList.css'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productList }) => {

  return (
    <>
        <div className='itemList'>
            {productList != null ? (
                productList.map((element,index) => (
                    <div key={'container' + element.id} className='itemFlexContainer'>
                        <Item
                        key = {element.id}
                        image = {element.image}
                        product = {element.productName}
                        price = {element.price}
                        stock = {element.stock}
                        description = {element.description}
                        id = {element.id}
                       />
                    </div>
                ))
            ) : (
                <h1 className='loadingContainer'>
                    Cargando...
                </h1>
            )}
        </div>
    </>
  )
}

export default ItemList