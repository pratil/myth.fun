'use client';

import React from 'react';
import { TabGroup } from '../tabs/TabGroup';
import { TabConfig } from './types';

interface RecommendationControlsProps {
  tabs: TabConfig[];
  activeTab: string;
  activeSort: string;
  activeFilters: string[];
  currentTab: TabConfig;
  onTabChange: (tabId: string) => void;
  onSortChange: (sortId: string) => void;
  onFilterChange: (filterId: string, isChecked: boolean) => void;
}

export const RecommendationControls: React.FC<RecommendationControlsProps> = ({
  tabs,
  activeTab,
  activeSort,
  activeFilters,
  currentTab,
  onTabChange,
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div className="page-controls">
      <TabGroup 
        tabs={tabs.map(tab => ({ id: tab.id, label: tab.label }))}
        activeTab={activeTab} 
        onTabChange={onTabChange}
      />
      
      <div className="controls-row">
        <div className="sort-controls">
          <label>Sort by:</label>
          <select 
            value={activeSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            {currentTab.sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-controls">
          {currentTab.filterOptions.map(filter => (
            <label key={filter.id} className="filter-checkbox">
              <input
                type="checkbox"
                checked={activeFilters.includes(filter.id)}
                onChange={(e) => onFilterChange(filter.id, e.target.checked)}
              />
              {filter.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
