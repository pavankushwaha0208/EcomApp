import React from 'react'
import MainCrosel from '../Component/MainCrosel'
import HpmesectionCesosol from '../Component/HpmesectionCesosol'

const Home = () => {
  return (
   <>
   <div className="">
    <MainCrosel/>
       <div className="py-10 space-y-10">
   <HpmesectionCesosol/>
   <HpmesectionCesosol/>
   <HpmesectionCesosol/>
   <HpmesectionCesosol/>
   
       </div>
   </div>
   </>
  )
}

export default Home
