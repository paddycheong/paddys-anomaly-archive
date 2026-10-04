import React, { useState } from 'react';
import type { OddityItem, Curator, Hotspot } from '../data/types';
import type { TranslationDictionary } from '../i18n/types';
import { 
  X, 
  AlertTriangle, 
  Copy, 
  Check, 
  ExternalLink, 
  Skull, 
  Zap, 
  HelpCircle,
  MapPin,
  ShoppingBag,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface DualPerspectiveModalProps {
  item: OddityItem | null;
  curator?: Curator;
  isOpen: boolean;
  onClose: () => void;
  onSelectCurator: (curatorId: string) => void;
  t: TranslationDictionary;
}

export const DualPerspectiveModal: React.FC<DualPerspectiveModalProps> = ({
  item,
  curator,
  isOpen,
  onClose,
  onSelectCurator,
  t,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);

  if (!isOpen || !item) return null;

  const displayTitle = item.title;
  const displayBadge = item.scarcityBadge;
  const displayUnboxing = item.fieldObservation.unboxingLog;
  const displayTactile = item.fieldObservation.tactileFeedback;
  const displaySnags = item.fieldObservation.honestSnags;
  const displayVerdict = item.fieldObservation.curatorVerdict;

  const handleCopyKeyword = (keyword: string) => {
    navigator.clipboard.writeText(keyword);
    setCopiedKeyword(keyword);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="w-full max-w-6xl bg-[#FBFBFA] border-2 sm:border-3 border-[#111111] shadow-brutal-lg max-h-[92vh] flex flex-col relative my-auto overflow-hidden animate-in fade-in duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Slim Telemetry Bar */}
        <div className="bg-[#111111] text-white px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b-2 border-[#111111] font-mono text-xs shrink-0">
          {/* Metadata badges cluster */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="bg-[#7C3AED] text-white px-2 py-0.5 font-bold uppercase text-[10px] tracking-wider">
              {item.specimenCode}
            </span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="bg-[#222222] text-[#CCFF00] px-2 py-0.5 font-bold flex items-center gap-1 text-[10px] uppercase">
              <ShoppingBag className="w-3 h-3 text-[#CCFF00]" />
              {item.platform}
            </span>
            <span className="hidden md:inline bg-neutral-800 text-neutral-200 px-2 py-0.5 font-bold text-[10px] uppercase">
              {item.salesRankBadge}
            </span>
            <span className="text-[#CCFF00] font-bold text-xs hidden lg:inline">
              ${item.priceValue.toFixed(2)} USD
            </span>
          </div>

          {/* Dismiss button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 bg-white text-[#111111] hover:bg-[#7C3AED] hover:text-white px-2.5 py-1 text-xs font-bold cursor-pointer transition-colors border border-white"
            title="Close dossier (Esc)"
          >
            <span>DISMISS</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Main Content Deck: Two-Column Editorial Magazine Flow */}
        <div className="flex-1 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-0 bg-[#FBFBFA]">
          
          {/* LEFT COLUMN: Visual & Acquisition Deck (Sticky on Desktop) */}
          <div className="lg:col-span-5 bg-[#F4F4F0] border-b-2 lg:border-b-0 lg:border-r-2 border-[#111111] flex flex-col p-4 sm:p-5 lg:overflow-y-auto space-y-4">
            
            {/* Specimen Interactive Hero Image */}
            <div className="relative border-2 border-[#111111] bg-black overflow-hidden shadow-brutal-sm shrink-0">
              <img
                src={item.heroImage}
                alt={displayTitle}
                className="w-full aspect-4/3 object-cover contrast-105"
              />

              {/* Interactive Hotspot Pins */}
              {item.fieldObservation.hotspots.map((hs) => {
                const isActive = activeHotspot?.id === hs.id;
                return (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspot(isActive ? null : hs)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 ${
                      isActive ? 'scale-125' : 'hover:scale-110'
                    } transition-all`}
                    title={hs.label}
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full opacity-75 ${
                          isActive ? 'bg-[#7C3AED]' : 'bg-[#CCFF00]'
                        }`}
                      />
                      <span
                        className={`relative inline-flex items-center justify-center w-6 h-6 border-2 border-[#111111] font-mono text-[11px] font-black ${
                          isActive
                            ? 'bg-[#7C3AED] text-white shadow-sm'
                            : 'bg-[#CCFF00] text-[#111111]'
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>
                );
              })}

              {/* Pin Inspection Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-[#111111]/90 backdrop-blur-xs text-white px-2.5 py-1.5 font-mono text-[10px] flex items-center justify-between border-t border-[#111111]">
                <span className="text-[#CCFF00] flex items-center gap-1 font-bold">
                  <HelpCircle className="w-3 h-3" />
                  {t.clickPinHint}
                </span>
                <span className="text-neutral-400">
                  {t.inspectionNodesCount(item.fieldObservation.hotspots.length)}
                </span>
              </div>
            </div>

            {/* Hotspot Pin Inspection Reveal */}
            {activeHotspot ? (
              <div className="border-2 border-[#7C3AED] bg-white p-3.5 shadow-brutal-hazard animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-1 mb-2">
                  <span className="font-mono text-xs font-bold text-[#7C3AED] flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#7C3AED]"></span>
                    {activeHotspot.label}
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-[11px] font-mono text-neutral-500 hover:text-black cursor-pointer font-bold"
                  >
                    DISMISS [✕]
                  </button>
                </div>
                <p className="font-sans text-xs text-neutral-800 leading-relaxed font-normal">
                  {activeHotspot.detail}
                </p>
              </div>
            ) : (
              <div className="border border-dashed border-neutral-300 bg-white/70 p-2.5 text-center font-mono text-[11px] text-neutral-500">
                {t.clickPinPlaceholder}
              </div>
            )}

            {/* High-Conversion Direct Outbound & Sourcing Card */}
            <div className="border-2 border-[#111111] bg-white p-4 shadow-brutal-sm space-y-3.5">
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-2">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block font-bold">
                    Official Reference Price
                  </span>
                  <span className="font-display font-black text-2xl text-[#111111]">
                    ${item.priceValue.toFixed(2)}
                    <span className="text-xs font-mono font-normal text-neutral-500 ml-1">USD</span>
                  </span>
                </div>
                <div className="text-right font-mono">
                  <span className="text-[10px] text-neutral-500 uppercase block">Market Range</span>
                  <span className="text-xs font-bold text-neutral-800">
                    {item.sourcingTelemetry.priceRange}
                  </span>
                </div>
              </div>

              {/* Hunt Difficulty Metric */}
              <div className="flex items-center justify-between text-xs font-mono bg-[#F8F7F4] p-2 border border-neutral-200">
                <span className="text-neutral-600 font-bold uppercase text-[11px]">Hunt Difficulty:</span>
                <div className="flex items-center gap-1 text-[#111111]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skull
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < item.sourcingTelemetry.huntDifficulty
                          ? 'text-[#7C3AED] fill-[#7C3AED]'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                  <span className="font-bold text-[11px] ml-1">
                    Level {item.sourcingTelemetry.huntDifficulty}/5
                  </span>
                </div>
              </div>

              {/* Direct Purchase Outbound Button */}
              <a
                href={item.sourcingTelemetry.directOutbound.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-[#111111] border-2 border-[#111111] px-4 py-3 font-mono font-black text-xs flex items-center justify-center gap-2 uppercase tracking-wider transition-all shadow-brutal-sm active-press cursor-pointer"
              >
                <span>ACQUIRE ON {item.platform.toUpperCase()}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Anti-Fraud / Authentication Advice Note */}
              <div className="flex items-start gap-2 bg-[#FFFBEB] p-2.5 border border-[#FDE68A] text-[11px] font-sans text-amber-950 leading-tight">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold font-mono text-[10px] block uppercase text-amber-900 mb-0.5">
                    Scam & Authenticity Check:
                  </span>
                  <span>{item.sourcingTelemetry.antiFraudWarning}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Editorial Longform Reading Stream */}
          <div className="lg:col-span-7 bg-white flex flex-col p-5 sm:p-7 lg:overflow-y-auto space-y-6">
            
            {/* Editorial Title & Taxonomy Header */}
            <div>
              {/* Category & Badge Meta */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-neutral-600 mb-2 font-bold uppercase">
                <span className="text-[#7C3AED]">
                  {item.category.replace(/_/g, ' ')}
                </span>
                <span>·</span>
                <span className="bg-[#111111] text-white px-1.5 py-0.5 text-[10px]">
                  {displayBadge}
                </span>
                <span>·</span>
                <span className="text-neutral-500">
                  WEIRDNESS {item.weirdnessScore.toFixed(1)}/10
                </span>
              </div>

              {/* Main Headline (Sans-serif with high readability) */}
              <h1 className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tight leading-snug uppercase">
                {displayTitle}
              </h1>

              {/* Tagline / Subtitle */}
              {item.tagline && (
                <p className="font-sans text-sm text-neutral-600 mt-1.5 leading-normal">
                  {item.tagline}
                </p>
              )}
            </div>

            {/* Curator Identity Card */}
            {curator && (
              <div 
                onClick={() => {
                  onSelectCurator(curator.id);
                  onClose();
                }}
                className="flex items-center gap-3.5 border-2 border-[#111111] bg-[#FAFAF7] p-3 hover:bg-[#CCFF00] cursor-pointer transition-colors shadow-brutal-sm"
                title={`Filter feed by ${curator.name}`}
              >
                <img
                  src={curator.avatar}
                  alt={curator.name}
                  className="w-12 h-12 object-cover border-2 border-[#111111] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-black text-sm text-[#111111]">
                      {curator.name}
                    </span>
                    <span className="font-mono text-xs text-[#7C3AED] font-bold">
                      @{curator.callsign.toLowerCase().replace(/[^a-z0-9]/g, '_')}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 truncate mt-0.5">
                    {curator.styleGenre}
                  </p>
                  <div className="font-mono text-[10px] text-neutral-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-neutral-400" />
                    <span>{curator.location}</span>
                  </div>
                </div>
                <div className="font-mono text-[11px] font-bold text-neutral-500 flex items-center gap-1 pr-1 shrink-0">
                  <span className="hidden sm:inline">VIEW DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )}

            {/* Pull Quote: Curator Taste Observation */}
            <div className="border-l-4 border-[#7C3AED] bg-[#F9F8F6] p-4 text-neutral-800 font-sans text-sm italic leading-relaxed shadow-2xs">
              "{displayVerdict}"
            </div>

            {/* SECTION 1: Unboxing Field Report & Tactile Feedback */}
            <div className="space-y-3.5 pt-1 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#111111]"></span>
                  <span>01 // UNBOXING & TACTILE FIELD REPORT</span>
                </h2>
              </div>

              {/* Unboxing Paragraph: Sans-Serif for Effortless Reading */}
              <div className="font-sans text-sm text-neutral-800 leading-relaxed font-normal bg-white p-4 border border-neutral-300">
                <p>{displayUnboxing}</p>
              </div>

              {/* Tactile & Haptic Senses Box */}
              <div className="border border-neutral-300 bg-[#F8F7F4] p-4">
                <h3 className="font-mono font-bold text-xs text-[#111111] flex items-center gap-1.5 uppercase mb-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>{t.tactileHapticsHeader}</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {displayTactile}
                </p>
              </div>
            </div>

            {/* SECTION 2: Candid Snags & Hard Caveats (诚实避坑) */}
            <div className="border-2 border-[#7C3AED] bg-[#FAF5FF] p-4 sm:p-5 shadow-brutal-sm space-y-3">
              <div className="flex items-center gap-2 text-[#7C3AED] border-b border-purple-200 pb-2">
                <AlertTriangle className="w-4 h-4 text-[#7C3AED]" />
                <h2 className="font-mono font-bold text-xs uppercase tracking-wider">
                  CANDID SOURCING SNAGS & CAVEATS (NO SUGARCOATING)
                </h2>
              </div>
              <ul className="space-y-2.5">
                {displaySnags.map((snag, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-neutral-800 font-sans text-sm leading-relaxed">
                    <span className="bg-[#7C3AED] text-white w-4 h-4 rounded-none text-[10px] font-mono font-black flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </span>
                    <span>{snag}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECTION 3: Sourcing Telemetry & Underground Search Hacks */}
            <div className="space-y-3.5 pt-2 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <h2 className="font-mono font-bold text-xs uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#111111]"></span>
                  <span>02 // PROCUREMENT LOGISTICS & SEARCH HACKS</span>
                </h2>
              </div>

              {/* Verified Procurement Channels */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase block">
                  Verified Sourcing Channels:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.sourcingTelemetry.primaryChannels.map((channel, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#FAFAF7] border border-neutral-300 font-mono text-xs font-bold text-neutral-800"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1-Click Copy Search Keywords */}
              <div className="border border-neutral-300 bg-[#FAFAF7] p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-[#111111] uppercase">
                    Underground Search Keywords:
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">
                    CLICK STRING TO COPY
                  </span>
                </div>
                <p className="font-sans text-xs text-neutral-600 leading-normal">
                  Copy these specific strings into Mercari, AliExpress, or proxy search engines to bypass western algorithm filters:
                </p>

                <div className="space-y-2 pt-1">
                  {item.sourcingTelemetry.searchKeywords.map((kw, idx) => {
                    const isCopied = copiedKeyword === kw;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleCopyKeyword(kw)}
                        className="flex items-center justify-between p-2.5 bg-white border border-[#111111] hover:bg-[#CCFF00] cursor-pointer transition-colors group shadow-2xs"
                      >
                        <code className="text-xs font-mono font-bold text-[#111111]">{kw}</code>
                        <button className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-600 group-hover:text-black">
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-700">COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 4: Curator Verdict */}
            <div className="border-2 border-[#111111] bg-[#111111] text-[#F4F4F0] p-4 sm:p-5 shadow-brutal font-mono text-xs">
              <div className="text-[10px] text-[#CCFF00] font-bold uppercase tracking-wider mb-2">
                FINAL CURATOR CONCLUSION //
              </div>
              <p className="font-sans text-sm italic leading-relaxed text-neutral-200 border-l-2 border-[#CCFF00] pl-3">
                "{displayVerdict}"
              </p>
              <div className="mt-3 text-right text-[11px] text-[#CCFF00] font-bold">
                — {curator?.name || 'ARCHIVE CURATOR'} (@{curator?.callsign.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'curator'})
              </div>
            </div>

          </div>

        </div>

        {/* Modal Slim Footer */}
        <div className="bg-[#EAE8E3] px-4 py-2 sm:py-2.5 border-t-2 border-[#111111] flex items-center justify-between font-mono text-xs shrink-0">
          <span className="text-neutral-600 text-[11px] hidden sm:inline">
            PRESS [ESC] OR CLICK OUTSIDE TO RETURN TO FEED
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="bg-[#111111] text-white px-4 py-1 font-bold hover:bg-[#7C3AED] transition-colors cursor-pointer text-xs"
            >
              CLOSE DOSSIER [✕]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
