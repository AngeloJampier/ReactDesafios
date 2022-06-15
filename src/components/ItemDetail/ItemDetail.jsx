import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faTruckFast, faBolt, faLocationDot, faShop, faArrowRotateLeft, faShieldHalved, faTrophy } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box, CircularProgress, Link } from '@mui/material'

const itemDetailContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}

const img = {
  width: '40%',
  height: 'auto'
}
const product = {
  boxSizing: 'border-box',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  width: '80%',
  boxShadow: '0px 10px 10px black'
}

const div1 = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const div2 = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
}

const details = {
  fontSize: '14px'
}

const stars = { color: '#3483FA' }

const recommendedContainer = { margin: '15px 0' }

const recommended = {
  backgroundColor: 'black',
  fontSize: '12px',
  fontWeight: 'bold',
  color: 'white',
  padding: '5px',
  marginRight: '5px',
  display: 'inline',
  borderRadius: '10px'
}

const beforePrice = {
  marginTop: '30px',
  textDecoration: 'line-through'
}
const priceContainer = {
  margin: '0 0 10px'
}

const price = {
  fontSize: '35px',
  display: 'flex'
}

const green = {
  alignSelf: 'center',
  color: '#4BD7A2',
  fontSize: '18px',
  paddingLeft: '10px',
  lineHeight: '100%'
}

const interes = {
  display: 'flex'
}

const counterContainer = {
  margin: '20px 0',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column', //Borrar
  minHeight: '250px',
  border: '1px solid #E2E2E2',
  borderRadius: '15px'
}
const greenCounter = {
  color: '#4BD7A2',
  fontSize: '14px',
  paddingRight: '10px',
  display: 'inline'
}

const priceFormat = price => {
  return price.length > 3 && !price.includes('.') ? price.slice(0, 1) + "," + price.slice(1, price.length) + ".00" : price + ".00"
}

const ItemDetail = ({currentItem}) => {
  return (
    <div className='itemDetailContainer' style={itemDetailContainer}>
   {currentItem != null ? (
 <div className='product' style={product}>
   <div className='div1' style={div1}>
   <img src={currentItem.image} alt="" style={img} />
          </div>
          <div className='div2' style={div2}>
            <div style={details}>
              <p>Nuevo | {parseInt(Math.random() * 1000)} vendidos</p>
              <h2>{currentItem.productName}</h2>
              <div>
                <FontAwesomeIcon icon={faStar} style={stars} />
                <FontAwesomeIcon icon={faStar} style={stars} />
                <FontAwesomeIcon icon={faStar} style={stars} />
                <FontAwesomeIcon icon={faStar} style={stars} />
                <FontAwesomeIcon icon={faStarHalf} style={stars} />
                {parseInt(Math.random() * 100)} opiniones
              </div>
              <div style={recommendedContainer}>
                <div style={recommended}>
                  RECOMENDADO
                </div>
                en {currentItem.categoria.slice(0, 1).toUpperCase() + currentItem.categoria.slice(1, currentItem.categoria.length)}
              </div>
              <div style={beforePrice}>
              S/{priceFormat(parseInt(currentItem.price * 1.15))}
              </div>
              <div style={priceContainer}>
                <div style={price}>
                S/{priceFormat(currentItem.price)}
                  <div style={green}>
                    15% OFF
                  </div>
                </div>
                <div style={interes}>
                  en
                  <div style={green}>
                  10 x S/{priceFormat(parseInt((currentItem.price / 9)))}, los intereses mas bajos!
                  </div>
                </div>
              </div>
              <div>
                <Link href='#' underline='none'>Ver los medios de pago</Link>
              </div>
            </div>

            <div>
              <div style={counterContainer}>
                <div style={{ width: '100%', display: 'flex' }}>
                  <div style={{ width: '50%' }}>
                    <div style={{ display: 'flex' }}>
                      <FontAwesomeIcon icon={faTruckFast} style={greenCounter} />
                      <div style={{ fontSize: '14px' }}>
                        <div style={greenCounter}>
                          Llega gratis mañana
                          <b>
                            <FontAwesomeIcon icon={faBolt} style={green} /> full
                          </b>
                        </div>
                        <div>
                          Comprando dentro de las próximas {parseInt(Math.random() * 5) + 10} h {parseInt(Math.random() * 5) + 20} m
                        </div>
                        <div style={{ color: '#3483FA' }}>
                          <FontAwesomeIcon icon={faLocationDot} />  Enviar a <Link href="#">mi ubicación</Link>.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faShop} style={greenCounter} />
                      <div style={{ fontSize: '14px' }}>
                        <div style={greenCounter}>
                          Retiralo gratis a partir de mañana en correos y otros puntos
                        </div>
                        <div>
                          Comprando antes de las 23hs.
                        </div>
                        <div style={{ color: '#3483FA' }}>
                          Ver en el mapa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '50%' }}>
                    <div style={{ display: 'flex' }}>
                      <FontAwesomeIcon icon={faArrowRotateLeft} style={greenCounter} />
                      <div style={{ fontSize: '14px' }}>
                        <div style={greenCounter}>
                          Devolución gratis:
                        </div>
                        <div>
                          Tienes 30 días desde que lo recibes.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faShieldHalved} style={greenCounter} />
                      <div style={{ fontSize: '14px' }}>
                        <div style={greenCounter}>
                          Compra protegida:
                        </div>
                        <div>
                          Recive el producto que esperabas o te devolvemos tu dinero.
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', margin: '15px 0' }}>
                      <FontAwesomeIcon icon={faTrophy} style={greenCounter} />
                      <div style={{ fontSize: '14px' }}>
                        <div style={greenCounter}>
                          Tienda P'untos:
                        </div>
                        <div>
                          Suma puntos para futuras compras.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '15px' }}>
                  <div style={{ fontSize: '14px' }} >
                  <b>Stock disponible ({currentItem.stock} disponibles)</b>
                  </div>
                  <ItemCount product={currentItem} className='itemCount' amount={currentItem.stock}></ItemCount>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      ):(
        <div className='itemDetailContainer' style={itemDetailContainer}>
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </Box>
      </div>
      )}
      
    </div>
  )
}

export default ItemDetail