import React from 'react';

export function BrandHeader() {
  return (
    <div className="brand-header">
      <div className="brand-inner">
        <div className="brand-mark">
          <svg
            className="brand-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path>
            <path d="M12 6v12"></path>
            <path d="M8 10l4-4 4 4"></path>
            <path d="M7 15c2-1 4-1 5 0"></path>
            <path d="M12 15c1-1 3-1 5 0"></path>
          </svg>
          <span>TERRA BLUEPRINTS</span>
        </div>
        <span className="brand-tag">2026 EDITION</span>
      </div>
    </div>
  );
}
