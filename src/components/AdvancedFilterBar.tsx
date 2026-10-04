import React, { useState } from 'react';
import type { TranslationDictionary } from '../i18n/types';
import { Sliders, DollarSign, Skull, ShoppingBag, RotateCcw, ChevronDown, ChevronUp, Zap } from 'lucide-react';

interface AdvancedFilterBarProps {
  minWeirdness: number;
  setMinWeirdness: (val: number) => void;
  pricePreset: 'ALL' | 'UNDER_20' | '20_TO_50' | '50_TO_100' | '100_PLUS' | 'CUSTOM';
  setPricePreset: (preset: 'ALL' | 'UNDER_20' | '20_TO_50' | '50_TO_100' | '100_PLUS' | 'CUSTOM') => void;
  minPrice: number;
  setMinPrice: (val: number) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  selectedDifficulty: number | 'ALL';
  setSelectedDifficulty: (val: number | 'ALL') => void;
  selectedPlatform: string;
  setSelectedPlatform: (val: string) => void;
  availablePlatforms: string[];
  activeFilterCount: number;
  onResetFilters: () => void;
  t: TranslationDictionary;
}

export const AdvancedFilterBar: React.FC<AdvancedFilterBarProps> = ({
  minWeirdness,
  setMinWeirdness,
  pricePreset,
  setPricePreset,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedPlatform,
  setSelectedPlatform,
  availablePlatforms,
  activeFilterCount,
  onResetFilters,
  t
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlePresetClick = (preset: 'ALL' | 'UNDER_20' | '20_TO_50' | '50_TO_100' | '100_PLUS') => {
    setPricePreset(preset);
    if (preset === 'ALL') {
      setMinPrice(0);
      setMaxPrice(500);
    } else if (preset === 'UNDER_20') {
      setMinPrice(100);
      setMaxPrice(150);
    } else if (preset === '20_TO_50') {
      setMinPrice(150);
      setMaxPrice(200);
    } else if (preset === '50_TO_100') {
      setMinPrice(200);
      setMaxPrice(250);
    } else if (preset === '100_PLUS') {
      setMinPrice(250);
      setMaxPrice(500);
    }
  };

  return (
    <div className="border-2 border-[#111111] bg-white shadow-brutal mb-6 transition-all">
      {/* Header bar with toggle */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#111111] text-white px-4 py-2.5 flex items-center justify-between cursor-pointer select-none hover:bg-neutral-900 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <Sliders className="w-4 h-4 text-[#7C3AED]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            {t.advancedFiltersHeader}
          </span>
          {activeFilterCount > 0 && (
            <span className="bg-[#7C3AED] text-white px-2 py-0.5 text-[10px] font-mono font-bold">
              {t.activeFiltersBadge(activeFilterCount)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onResetFilters();
              }}
              className="text-[#CCFF00] hover:text-white font-mono text-[11px] font-bold underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              {t.clearFiltersBtn}
            </button>
          )}
          <span className="font-mono text-xs text-neutral-400 flex items-center gap-1">
            {isOpen ? t.advancedFiltersToggleClose : t.advancedFiltersToggleOpen}
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>

      {/* Expandable Controls Panel */}
      {isOpen && (
        <div className="p-4 sm:p-5 border-t-2 border-[#111111] bg-[#FAFAF8] space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Weirdness Index Slider */}
            <div className="border-2 border-[#111111] bg-white p-3.5 shadow-brutal-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 uppercase">
                    <Zap className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                    {t.weirdnessSliderTitle}
                  </span>
                  <span className="bg-[#7C3AED] text-white font-mono text-xs font-bold px-2 py-0.5 shadow-brutal-sm">
                    {t.minWeirdnessValue(minWeirdness)}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono mb-3">
                  Filters out conventional designs to isolate extreme quirks.
                </p>
              </div>

              <div>
                <input
                  type="range"
                  min="1.0"
                  max="10.0"
                  step="0.1"
                  value={minWeirdness}
                  onChange={(e) => setMinWeirdness(parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 accent-[#7C3AED] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-neutral-400 mt-1">
                  <span>1.0 (Mild)</span>
                  <span>5.0</span>
                  <span>8.0 (Quirky)</span>
                  <span className="text-[#7C3AED] font-bold">10.0 (Unhinged)</span>
                </div>
              </div>
            </div>

            {/* 2. Price Range Filter */}
            <div className="border-2 border-[#111111] bg-white p-3.5 shadow-brutal-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 uppercase">
                    <DollarSign className="w-3.5 h-3.5 text-[#7C3AED]" />
                    {t.priceRangeTitle}
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-700">
                    ${minPrice} — ${maxPrice >= 500 ? '500+' : maxPrice}
                  </span>
                </div>
                
                {/* Presets */}
                <div className="grid grid-cols-5 gap-1 mb-3 font-mono text-[10px] font-bold">
                  <button
                    onClick={() => handlePresetClick('ALL')}
                    className={`px-1 py-1 border border-[#111111] transition-colors cursor-pointer ${
                      pricePreset === 'ALL' ? 'bg-[#111111] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {t.pricePresetAll}
                  </button>
                  <button
                    onClick={() => handlePresetClick('UNDER_20')}
                    className={`px-1 py-1 border border-[#111111] transition-colors cursor-pointer ${
                      pricePreset === 'UNDER_20' ? 'bg-[#7C3AED] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {t.pricePresetUnder20}
                  </button>
                  <button
                    onClick={() => handlePresetClick('20_TO_50')}
                    className={`px-1 py-1 border border-[#111111] transition-colors cursor-pointer ${
                      pricePreset === '20_TO_50' ? 'bg-[#7C3AED] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {t.pricePreset20to50}
                  </button>
                  <button
                    onClick={() => handlePresetClick('50_TO_100')}
                    className={`px-1 py-1 border border-[#111111] transition-colors cursor-pointer ${
                      pricePreset === '50_TO_100' ? 'bg-[#7C3AED] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {t.pricePreset50to100}
                  </button>
                  <button
                    onClick={() => handlePresetClick('100_PLUS')}
                    className={`px-1 py-1 border border-[#111111] transition-colors cursor-pointer ${
                      pricePreset === '100_PLUS' ? 'bg-[#7C3AED] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {t.pricePreset100Plus}
                  </button>
                </div>
              </div>

              {/* Custom Min / Max Inputs */}
              <div className="flex items-center gap-2 pt-1 font-mono text-xs">
                <div className="flex items-center border border-[#111111] bg-[#F4F4F0] px-2 py-1 w-full">
                  <span className="text-neutral-500 mr-1">$</span>
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={minPrice}
                    onChange={(e) => {
                      setMinPrice(Math.max(0, parseInt(e.target.value) || 0));
                      setPricePreset('CUSTOM');
                    }}
                    placeholder={t.priceMinPlaceholder}
                    className="w-full bg-transparent focus:outline-none text-xs font-mono"
                  />
                </div>
                <span className="text-neutral-400 font-bold">—</span>
                <div className="flex items-center border border-[#111111] bg-[#F4F4F0] px-2 py-1 w-full">
                  <span className="text-neutral-500 mr-1">$</span>
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(Math.max(minPrice, parseInt(e.target.value) || 500));
                      setPricePreset('CUSTOM');
                    }}
                    placeholder={t.priceMaxPlaceholder}
                    className="w-full bg-transparent focus:outline-none text-xs font-mono"
                  />
                </div>
              </div>
            </div>

            {/* 3. Hunt Difficulty Filter */}
            <div className="border-2 border-[#111111] bg-white p-3.5 shadow-brutal-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 uppercase">
                    <Skull className="w-3.5 h-3.5 text-[#7C3AED]" />
                    {t.huntDiffTitle}
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-600">
                    {selectedDifficulty === 'ALL' ? t.diffAll : `LVL ${selectedDifficulty}`}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono mb-2">
                  1: Instant 1-Click Buy ➔ 5: Underground Deep Import.
                </p>
              </div>

              {/* Difficulty Buttons */}
              <div className="grid grid-cols-6 gap-1 font-mono text-[10px] font-bold">
                <button
                  onClick={() => setSelectedDifficulty('ALL')}
                  className={`py-1.5 border border-[#111111] transition-colors cursor-pointer text-center ${
                    selectedDifficulty === 'ALL' ? 'bg-[#111111] text-white' : 'bg-white hover:bg-neutral-100 text-neutral-800'
                  }`}
                >
                  ALL
                </button>
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedDifficulty(lvl)}
                    className={`py-1.5 border border-[#111111] transition-colors cursor-pointer text-center flex items-center justify-center gap-0.5 ${
                      selectedDifficulty === lvl
                        ? 'bg-[#7C3AED] text-white'
                        : 'bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    <span>L{lvl}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* 4. Platform Selection Matrix */}
          <div className="border-t border-neutral-300 pt-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1 mr-2 uppercase">
                <ShoppingBag className="w-3.5 h-3.5 text-[#7C3AED]" />
                {t.platformTitle}:
              </span>

              <button
                onClick={() => setSelectedPlatform('ALL')}
                className={`font-mono text-[11px] font-bold px-2 py-0.5 border border-[#111111] transition-colors cursor-pointer ${
                  selectedPlatform === 'ALL'
                    ? 'bg-[#111111] text-[#CCFF00]'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800'
                }`}
              >
                {t.allPlatforms}
              </button>

              {availablePlatforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`font-mono text-[11px] font-bold px-2 py-0.5 border border-[#111111] transition-colors cursor-pointer ${
                    selectedPlatform === plat
                      ? 'bg-[#7C3AED] text-white'
                      : 'bg-white hover:bg-neutral-100 text-neutral-800'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
