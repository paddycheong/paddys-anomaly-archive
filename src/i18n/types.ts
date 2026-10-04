export type Language = 'en';

export interface TranslationDictionary {
  // Top Telemetry Bar
  telemetryOnline: string;
  sysTime: string;
  curatorsVerified: string;
  totalArtifacts: string;
  archiveEdition: string;
  adminGuideBtn: string;
  langLabel: string;

  // Header
  brandTitle: string;
  brandTagline: string;
  searchPlaceholder: string;
  randomSpecimenBtn: string;
  curatorDossiersBtn: string;

  // Hero
  deStandardizedCommerce: string;
  unfilteredNetwork: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroHeadline3: string;
  heroManifesto: string;
  methodObsTitle: string;
  methodObsDesc: string;
  methodSrcTitle: string;
  methodSrcDesc: string;
  methodScamTitle: string;
  methodScamDesc: string;
  activeCuratorsHeader: string;
  resetFilterBtn: string;
  curatorItemsSuffix: string;
  protocolStatus: string;

  // Category Filter
  taxonomyHeader: string;
  taxonomySubtitle: string;
  catAll: string;
  catDesk: string;
  catCyber: string;
  catWearable: string;
  catDomestic: string;
  catZines: string;

  // Feed Controls & Sort
  telemetryFeedHeader: string;
  showingCount: (showing: number, total: number) => string;
  filterCategoryPrefix: string;
  filterCuratorPrefix: string;
  filterQueryPrefix: string;
  resetAllFilters: string;
  sortByLabel: string;
  sortChronological: string;
  sortWeirdnessHigh: string;
  sortDifficultyHigh: string;
  sortDifficultyLow: string;
  sortPriceLow: string;
  sortPriceHigh: string;
  sortRecentlyCataloged: string;

  // Advanced Filters
  advancedFiltersHeader: string;
  advancedFiltersToggleOpen: string;
  advancedFiltersToggleClose: string;
  activeFiltersBadge: (count: number) => string;
  weirdnessSliderTitle: string;
  minWeirdnessValue: (val: number) => string;
  priceRangeTitle: string;
  pricePresetAll: string;
  pricePresetUnder20: string;
  pricePreset20to50: string;
  pricePreset50to100: string;
  pricePreset100Plus: string;
  priceMinPlaceholder: string;
  priceMaxPlaceholder: string;
  huntDiffTitle: string;
  diffAll: string;
  diffLevel1: string;
  diffLevel2: string;
  diffLevel3: string;
  diffLevel4: string;
  diffLevel5: string;
  platformTitle: string;
  allPlatforms: string;
  clearFiltersBtn: string;
  platformOriginLabel: string;
  topSalesRankLabel: string;
  syntheticScoutTag: string;

  // Empty State
  zeroAnomaliesTitle: string;
  zeroAnomaliesDesc: string;
  resetAllBtn: string;

  // Item Card
  inspectionPinsSuffix: string;
  weirdnessIndexLabel: string;
  huntDifficultyLabel: string;
  inspectTelemetryBtn: string;

  // Dual Perspective Modal
  verifiedLogBadge: string;
  verticalLabel: string;
  discoveredByLabel: string;
  tabObservation: string;
  tabSourcing: string;
  clickPinHint: string;
  inspectionNodesCount: (count: number) => string;
  clickPinPlaceholder: string;
  dismissBtn: string;
  tactileHapticsHeader: string;
  unboxingReportHeader: string;
  candidSnagsHeader: string;
  curatorVerdictHeader: string;
  benchmarksHeader: string;
  priceSpreadLabel: string;
  huntDifficultyRatingLabel: string;
  verifiedChannelsLabel: string;
  antiFraudHeader: string;
  searchKeywordsHeader: string;
  clickToCopySubtitle: string;
  copiedBtn: string;
  copyBtn: string;
  primaryDispatchHeader: string;
  launchExternalBtn: string;
  escInstruction: string;
  closeDossierBtn: string;

  // Curator Modal
  dossierDirectoryBadge: string;
  verifiedCuratorArchive: string;
  legalNamePrefix: string;
  viewCuratedFeedBtn: (count: number) => string;
  aestheticDisciplineLabel: string;
  curatorialTasteRadar: string;
  radarWeirdness: string;
  radarTactility: string;
  radarArtistry: string;
  radarScarcity: string;
  preferredGroundsHeader: string;
  catalogedByHeader: (name: string, count: number) => string;

  // Admin Guide Modal
  adminManualBadge: string;
  zeroDbNoticeTitle: string;
  zeroDbNoticeDesc: string;
  productGuideHeader: string;
  curatorGuideHeader: string;
  targetFileLabel: string;
  copiedSnippetBtn: string;
  copyCodeTemplateBtn: string;
  instantDeployHeader: string;
  instantDeployDesc: string;
  understandBtn: string;

  // Footer
  footerEditionBanner: string;
  footerHuntersSubtitle: string;
  returnToTop: string;
  footerBrandDesc: string;
  noSlopTitle: string;
  noSlopDesc: string;
  footerColTitle: string;
  linkCuratorDossiers: string;
  linkAdminManual: string;
  linkRss: string;
  linkSubmit: string;
  weeklyWireHeader: string;
  weeklyWireDesc: string;
  emailPlaceholder: string;
  subscribeBtn: string;
  subscribedMsg: string;
  copyrightNotice: string;
  noCookiesNotice: string;
}
