import React from 'react';

const Service = ({ service }) => {
    const { name, image, description } = service;




    return (
        <div class="card w-96 bg-base-100 ml-1 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
           
        </div>
    );
}

export default Service;