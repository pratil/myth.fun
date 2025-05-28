import { useState, useMemo } from 'react';
import { RecommendationData, TabConfig } from '../types';

export const useRecommendations = (initialData: RecommendationData[], tabs: TabConfig[]) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [items, setItems] = useState<RecommendationData[]>(initialData);
  const [activeSort, setActiveSort] = useState(tabs[0].defaultSort);
  const [activeFilters, setActiveFilters] = useState<string[]>(tabs[0].defaultFilters || []);

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  const handleTabChange = (tabId: string) => {
    const newTab = tabs.find(tab => tab.id === tabId)!;
    setActiveTab(tabId);
    setActiveSort(newTab.defaultSort);
    setActiveFilters(newTab.defaultFilters || []);
  };

  const handleSortChange = (sortId: string) => {
    setActiveSort(sortId);
  };

  const handleFilterChange = (filterId: string, isChecked: boolean) => {
    if (isChecked) {
      setActiveFilters([...activeFilters, filterId]);
    } else {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    }
  };

  const handleRate = (itemId: string, rating: number) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, rating } : item
    ));
  };

  const handleCardClick = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const displayedItems = useMemo(() => {
    let filtered = [...items];

    // Apply active filters
    activeFilters.forEach(filterId => {
      const filter = currentTab.filterOptions.find(f => f.id === filterId);
      if (filter?.filterFn) {
        filtered = filtered.filter(filter.filterFn);
      }
    });

    // Apply active sort
    const sort = currentTab.sortOptions.find(s => s.id === activeSort);
    if (sort?.sortFn) {
      filtered.sort(sort.sortFn);
    }

    return filtered;
  }, [items, activeFilters, activeSort, currentTab]);

  return {
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
  };
};
