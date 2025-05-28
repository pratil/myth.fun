export interface Tag {
  id: string;
  label: string;
  color: string;
}

export interface RecommendationData {
  id: string;
  title: string;
  subtitle: string;
  likes: number;
  rating: number;
  tags: Tag[];
  createdAt: string;
}

export interface SortOption {
  id: string;
  label: string;
  sortFn: (a: RecommendationData, b: RecommendationData) => number;
}

export interface FilterOption {
  id: string;
  label: string;
  filterFn: (item: RecommendationData) => boolean;
}

export interface TabConfig {
  id: string;
  label: string;
  defaultSort: string;
  defaultFilters: string[];
  sortOptions: SortOption[];
  filterOptions: FilterOption[];
}

export interface RecommendationCategory {
  id: string;
  label: string;
  description: string;
  path: string;
  tabs: TabConfig[];
  defaultSort: string;
  defaultFilters: string[];
  sortOptions: SortOption[];
  filterOptions: FilterOption[];
  sampleData: RecommendationData[];
}
