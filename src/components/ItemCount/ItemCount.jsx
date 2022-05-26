import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './ItemCount.css'
const ItemCount = ({product, amount}) => {
    const {addToCart} = useContext(GlobalContext)

    const [stock, setStock] = useState(0)
    const [cartProduct, setCartProduct] = useState({
        id: product.id,
        name: product.productName,
        img: product.image,
        price: product.price,
        amount: stock,
        description: product.description
    })

    useEffect(() => {
        setCartProduct({
            id: product.id,
            name: product.productName,
            img: product.image,
            price: product.price,
            amount: stock,
            description: product.description
        })

      return () => {

      }
    }, [stock])

    const increaseAmount = () => stock < amount ? setStock(stock + 1) : setStock(stock)
    const decreaseAmount = () => stock >= 1 ? setStock(stock - 1) : setStock(stock)

    return (
        <div className='generalContainer'>
            <div className='optionContainer'>
                <button className='countButton' onClick={decreaseAmount}>--</button>
                <div className='stockContainer'><span>{stock}</span></div>
                <button className='countButton' onClick={increaseAmount}>+</button>
            </div>
            <Button
      onClick={() => addToCart(cartProduct)}
            className='addButton'
            component={Link}
            to={'/cart'}
            variant='contained'
            size='large'
            >
            Add to cart
            </Button>
        </div>
    )
}

export default ItemCount