import React, { useState } from 'react';
import Service from './Service';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const [services, setService] = useState([])

    fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <div className='grid overflow mb-40 grid-cols-1  sm:grid-cols-1   md:grid-cols-1  lg:grid-cols-1'>
            <h2 className='text-center text-slate-700 dark:text-slate-500 text-6xl	 text-lg mb-9 '>
                Provide awesome <span className='text-green-900'>Services</span> </h2>

            <Slider {...settings}>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                />)}
            </Slider>
        </div>
    );
};

export default Services;