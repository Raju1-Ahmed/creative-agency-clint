import React from 'react';

const Footer = () => {
    return (
        <div className='footerbg fixed py-20'>
            <div className='grid grid-cols-1 sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-2 gap-4'>
                <div>
                    <h2 className='text-4xl font-semibold text-black p-3 leading-10	'>Let us handle your project, professionally.</h2>
                    <p className='text-sm text-center  font-light p-3 text-black leading-6'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div >
                    <div class="card flex-shrink-0 w-full max-w-sm ">
                        <div class="card-body ">
                            <div class="form-control">
                                <input type="text" placeholder="email" class="input bg-white input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="password" class="input bg-white input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea class="resize-y rounded-md"></textarea>
                            </div>
                            {/* <button class=" w-44 btn justify-start btn-black">Apply</button> */}
                            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer footer-center mt-16  text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;