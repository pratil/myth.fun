'use client';

import React from 'react';
import { RecommendationCard } from '../cards/RecommendationCard';
import { RecommendationData } from './types';

interface RecommendationGridProps {
  items: RecommendationData[];
  onRate: (itemId: string, rating: number) => void;
  onCardClick: (itemId: string) => void;
}

export const RecommendationGrid: React.FC<RecommendationGridProps> = ({
  items,
  onRate,
  onCardClick,
}) => {
  return (
    <div className="recommendations-grid">
      {items.map(item => (
        <RecommendationCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          likes={item.likes}
          rating={item.rating}
          tags={item.tags}
          onRate={(rating) => onRate(item.id, rating)}
          onCardClick={() => onCardClick(item.id)}
        />
      ))}
    </div>
  );
};
