import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const priceFormat = price =>{
    return price.length > 3 && !price.includes('.') ? price.slice(0,1) + "," + price.slice(1,price.length) : price
}

const Item = (props) => {
  return (
    <>
        <div className='item'>
            <div className='product'>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.product}</h3>
                    <h4>S/{priceFormat(props.price)}</h4>
                    <p className='stock'>(Stock: {props.stock})</p>
                    <p>{props.description}</p>
                </div>
                <Button variant='contained' component={Link} to={'/item/'+props.id} className='detailButton'>Detalles</Button>
            </div>
        </div>
    </>
  )
}

export default Item