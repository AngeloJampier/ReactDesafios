import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const productDetailContainer = {
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f7f5'
}

const ProductDetail = () => {


  return (
    <div className="productDetailContainer" style={productDetailContainer}>
      <ItemDetailContainer/>
    </div>
  )
}

export default ProductDetail