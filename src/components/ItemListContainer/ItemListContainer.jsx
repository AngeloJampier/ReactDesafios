import './ItemListContainer.css'
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemListContainer = (props) => {
  const [productList, setProductList] = useState(null)

  useEffect(() => {
    setTimeout(()=>{
      new Promise((eject, reject) =>{
        fetch('https://sheet2api.com/v1/V0IMeoa1QYWz/api-desafios-react')
        .then(res => res.json())
        .then(res => setProductList(res))
      })
    },2000)

    return () => {
    }
  }, [])

  return (
    <>
      <div className='itemListContainer'>
        <div className='itemListGeneralContainer'>
          <h2>Lista de productos</h2>
          <ItemList productList={productList} />
        </div>
        <ItemDetailContainer
        productList={productList}
        />
      </div>
    </>
  )
}

export default ItemListContainer