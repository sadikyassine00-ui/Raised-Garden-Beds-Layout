'use client';

import React, { useState } from 'react';
import { PLANT_DATA, CropKey } from '@/lib/plantData';

type TabKey = 'tab-layout' | 'tab-companion' | 'tab-cutlist' | 'tab-timeline';

interface CellItem {
  id: number;
  crop: CropKey;
  icon: string;
  name: string;
  qty: string;
}

const BED_CELLS: CellItem[] = [
  // Row 1: North Back (Trellis)
  { id: 1, crop: 'tomato', icon: '🍅', name: 'Tomato', qty: '1 / sq.ft' },
  { id: 2, crop: 'tomato', icon: '🍅', name: 'Tomato', qty: '1 / sq.ft' },
  { id: 3, crop: 'tomato', icon: '🍅', name: 'Tomato', qty: '1 / sq.ft' },
  { id: 4, crop: 'tomato', icon: '🍅', name: 'Tomato', qty: '1 / sq.ft' },
  { id: 5, crop: 'beans', icon: '🫘', name: 'Beans', qty: '9 / sq.ft' },
  { id: 6, crop: 'beans', icon: '🫘', name: 'Beans', qty: '9 / sq.ft' },
  { id: 7, crop: 'beans', icon: '🫘', name: 'Beans', qty: '9 / sq.ft' },
  { id: 8, crop: 'beans', icon: '🫘', name: 'Beans', qty: '9 / sq.ft' },
  // Row 2: Mid-Back
  { id: 9, crop: 'basil', icon: '🌿', name: 'Basil', qty: '2 / sq.ft' },
  { id: 10, crop: 'basil', icon: '🌿', name: 'Basil', qty: '2 / sq.ft' },
  { id: 11, crop: 'pepper', icon: '🫑', name: 'Pepper', qty: '1 / sq.ft' },
  { id: 12, crop: 'pepper', icon: '🫑', name: 'Pepper', qty: '1 / sq.ft' },
  { id: 13, crop: 'pepper', icon: '🌶️', name: 'Chili', qty: '1 / sq.ft' },
  { id: 14, crop: 'pepper', icon: '🌶️', name: 'Chili', qty: '1 / sq.ft' },
  { id: 15, crop: 'marigold', icon: '🌼', name: 'Marigold', qty: '4 / sq.ft' },
  { id: 16, crop: 'marigold', icon: '🌼', name: 'Marigold', qty: '4 / sq.ft' },
  // Row 3: Mid-Front
  { id: 17, crop: 'carrots', icon: '🥕', name: 'Carrots', qty: '16 / sq.ft' },
  { id: 18, crop: 'carrots', icon: '🥕', name: 'Carrots', qty: '16 / sq.ft' },
  { id: 19, crop: 'carrots', icon: '🥕', name: 'Carrots', qty: '16 / sq.ft' },
  { id: 20, crop: 'carrots', icon: '🥕', name: 'Carrots', qty: '16 / sq.ft' },
  { id: 21, crop: 'lettuce', icon: '🥬', name: 'Lettuce', qty: '4 / sq.ft' },
  { id: 22, crop: 'lettuce', icon: '🥬', name: 'Lettuce', qty: '4 / sq.ft' },
  { id: 23, crop: 'lettuce', icon: '🥬', name: 'Lettuce', qty: '4 / sq.ft' },
  { id: 24, crop: 'lettuce', icon: '🥬', name: 'Lettuce', qty: '4 / sq.ft' },
  // Row 4: South Front (Low Growth)
  { id: 25, crop: 'radish', icon: '🌱', name: 'Radish', qty: '16 / sq.ft' },
  { id: 26, crop: 'radish', icon: '🌱', name: 'Radish', qty: '16 / sq.ft' },
  { id: 27, crop: 'radish', icon: '🌱', name: 'Radish', qty: '16 / sq.ft' },
  { id: 28, crop: 'radish', icon: '🌱', name: 'Radish', qty: '16 / sq.ft' },
  { id: 29, crop: 'spinach', icon: '🥬', name: 'Spinach', qty: '9 / sq.ft' },
  { id: 30, crop: 'spinach', icon: '🥬', name: 'Spinach', qty: '9 / sq.ft' },
  { id: 31, crop: 'marigold', icon: '🌼', name: 'Marigold', qty: '4 / sq.ft' },
  { id: 32, crop: 'marigold', icon: '🌼', name: 'Marigold', qty: '4 / sq.ft' },
];

export function InteractivePreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('tab-layout');
  const [selectedCrop, setSelectedCrop] = useState<CropKey>('tomato');
  const [selectedCellId, setSelectedCellId] = useState<number>(1);

  const currentPlant = PLANT_DATA[selectedCrop] || PLANT_DATA.tomato;

  return (
    <section className="section-padding" aria-label="Interactive Sample Previews">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Sample Preview</p>
          <h2 className="section-title">Explore What's Inside Before You Buy</h2>
          <p className="section-desc">
            Test drive the 4'x8' layout grid, companion matrix, and lumber cut sheet below.
          </p>
        </div>

        <div className="preview-container">
          {/* Navigation Tabs */}
          <div className="preview-tabs-nav" role="tablist">
            <button
              className={`preview-tab-btn ${activeTab === 'tab-layout' ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'tab-layout'}
              onClick={() => setActiveTab('tab-layout')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path>
              </svg>
              <span>4'x8' Grid Layout</span>
            </button>
            <button
              className={`preview-tab-btn ${activeTab === 'tab-companion' ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'tab-companion'}
              onClick={() => setActiveTab('tab-companion')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8M12 8v8"></path>
              </svg>
              <span>Companion Matrix</span>
            </button>
            <button
              className={`preview-tab-btn ${activeTab === 'tab-cutlist' ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'tab-cutlist'}
              onClick={() => setActiveTab('tab-cutlist')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Cut List &amp; Soil</span>
            </button>
            <button
              className={`preview-tab-btn ${activeTab === 'tab-timeline' ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'tab-timeline'}
              onClick={() => setActiveTab('tab-timeline')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
              </svg>
              <span>Rotation Calendar</span>
            </button>
          </div>

          {/* TAB 1: 4x8 GRID */}
          <div
            id="tab-layout"
            className={`preview-tab-panel ${activeTab === 'tab-layout' ? 'is-active' : ''}`}
            role="tabpanel"
          >
            <div className="grid-preview-header">
              <div className="grid-title-group">
                <h4>4' x 8' High-Yield Raised Bed Grid</h4>
                <p>Tap any square to view spacing, density, and companion benefits.</p>
              </div>
              <div className="grid-legend">
                <span className="legend-tag">
                  <span className="legend-dot" style={{ background: '#1B4D3E' }}></span> Trellised
                </span>
                <span className="legend-tag">
                  <span className="legend-dot" style={{ background: '#C88A58' }}></span> Heavy Feeder
                </span>
                <span className="legend-tag">
                  <span className="legend-dot" style={{ background: '#E5A118' }}></span> Companion Ally
                </span>
              </div>
            </div>

            {/* 32-Cell Raised Bed Matrix */}
            <div className="garden-bed-frame">
              <div className="bed-compass-marker">
                <span>NORTH (Trellis Side)</span>
                <span>4 FT x 8 FT CEDAR BED</span>
                <span>SUN EXPOSURE</span>
              </div>

              <div className="sfg-grid-matrix" id="garden-grid">
                {BED_CELLS.map((cell) => (
                  <button
                    key={cell.id}
                    className={`grid-cell ${selectedCellId === cell.id ? 'is-selected' : ''}`}
                    onClick={() => {
                      setSelectedCellId(cell.id);
                      setSelectedCrop(cell.crop);
                    }}
                    aria-label={`${cell.name} square`}
                  >
                    <span className="cell-plant-icon">{cell.icon}</span>
                    <span className="cell-plant-name">{cell.name}</span>
                    <span className="cell-plant-qty">{cell.qty}</span>
                  </button>
                ))}
              </div>

              <div className="bed-compass-marker" style={{ marginTop: '8px', marginBottom: 0 }}>
                <span>SOUTH (Front / Low Tier)</span>
                <span>NO SHADOW ON COMPACT CROPS</span>
                <span>MAXIMUM SUNLIGHT</span>
              </div>
            </div>

            {/* Plant Detail Inspect Box */}
            <div className="plant-inspect-box">
              <div className="inspect-header">
                <span className="inspect-name">{currentPlant.name}</span>
                <span className="inspect-density">
                  {currentPlant.density} / {currentPlant.days}
                </span>
              </div>
              <p className="inspect-notes">{currentPlant.notes}</p>
            </div>
          </div>

          {/* TAB 2: COMPANION MATRIX */}
          <div
            id="tab-companion"
            className={`preview-tab-panel ${activeTab === 'tab-companion' ? 'is-active' : ''}`}
            role="tabpanel"
          >
            <div className="table-responsive">
              <table className="companion-table">
                <thead>
                  <tr>
                    <th>Vegetable</th>
                    <th>Good Neighbors (Allies)</th>
                    <th>Bad Neighbors (Avoid)</th>
                    <th>Garden Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="plant-pill">Tomatoes</span></td>
                    <td>
                      <span className="tag-good">Basil</span>{' '}
                      <span className="tag-good">Marigolds</span>{' '}
                      <span className="tag-good">Carrots</span>
                    </td>
                    <td>
                      <span className="tag-bad">Fennel</span>{' '}
                      <span className="tag-bad">Potatoes</span>{' '}
                      <span className="tag-bad">Corn</span>
                    </td>
                    <td>Basil repels hornworms and improves flavor; marigolds deter nematodes.</td>
                  </tr>
                  <tr>
                    <td><span className="plant-pill">Bell Peppers</span></td>
                    <td>
                      <span className="tag-good">Onions</span>{' '}
                      <span className="tag-good">Basil</span>{' '}
                      <span className="tag-good">Carrots</span>
                    </td>
                    <td>
                      <span className="tag-bad">Beans</span>{' '}
                      <span className="tag-bad">Brassicas</span>
                    </td>
                    <td>Dense canopy provides micro-shade, holding soil moisture.</td>
                  </tr>
                  <tr>
                    <td><span className="plant-pill">Carrots</span></td>
                    <td>
                      <span className="tag-good">Lettuce</span>{' '}
                      <span className="tag-good">Rosemary</span>{' '}
                      <span className="tag-good">Chives</span>
                    </td>
                    <td>
                      <span className="tag-bad">Dill</span>{' '}
                      <span className="tag-bad">Parsnips</span>
                    </td>
                    <td>Chives and rosemary deter the destructive carrot rust fly.</td>
                  </tr>
                  <tr>
                    <td><span className="plant-pill">Bush Beans</span></td>
                    <td>
                      <span className="tag-good">Cucumbers</span>{' '}
                      <span className="tag-good">Corn</span>{' '}
                      <span className="tag-good">Celery</span>
                    </td>
                    <td>
                      <span className="tag-bad">Onions</span>{' '}
                      <span className="tag-bad">Garlic</span>{' '}
                      <span className="tag-bad">Chives</span>
                    </td>
                    <td>Legume nodules fix atmospheric nitrogen directly into the root zone.</td>
                  </tr>
                  <tr>
                    <td><span className="plant-pill">Lettuce &amp; Greens</span></td>
                    <td>
                      <span className="tag-good">Radishes</span>{' '}
                      <span className="tag-good">Carrots</span>{' '}
                      <span className="tag-good">Strawberries</span>
                    </td>
                    <td>
                      <span className="tag-bad">Broccoli</span>
                    </td>
                    <td>Fast shallow roots cover bare soil, suppressing weed seed emergence.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TAB 3: CUT LIST */}
          <div
            id="tab-cutlist"
            className={`preview-tab-panel ${activeTab === 'tab-cutlist' ? 'is-active' : ''}`}
            role="tabpanel"
          >
            <div className="cutlist-diagram">
              <div className="cutlist-board-schematic">
                <h5
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    marginBottom: '12px',
                    color: 'var(--ink-primary)',
                  }}
                >
                  4'x8' Bed Lumber Cutting Pattern
                </h5>
                <div className="schematic-item">
                  <div className="schematic-label">
                    <span>(6 pcs) 2" x 6" x 8' Cedar Long Sides</span>
                    <span>8'-0" (No Cut)</span>
                  </div>
                  <div className="schematic-board">8'-0" FULL LENGTH</div>
                </div>
                <div className="schematic-item">
                  <div className="schematic-label">
                    <span>(3 pcs) 2" x 6" x 8' Cedar Cut in Half</span>
                    <span>4'-0" + 4'-0" End Pieces</span>
                  </div>
                  <div
                    className="schematic-board"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px',
                      padding: '2px',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      4'-0" END
                    </div>
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      4'-0" END
                    </div>
                  </div>
                </div>
                <div className="schematic-item">
                  <div className="schematic-label">
                    <span>(1 pc) 4" x 4" x 6' Post (Corner Stakes)</span>
                    <span>(4) 15" Corner Posts</span>
                  </div>
                  <div
                    className="schematic-board"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '3px',
                      padding: '2px',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                      }}
                    >
                      15" POST
                    </div>
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                      }}
                    >
                      15" POST
                    </div>
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                      }}
                    >
                      15" POST
                    </div>
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                      }}
                    >
                      15" POST
                    </div>
                  </div>
                </div>
              </div>

              <div className="materials-checklist">
                <div className="material-item">
                  <h6 className="material-item-title">Hardware Fasteners</h6>
                  <p className="material-item-detail">
                    #9 3" Exterior polymer-coated ceramic deck screws (Box of 75 pcs)
                  </p>
                </div>
                <div className="material-item">
                  <h6 className="material-item-title">Soil Volume Calculation</h6>
                  <p className="material-item-detail">
                    4' × 8' × 1' depth = 32 cu. ft. (1.19 cubic yards total fill)
                  </p>
                </div>
                <div className="material-item">
                  <h6 className="material-item-title">Recommended Soil Mix Recipe</h6>
                  <p className="material-item-detail">
                    1/3 Blended Compost + 1/3 Peat Moss / Coco Coir + 1/3 Coarse Horticultural
                    Vermiculite
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 4: TIMELINE */}
          <div
            id="tab-timeline"
            className={`preview-tab-panel ${activeTab === 'tab-timeline' ? 'is-active' : ''}`}
            role="tabpanel"
          >
            <div className="timeline-block">
              <div className="timeline-phase">
                <div className="phase-marker">
                  <div className="phase-dot"></div>
                  <div className="phase-line"></div>
                </div>
                <div className="phase-content">
                  <span className="phase-date">March - April (Early Spring)</span>
                  <h5 className="phase-title">Phase 1: Cold-Tolerant Kickoff</h5>
                  <p className="phase-desc">
                    Direct-sow radishes, spinach, butterhead lettuce, and early peas. These cool-season
                    greens withstand light morning frosts and yield tender early harvests.
                  </p>
                </div>
              </div>

              <div className="timeline-phase">
                <div className="phase-marker">
                  <div className="phase-dot"></div>
                  <div className="phase-line"></div>
                </div>
                <div className="phase-content">
                  <span className="phase-date">May - July (Summer Peak)</span>
                  <h5 className="phase-title">Phase 2: Warm Season Explosion</h5>
                  <p className="phase-desc">
                    Transplant tomatoes, peppers, and basil into designated grid coordinates.
                    Vertical trellis secures indeterminate vines while bush beans enrich root-zone
                    nitrogen.
                  </p>
                </div>
              </div>

              <div className="timeline-phase">
                <div className="phase-marker">
                  <div className="phase-dot"></div>
                </div>
                <div className="phase-content">
                  <span className="phase-date">August - November (Fall Succession)</span>
                  <h5 className="phase-title">Phase 3: The Second Harvest</h5>
                  <p className="phase-desc">
                    As summer crops wind down, sow late-season kale, winter carrots, and garlic
                    cloves. Heavy root mulch provides sweet winter harvest through freezing weather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
