import React from 'react';
import banner from '../../../Asset/logos/Frame.png'
import menulogo from '../../../Asset/logos/logo.png'

import slack from '../../../Asset/logos/slack.png'
import google from '../../../Asset/logos/google.png'
import uber from '../../../Asset/logos/uber.png'
import netflix from '../../../Asset/logos/netflix.png'
import airbnb from '../../../Asset/logos/airbnb.png'

const Navbar = () => {
    return (
        <div>

            <div className='menubg'>
                <div className='bgmenu'>
                    <div class="navbar">
                        <div class="navbar-start">
                            <div class="dropdown">
                                <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content text-black mt-3 p-2 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <a class=" normal-case text-black	 text-xl">
                                <img className='w-28 h-12' src={menulogo} alt="" />
                            </a>
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal text-black	 p-0">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <div class="navbar-end">
                            <a class="btn btn-ghost normal-case text-black	 text-xl">Get started</a>

                        </div>
                    </div>
                    <div class="card lg:card-side mt-32">
                        <div class="card-body">
                            <h2 class="card-title justify-center text-black	">Let’s Grow Your Brand To TheNext Level</h2>
                            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div class="card-actions justify-center	">
                                <button class="btn btn-black text-white">Hire us</button>
                            </div>
                        </div>
                        <figure><img className='max-h-96 min-w-96 ' src={banner} alt="Shoes" /></figure>

                    </div>
                </div>
            </div>
            <div className='mt-48'>
                <div class="stats stats-vertical lg:stats-horizontal">

                <div class="stat">
                    <img className='w-36 h-9' src={slack} alt="" />
                </div>

                <div class="stat">
                <img className='w-36 h-9' src={google} alt="" />

                </div>

                <div class="stat">
                <img className='w-36 h-9' src={uber} alt="" />

                </div>


                <div class="stat">
                <img className='w-36 h-9' src={netflix} alt="" />

                </div>


                <div class="stat">
                <img className='w-36 h-9' src={airbnb} alt="" />

                </div>

            </div>
            </div>
        <br />
        <br />
        <br />
        <br />

        </div>

    );
};

export default Navbar;