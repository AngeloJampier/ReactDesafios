import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.css'

const ItemCount = ({onAdd, amount}) => {
    let [stock, setStock] = useState(0)

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
            onClick={() => onAdd(stock)}
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