import React from 'react';

const ServiceList = ({serviceList}) => {
    const { name, image, description } = serviceList;

    return (
        <div className='bg-gray-400	 rounded'>
            <div className='flex col-span-1 justify-around'>
                <div> <img className='w-20' src={image} alt="" /> </div>
                <div><button class="btn mt-4 btn-active btn-accent">Done</button></div>
            </div>
            <div>
                <h2 className='font-semibold text-black	 text-xl	'>{name}</h2>
                <p className='font-light text-black	 text-base	text-center p-2	'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nostrum, quam, consequuntur aliquam quasi debitis perspiciatis non maxime recusandae quas esse perferendis at nemo voluptatem possimus quae ducimus nihil. Quasi!</p>
            </div>
        </div>
    );
};

export default ServiceList;