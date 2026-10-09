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
    <section className="py-12 sm:py-16 border-t border-black/[0.08]" aria-label="Interactive Sample Previews">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="font-mono text-[11.5px] font-semibold text-[#A86D3F] uppercase tracking-wider mb-2">
            Sample Preview
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-2.5">
            Explore What's Inside Before You Buy
          </h2>
          <p className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed">
            Test drive the 4'x8' layout grid, companion matrix, and lumber cut sheet below.
          </p>
        </div>

        <div className="bg-white border border-black/10 rounded-lg shadow-sm overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto bg-[#F5F4F0] border-b border-black/10 scrollbar-none" role="tablist">
            <button
              className={`flex-1 min-w-[130px] sm:min-w-[150px] py-3.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors min-h-[48px] whitespace-nowrap ${
                activeTab === 'tab-layout'
                  ? 'text-[#1B4D3E] bg-white border-[#1B4D3E]'
                  : 'text-[#4A4E4A] border-transparent hover:text-[#1A1A1A]'
              }`}
              role="tab"
              aria-selected={activeTab === 'tab-layout'}
              onClick={() => setActiveTab('tab-layout')}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path>
              </svg>
              <span>4'x8' Grid Layout</span>
            </button>
            <button
              className={`flex-1 min-w-[130px] sm:min-w-[150px] py-3.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors min-h-[48px] whitespace-nowrap ${
                activeTab === 'tab-companion'
                  ? 'text-[#1B4D3E] bg-white border-[#1B4D3E]'
                  : 'text-[#4A4E4A] border-transparent hover:text-[#1A1A1A]'
              }`}
              role="tab"
              aria-selected={activeTab === 'tab-companion'}
              onClick={() => setActiveTab('tab-companion')}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8M12 8v8"></path>
              </svg>
              <span>Companion Matrix</span>
            </button>
            <button
              className={`flex-1 min-w-[130px] sm:min-w-[150px] py-3.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors min-h-[48px] whitespace-nowrap ${
                activeTab === 'tab-cutlist'
                  ? 'text-[#1B4D3E] bg-white border-[#1B4D3E]'
                  : 'text-[#4A4E4A] border-transparent hover:text-[#1A1A1A]'
              }`}
              role="tab"
              aria-selected={activeTab === 'tab-cutlist'}
              onClick={() => setActiveTab('tab-cutlist')}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Cut List &amp; Soil</span>
            </button>
            <button
              className={`flex-1 min-w-[130px] sm:min-w-[150px] py-3.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors min-h-[48px] whitespace-nowrap ${
                activeTab === 'tab-timeline'
                  ? 'text-[#1B4D3E] bg-white border-[#1B4D3E]'
                  : 'text-[#4A4E4A] border-transparent hover:text-[#1A1A1A]'
              }`}
              role="tab"
              aria-selected={activeTab === 'tab-timeline'}
              onClick={() => setActiveTab('tab-timeline')}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
              </svg>
              <span>Rotation Calendar</span>
            </button>
          </div>

          {/* TAB 1: 4x8 GRID */}
          {activeTab === 'tab-layout' && (
            <div className="p-4 sm:p-6 lg:p-8" role="tabpanel">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
                    4' x 8' High-Yield Raised Bed Grid
                  </h4>
                  <p className="text-xs sm:text-sm text-[#717571]">
                    Tap any square to view spacing, density, and companion benefits.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F5F4F0] border border-black/10 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#1B4D3E]"></span> Trellised
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F5F4F0] border border-black/10 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#C88A58]"></span> Heavy Feeder
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F5F4F0] border border-black/10 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#E5A118]"></span> Companion Ally
                  </span>
                </div>
              </div>

              {/* 32 Square Foot Garden Bed Matrix */}
              <div className="bg-[#FAF7F2] border-4 border-[#C88A58] rounded-md p-2.5 sm:p-3.5 shadow-inner">
                <div className="flex justify-between items-center font-mono text-[10.5px] font-semibold text-[#A86D3F] mb-2 px-1">
                  <span>NORTH (Trellis Side)</span>
                  <span>4 FT x 8 FT CEDAR BED</span>
                  <span>SUN EXPOSURE</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                  {BED_CELLS.map((cell) => {
                    const isSelected = selectedCellId === cell.id;
                    return (
                      <button
                        key={cell.id}
                        className={`bg-white border rounded p-1.5 flex flex-col items-center justify-center text-center transition-all min-h-[68px] ${
                          isSelected
                            ? 'border-[#1B4D3E] bg-[#E8F3EE] ring-2 ring-[#1B4D3E] scale-[1.02]'
                            : 'border-black/15 hover:border-[#1B4D3E] hover:bg-[#1B4D3E]/5'
                        }`}
                        onClick={() => {
                          setSelectedCellId(cell.id);
                          setSelectedCrop(cell.crop);
                        }}
                        aria-label={`${cell.name} square`}
                      >
                        <span className="text-base sm:text-lg mb-0.5">{cell.icon}</span>
                        <span className="text-[11px] font-semibold text-[#1A1A1A] leading-tight">
                          {cell.name}
                        </span>
                        <span className="font-mono text-[9px] text-[#717571] mt-0.5">
                          {cell.qty}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center font-mono text-[10.5px] font-semibold text-[#A86D3F] mt-2 px-1">
                  <span>SOUTH (Front / Low Tier)</span>
                  <span>NO SHADOW ON COMPACT CROPS</span>
                  <span>MAXIMUM SUNLIGHT</span>
                </div>
              </div>

              {/* Plant Detail Inspection Box */}
              <div className="mt-4 bg-[#F5F4F0] border border-black/10 rounded-md p-3.5 sm:p-4 flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-display text-base font-bold text-[#1B4D3E] inspect-name">
                    {currentPlant.name}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#A86D3F] inspect-density">
                    {currentPlant.density} <span className="opacity-40">/</span> {currentPlant.days}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4E4A] inspect-notes">
                  {currentPlant.notes}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: COMPANION MATRIX */}
          {activeTab === 'tab-companion' && (
            <div className="p-4 sm:p-6 lg:p-8 overflow-x-auto" role="tabpanel">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#F5F4F0] border-b-2 border-black/10">
                    <th className="py-2.5 px-3 font-mono text-[11px] font-semibold uppercase text-[#717571]">Vegetable</th>
                    <th className="py-2.5 px-3 font-mono text-[11px] font-semibold uppercase text-[#717571]">Good Neighbors (Allies)</th>
                    <th className="py-2.5 px-3 font-mono text-[11px] font-semibold uppercase text-[#717571]">Bad Neighbors (Avoid)</th>
                    <th className="py-2.5 px-3 font-mono text-[11px] font-semibold uppercase text-[#717571]">Garden Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.08]">
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[#1A1A1A]">Tomatoes</td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Basil</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Marigolds</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded">Carrots</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Fennel</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Potatoes</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded">Corn</span>
                    </td>
                    <td className="py-3 px-3 text-[#4A4E4A]">Basil repels hornworms; marigolds secrete root compounds repelling nematodes.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[#1A1A1A]">Bell Peppers</td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Onions</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Basil</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded">Carrots</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Beans</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded">Brassicas</span>
                    </td>
                    <td className="py-3 px-3 text-[#4A4E4A]">Dense leaf canopy creates cool micro-climate, preserving critical root moisture.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[#1A1A1A]">Carrots</td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Lettuce</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Rosemary</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded">Chives</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Dill</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded">Parsnips</span>
                    </td>
                    <td className="py-3 px-3 text-[#4A4E4A]">Rosemary and chive scents mask carrot root foliage from destructive rust flies.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[#1A1A1A]">Bush Beans</td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Cucumbers</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded mr-1">Corn</span>
                      <span className="inline-block bg-[#E8F3EE] text-[#1B4D3E] text-xs font-medium px-2 py-0.5 rounded">Celery</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Onions</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded mr-1">Garlic</span>
                      <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded">Chives</span>
                    </td>
                    <td className="py-3 px-3 text-[#4A4E4A]">Nitrogen-fixing bacteria nodules enrich bed soil for adjacent heavy feeder crops.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: CUT LIST */}
          {activeTab === 'tab-cutlist' && (
            <div className="p-4 sm:p-6 lg:p-8" role="tabpanel">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#C88A58]/30 rounded-md p-4">
                  <h5 className="font-display text-sm sm:text-base font-bold text-[#1A1A1A] mb-3">
                    4'x8' Bed Lumber Cutting Pattern
                  </h5>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between font-semibold text-[#A86D3F] mb-1">
                        <span>(6 pcs) 2" x 6" x 8' Cedar Long Sides</span>
                        <span>8'-0" (No Cut)</span>
                      </div>
                      <div className="h-6 bg-[#DEB887] border border-[#C88A58] rounded flex items-center justify-center font-semibold text-[#5C3A1E] text-[10px]">
                        8'-0" FULL LENGTH
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold text-[#A86D3F] mb-1">
                        <span>(3 pcs) 2" x 6" x 8' Cedar Cut in Half</span>
                        <span>4'-0" + 4'-0" End Pieces</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 h-6 bg-[#DEB887] border border-[#C88A58] rounded p-0.5 font-semibold text-[#5C3A1E] text-[10px]">
                        <div className="bg-black/10 flex items-center justify-center">4'-0" END</div>
                        <div className="bg-black/10 flex items-center justify-center">4'-0" END</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold text-[#A86D3F] mb-1">
                        <span>(1 pc) 4" x 4" x 6' Post (Corner Stakes)</span>
                        <span>(4) 15" Corner Posts</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1 h-6 bg-[#DEB887] border border-[#C88A58] rounded p-0.5 font-semibold text-[#5C3A1E] text-[9px]">
                        <div className="bg-black/10 flex items-center justify-center">15" POST</div>
                        <div className="bg-black/10 flex items-center justify-center">15" POST</div>
                        <div className="bg-black/10 flex items-center justify-center">15" POST</div>
                        <div className="bg-black/10 flex items-center justify-center">15" POST</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3">
                    <h6 className="font-display text-xs sm:text-sm font-bold text-[#1A1A1A]">Hardware Fasteners</h6>
                    <p className="font-mono text-xs text-[#4A4E4A] mt-0.5">#9 3" Exterior polymer-coated ceramic deck screws (Box of 75 pcs)</p>
                  </div>
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3">
                    <h6 className="font-display text-xs sm:text-sm font-bold text-[#1A1A1A]">Soil Volume Calculation</h6>
                    <p className="font-mono text-xs text-[#4A4E4A] mt-0.5">4' × 8' × 1' depth = 32 cu. ft. (1.19 cubic yards total fill)</p>
                  </div>
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3">
                    <h6 className="font-display text-xs sm:text-sm font-bold text-[#1A1A1A]">Recommended Soil Recipe</h6>
                    <p className="text-xs text-[#4A4E4A] mt-0.5">1/3 Blended Compost + 1/3 Peat Moss / Coco Coir + 1/3 Coarse Horticultural Vermiculite</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TIMELINE */}
          {activeTab === 'tab-timeline' && (
            <div className="p-4 sm:p-6 lg:p-8" role="tabpanel">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1B4D3E] ring-2 ring-white shadow-xs"></div>
                    <div className="w-0.5 flex-1 bg-black/15 mt-1"></div>
                  </div>
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3.5 flex-1">
                    <span className="font-mono text-[11px] font-semibold text-[#A86D3F] uppercase">March - April (Early Spring)</span>
                    <h5 className="font-display text-sm sm:text-base font-bold text-[#1A1A1A] my-1">Phase 1: Cold-Tolerant Kickoff</h5>
                    <p className="text-xs sm:text-sm text-[#4A4E4A]">Direct-sow radishes, spinach, butterhead lettuce, and early peas. Withstands morning frost for crisp spring harvests.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1B4D3E] ring-2 ring-white shadow-xs"></div>
                    <div className="w-0.5 flex-1 bg-black/15 mt-1"></div>
                  </div>
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3.5 flex-1">
                    <span className="font-mono text-[11px] font-semibold text-[#A86D3F] uppercase">May - July (Summer Peak)</span>
                    <h5 className="font-display text-sm sm:text-base font-bold text-[#1A1A1A] my-1">Phase 2: Warm Season Explosion</h5>
                    <p className="text-xs sm:text-sm text-[#4A4E4A]">Transplant tomatoes, peppers, and basil into grid coordinates. Vertical trellis secures vines while bush beans feed nitrogen.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1B4D3E] ring-2 ring-white shadow-xs"></div>
                  </div>
                  <div className="bg-[#F5F4F0] border border-black/10 rounded-md p-3.5 flex-1">
                    <span className="font-mono text-[11px] font-semibold text-[#A86D3F] uppercase">August - November (Fall Succession)</span>
                    <h5 className="font-display text-sm sm:text-base font-bold text-[#1A1A1A] my-1">Phase 3: The Second Harvest</h5>
                    <p className="text-xs sm:text-sm text-[#4A4E4A]">Sow late-season kale, winter carrots, and garlic cloves. Heavy mulch provides continuous winter harvest through freezing weather.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
