import React, { useState } from 'react';
import type { TranslationDictionary } from '../i18n/types';
import { Terminal, Shield, ArrowUp, Check } from 'lucide-react';

interface FooterProps {
  onOpenAdminGuide: () => void;
  onOpenCurators: () => void;
  t: TranslationDictionary;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminGuide, onOpenCurators, t }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-[#111111] bg-[#111111] text-[#F4F4F0] font-mono text-xs">
      {/* Top Banner / Barcode Banner */}
      <div className="border-b border-neutral-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#CCFF00]">
            {t.footerEditionBanner}
          </span>
          <span>·</span>
          <span>{t.footerHuntersSubtitle}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-[#CCFF00] transition-colors cursor-pointer"
        >
          <span>{t.returnToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#7C3AED] text-white flex items-center justify-center font-display font-black text-base border border-white">
                AN
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                {t.brandTitle}
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs max-w-md">
              {t.footerBrandDesc}
            </p>

            <div className="p-3 bg-neutral-900 border border-neutral-700 text-[11px] text-neutral-400 space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Shield className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>{t.noSlopTitle}</span>
              </div>
              <p>{t.noSlopDesc}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-xs border-b border-neutral-800 pb-2">
              {t.footerColTitle}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={onOpenCurators}
                  className="hover:text-[#CCFF00] transition-colors cursor-pointer text-left"
                >
                  {t.linkCuratorDossiers}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdminGuide}
                  className="hover:text-[#CCFF00] transition-colors cursor-pointer text-left"
                >
                  {t.linkAdminManual}
                </button>
              </li>
              <li>
                <span className="text-neutral-600 cursor-not-allowed">
                  {t.linkRss}
                </span>
              </li>
              <li>
                <span className="text-neutral-600 cursor-not-allowed">
                  {t.linkSubmit}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Signal Dispatch (Newsletter) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-[#CCFF00] uppercase text-xs border-b border-neutral-800 pb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.weeklyWireHeader}</span>
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {t.weeklyWireDesc}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#CCFF00]"
                />
                <button
                  type="submit"
                  className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold px-4 py-2 text-xs uppercase shrink-0 transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : t.subscribeBtn}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#CCFF00]">
                  {t.subscribedMsg}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Barcode / Colophon */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500">
          <div>
            {t.copyrightNotice}
          </div>
          <div className="flex items-center gap-4">
            <span>SYS // V1.0-BRUTALIST-ZINE</span>
            <span>{t.noCookiesNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
