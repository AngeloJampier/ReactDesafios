import GlobalStateContext from './context/GlobalStateContext'
import React from 'react'
import Rutas from './routes/Rutas'

const App = () => {
  return (
    <GlobalStateContext>
    <Rutas/>
  </GlobalStateContext>
  )
}

export default App