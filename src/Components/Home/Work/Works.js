import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work from './Work';

const Works = () => {
    const [works, setWorks] = useState([])
console.log(works);
    fetch('Ourwork.json')
        .then(res => res.json())
        .then(data => setWorks(data))




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
    }
    return (
        <div className='carusel  px-16 py-20  bg-neutral rounded-box'>
            <h2 className='text-center text-slate-700 dark:text-slate-500 text-6xl	 text-lg mb-9 '>
            Here are some of <span className='text-green-900'> our works: {works.length}</span> </h2>
                <Slider {...settings}>
                    {works.map(work => <Work
                        key={work._id}
                        work={work}
                    />)}
                </Slider>

            </div>
    );
};

export default Works;