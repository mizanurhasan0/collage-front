import { Start } from '@/assets';
import React, { useState } from 'react';

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index, isHalf) => {
    if (isHalf) {
      setRating(index + 0.5);
    } else {
      setRating(index + 1);
    }
  };

  const handleMouseEnter = (index, isHalf) => {
    if (!rating || (rating && index + 1 !== Math.ceil(rating) && index !== Math.floor(rating))) {
      if (isHalf) {
        setRating(index + 0.5);
      } else {
        setRating(index + 1);
      }
    }
  };

  const handleMouseLeave = () => {
    if (rating % 1 === 0.5) {
      setRating(Math.floor(rating));
    }
  };
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex items-center"
          onClick={() => handleStarClick(index, false)}
          onMouseEnter={() => handleMouseEnter(index, false)}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${index < Math.floor(rating) || (index === Math.floor(rating) && rating % 1 === 0.5) ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => handleStarClick(index, true)}
            onMouseEnter={() => handleMouseEnter(index, true)}
            onMouseLeave={handleMouseLeave}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          </svg>
        </div>
      ))}
      <p className="mt-2">Rating: {rating}</p>
    </div>
  );

}
