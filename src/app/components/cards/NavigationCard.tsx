'use client';

import React from 'react';
import Link from 'next/link';
import './NavigationCard.css';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  title,
  description,
  icon,
  path,
}) => {
  return (
    <Link href={path} className="navigation-card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </Link>
  );
};
