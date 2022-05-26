import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStateContext'
import DeleteIcon from '@mui/icons-material/Delete'

const CartView = () => {
  const {cartProducts, removeItem, clear} = useContext(GlobalContext)
  return (
    <>
    {cartProducts.length > 0 ? cartProducts.map((item, index) => (
      <div>
        <h1 style={{display: 'inline'}}  key={(index+1)}>{(index+1)}.- {item.name} | Cantidad: {item.amount}</h1>
        <Button style={{margin: '20px'}} variant="outlined" startIcon={<DeleteIcon />}  onClick={() => removeItem(item.id)}>Eliminar producto</Button>
      </div>

    )) : <h1>El carrito esta vacío</h1>}
    <Button style={{margin: '20px'}} variant="contained" color="error" onClick={() => clear()}>Vaciar el carrito</Button>
  </>
  )
}

export default CartView