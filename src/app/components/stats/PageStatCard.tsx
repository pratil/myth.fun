'use client';

import React from 'react';
import { PageStat } from './types';
import './PageStatCard.css';

interface PageStatCardProps {
  stat: PageStat;
}

export const PageStatCard: React.FC<PageStatCardProps> = ({ stat }) => {
  return (
    <div className="page-stat-card">
      <div className="stat-content">
        <div className="stat-label text-sm font-medium text-gray-500">{stat.label}</div>
        <div className="stat-value mt-1 text-3xl font-semibold text-gray-900">{stat.value}</div>
      </div>
    </div>
  );
};
