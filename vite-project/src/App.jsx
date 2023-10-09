import React from 'react'
import Navigation from './Component/Navigation'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <div className="">
         <Navigation/>  
        <div className="">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
