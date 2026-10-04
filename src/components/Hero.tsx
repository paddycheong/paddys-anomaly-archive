import React from 'react';
import type { Curator } from '../data/types';
import type { TranslationDictionary } from '../i18n/types';
import { ShieldCheck, Compass, Eye, Sparkles, AlertTriangle } from 'lucide-react';

interface HeroProps {
  curators: Curator[];
  onSelectCurator: (curatorId: string) => void;
  selectedCuratorId: string | null;
  onClearCurator: () => void;
  t: TranslationDictionary;
}

export const Hero: React.FC<HeroProps> = ({
  curators,
  onSelectCurator,
  selectedCuratorId,
  onClearCurator,
  t,
}) => {
  return (
    <section className="border-b-2 border-[#111111] bg-[#F4F4F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Manifesto Column */}
          <div className="lg:col-span-8 flex flex-col justify-between border-2 border-[#111111] bg-white p-5 sm:p-6 md:p-8 shadow-brutal relative">
            <div>
              {/* Header Telemetry bar (responsive flex to prevent mobile overlap) */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#7C3AED] font-bold">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#7C3AED]" />
                  <span className="leading-snug">{t.unfilteredNetwork}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                  <span className="font-mono text-[10px] bg-[#111111] text-[#CCFF00] px-2 py-0.5 font-bold uppercase tracking-wider">
                    {t.deStandardizedCommerce}
                  </span>
                  <span className="hidden sm:inline font-mono text-[10px] border border-[#111111] px-1.5 py-0.5 text-neutral-500">
                    REF // NO-904
                  </span>
                </div>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.92] text-[#111111] mb-6">
                {t.heroHeadline1}<br />
                <span className="bg-[#111111] text-[#F4F4F0] px-2 py-0.5 inline-block my-1">
                  {t.heroHeadline2}
                </span><br />
                {t.heroHeadline3}
              </h1>

              <p className="font-mono text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed mb-6">
                {t.heroManifesto}
              </p>
            </div>

            {/* Methodology Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t-2 border-[#111111] text-xs font-mono">
              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#111111] font-bold">{t.methodObsTitle}</strong>
                  <span className="text-neutral-600 text-[11px]">{t.methodObsDesc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Compass className="w-4 h-4 text-[#0D35E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#111111] font-bold">{t.methodSrcTitle}</strong>
                  <span className="text-neutral-600 text-[11px]">{t.methodSrcDesc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#111111] font-bold">{t.methodScamTitle}</strong>
                  <span className="text-neutral-600 text-[11px]">{t.methodScamDesc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Curators Ticker / Side Dossier Column */}
          <div className="lg:col-span-4 flex flex-col justify-between border-2 border-[#111111] bg-[#FAFAF7] p-5 shadow-brutal">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2 mb-4">
                <span className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  {t.activeCuratorsHeader}
                </span>
                {selectedCuratorId && (
                  <button
                    onClick={onClearCurator}
                    className="font-mono text-[10px] text-[#7C3AED] underline hover:no-underline font-bold cursor-pointer"
                  >
                    {t.resetFilterBtn}
                  </button>
                )}
              </div>

              <div className="space-y-2.5">
                {curators.map((curator) => {
                  const isSelected = selectedCuratorId === curator.id;
                  return (
                    <button
                      key={curator.id}
                      onClick={() => onSelectCurator(curator.id)}
                      className={`w-full text-left p-2.5 border-2 transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#111111] bg-[#CCFF00] shadow-brutal-sm'
                          : 'border-neutral-300 hover:border-[#111111] bg-white hover:bg-neutral-50'
                      }`}
                    >
                      <img
                        src={curator.avatar}
                        alt={curator.name}
                        className="w-10 h-10 object-cover border-2 border-[#111111] shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold truncate">
                            {curator.callsign}
                          </span>
                          <span className="font-mono text-[10px] bg-neutral-100 border border-neutral-300 px-1">
                            {curator.curatedCount} {t.curatorItemsSuffix}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-neutral-600 truncate">
                          {curator.location}
                        </p>
                        <p className="font-mono text-[10px] text-neutral-500 truncate">
                          {curator.styleGenre}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#111111] mt-4 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">DOSSIER PROTOCOL:</span>
              <span className="font-bold text-[#111111] uppercase tracking-wider">
                {t.protocolStatus}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
