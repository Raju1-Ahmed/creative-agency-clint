import React from 'react';
import UseService from '../../hooks/UseService';
import ServiceList from './ServiceList';

const Service = () => {
    const [serviceLists, setServiceList] = UseService([]);
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-2 gap-4 px-5 '>

                {
                    serviceLists.map(serviceList => <ServiceList
                        key={serviceList._id}
                        serviceList={serviceList}
                    />)
                }
            </div>
        </div>
    );
};

export default Service;