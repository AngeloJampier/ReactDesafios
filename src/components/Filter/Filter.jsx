import React, {useContext,useEffect, useState} from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Box, FormHelperText, TextField } from '@mui/material'

const filterContainer = {
  width: '20%',
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  margin: '20px',
  backgroundColor: 'white',
  borderRadius: '20px'
}
const h2 = {
  textAlign: 'center',
  marginBottom: '20px'
}
const h3 = {
  textAlign: 'left'
}
const Filter = () => {
  const {
    productName, setProductName,
    category, setCategory,
    minVal, maxVal,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice
  } = useContext(GlobalContext)

  const [validPrice, setValidPrice] = useState(true)
  const handleChange = (event) => setCategory(event.target.value)
  const handleProductName = (event) => setProductName(event.target.value)
  const handleMaxPrice = (event) => setMaxPrice(event.target.value === "" ? Number.MAX_VALUE : parseFloat(event.target.value))
  const handleMinPrice = (event) => setMinPrice(event.target.value === "" ? 0 : parseFloat(event.target.value))
  const handleValidPrice = () => setValidPrice( minPrice <= maxPrice ? true : false )

  useEffect(() => {
    handleValidPrice()
  }, [minPrice,maxPrice])
  return (
    <>
      <div className='filterContainer' style={filterContainer}>
       <h2 style={h2}>Filtros</h2>
        <FormControl fullWidth>
          <h3 style={h3}>Filtrar por categoría:</h3>
          <Select
            id="categorySelect"
            value={category}
            onChange={handleChange}
            style={{marginTop: '10px'}}
          >
            <MenuItem component={Link} to='/' value={'*'}>Todas las categorías</MenuItem>
            <MenuItem component={Link} to='/category/accesorios' value={'accesorios'}>Accesorios</MenuItem>
            <MenuItem component={Link} to='/category/consolas' value={'consolas'}>Consolas</MenuItem>
            <MenuItem component={Link} to='/category/equiposdesonido' value={'equiposdesonido'}>Equipos de Sonido</MenuItem>
            <MenuItem component={Link} to='/category/impresoras' value={'impresoras'}>Impresoras</MenuItem>
            <MenuItem component={Link} to='/category/laptops' value={'laptops'}>Laptops</MenuItem>
            <MenuItem component={Link} to='/category/moviles' value={'moviles'}>Moviles</MenuItem>
            <MenuItem component={Link} to='/category/televisores' value={'televisores'}>Televisores</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{marginTop: '20px'}} fullWidth>
          <h3 style={h3}>Filtrar por nombre:</h3>
          <TextField
          id="productInput"
          name='productName'
          label="Nombre"
          autoComplete='off'
          value={productName}
          onChange={handleProductName}
          style={{marginTop: '10px'}}
          />
        </FormControl>
        <div style={{display: 'flex', marginTop: '20px', flexDirection: 'column'}}>
        <h3 style={h3}>Filtrar por nombre:</h3>
          <Box style={{display: 'flex', marginTop: '10px'}}>
            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>S/</div>
            </Box>

            <TextField
            type={'number'}
            InputProps={{ inputProps: { min: 0 } }}
            id="maxPriceInput"
            name='maxPrice'
            label="Precio min."
            value={minVal}
            onChange={handleMinPrice}
            style={{backgroundColor: 'white'}}
            />

            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>-</div>
            </Box>

            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>S/</div>
            </Box>

            <FormControl>
              <TextField
              type={'number'}
              InputProps={{ inputProps: { min: 1 } }}
              id="minPriceInput"
              name='minPrice'
              label="Precio max."
              value={maxVal}
              onChange={handleMaxPrice}
              style={{backgroundColor: 'white'}}
              />
            </FormControl>
          </Box>
          {!validPrice && <FormHelperText style={{color: 'red', textAlign: 'right'}}>Ingrese un rango de precio válido</FormHelperText>}
        </div>
      </div>
    </>
  )
}

export default Filter