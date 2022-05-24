import './ItemListContainer.css'
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import Filter from '../Filter/Filter'
const ItemListContainer = (props) => {
  const [productList, setProductList] = useState(null)

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/35ceb9bc-cc56-4031-8514-e3927c7e99ae')
    .then(res => res.json())
    .then(res => {
      props.category == null ? setProductList(res) : setProductList(res.filter(e => e.categoria === props.category))
    })

    return () => {
    }
  }, [props.category])

  return (
    <>
      <div className='itemListContainer'>
      <Filter></Filter>
        <div className='itemListGeneralContainer'>
          <h2>Lista de productos</h2>
          <ItemList productList={productList} />
        </div>
        
      </div>
    </>
  )
}

export default ItemListContainer