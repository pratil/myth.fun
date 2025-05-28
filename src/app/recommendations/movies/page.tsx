'use client';

import React from 'react';
import { RecommendationPage } from '@/app/components/recommendations/RecommendationPage';
import { recommendationCategories } from '@/app/components/recommendations/config';

const MoviesPage = () => {
  const moviesConfig = recommendationCategories.find(cat => cat.id === 'movies')!;
  return (
    <RecommendationPage 
      initialData={moviesConfig.sampleData} 
      title={moviesConfig.label}
      tabs={moviesConfig.tabs}
    />
  );
};

export default MoviesPage;
