'use client';

import React from 'react';
import { RecommendationData, TabConfig } from './types';
import { RecommendationControls } from './RecommendationControls';
import { RecommendationGrid } from './RecommendationGrid';
import { useRecommendations } from './hooks/useRecommendations';
import './styles.css';

interface RecommendationPageProps {
  initialData: RecommendationData[];
  title: string;
  tabs: TabConfig[];
}

export const RecommendationPage: React.FC<RecommendationPageProps> = ({
  initialData,
  title,
  tabs,
}) => {
  const {
    activeTab,
    activeSort,
    activeFilters,
    currentTab,
    displayedItems,
    handleTabChange,
    handleSortChange,
    handleFilterChange,
    handleRate,
    handleCardClick,
  } = useRecommendations(initialData, tabs);

  return (
    <div className="recommendation-page">
      <h1 className="page-title">{title}</h1>
      
      <RecommendationControls
        tabs={tabs}
        activeTab={activeTab}
        activeSort={activeSort}
        activeFilters={activeFilters}
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />

      <RecommendationGrid
        items={displayedItems}
        onRate={handleRate}
        onCardClick={handleCardClick}
      />
    </div>
  );
};
