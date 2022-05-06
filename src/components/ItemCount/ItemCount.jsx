import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = (props) => {
    let [stock, setStock] = useState(0)

    const increaseAmount = () => stock < props.amount ? setStock(stock + 1) : setStock(stock)
    const decreaseAmount = () => stock >= 1 ? setStock(stock - 1) : setStock(stock)

    return (
        <div className='generalContainer'>
            <div className='optionContainer'>
                <button className='countButton' onClick={decreaseAmount}>--</button>
                <div className='stockContainer'><span>{stock}</span></div>
                <button className='countButton' onClick={increaseAmount}>+</button>
            </div>
            <button className='addButton'>Add to cart</button>
        </div>
    )
}

export default ItemCount