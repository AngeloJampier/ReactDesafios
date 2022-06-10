import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


const filteredProductsContainer = {
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f7f5'
}

const FilteredProducts = (props) => {

  return (
    <div className="filteredProductsContainer" style={filteredProductsContainer}>
     <ItemListContainer/>ñ
    </div>
  )
}

export default FilteredProducts