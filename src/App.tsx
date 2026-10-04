import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { AdvancedFilterBar } from './components/AdvancedFilterBar';
import { ItemCard } from './components/ItemCard';
import { DualPerspectiveModal } from './components/DualPerspectiveModal';
import { CuratorModal } from './components/CuratorModal';
import { AdminGuideModal } from './components/AdminGuideModal';
import { Footer } from './components/Footer';

import { CURATORS } from './data/buyers';
import { ODDITY_ITEMS } from './data/items';
import type { CategoryId, OddityItem } from './data/types';
import { UI_TRANSLATIONS } from './i18n/translations';
import { Filter, SlidersHorizontal, X, AlertOctagon, RotateCcw } from 'lucide-react';

type SortOption = 
  | 'DEFAULT' 
  | 'WEIRDNESS_HIGH' 
  | 'DIFFICULTY_HIGH' 
  | 'DIFFICULTY_LOW'
  | 'PRICE_LOW' 
  | 'PRICE_HIGH' 
  | 'NEWEST';

export function App() {
  const t = UI_TRANSLATIONS;

  // Standard Filters
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('ALL');
  const [selectedCuratorId, setSelectedCuratorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('DEFAULT');

  // Advanced Filters
  const [minWeirdness, setMinWeirdness] = useState<number>(1.0);
  const [pricePreset, setPricePreset] = useState<'ALL' | 'UNDER_20' | '20_TO_50' | '50_TO_100' | '100_PLUS' | 'CUSTOM'>('ALL');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('ALL');

  // Modal states
  const [inspectingItem, setInspectingItem] = useState<OddityItem | null>(null);
  const [isDualModalOpen, setIsDualModalOpen] = useState<boolean>(false);
  const [isCuratorModalOpen, setIsCuratorModalOpen] = useState<boolean>(false);
  const [isAdminGuideOpen, setIsAdminGuideOpen] = useState<boolean>(false);

  // Available platforms extracted dynamically from items
  const availablePlatforms = useMemo(() => {
    return Array.from(new Set(ODDITY_ITEMS.map((item) => item.platform)));
  }, []);

  // Active filter count
  const activeAdvancedFilterCount = useMemo(() => {
    let count = 0;
    if (minWeirdness > 1.0) count++;
    if (minPrice > 0 || maxPrice < 500) count++;
    if (selectedDifficulty !== 'ALL') count++;
    if (selectedPlatform !== 'ALL') count++;
    return count;
  }, [minWeirdness, minPrice, maxPrice, selectedDifficulty, selectedPlatform]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      ALL: ODDITY_ITEMS.length,
      ODD_DESK_TACTILE: 0,
      CYBER_HARDWARE: 0,
      WEARABLE_ANOMALIES: 0,
      UNCANNY_DOMESTIC: 0,
      ZINES_RELICS: 0,
    };

    ODDITY_ITEMS.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    return counts;
  }, []);

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return ODDITY_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Curator filter
      if (selectedCuratorId && item.curatorId !== selectedCuratorId) {
        return false;
      }

      // Weirdness slider filter
      if (item.weirdnessScore < minWeirdness) {
        return false;
      }

      // Price range filter
      if (item.priceValue < minPrice || item.priceValue > maxPrice) {
        return false;
      }

      // Hunt difficulty filter
      if (selectedDifficulty !== 'ALL' && item.sourcingTelemetry.huntDifficulty !== selectedDifficulty) {
        return false;
      }

      // Platform filter
      if (selectedPlatform !== 'ALL' && item.platform !== selectedPlatform) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const curator = CURATORS.find((c) => c.id === item.curatorId);
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchCode = item.specimenCode.toLowerCase().includes(query);
        const matchTagline = item.tagline.toLowerCase().includes(query);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchCurator = curator && (
          curator.callsign.toLowerCase().includes(query) ||
          curator.name.toLowerCase().includes(query)
        );
        const matchPlatform = item.platform.toLowerCase().includes(query);
        const matchRank = item.salesRankBadge.toLowerCase().includes(query);
        const matchKeywords = item.sourcingTelemetry.searchKeywords.some((k) =>
          k.toLowerCase().includes(query)
        );

        if (!matchTitle && !matchCode && !matchTagline && !matchTags && !matchCurator && !matchPlatform && !matchRank && !matchKeywords) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'WEIRDNESS_HIGH') {
        return b.weirdnessScore - a.weirdnessScore;
      }
      if (sortBy === 'DIFFICULTY_HIGH') {
        return b.sourcingTelemetry.huntDifficulty - a.sourcingTelemetry.huntDifficulty;
      }
      if (sortBy === 'DIFFICULTY_LOW') {
        return a.sourcingTelemetry.huntDifficulty - b.sourcingTelemetry.huntDifficulty;
      }
      if (sortBy === 'PRICE_LOW') {
        return a.priceValue - b.priceValue;
      }
      if (sortBy === 'PRICE_HIGH') {
        return b.priceValue - a.priceValue;
      }
      if (sortBy === 'NEWEST') {
        return b.id.localeCompare(a.id);
      }
      return 0; // Default order
    });
  }, [selectedCategory, selectedCuratorId, minWeirdness, minPrice, maxPrice, selectedDifficulty, selectedPlatform, searchQuery, sortBy]);

  // Handlers
  const handleInspectItem = (item: OddityItem) => {
    setInspectingItem(item);
    setIsDualModalOpen(true);
  };

  const handleRandomPick = () => {
    const pool = filteredItems.length > 0 ? filteredItems : ODDITY_ITEMS;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];
    if (chosen) {
      handleInspectItem(chosen);
    }
  };

  const activeCurator = useMemo(() => {
    return CURATORS.find((c) => c.id === selectedCuratorId);
  }, [selectedCuratorId]);

  const resetAdvancedFilters = () => {
    setMinWeirdness(1.0);
    setPricePreset('ALL');
    setMinPrice(0);
    setMaxPrice(500);
    setSelectedDifficulty('ALL');
    setSelectedPlatform('ALL');
  };

  const clearAllFilters = () => {
    setSelectedCategory('ALL');
    setSelectedCuratorId(null);
    setSearchQuery('');
    setSortBy('DEFAULT');
    resetAdvancedFilters();
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111] flex flex-col font-sans selection:bg-[#7C3AED] selection:text-white">
      {/* Global Header & Telemetry Bar */}
      <Header
        curatorCount={CURATORS.length}
        specimenCount={ODDITY_ITEMS.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onRandomPick={handleRandomPick}
        onOpenCurators={() => setIsCuratorModalOpen(true)}
        onOpenAdminGuide={() => setIsAdminGuideOpen(true)}
        t={t}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Zine Hero Section */}
        <Hero
          curators={CURATORS}
          onSelectCurator={(id) => setSelectedCuratorId(id)}
          selectedCuratorId={selectedCuratorId}
          onClearCurator={() => setSelectedCuratorId(null)}
          t={t}
        />

        {/* Category Taxonomy Selector */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          t={t}
        />

        {/* Live Feed Status & Sorting Controls */}
        <section className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          {/* Advanced Filter Control Deck */}
          <AdvancedFilterBar
            minWeirdness={minWeirdness}
            setMinWeirdness={setMinWeirdness}
            pricePreset={pricePreset}
            setPricePreset={setPricePreset}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            availablePlatforms={availablePlatforms}
            activeFilterCount={activeAdvancedFilterCount}
            onResetFilters={resetAdvancedFilters}
            t={t}
          />

          <div className="border-2 border-[#111111] bg-white p-3 md:p-4 shadow-brutal flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            {/* Left: Active Indicators */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold flex items-center gap-1.5 text-[#111111]">
                <Filter className="w-3.5 h-3.5 text-[#7C3AED]" />
                {t.telemetryFeedHeader}
              </span>
              <span className="bg-[#111111] text-white px-2 py-0.5 font-bold">
                {t.showingCount(filteredItems.length, ODDITY_ITEMS.length)}
              </span>

              {selectedCategory !== 'ALL' && (
                <span className="bg-[#CCFF00] text-[#111111] border border-[#111111] px-2 py-0.5 font-bold flex items-center gap-1">
                  {t.filterCategoryPrefix} {selectedCategory}
                  <button onClick={() => setSelectedCategory('ALL')} className="hover:text-red-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {activeCurator && (
                <span className="bg-[#7C3AED] text-white px-2 py-0.5 font-bold flex items-center gap-1">
                  {t.filterCuratorPrefix} {activeCurator.callsign}
                  <button onClick={() => setSelectedCuratorId(null)} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedPlatform !== 'ALL' && (
                <span className="bg-[#111111] text-[#CCFF00] border border-[#111111] px-2 py-0.5 font-bold flex items-center gap-1">
                  {t.platformOriginLabel} {selectedPlatform}
                  <button onClick={() => setSelectedPlatform('ALL')} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="bg-neutral-200 text-neutral-900 border border-neutral-400 px-2 py-0.5 font-bold flex items-center gap-1">
                  {t.filterQueryPrefix} "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-red-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {(selectedCategory !== 'ALL' || selectedCuratorId || searchQuery || activeAdvancedFilterCount > 0) && (
                <button
                  onClick={clearAllFilters}
                  className="text-[#7C3AED] hover:text-[#111111] underline hover:no-underline font-bold ml-1 cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetAllFilters}
                </button>
              )}
            </div>

            {/* Right: Sort Selector */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
              <span className="text-neutral-500 text-[11px] uppercase">{t.sortByLabel}</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#FAFAF7] border-2 border-[#111111] px-2.5 py-1 text-xs font-mono font-bold text-[#111111] focus:outline-none focus:bg-white cursor-pointer"
                >
                  <option value="DEFAULT">{t.sortChronological}</option>
                  <option value="WEIRDNESS_HIGH">{t.sortWeirdnessHigh}</option>
                  <option value="DIFFICULTY_HIGH">{t.sortDifficultyHigh}</option>
                  <option value="DIFFICULTY_LOW">{t.sortDifficultyLow}</option>
                  <option value="PRICE_LOW">{t.sortPriceLow}</option>
                  <option value="PRICE_HIGH">{t.sortPriceHigh}</option>
                  <option value="NEWEST">{t.sortRecentlyCataloged}</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Specimen Catalog Grid */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          {filteredItems.length === 0 ? (
            <div className="border-4 border-dashed border-[#111111] bg-white p-12 text-center my-8 shadow-brutal">
              <AlertOctagon className="w-12 h-12 text-[#7C3AED] mx-auto mb-3" />
              <h3 className="font-display font-black text-2xl text-[#111111] uppercase mb-2">
                {t.zeroAnomaliesTitle}
              </h3>
              <p className="font-mono text-sm text-neutral-600 max-w-md mx-auto mb-6">
                {t.zeroAnomaliesDesc}
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-[#111111] text-[#CCFF00] hover:bg-[#7C3AED] hover:text-white px-6 py-2.5 font-mono text-xs font-bold uppercase transition-colors shadow-brutal-sm cursor-pointer"
              >
                {t.resetAllBtn}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const curator = CURATORS.find((c) => c.id === item.curatorId);
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    curator={curator}
                    onInspect={handleInspectItem}
                    onSelectCurator={(curatorId) => setSelectedCuratorId(curatorId)}
                    t={t}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Global Modals */}
      <DualPerspectiveModal
        item={inspectingItem}
        curator={CURATORS.find((c) => c.id === inspectingItem?.curatorId)}
        isOpen={isDualModalOpen}
        onClose={() => setIsDualModalOpen(false)}
        onSelectCurator={(curatorId) => {
          setSelectedCuratorId(curatorId);
          setIsDualModalOpen(false);
        }}
        t={t}
      />

      <CuratorModal
        curators={CURATORS}
        items={ODDITY_ITEMS}
        isOpen={isCuratorModalOpen}
        onClose={() => setIsCuratorModalOpen(false)}
        onSelectCuratorFilter={(curatorId) => {
          setSelectedCuratorId(curatorId);
          setIsCuratorModalOpen(false);
        }}
        onInspectItem={(item) => {
          handleInspectItem(item);
          setIsCuratorModalOpen(false);
        }}
        t={t}
      />

      <AdminGuideModal
        isOpen={isAdminGuideOpen}
        onClose={() => setIsAdminGuideOpen(false)}
        t={t}
      />

      {/* Industrial Print Colophon / Footer */}
      <Footer
        onOpenAdminGuide={() => setIsAdminGuideOpen(true)}
        onOpenCurators={() => setIsCuratorModalOpen(true)}
        t={t}
      />
    </div>
  );
}

export default App;
