import { useEffect, useState } from 'react';
import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  const [toursArr, setToursArr] = useState();

  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
