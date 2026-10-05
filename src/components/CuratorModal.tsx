import React, { useState } from 'react';
import type { Curator, OddityItem } from '../data/types';
import type { TranslationDictionary } from '../i18n/types';
import { X, ExternalLink, MapPin, Zap, Flame, Compass, Eye } from 'lucide-react';

interface CuratorModalProps {
  curators: Curator[];
  items: OddityItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectCuratorFilter: (curatorId: string) => void;
  onInspectItem: (item: OddityItem) => void;
  t: TranslationDictionary;
}

export const CuratorModal: React.FC<CuratorModalProps> = ({
  curators,
  items,
  isOpen,
  onClose,
  onSelectCuratorFilter,
  onInspectItem,
  t,
}) => {
  const [selectedCuratorId, setSelectedCuratorId] = useState<string>(curators[0]?.id || '');

  if (!isOpen) return null;

  const currentCurator = curators.find((c) => c.id === selectedCuratorId) || curators[0];
  const curatorItems = items.filter((i) => i.curatorId === currentCurator?.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        className="w-full max-w-5xl bg-[#F4F4F0] border-4 border-[#111111] shadow-brutal-lg max-h-[92vh] flex flex-col relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 bg-[#111111] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#111111] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#7C3AED] text-white px-2 py-0.5 font-bold uppercase text-[10px]">
              {t.dossierDirectoryBadge}
            </span>
            <span className="text-[#CCFF00] font-bold">
              {t.verifiedCuratorArchive}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1 bg-white text-[#111111] hover:bg-[#7C3AED] hover:text-white px-2.5 py-1 font-bold cursor-pointer transition-colors"
          >
            <span>{t.dismissBtn.replace('[', '').replace(']', '')}</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Curator Navigation Selector */}
        <div className="shrink-0 bg-[#EAE8E3] border-b-2 border-[#111111] overflow-x-auto scrollbar-thin">
          <div className="flex sm:grid sm:grid-cols-5 divide-x-2 divide-[#111111] min-w-max sm:min-w-0">
            {curators.map((c) => {
              const isSelected = c.id === currentCurator.id;
              const count = items.filter((i) => i.curatorId === c.id).length || c.curatedCount;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCuratorId(c.id)}
                  className={`px-3 py-3 font-mono text-xs flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left relative min-h-[58px] ${
                    isSelected
                      ? 'bg-white text-[#111111] font-bold border-b-4 border-b-[#7C3AED] shadow-xs'
                      : 'bg-[#EAE8E3] text-neutral-700 hover:bg-[#DCD8CF]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-8 h-8 object-cover border-2 border-[#111111] shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="block font-bold text-xs truncate leading-tight">{c.callsign}</span>
                      <span className="block text-[10px] text-neutral-500 font-normal truncate mt-0.5">
                        {count} ARTIFACTS
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-mono text-[10px] font-black px-1.5 py-0.5 shrink-0 border border-[#111111] transition-colors ${
                      isSelected
                        ? 'bg-[#7C3AED] text-white'
                        : 'bg-white text-neutral-800'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Curator Detail Body */}
        {currentCurator && (
          <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 space-y-6">
            {/* Profile Overview Card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-2 border-[#111111] bg-white p-5 shadow-brutal">
              {/* Photo & Callsign */}
              <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r-2 border-[#111111] pb-4 md:pb-0 md:pr-4">
                <img
                  src={currentCurator.avatar}
                  alt={currentCurator.name}
                  className="w-36 h-36 object-cover border-2 border-[#111111] shadow-brutal-sm mb-3"
                />
                <h2 className="font-display font-black text-2xl text-[#111111]">
                  {currentCurator.name}
                </h2>
                <div className="font-mono text-xs text-[#7C3AED] font-bold mb-1">
                  @{currentCurator.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}
                </div>
                <div className="font-mono text-xs text-[#0D35E8] flex items-center gap-1 font-bold mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentCurator.location}
                </div>

                <button
                  onClick={() => {
                    onSelectCuratorFilter(currentCurator.id);
                    onClose();
                  }}
                  className="w-full bg-[#111111] hover:bg-[#CCFF00] hover:text-[#111111] text-white py-2 font-mono text-xs font-bold uppercase transition-colors shadow-brutal-sm cursor-pointer"
                >
                  {t.viewCuratedFeedBtn(curatorItems.length)}
                </button>
              </div>

              {/* Bio & Taste Radar */}
              <div className="md:col-span-8 space-y-4 font-mono text-xs">
                {/* Style Genre Pill */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-500 uppercase">{t.aestheticDisciplineLabel}</span>
                  <span className="bg-[#111111] text-[#CCFF00] px-2 py-0.5 font-bold uppercase">
                    {currentCurator.styleGenre}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="bg-[#F4F4F0] border-l-4 border-[#7C3AED] p-3 text-neutral-800 italic leading-relaxed">
                  "{currentCurator.quote}"
                </blockquote>

                {/* Bio text */}
                <p className="text-neutral-700 leading-relaxed">
                  {currentCurator.bio}
                </p>

                {/* Taste Radar Bar Matrix */}
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-2 uppercase text-[11px] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#7C3AED]" />
                    {t.curatorialTasteRadar}
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-neutral-500">{t.radarWeirdness}</span>
                        <span className="font-bold">{currentCurator.tasteRadar.weirdness}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-2 border border-[#111111]">
                        <div
                          className="bg-[#7C3AED] h-full"
                          style={{ width: `${currentCurator.tasteRadar.weirdness}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-neutral-500">{t.radarTactility}</span>
                        <span className="font-bold">{currentCurator.tasteRadar.tactility}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-2 border border-[#111111]">
                        <div
                          className="bg-[#111111] h-full"
                          style={{ width: `${currentCurator.tasteRadar.tactility}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-neutral-500">{t.radarArtistry}</span>
                        <span className="font-bold">{currentCurator.tasteRadar.artistry}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-2 border border-[#111111]">
                        <div
                          className="bg-[#0D35E8] h-full"
                          style={{ width: `${currentCurator.tasteRadar.artistry}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-neutral-500">{t.radarScarcity}</span>
                        <span className="font-bold">{currentCurator.tasteRadar.scarcity}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-2 border border-[#111111]">
                        <div
                          className="bg-[#CCFF00] h-full"
                          style={{ width: `${currentCurator.tasteRadar.scarcity}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hunting Grounds */}
                <div className="pt-2 border-t border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-1.5 uppercase text-[11px] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#0D35E8]" />
                    {t.preferredGroundsHeader}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCurator.huntingGrounds.map((ground, idx) => (
                      <span
                        key={idx}
                        className="bg-[#FAFAF7] border border-neutral-300 text-neutral-800 px-2 py-0.5 text-[11px]"
                      >
                        {ground}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outbound Links */}
                <div className="pt-2 border-t border-neutral-200 flex flex-wrap gap-2">
                  {currentCurator.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F4F0] hover:bg-[#111111] hover:text-white border border-[#111111] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Curated Items by this curator */}
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="font-bold text-[#111111] uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#7C3AED]" />
                  {t.catalogedByHeader(currentCurator.callsign, curatorItems.length)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {curatorItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        onInspectItem(item);
                        onClose();
                      }}
                      className="border-2 border-[#111111] bg-white p-3 shadow-brutal-sm hover:shadow-brutal cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="aspect-16/10 bg-neutral-900 border border-[#111111] mb-2 overflow-hidden">
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 uppercase">
                          {item.specimenCode}
                        </div>
                        <h4 className="font-display font-black text-sm text-[#111111] group-hover:text-[#7C3AED] transition-colors leading-tight mb-1">
                          {item.title}
                        </h4>
                        <p className="font-mono text-[11px] text-neutral-600 line-clamp-2">
                          {item.tagline}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-neutral-200 font-mono text-[10px] flex items-center justify-between">
                        <span className="font-bold text-[#7C3AED]">
                          {t.weirdnessIndexLabel.replace('INDEX', '')}: {item.weirdnessScore}
                        </span>
                        <span className="flex items-center gap-1 font-bold text-[#111111]">
                          <Eye className="w-3 h-3" />
                          {t.inspectTelemetryBtn.replace('[', '').replace(']', '').trim()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
