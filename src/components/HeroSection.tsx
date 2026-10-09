'use client';

import React from 'react';
import Image from 'next/image';
import { handleCheckout } from '@/lib/checkout';

export function HeroSection() {
  return (
    <section className="hero-section" aria-label="Product Overview">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            {/* Social Proof Anchor */}
            <div className="social-proof-badge">
              <div className="stars-row" aria-label="Rated 4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span>
                <span className="proof-score">4.9/5</span> from 1,420+ backyard growers
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">Stop Guessing Your Garden Spacing.</h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              High-yield raised bed blueprints, exact square-foot companion grids, and DIY build
              plans ready to print in seconds.
            </p>

            {/* Value bullets */}
            <ul className="hero-bullets">
              <li className="hero-bullet-item">
                <svg
                  className="bullet-check"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>4 modular layouts: 4×4, 4×8, 2×8 walkway, and L-shape corner</span>
              </li>
              <li className="hero-bullet-item">
                <svg
                  className="bullet-check"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Companion cheat sheet: Pair natural pest repellents, avoid bad neighbors</span>
              </li>
              <li className="hero-bullet-item">
                <svg
                  className="bullet-check"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Lumber cut lists, screw hardware sizes, and soil cubic yard math</span>
              </li>
            </ul>

            {/* Price & Primary CTA */}
            <div className="hero-cta-block">
              <div className="price-row">
                <span className="price-current">$19</span>
                <span className="price-original">$47</span>
                <span className="price-discount-tag">Save 60%</span>
              </div>

              <button
                id="hero-cta-btn"
                className="btn-cta-primary"
                onClick={handleCheckout}
                aria-label="Get The Blueprint Pack for $19"
              >
                <span>Get The Blueprint Pack ($19)</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <div className="microcopy-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Instant PDF download / One-time payment / Lifetime updates</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Mockup */}
          <div className="hero-media-wrapper">
            <Image
              src="/assets/blueprint-bundle-mockup.webp"
              alt="High-resolution printed raised garden bed blueprint and square foot layout pages"
              className="hero-image"
              width={1200}
              height={896}
              priority
              sizes="(max-width: 640px) 100vw, 550px"
            />
            <div className="media-badges-strip">
              <span className="media-pill">4 Ready-to-Print Blueprints</span>
              <span className="media-pill">Companion Chart</span>
              <span className="media-pill">Cedar Cut Lists</span>
              <span className="media-pill">Soil Math Formula</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
