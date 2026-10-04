import React, { useState, useEffect } from 'react';
import type { TranslationDictionary } from '../i18n/types';
import { Radio, Search, Shuffle, Users, Terminal } from 'lucide-react';

interface HeaderProps {
  curatorCount: number;
  specimenCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onRandomPick: () => void;
  onOpenCurators: () => void;
  onOpenAdminGuide: () => void;
  t: TranslationDictionary;
}

export const Header: React.FC<HeaderProps> = ({
  curatorCount,
  specimenCount,
  searchQuery,
  onSearchChange,
  onRandomPick,
  onOpenCurators,
  onOpenAdminGuide,
  t,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b-2 border-[#111111] bg-[#F4F4F0] sticky top-0 z-40">
      {/* Ticker / Telemetry Bar (The Top Black Area) */}
      <div className="bg-[#111111] text-[#F4F4F0] text-xs font-mono px-4 py-2 flex flex-wrap items-center justify-between gap-3 border-b border-[#111111]">
        {/* Left Telemetry Cluster */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
          <span className="flex items-center gap-1.5 text-[#CCFF00] font-bold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            {t.telemetryOnline}
          </span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="tracking-widest hidden sm:inline">{t.sysTime} {timeStr || '12:00:00 UTC'}</span>
          <span className="text-neutral-600 hidden md:inline">|</span>
          <span className="hidden md:inline text-neutral-300">
            CURATORS: {String(curatorCount).padStart(2, '0')}
          </span>
          <span className="text-neutral-600 hidden lg:inline">|</span>
          <span className="hidden lg:inline text-neutral-400">
            {t.totalArtifacts} {String(specimenCount).padStart(2, '0')}
          </span>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs tracking-wider ml-auto">
          {/* Edition Stamp */}
          <span className="hidden sm:inline bg-[#7C3AED] text-white px-1.5 py-0.5 font-bold uppercase text-[10px]">
            {t.archiveEdition}
          </span>

          {/* Admin Guide Button */}
          <button
            onClick={onOpenAdminGuide}
            className="hover:text-[#CCFF00] transition-colors flex items-center gap-1 cursor-pointer text-[11px]"
            title="View Admin Guide for adding items & curators"
          >
            <Terminal className="w-3 h-3" />
            <span>{t.adminGuideBtn}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="w-10 h-10 bg-[#111111] text-[#F4F4F0] flex items-center justify-center font-display text-xl font-black border-2 border-[#111111] shadow-brutal-sm">
            AN
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tight leading-none">
                {t.brandTitle}
              </span>
              <span className="text-[10px] font-mono bg-[#111111] text-white px-1.5 py-0.5 font-bold">
                VOL.I
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-600 tracking-wider">
              {t.brandTagline}
            </p>
          </div>
        </div>

        {/* Search & Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          {/* Live Search Input */}
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white border-2 border-[#111111] pl-8 pr-3 py-1.5 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:bg-[#FFF] focus:border-[#7C3AED] shadow-brutal-sm transition-all"
            />
          </div>

          {/* Random Specimen Button */}
          <button
            onClick={onRandomPick}
            className="flex items-center gap-1.5 bg-[#CCFF00] hover:bg-[#b8e600] text-[#111111] border-2 border-[#111111] px-3 py-1.5 text-xs font-mono font-bold shadow-brutal-sm active-press cursor-pointer transition-all"
            title="Randomly reveal a curated oddity"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>{t.randomSpecimenBtn}</span>
          </button>

          {/* Curator Dossiers Button */}
          <button
            onClick={onOpenCurators}
            className="flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-[#111111] border-2 border-[#111111] px-3 py-1.5 text-xs font-mono font-bold shadow-brutal-sm active-press cursor-pointer transition-all"
          >
            <Users className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>{t.curatorDossiersBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
