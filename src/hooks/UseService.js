import React, { useEffect, useState } from 'react';

const UseService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-c2st.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default UseService;