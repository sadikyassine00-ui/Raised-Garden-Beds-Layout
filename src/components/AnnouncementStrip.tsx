import React from 'react';

export function AnnouncementStrip() {
  return (
    <header className="announcement-strip" role="banner">
      <div className="announcement-inner">
        <span className="announcement-tag">Instant Access</span>
        <span className="announcement-text">
          Digital download sent immediately <span className="announcement-sep">/</span> Standard US
          Letter &amp; A4 formats included{' '}
          <span className="announcement-sep announcement-sep-desktop">/</span>{' '}
          <span className="announcement-extra-desktop">Ready to print in seconds</span>
        </span>
      </div>
    </header>
  );
}
