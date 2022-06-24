import React from 'react';

const Work = ({ work }) => {
    const { image } = work;

    return (
        <div class="carousel carousel-center justify-center max-w-md">
        <div class="  carousel-item w-64 h-48">
          <img  src={image} class="rounded-box" />
        </div> 
      </div>
    );
};

export default Work;