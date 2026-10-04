import React from 'react';
import type { CategoryId } from '../data/types';
import type { TranslationDictionary } from '../i18n/types';
import { CATEGORIES } from '../data/categories';
import { Sparkles, Terminal, Cpu, Shirt, Home, Book } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  categoryCounts: Record<CategoryId, number>;
  t: TranslationDictionary;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  t,
}) => {
  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'ODD_DESK_TACTILE':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'CYBER_HARDWARE':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'WEARABLE_ANOMALIES':
        return <Shirt className="w-3.5 h-3.5" />;
      case 'UNCANNY_DOMESTIC':
        return <Home className="w-3.5 h-3.5" />;
      case 'ZINES_RELICS':
        return <Book className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryName = (id: CategoryId, fallback: string) => {
    switch (id) {
      case 'ALL':
        return t.catAll;
      case 'ODD_DESK_TACTILE':
        return t.catDesk;
      case 'CYBER_HARDWARE':
        return t.catCyber;
      case 'WEARABLE_ANOMALIES':
        return t.catWearable;
      case 'UNCANNY_DOMESTIC':
        return t.catDomestic;
      case 'ZINES_RELICS':
        return t.catZines;
      default:
        return fallback;
    }
  };

  return (
    <div className="border-b-2 border-[#111111] bg-[#EAE8E3]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#7C3AED] inline-block"></span>
            {t.taxonomyHeader}
          </span>
          <span className="font-mono text-[11px] text-neutral-600 hidden sm:inline">
            {t.taxonomySubtitle}
          </span>
        </div>

        {/* Scrollable / Responsive Tab Grid */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;
            const displayName = getCategoryName(cat.id, cat.name);

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-2 border-2 font-mono text-xs cursor-pointer transition-all active-press ${
                  isSelected
                    ? 'border-[#111111] bg-[#111111] text-[#F4F4F0] shadow-brutal-sm font-bold'
                    : 'border-[#111111] bg-white text-[#111111] hover:bg-neutral-100 hover:shadow-brutal-sm'
                }`}
              >
                <span className={isSelected ? 'text-[#CCFF00]' : 'text-[#7C3AED]'}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span className="tracking-tight">{displayName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 font-mono font-bold ${
                    isSelected
                      ? 'bg-[#7C3AED] text-white'
                      : 'bg-neutral-200 text-neutral-800'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
