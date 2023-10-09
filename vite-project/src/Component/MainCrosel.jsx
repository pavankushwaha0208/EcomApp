
import React from 'react'
import { Homecesoldata } from '../Datajs/Homecesoldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {
    const items = Homecesoldata.map((data) => <img className='cursor-pointer' src={data.image} alt='' role='presentation' />)
    return (
                <AliceCarousel
                    // mouseTracking
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    infinite />
    )
}

export default MainCrosel
