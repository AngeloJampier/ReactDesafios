import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CardWidget.css'

const CardWidget = () => {
  return (
    <>
        <a href='.'>
            <FontAwesomeIcon icon={faShoppingCart} className="carrito"/>
        </a>
    </>
  )
}

export default CardWidget