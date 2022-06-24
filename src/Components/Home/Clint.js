import React from 'react';

import slack from '../../Asset/logos/slack.png'
import google from '../../Asset/logos/google.png'
import uber from '../../Asset/logos/uber.png'
import netflix from '../../Asset/logos/netflix.png'
import airbnb from '../../Asset/logos/airbnb.png'

const Clint = () => {
    return (
        <div>
            <div class="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-3 mt-48 mb-40 lg:grid-cols-3 gap-4">
                <div>
                    <img className='w-36 h-9' src={slack} alt="" />
                </div>

                <div>
                    <img className='w-36 h-9' src={google} alt="" />

                </div>

                <div>
                    <img className='w-36 h-9' src={uber} alt="" />

                </div>


                <div class="">
                    <img className='w-36 h-9' src={netflix} alt="" />

                </div>


                <div>
                    <img className='w-36 h-9' src={airbnb} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Clint;