import React from 'react';

const Clint = ({ feedback }) => {
    const { name, position, image, description } = feedback;
    return (
        <div className=' shadow-lg shadow-gray-900/50  py-9 rounded'>
            <div className='w-80 mx-auto'>
                <div className='grid grid-cols-2 justify-items-start '>
                    <div>
                        <img className='w-28' src={image} alt="" />
                    </div>
                    <div className='mt-9 text-start	'>
                        <h2 className='text-black text-2xl '>{name}</h2>
                        <p className='text-black text-xl'>{position}</p>
                    </div>
                </div>
            </div>
            <p className='text-center p-3'>{description}</p>
        </div>

    );
};

export default Clint;