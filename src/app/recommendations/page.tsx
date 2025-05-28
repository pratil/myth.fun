'use client';

import React from 'react';
import Link from 'next/link';
import { FaBook, FaFilm, FaMusic } from 'react-icons/fa';
import { recommendationCategories } from '@/app/components/recommendations/config';
import './styles.css';

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'books':
      return <FaBook size={24} />;
    case 'movies':
      return <FaFilm size={24} />;
    case 'songs':
      return <FaMusic size={24} />;
    default:
      return null;
  }
};

const RecommendationsPage = () => {
  return (
    <div className="recommendation-page">
      <h1 className="page-title">Recommendations</h1>
      <div className="categories-grid">
        {recommendationCategories.map((category) => (
          <Link
            key={category.id}
            href={category.path}
            className="category-card"
          >
            <div className="category-icon">{getCategoryIcon(category.id)}</div>
            <h2 className="category-title">{category.label}</h2>
            <p className="category-description">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
