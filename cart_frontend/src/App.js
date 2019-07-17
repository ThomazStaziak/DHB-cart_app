import React from 'react'

import './assets/css/global.css'

import Carrinho from './components/Carrinho/Carrinho'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Menu />
      <Carrinho />
    </div>
  )
}

export default App
