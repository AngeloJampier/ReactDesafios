import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const itemDetailContainer = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}


const ItemDetailContainer = (props) => {
  
  const [productList, setProductList] = useState(null)
  let {id} = useParams()
  useEffect(() => {

    fetch('https://sheet.best/api/sheets/68763914-9c61-406f-9b36-7f12e8cd18cf')
    .then(res => res.json())
    .then(res => setProductList(res))
    return () => {
    }
  }, [])
  
  return (
    <div className='itemDetailContainer' style={itemDetailContainer}>
    {productList != null ? (
      productList.filter(e => e.id === id).map(e => (
         <ItemDetail
            key = {e.id}
            item = {e}
            />
          ))
        ):(
          <ItemDetail
          item = {null}
          />
        )}
    </div>
  )
}

export default ItemDetailContainer