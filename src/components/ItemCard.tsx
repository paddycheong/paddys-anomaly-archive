import React from 'react';
import type { OddityItem, Curator } from '../data/types';
import type { TranslationDictionary } from '../i18n/types';
import { Eye, ArrowUpRight, Skull, MapPin, Zap, ShoppingBag, Award } from 'lucide-react';

interface ItemCardProps {
  item: OddityItem;
  curator?: Curator;
  onInspect: (item: OddityItem) => void;
  onSelectCurator: (curatorId: string) => void;
  t: TranslationDictionary;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  curator,
  onInspect,
  onSelectCurator,
  t,
}) => {
  const getScarcityColor = (badge: string) => {
    switch (badge) {
      case 'TOP 1 BESTSELLER':
      case '1-OF-1 PROTOTYPE':
        return 'bg-[#7C3AED] text-white';
      case 'VIRAL SENSATION':
      case 'LIMITED BATCH':
        return 'bg-[#CCFF00] text-[#111111]';
      case 'DEADSTOCK RELIC':
        return 'bg-[#111111] text-[#CCFF00]';
      case 'OBSCURE IMPORT':
      case 'COMMISSION ONLY':
        return 'bg-[#0D35E8] text-white';
      default:
        return 'bg-neutral-800 text-white';
    }
  };

  return (
    <article className="border-2 border-[#111111] bg-white flex flex-col justify-between shadow-brutal hover:shadow-brutal-lg transition-all group">
      <div>
        {/* Card Header Stamp */}
        <div className="border-b-2 border-[#111111] px-4 py-2 bg-[#FAFAF7] flex items-center justify-between font-mono text-xs">
          <span className="font-bold tracking-wider text-[#111111] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#7C3AED]"></span>
            {item.specimenCode}
          </span>
          <span
            className={`font-mono text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider ${getScarcityColor(
              item.scarcityBadge
            )}`}
          >
            {item.scarcityBadge}
          </span>
        </div>

        {/* Hero Image Container with Hotspot Teaser */}
        <div
          onClick={() => onInspect(item)}
          className="relative aspect-4/3 bg-neutral-900 border-b-2 border-[#111111] overflow-hidden cursor-pointer"
        >
          <img
            src={item.heroImage}
            alt={item.title}
            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          />
          {/* Subtle Grid Scanline overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Hotspot indicator badge */}
          <div className="absolute bottom-2.5 left-2.5 bg-[#111111]/90 backdrop-blur-xs text-[#CCFF00] border border-[#CCFF00] font-mono text-[10px] px-2 py-0.5 flex items-center gap-1.5">
            <Eye className="w-3 h-3 text-[#CCFF00]" />
            <span>{item.fieldObservation.hotspots.length} {t.inspectionPinsSuffix}</span>
          </div>

          <div className="absolute top-2.5 right-2.5 bg-[#111111] text-white font-mono text-[10px] px-2 py-0.5 border border-white">
            {item.dateLogged}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 md:p-5">
          {/* Verified Platform & Rank Badge */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
            <span className="bg-[#111111] text-[#CCFF00] font-mono text-[10px] font-bold px-2 py-0.5 border border-[#111111] flex items-center gap-1 uppercase">
              <ShoppingBag className="w-3 h-3 text-[#CCFF00]" />
              {item.platform}
            </span>

            <span className="bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED] font-mono text-[9px] font-bold px-1.5 py-0.5 flex items-center gap-1 uppercase tracking-tight">
              <Award className="w-2.5 h-2.5" />
              {item.salesRankBadge}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] bg-neutral-100 text-neutral-700 border border-neutral-300 px-1.5 py-0.5 uppercase"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2
            onClick={() => onInspect(item)}
            className="font-display font-black text-xl leading-tight text-[#111111] hover:text-[#7C3AED] transition-colors cursor-pointer mb-2"
          >
            {item.title}
          </h2>

          {/* Tagline */}
          <p className="font-mono text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
            {item.tagline}
          </p>

          {/* Weirdness & Hunt Difficulty Telemetry */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#F4F4F0] border border-[#111111] font-mono text-xs mb-4">
            <div>
              <span className="text-[10px] text-neutral-500 block uppercase">{t.weirdnessIndexLabel}</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Zap className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                <span className="font-bold text-sm text-[#111111]">{item.weirdnessScore}</span>
                <span className="text-[10px] text-neutral-400">/ 10</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 block uppercase">{t.huntDifficultyLabel}</span>
              <div className="flex items-center gap-1 mt-1 text-[#111111]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skull
                    key={i}
                    className={`w-3 h-3 ${
                      i < item.sourcingTelemetry.huntDifficulty
                        ? 'text-[#111111] fill-[#111111]'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Curator Reference Bar */}
          {curator && (
            <div className="flex items-center justify-between pt-2 border-t border-neutral-200 font-mono text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCurator(curator.id);
                }}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-left cursor-pointer"
              >
                <img
                  src={curator.avatar}
                  alt={curator.name}
                  className="w-6 h-6 object-cover border border-[#111111]"
                />
                <div>
                  <span className="text-[11px] font-bold text-[#111111] block leading-none">
                    {curator.callsign}
                  </span>
                  <span className="text-[9px] text-neutral-500 flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    {curator.location.split('//')[0]}
                  </span>
                </div>
              </button>

              <div className="text-right">
                <span className="text-xs font-display font-black text-[#7C3AED] block leading-none">
                  ${item.priceValue.toFixed(2)}
                </span>
                <span className="text-[9px] text-neutral-400 font-mono">
                  {item.sourcingTelemetry.priceRange}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Button */}
      <button
        onClick={() => onInspect(item)}
        className="w-full bg-[#111111] hover:bg-[#7C3AED] text-white border-t-2 border-[#111111] px-4 py-3 font-mono text-xs font-bold flex items-center justify-between tracking-wider uppercase transition-colors cursor-pointer active-press"
      >
        <span>{t.inspectTelemetryBtn}</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </article>
  );
};
