'use client';

import React from 'react';
import { PageStat } from './types';
import { PageStatCard } from './PageStatCard';
import './PageStatsRow.css';

interface PageStatsRowProps {
  stats: PageStat[];
}

export const PageStatsRow: React.FC<PageStatsRowProps> = ({ stats }) => {
  return (
    <div className="page-stats-row">
      {stats.map((stat, index) => (
        <PageStatCard key={index} stat={stat} />
      ))}
    </div>
  );
};
