import React, { useEffect, useState } from 'react';
import { axios } from 'react-axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://creative-agency-c2st.onrender.com/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            );
            setOrders(data)
        };
        getOrders();
    }, [user])
    return (
        <div>
            <h2>{orders.length}</h2>
        </div>
    );
};

export default MyOrders;