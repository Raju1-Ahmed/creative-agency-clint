import React, { useState } from 'react';
import Feedback from './Feedback';

const Clints = () => {
    const [feedbacks, setClint] = useState([])


    fetch('Clintfeedback.json')
        .then(res => res.json())
        .then(data => setClint(data))

    return (
        <div className='mb-40 mt-40 py-9 '>
            <h2 className='text-center text-slate-700 dark:text-slate-500 text-6xl	 text-lg mb-9 '>
                Clients<span className='text-green-900flex-1'>Feedback {feedbacks.length}</span> </h2>

            <div className='grid grid-cols-1 sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-4 '>
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback._id}
                        feedback={feedback}
                    />)
                }
            </div>
        </div>
    );
};

export default Clints;