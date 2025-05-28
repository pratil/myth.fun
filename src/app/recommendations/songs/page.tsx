'use client';

import React from 'react';
import { RecommendationPage } from '@/app/components/recommendations/RecommendationPage';
import { recommendationCategories } from '@/app/components/recommendations/config';

const SongsPage = () => {
  const songsConfig = recommendationCategories.find(cat => cat.id === 'songs')!;
  return (
    <RecommendationPage 
      initialData={songsConfig.sampleData} 
      title={songsConfig.label}
      tabs={songsConfig.tabs}
    />
  );
};

export default SongsPage;
