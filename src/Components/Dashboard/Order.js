import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Order = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://creative-agency-c2st.onrender.com/service/${serviceId}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    const handlePlaceOrder = event => {
        event.preventDefault();
        const orderCollect = {

            companyName: user.displayName,
            companyAddress: user.email,
            productsName: service.name,
            projectDetails: service.description,
            price: event.target.price.value,
            productFile: event.target.productFile.value
        }
        axios.post('https://creative-agency-c2st.onrender.com/orders', orderCollect)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    event.target.reset();
                    toast('Your order is booked!!!');
                }
            })
    }

    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <form onSubmit={handlePlaceOrder}>
                <div className="pt-2">
                    <input type="text"   value={user?.displayName} placeholder="Your Name / Company Name" className="input w-full  input-bordered " />
                </div>
                <div className="pt-2">
                    <input type="text" value={user?.email} placeholder="Your Email or Address" className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder="Graphsic Design" value={service.name}  className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" name="projectDetails" value={service.description} placeholder="Projects Details" className="input w-full input-bordered" />
                </div>
                <div className="pt-2">
                    <input type="text" name="price" placeholder="Price" className="input w-56 input-bordered" />
                    <input type="file" name="productFile" className="input w-96 m-3 input-bordered" />
                </div>
                <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-wide   text-white' type="submit" value="Send" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Order;