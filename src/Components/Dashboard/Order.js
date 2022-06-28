import React from 'react';

const Order = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <form>
                <div className="pt-2">
                    <input type="text" placeholder="Your Name / Company Name" className="input w-full  input-bordered " />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder="Your Email or Address" className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder="Graphsic Design" className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder="Projects Details" className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder="Price" className="input w-56 input-bordered" />
                    <input type="text" placeholder="Your Email or Address" className="input w-96 m-3 input-bordered" />
                </div>
                <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-wide   text-white' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Order;