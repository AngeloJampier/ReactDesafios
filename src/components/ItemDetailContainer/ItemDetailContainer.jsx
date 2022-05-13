import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

let activeItemDetailContainer = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: '20',
  transition: '0.5s'
}

let itemDetail = {
  width: (0.35 * document.querySelector('.itemListGeneralContainer')?.clientWidth) + 'px',
  height: '100%',
  position: 'relative',
  marginLeft: '100%',
  float: 'right',
  transition: '0.5s'
}

const ItemDetailContainer = (props) => {
  const [styleItemDetail, setStyleItemDetail] = useState(itemDetail)
  const [randomId, setRandomId] = useState((parseInt(Math.random()*15 + 100)).toString())

  window.addEventListener('click', ()=>{
    activeItemDetailContainer = {
      position: 'fixed',
      width: '135%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      transition: '0.5s',
      zIndex: '0',
    }
  })

  document.querySelector('.itemDetailC')?.addEventListener('click', e => e.stopPropagation())

  useEffect(() => {
    itemDetail = {
      width: (0.35 * document.querySelector('.itemListGeneralContainer')?.clientWidth) + 'px',
      height: '100%',
      position: 'relative',
      marginLeft: '100%',
      float: 'right',
      transition: '0.5s'
    }
    setStyleItemDetail(itemDetail)
    return () => {
    }
  }, [styleItemDetail])
  
  return (
    <div className='itemDetailContainer' style={activeItemDetailContainer}>
        {props.productList != null ? (
          props.productList.filter(e => e.id == randomId).map(e => (
            <ItemDetail
            key = {e.id}
            customStyle={styleItemDetail}
            item = {e}
            />
          ))
        ):(
          <ItemDetail
          customStyle={styleItemDetail}
          item = {null}
          />
        )}
        
    </div>
  )
}

export default ItemDetailContainer