import React from 'react'
import Navigation from './Componet/Homesection/Navigation'
import Home from './Pages/Home'
import Fotter from './Componet/Fotter/Fotter'

const App = () => {
  return (
    <div>
        <Navigation/>
      <div className="">
        <Home/>
      </div>
      <Fotter/>
    </div>
  )
}

export default App
