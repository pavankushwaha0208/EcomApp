import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Homecesoldata } from '../../Data/Maincarousel/Maincarousel';

const MainCarosal = () => {
    const items = Homecesoldata.map((data) => <img className='cursor-pointer' src={data.image} alt='' role='presentation' />)
  return (
    <div>
       <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    infinite />
    </div>
  )
}

export default MainCarosal
