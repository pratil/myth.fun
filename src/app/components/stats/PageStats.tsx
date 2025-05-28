'use client';

import React from 'react';
import PageStatsGrid from './PageStatsGrid';
import statsData from '@/app/data/stats.json';

export default function PageStats() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Statistics</h1>
        <div className="mt-6">
          <PageStatsGrid stats={statsData.stats} />
        </div>
      </div>
    </div>
  );
}
