import { RecommendationCategory, RecommendationData } from './types';

const commonSortOptions = [
  {
    id: 'newest',
    label: 'Newest First',
    sortFn: (a: RecommendationData, b: RecommendationData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  },
  {
    id: 'most-liked',
    label: 'Most Liked',
    sortFn: (a: RecommendationData, b: RecommendationData) => b.likes - a.likes,
  },
  {
    id: 'highest-rated',
    label: 'Highest Rated',
    sortFn: (a: RecommendationData, b: RecommendationData) => b.rating - a.rating,
  },
];

const commonFilterOptions = [
  {
    id: 'highly-rated',
    label: 'Highly Rated (4.5+)',
    filterFn: (item: RecommendationData) => item.rating >= 4.5,
  },
  {
    id: 'popular',
    label: 'Popular (30+ likes)',
    filterFn: (item: RecommendationData) => item.likes >= 30,
  },
];

const commonTabs = [
  {
    id: 'all',
    label: 'All',
    defaultSort: 'newest',
    defaultFilters: [],
    sortOptions: commonSortOptions,
    filterOptions: commonFilterOptions,
  },
  {
    id: 'trending',
    label: 'Trending',
    defaultSort: 'most-liked',
    defaultFilters: ['popular'],
    sortOptions: commonSortOptions,
    filterOptions: commonFilterOptions,
  },
];

export const recommendationCategories: RecommendationCategory[] = [
  {
    id: 'songs',
    label: 'Songs',
    path: '/recommendations/songs',
    description: 'Find your next favorite song',
    tabs: commonTabs,
    defaultSort: 'newest',
    defaultFilters: [],
    sortOptions: commonSortOptions,
    filterOptions: commonFilterOptions,
    sampleData: [
      {
        id: 'song1',
        title: 'Bohemian Rhapsody',
        subtitle: 'Queen',
        likes: 45,
        rating: 4.8,
        tags: [{ id: 'rock', label: 'Rock', color: '#ff4444' }],
        createdAt: '2025-02-08T10:00:00Z',
      },
      {
        id: 'song2',
        title: 'Imagine',
        subtitle: 'John Lennon',
        likes: 35,
        rating: 4.6,
        tags: [{ id: 'classic', label: 'Classic', color: '#4444ff' }],
        createdAt: '2025-02-07T10:00:00Z',
      },
    ],
  },
  {
    id: 'movies',
    label: 'Movies',
    path: '/recommendations/movies',
    description: 'Discover amazing movies to watch',
    tabs: commonTabs,
    defaultSort: 'newest',
    defaultFilters: [],
    sortOptions: commonSortOptions,
    filterOptions: commonFilterOptions,
    sampleData: [
      {
        id: 'movie1',
        title: 'Inception',
        subtitle: 'Christopher Nolan',
        likes: 50,
        rating: 4.9,
        tags: [{ id: 'scifi', label: 'Sci-Fi', color: '#44ff44' }],
        createdAt: '2025-02-08T11:00:00Z',
      },
      {
        id: 'movie2',
        title: 'The Godfather',
        subtitle: 'Francis Ford Coppola',
        likes: 40,
        rating: 4.7,
        tags: [{ id: 'drama', label: 'Drama', color: '#ffff44' }],
        createdAt: '2025-02-07T11:00:00Z',
      },
    ],
  },
  {
    id: 'books',
    label: 'Books',
    path: '/recommendations/books',
    description: 'Get personalized book recommendations',
    tabs: commonTabs,
    defaultSort: 'newest',
    defaultFilters: [],
    sortOptions: commonSortOptions,
    filterOptions: commonFilterOptions,
    sampleData: [
      {
        id: 'book1',
        title: '1984',
        subtitle: 'George Orwell',
        likes: 38,
        rating: 4.7,
        tags: [{ id: 'dystopian', label: 'Dystopian', color: '#ff44ff' }],
        createdAt: '2025-02-08T12:00:00Z',
      },
      {
        id: 'book2',
        title: 'To Kill a Mockingbird',
        subtitle: 'Harper Lee',
        likes: 32,
        rating: 4.6,
        tags: [{ id: 'classic', label: 'Classic', color: '#4444ff' }],
        createdAt: '2025-02-07T12:00:00Z',
      },
    ],
  },
];
