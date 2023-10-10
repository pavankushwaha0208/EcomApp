import React from 'react';

const HomesectionCard = ({ product }) => {
    return (
        <div className='w-full bg-white hover:drop-shadow-lg p-2 cursor-pointer flex justify-center flex-col items-center'>
            <div className='h-60 w-60  flex justify-center'>
                <img src={product.imageUrl} alt='' className='h-full object-cover' />
            </div>
            <h3 className='text-center font-semibold capitalize text-lg mt-2'>
                {product.brand}
            </h3>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default HomesectionCard;