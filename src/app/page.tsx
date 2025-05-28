'use client';

import React from 'react';
import { FaChartBar, FaRegLightbulb } from 'react-icons/fa';
import { NavigationCard } from './components/cards/NavigationCard';
import './home.css';

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="home-title">myth.fun</h1>
      <p className="home-subtitle">Explore your personalized recommendations and stats</p>
      
      {/* <div className="navigation-grid">
        <NavigationCard
          title="Statistics"
          description="View detailed statistics and analytics about your activity"
          icon={<FaChartBar />}
          path="/stats"
        />
        <NavigationCard
          title="Recommendations"
          description="Discover personalized recommendations for movies, books, songs, and more"
          icon={<FaRegLightbulb />}
          path="/recommendations"
        />
      </div> */}
    </main>
  );
}
