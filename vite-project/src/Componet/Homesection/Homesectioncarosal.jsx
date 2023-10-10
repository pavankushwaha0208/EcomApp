import React, { useRef, useState } from 'react'
import HomesectionCard from './HomesectionCard'
import { mens_kurta } from '../../Data/Mansection/Mans_kurta'
import { GrNext, GrPrevious } from 'react-icons/gr';

const Homesectioncarosal = () => {
    const slideProductRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProduct = () => {
        slideProductRef.current.scrollLeft += 200;
        setActiveIndex(activeIndex + 1);
    };

    const prevProduct = () => {
        slideProductRef.current.scrollLeft -= 200;
        setActiveIndex(activeIndex - 1);
    };
    return (
        <>
            <div className=' relative'>
                <div className=" flex gap-1 scrollable-products scrollbar-none overflow-hidden scroll-smooth 
                transition-all my-4" ref={slideProductRef}>

                    {mens_kurta.slice(0, 10).map((item) => (
                        <HomesectionCard key={item.id} product={item} />
                    ))}
                </div>
                <div className="ml-auto flex gap-2 ">
                    {activeIndex > 0 && (
                        <button
                            onClick={prevProduct}
                            className="bg-slate-300 hover:bg-blue-500 text-xl px-1 py-3 hover:text-white rounded absolute top-32 left-0"
                        >
                            <GrPrevious />
                        </button>
                    )}
                    {activeIndex < 7 && (
                        <button
                            onClick={nextProduct}
                            className="bg-slate-300 hover:bg-blue-500 text-xl px-1 py-3 hover:text-white rounded absolute top-32 right-0"
                        >
                            <GrNext />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Homesectioncarosal
