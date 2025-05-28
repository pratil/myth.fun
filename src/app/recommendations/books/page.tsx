'use client';

import React from 'react';
import { RecommendationPage } from '@/app/components/recommendations/RecommendationPage';
import { recommendationCategories } from '@/app/components/recommendations/config';

const BooksPage = () => {
  const booksConfig = recommendationCategories.find(cat => cat.id === 'books')!;
  return (
    <RecommendationPage 
      initialData={booksConfig.sampleData} 
      title={booksConfig.label}
      tabs={booksConfig.tabs}
    />
  );
};

export default BooksPage;
