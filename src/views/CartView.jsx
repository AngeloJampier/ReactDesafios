import React from 'react'

const cartViewContainer = {
    overflow: 'hidden',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f7f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const CartView = () => {
  return (
    <div className='cartViewContainer' style={cartViewContainer}>
        <h1>Se añadieron {localStorage.getItem('amount')} productos al cart</h1>
    </div>
  )
}

export default CartView