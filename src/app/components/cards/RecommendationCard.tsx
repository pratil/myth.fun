'use client';

import React from 'react';
import { Tag } from '../recommendations/types';
import './RecommendationCard.css';

interface RecommendationCardProps {
  title: string;
  subtitle: string;
  likes: number;
  rating: number;
  tags: Tag[];
  onRate: (rating: number) => void;
  onCardClick: () => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  subtitle,
  likes,
  rating,
  tags,
  onRate,
  onCardClick,
}) => {
  return (
    <div className="recommendation-card" onClick={onCardClick}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        
        <div className="card-stats">
          <span className="likes">❤️ {likes}</span>
          <span className="rating">⭐ {rating.toFixed(1)}</span>
        </div>

        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="tag"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="card-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`star ${star <= rating ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onRate(star);
              }}
            >
              ⭐
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
