import React from 'react'
import MainCarosal from '../Componet/Homesection/MainCarosal'
import Homesectioncarosal from '../Componet/Homesection/Homesectioncarosal'

const Home = () => {
  return (
    <div>
      <MainCarosal/>
      <div className="py-10 space-y-10">
        <Homesectioncarosal/>
      </div>
    </div>
  )
}

export default Home
