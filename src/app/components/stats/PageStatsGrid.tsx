'use client';

import React from 'react';
import { PageStat } from './types';
import { PageStatsRow } from './PageStatsRow';
import './PageStatsGrid.css';

interface PageStatsGridProps {
  stats: PageStat[][];
}

const PageStatsGrid: React.FC<PageStatsGridProps> = ({ stats }) => {
  return (
    <div className="page-stats-grid">
      {stats.map((rowStats, index) => (
        <PageStatsRow key={index} stats={rowStats} />
      ))}
    </div>
  );
};

export default PageStatsGrid;
