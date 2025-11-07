import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => (
  <div className={`relative ${className}`}>
    {/* Modern car icon with Ghana colors */}
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Ghana flag background circle */}
      <circle cx="50" cy="50" r="45" fill="url(#ghanaGradient)" />
      
      {/* Modern car silhouette */}
      <path d="M20 60 L30 45 L70 45 L80 60 L75 65 L25 65 Z" fill="white" />
      <circle cx="35" cy="65" r="8" fill="#333" />
      <circle cx="65" cy="65" r="8" fill="#333" />
      <rect x="35" y="45" width="30" height="10" fill="white" />
      
      <defs>
        <linearGradient id="ghanaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#006A4E" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CE1126" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Logo;