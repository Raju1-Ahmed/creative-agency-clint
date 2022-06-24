import React from 'react';
import Banner from '../Banner/Banner';
import Clint from '../Clint';
import Feedbacks from '../Feedback/Feedbacks';
import Services from '../Service/Services';
import Works from '../Work/Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Clint></Clint>
            <Services></Services> 
            <Works></Works>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;