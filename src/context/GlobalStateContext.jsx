import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {
  const [productList, setProductList] = useState([])
  const [currentItem, setCurrentItem] = useState(null)
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [toCart, setToCart] = useState(false)

    const addToCart = (product) => {
      if(isInCart(product.id)){
        cartProducts.forEach((element,index) =>{
          if(element.id === product.id){
            cartProducts[index].amount += product.amount
            cartProducts[index].price += product.price
          }
        })
      } else setCartProducts([...cartProducts, product])
      setTotalPrice(totalPrice + product.price)
    }

    const isInCart = (id) => {
      return cartProducts.filter( product => product.id === id).length > 0 ? true : false
    }

    const removeItem = (id) => {
      console.log( cartProducts.filter(product => product.id == id))
      setTotalPrice(totalPrice - cartProducts.filter(product => product.id === id)[0].price)
      setCartProducts(cartProducts.filter( product => product.id !== id))
    }

    const clear = () => {
      setTotalPrice(0)
      setCartProducts([])
    }

  return (
    <GlobalContext.Provider value={{cartProducts, addToCart, removeItem, clear, productList, setProductList, totalPrice, toCart, setToCart, currentItem, setCurrentItem}}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext