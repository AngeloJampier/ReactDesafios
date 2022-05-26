import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import ItemDetail from '../ItemDetail/ItemDetail'

const itemDetailContainer = {

  display: 'flex',
  justifyContent: 'center',

}


const ItemDetailContainer = (props) => {
  
  const {productList} = useContext(GlobalContext)
  let {id} = useParams()
  
  
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