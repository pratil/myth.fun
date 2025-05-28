'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './RatingButton.css';

interface RatingButtonProps {
  rating: number;
  maxRating: number;
  onRate: (rating: number) => void;
}

export const RatingButton: React.FC<RatingButtonProps> = ({ 
  rating, 
  maxRating = 5, 
  onRate 
}) => {
  return (
    <div className="rating-button-group">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          className={`rating-heart ${index < rating ? 'active' : ''}`}
          onClick={() => onRate(index + 1)}
        >
          <FaHeart />
        </button>
      ))}
    </div>
  );
};
