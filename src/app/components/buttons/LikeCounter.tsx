'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './LikeCounter.css';

interface LikeCounterProps {
  likes: number;
}

export const LikeCounter: React.FC<LikeCounterProps> = ({ likes }) => {
  return (
    <div className="like-counter">
      <FaHeart className="text-red-500" />
      <span>{likes}</span>
    </div>
  );
};
