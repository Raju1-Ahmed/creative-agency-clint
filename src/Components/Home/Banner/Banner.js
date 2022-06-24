import React from 'react';
import banner from '../../../Asset/logos/Frame.png'


const Banner = () => {
    return (
        <div className='menubg pt-20'>
                <div className='bgmenu'> 
                <div class="grid  mb-40 grid-cols-1  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-2">
                    <div className='mt-24 p-9'>
                        <h2 class="card-title justify-center text-black	">Let’s Grow Your Brand To TheNext Level</h2>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <div class="card-actions justify-center	">
                            <button class="btn btn-black text-white">Hire us</button>
                        </div>
                    </div>
                    <div>
                    <figure><img className='' src={banner} alt="Shoes" /></figure>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;