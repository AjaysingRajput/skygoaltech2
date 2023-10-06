import React, { useState } from 'react'
import image1 from '../assets/card-image1.png';
import image2 from '../assets/card-image2.png';
import image3 from '../assets/card-image3.png';
import image4 from '../assets/card-image4.png';

const Destination = () => {
    const Cards = [
        {
            id: 1,
            image: image1,
            university: "Harvard University",
            place: "Cambridge, Massachusetts, UK"
        },
        {
            id: 2,
            image: image2,
            university: "Oxford University",
            place: "Oxford, England"
        },
        {
            id:3,
            image: image3,
            university: "Stanford University",
            place: "Stanford Califonia"
        },
        {
            id:4,
            image: image4,
            university: "Nangang Technology",
            place: "Nanyang Ave, Singapure "
        }
    ]
 
      // Useing map to create an array of JSX elements
  const cardElements = Cards.map((item) => (
  
      <div className='destination-card key={item.id} '>
        <img src={item.image} alt="image-col" />
        <div className='card-bottom'>
          <h1>{item.university}</h1>
          <div className='Uni-place'>
            <p>{item.place}</p>
            <span className='uni-point'>...</span>
          </div>
        </div>
      </div>
    
  ));

  // Returning the array of JSX elements
  return (
    
      
      <div className='destination-main'>
      <div className='our-Destination'>
        <h1>Our Destinations</h1>
      </div>
      <div className='desti-cards'>
      {cardElements}
      </div>
      </div>
      
      
    
  );
}



export default Destination
