import React, { useState } from 'react';
import type { TranslationDictionary } from '../i18n/types';
import { X, Copy, Check, Terminal, FileCode, UploadCloud } from 'lucide-react';

interface AdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationDictionary;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({ isOpen, onClose, t }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const sampleItemCode = `// Add this object inside the array in: src/data/items.ts
{
  id: 'anm-009',
  specimenCode: 'SPECIMEN // 109-MOD',
  title: 'Your Strange Product Title Here',
  category: 'ODD_DESK_TACTILE', // Options: ODD_DESK_TACTILE | CYBER_HARDWARE | WEARABLE_ANOMALIES | UNCANNY_DOMESTIC | ZINES_RELICS
  curatorId: 'cr-01', // ID of the curator who found it
  dateLogged: 'OCT 01, 2026',
  weirdnessScore: 9.4,
  scarcityBadge: 'LIMITED BATCH', // Options: 1-OF-1 PROTOTYPE | LIMITED BATCH | DEADSTOCK RELIC | COMMISSION ONLY
  heroImage: 'https://images.unsplash.com/...',
  gallery: ['https://images.unsplash.com/...'],
  tagline: 'A concise, punchy sentence explaining the oddity.',
  tags: ['KEYWORD1', 'TACTILE', 'COLD WAR', 'RAW'],
  fieldObservation: {
    unboxingLog: 'Describe what it feels like to open and hold this item...',
    tactileFeedback: 'Describe switch clicks, metal weight, friction, sounds...',
    honestSnags: [
      'Honest flaw 1: Heavy power draw or stiff dials',
      'Honest flaw 2: Fragile components or shipping delays'
    ],
    curatorVerdict: 'Unapologetic concluding statement about its character.',
    hotspots: [
      {
        id: 'hs-1',
        x: 45, // horizontal percentage on image (0-100)
        y: 50, // vertical percentage on image (0-100)
        label: 'Teardown Feature Name',
        detail: 'Teardown secrets, rare components, or manufacturing quirks.'
      }
    ]
  },
  sourcingTelemetry: {
    huntDifficulty: 3, // 1 to 5 skulls
    priceRange: '$150 — $240 USD',
    primaryChannels: ['Mercari Japan', 'Xianyu Modders', 'Instagram DM'],
    searchKeywords: ['exact search string 1', 'proxy search term 2'],
    antiFraudWarning: 'How to avoid cheap resin copies or scams.',
    directOutbound: {
      label: 'Visit Workshop / Reserve Batch',
      url: 'https://...',
      sourceType: 'Artisan Workshop'
    }
  }
}`;

  const sampleCuratorCode = `// Add this object inside the array in: src/data/buyers.ts
{
  id: 'cr-06',
  callsign: 'HEX_DRIFTER',
  name: 'Alex Rivera',
  avatar: 'https://images.unsplash.com/...',
  location: 'Seoul // Euljiro Industrial Alley',
  styleGenre: 'Analog CRT Glitch Art & Underground Audio Relics',
  huntingGrounds: ['Euljiro Electronics Alley', 'Danggeun Market', 'Tokyo Hard-Off Bins'],
  tasteRadar: {
    weirdness: 91,
    tactility: 94,
    artistry: 88,
    scarcity: 89
  },
  quote: 'If you cannot take it apart with a single screwdriver, it is disposable junk.',
  bio: 'Specialist in 1980s broadcast monitoring gear and hacked video synthesizers.',
  links: [
    { platform: 'Instagram', url: 'https://instagram.com', label: '@hex.drifter' },
    { platform: 'Personal Store', url: 'https://...', label: 'Boutique Store' }
  ],
  curatedCount: 1
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        className="w-full max-w-4xl bg-[#F4F4F0] border-4 border-[#111111] shadow-brutal-lg max-h-[92vh] flex flex-col relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111111] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#111111] font-mono text-xs">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-bold">
              {t.adminManualBadge}
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

        {/* Content Body */}
        <div className="overflow-y-auto p-4 md:p-6 space-y-6 font-mono text-xs">
          {/* Quick Notice */}
          <div className="p-4 bg-white border-2 border-[#111111] shadow-brutal">
            <h3 className="font-display font-black text-base text-[#111111] mb-2 uppercase">
              {t.zeroDbNoticeTitle}
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              {t.zeroDbNoticeDesc}
            </p>
          </div>

          {/* Section 1: Adding a Product */}
          <div className="p-4 bg-white border-2 border-[#111111] shadow-brutal space-y-3">
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2">
              <span className="font-bold text-[#7C3AED] flex items-center gap-1.5 uppercase text-sm">
                <FileCode className="w-4 h-4" />
                {t.productGuideHeader}
              </span>
              <button
                onClick={() => copyCode(sampleItemCode, 'item')}
                className="flex items-center gap-1 bg-[#111111] hover:bg-[#CCFF00] hover:text-black text-white px-2.5 py-1 font-bold transition-colors cursor-pointer"
              >
                {copiedSection === 'item' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>{t.copiedSnippetBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyCodeTemplateBtn}</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-neutral-600">
              {t.targetFileLabel} <code className="bg-neutral-100 px-1 py-0.5 border border-neutral-300 font-bold">src/data/items.ts</code>
            </p>

            <pre className="bg-[#111111] text-[#CCFF00] p-3 border border-[#111111] overflow-x-auto text-[11px] leading-relaxed max-h-56">
              {sampleItemCode}
            </pre>
          </div>

          {/* Section 2: Adding a Curator */}
          <div className="p-4 bg-white border-2 border-[#111111] shadow-brutal space-y-3">
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2">
              <span className="font-bold text-[#0D35E8] flex items-center gap-1.5 uppercase text-sm">
                <FileCode className="w-4 h-4" />
                {t.curatorGuideHeader}
              </span>
              <button
                onClick={() => copyCode(sampleCuratorCode, 'curator')}
                className="flex items-center gap-1 bg-[#111111] hover:bg-[#CCFF00] hover:text-black text-white px-2.5 py-1 font-bold transition-colors cursor-pointer"
              >
                {copiedSection === 'curator' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>{t.copiedSnippetBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyCodeTemplateBtn}</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-neutral-600">
              {t.targetFileLabel} <code className="bg-neutral-100 px-1 py-0.5 border border-neutral-300 font-bold">src/data/buyers.ts</code>
            </p>

            <pre className="bg-[#111111] text-[#CCFF00] p-3 border border-[#111111] overflow-x-auto text-[11px] leading-relaxed max-h-56">
              {sampleCuratorCode}
            </pre>
          </div>

          {/* Section 3: Static Deployment */}
          <div className="p-4 bg-[#FAFAF7] border-2 border-[#111111] shadow-brutal space-y-2">
            <h4 className="font-bold text-[#111111] uppercase flex items-center gap-1.5">
              <UploadCloud className="w-4 h-4 text-[#7C3AED]" />
              {t.instantDeployHeader}
            </h4>
            <p className="text-neutral-700 leading-relaxed text-[11px]">
              {t.instantDeployDesc}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EAE8E3] px-4 py-3 border-t-2 border-[#111111] flex justify-end font-mono text-xs">
          <button
            onClick={onClose}
            className="bg-[#111111] text-white px-4 py-1.5 font-bold hover:bg-[#7C3AED] transition-colors cursor-pointer"
          >
            {t.understandBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
