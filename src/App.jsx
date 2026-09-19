import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import iconIco from './assets/icons/icon.ico';
import logoImg from './assets/icons/logo.png';
import portraitImg from './assets/portrait.jpg';
import motogpHelmet from './assets/icons/motogp_helmet.png';

/* The GitHub avatar is the site's mark: the favicon, the share card and the
   logo you click to get home. The hero shows the real photo instead, so the
   two are deliberately separate -- changing one never touches the other. */
const BRAND_AVATAR_SRC = 'https://github.com/ManuCa93.png';
const HERO_PORTRAIT_SRC = portraitImg;
import motogpTimeAttack from './assets/projects/motogp/01_time_attack.jpg';
import motogpPreRacePace from './assets/projects/motogp/02_pre_race_pace.jpg';
import motogpLiveSimulation from './assets/projects/motogp/03_live_race_simulation.jpg';
import motogpWeekendOverview from './assets/projects/motogp/04_weekend_overview.jpg';
import motogpLapByLap from './assets/projects/motogp/05_lap_by_lap.jpg';
import motogpRiderGrades from './assets/projects/motogp/06_rider_grades.jpg';
import motogpRiderProfile from './assets/projects/motogp/07_rider_profile.jpg';
import motogpRaceVsQuali from './assets/projects/motogp/08_race_vs_quali.jpg';
import motogpConsistency from './assets/projects/motogp/09_consistency.jpg';
import motogpTeamPerformance from './assets/projects/motogp/10_team_performance.jpg';
import motogp3dMapping from './assets/projects/motogp/11_3d_environmental_mapping.jpg';
import polifyHome from './assets/projects/polify/home-desktop-scuro.jpg';
import polifySondaggio from './assets/projects/polify/sondaggio-01-scala-con-spiegazione.jpg';
import polifyRisultato from './assets/projects/polify/risultato-sintesi.jpg';
import polifyMappa from './assets/projects/polify/mappa-ideologica.jpg';
import polifyAreaPerArea from './assets/projects/polify/area-per-area.jpg';
import polifyClassifica from './assets/projects/polify/classifica-completa.jpg';
import polifyCondividi from './assets/projects/polify/condividi-sondaggio.jpg';
import polifyPartiti from './assets/projects/polify/elenco-partiti.jpg';
import pomodoroMainDashboard from './assets/projects/pomodoro/main_dashboard.jpg';
import adosOverview from './assets/projects/ados/01_dashboard_overview.png';
import adosLabelStats from './assets/projects/ados/02_dashboard_label_toy_stats.png';
import adosToyLeaderboard from './assets/projects/ados/08_toy_analytics_leaderboard.png';
import adosToyEntropy from './assets/projects/ados/09_toy_analytics_entropy_intentionality.png';
import adosNotesAiSummary from './assets/projects/ados/10_notes_ai_summary.jpg';
import adosSensorOnlyRisk from './assets/projects/ados/11_sensor_only_risk.jpg';
import adosPatientVsCohort from './assets/projects/ados/12_patient_vs_cohort_stats.jpg';
import adosLabelTimelineImu from './assets/projects/ados/13_label_timeline_imu.jpg';
import adosMovementTimelines from './assets/projects/ados/14_movement_timelines.jpg';
import enjoyLogo from './assets/projects/enjoythenight/logo.png';
import enjoyOnboardingWelcome from './assets/projects/enjoythenight/01_onboarding_welcome.png';
import enjoyDashboardOverview from './assets/projects/enjoythenight/03_dashboard_overview.png';
import enjoyAddDrink from './assets/projects/enjoythenight/04_add_drink_bottom_sheet.png';
import enjoyOverLimit from './assets/projects/enjoythenight/05_dashboard_over_limit_warning.png';
import enjoyHistory24h from './assets/projects/enjoythenight/06_history_chart_24h.png';
import enjoyHistory3h from './assets/projects/enjoythenight/07_history_chart_3h_range.png';
import enjoyDateRangePicker from './assets/projects/enjoythenight/08_custom_date_range_picker.png';
import enjoySettings from './assets/projects/enjoythenight/09_settings_screen.png';
import uniBayesian from './assets/projects/uni/01_bayesian_hierarchical_stations.png';
import uniIntrusion from './assets/projects/uni/02_intrusion_confusion_matrix.png';
import uniNbaShots from './assets/projects/uni/03_nba_shot_density_map.png';
import uniDroneBall from './assets/projects/uni/04_drone_ball_detection.png';
import uniDroneTof from './assets/projects/uni/05_drone_tof_distance_profile.png';
import uniEvFleet from './assets/projects/uni/06_ev_fleet_energy_timeseries.png';
import uniDrugDesign from './assets/projects/uni/07_drug_design_auroc.png';
import uniCreditRisk from './assets/projects/uni/08_credit_risk_by_gender.png';
import uniCitations from './assets/projects/uni/09_citation_feature_importance.png';
import uniRevenue from './assets/projects/uni/10_revenue_by_city.png';
import uniMolecules from './assets/projects/uni/11_drug_design_molecules.png';
import uniDronePipeline from './assets/projects/uni/12_drone_vision_pipeline.png';
import uniDroneObstacle from './assets/projects/uni/13_drone_obstacle_view.png';
import uniRobotArm from './assets/projects/uni/14_robot_arm_trajectory.png';
import uniMlMap from './assets/projects/uni/15_ml_vs_map_estimate.png';
import uniMriAnnotations from './assets/projects/uni/16_mri_tumor_annotations.jpg';
import uniUnetSeg from './assets/projects/uni/17_unet_segmentation.jpg';
import uniTumorClass from './assets/projects/uni/18_tumor_classification.jpg';
import uniTumorRoc from './assets/projects/uni/19_tumor_roc_curves.png';
import uniTumorConfusion from './assets/projects/uni/20_tumor_confusion_matrix.png';
import uniFleetForecast from './assets/projects/uni/21_fleet_forecast_24h.png';
import uniFleetProb from './assets/projects/uni/22_fleet_probabilistic_forecast.png';
import uniRevenueForecast from './assets/projects/uni/23_revenue_forecast_unseen.png';
import uniHoltWinters from './assets/projects/uni/24_holt_winters_residuals.png';
import uniForecastCompare from './assets/projects/uni/25_forecast_model_comparison.png';
import uniTrafficConfusion from './assets/projects/uni/26_traffic_confusion_matrices.png';
import uniTrafficRoc from './assets/projects/uni/27_traffic_roc_curves.png';
import uniCreditConfusion from './assets/projects/uni/28_credit_confusion_matrix.png';
import uniCreditRoc from './assets/projects/uni/29_credit_roc_curve.png';
import uniMachineryConfusion from './assets/projects/uni/30_machinery_confusion_matrix.png';
import uniCitationGcn from './assets/projects/uni/31_citation_gcn_results.png';
import uniStressSignals from './assets/projects/uni/32_stress_raw_wrist_signals.png';
import uniStressConfusion from './assets/projects/uni/33_stress_confusion_matrices.png';
import uniStressShap from './assets/projects/uni/34_stress_shap_summary.png';
import uniEvooFluorescence from './assets/projects/uni/35_evoo_fluorescence_maps.png';
import uniSweetBitter from './assets/projects/uni/36_sweet_bitter_feature_selection.png';
import uniAutoencoderError from './assets/projects/uni/37_autoencoder_reconstruction_error.png';
import uniGpEstimate from './assets/projects/uni/38_gp_true_vs_estimated.png';
import alimentiHome from './assets/projects/alimenti/01_home_dashboard.png';
import alimentiPantry from './assets/projects/alimenti/02_pantry_inventory.png';
import alimentiShoppingList from './assets/projects/alimenti/03_shopping_list.png';
import alimentiRecipes from './assets/projects/alimenti/04_recipes_cookbook.png';
import alimentiDietCalendar from './assets/projects/alimenti/05_diet_calendar.png';

/* ---------------------------------------------------------------------------
   Icons
   Single stroke weight, currentColor everywhere, so any icon inherits whatever
   accent or ink colour its container sets.
   --------------------------------------------------------------------------- */
const Ico = ({ d, fill = 'none', children, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill={fill}
    stroke={fill === 'none' ? 'currentColor' : 'none'}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {d ? <path d={d} /> : children}
  </svg>
);

const IconPin = () => (
  <Ico>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Ico>
);
const IconCake = () => (
  <Ico>
    <path d="M4 20h16M5 20v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
    <path d="M12 12V9M9 12V9.5M15 12V9.5" />
  </Ico>
);
const IconArrowRight = () => <Ico d="M5 12h14M13 6l6 6-6 6" />;
const IconArrowUp = () => <Ico d="M12 19V5M6 11l6-6 6 6" />;
const IconExternal = () => (
  <Ico>
    <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
    <path d="M14 4h6v6M20 4L10 14" />
  </Ico>
);
const IconClose = () => <Ico d="M6 18L18 6M6 6l12 12" />;
const IconMenu = () => <Ico d="M4 7h16M4 12h16M4 17h16" />;
const IconChevronLeft = () => <Ico d="M15 19l-7-7 7-7" />;
const IconChevronRight = () => <Ico d="M9 5l7 7-7 7" />;
const IconClock = () => (
  <Ico>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Ico>
);
const IconLinkedIn = () => (
  <Ico fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
);
const IconGitHub = () => (
  <Ico fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 5 18.2 5.3 18.2 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
);
const IconMail = () => (
  <Ico>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </Ico>
);
const IconDoc = () => (
  <Ico>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Ico>
);
const IconInstagram = () => (
  <Ico>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
  </Ico>
);

/* Flags for the language switcher: real vector artwork, not emoji, so they
   stay sharp at any size and need no external files. Italy and Germany are
   natively 3:2; the Union Jack is 1:2, so it fills the same 3:2 tile with
   `slice` and loses a sliver of each side, keeping the switcher even. */
const FlagIT = () => (
  <svg className="lang-flag" viewBox="0 0 3 2" aria-hidden="true" focusable="false">
    <rect width="3" height="2" fill="#f4f5f0" />
    <rect width="1" height="2" fill="#009246" />
    <rect x="2" width="1" height="2" fill="#ce2b37" />
  </svg>
);

const FlagDE = () => (
  <svg className="lang-flag" viewBox="0 0 3 2" aria-hidden="true" focusable="false">
    <rect width="3" height="2" fill="#ffce00" />
    <rect width="3" height="1.3333" fill="#dd0000" />
    <rect width="3" height="0.6667" fill="#000000" />
  </svg>
);

const FlagGB = () => (
  <svg
    className="lang-flag"
    viewBox="0 0 60 30"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <clipPath id="flag-gb-diagonals">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
    <path
      d="M0,0 L60,30 M60,0 L0,30"
      clipPath="url(#flag-gb-diagonals)"
      stroke="#c8102e"
      strokeWidth="4"
    />
    <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
  </svg>
);

const LANGUAGES = [
  { code: 'en', flag: <FlagGB /> },
  { code: 'it', flag: <FlagIT /> },
  { code: 'de', flag: <FlagDE /> }
];

/* Hobby icons */
const IconBall = () => (
  <Ico>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 12l2.6 3.8h4.4M12 12L9.4 15.8H5M12 12V7.3M6.6 4.6l2.8 2.7M17.4 4.6l-2.8 2.7M21 15.6l-4.1-1.2M3 15.6l4.1-1.2" />
  </Ico>
);
/* A plain waving flag just reads as "flag". Chequered squares say motorsport
   the moment you see them, and the filled cells stay legible at the 20px the
   hobby icons render at, where thin outlines start to mush together. */
const IconCheckeredFlag = () => (
  <Ico>
    <path d="M4.85 21.5V3.5" />
    <path d="M5 4h16v12H5z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M5 4h4v4H5zM13 4h4v4h-4zM9 8h4v4H9zM17 8h4v4h-4zM5 12h4v4H5zM13 12h4v4h-4z"
    />
  </Ico>
);
const IconDumbbell = () => (
  <Ico>
    <path d="M3 9v6M6.5 6.5v11M17.5 6.5v11M21 9v6M6.5 12h11" />
  </Ico>
);
const IconPhone = () => (
  <Ico>
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="M10.5 5.5h3" />
    <path d="M10 18.5h4" />
  </Ico>
);
const IconGlobe = () => (
  <Ico>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3z" />
  </Ico>
);
const IconTrend = () => (
  <Ico>
    <path d="M3 20h18M6 16l4-5 3.5 3L20 6" />
    <path d="M20 10.5V6h-4.5" />
  </Ico>
);

/* Project icons */
const IconPulse = () => <Ico d="M3 12h4l2-7 4 14 2-7h6" />;
const IconGraduation = () => (
  <Ico>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Ico>
);
const IconCar = () => (
  <Ico>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <path d="M4 22v-7" />
  </Ico>
);
const IconBank = () => (
  <Ico>
    <path d="M12 2L3 7v2h18V7L12 2z" />
    <path d="M5 9v9M9 9v9M15 9v9M19 9v9M3 20h18" />
  </Ico>
);
const IconTag = () => (
  <Ico>
    <path d="M20.6 12.6l-8 8a2 2 0 0 1-2.9 0l-6.3-6.3a2 2 0 0 1-.6-1.4V4.8A1.8 1.8 0 0 1 4.6 3h8.1c.5 0 1 .2 1.4.6l6.5 6.5a2 2 0 0 1 0 2.5z" />
    <circle cx="8" cy="8" r="1.3" />
  </Ico>
);
const IconGamepad = () => (
  <Ico>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.3 9.3l4.4 2.7-4.4 2.7z" />
  </Ico>
);

/* ---------------------------------------------------------------------------
   Galleries — unchanged, they mirror what's on disk in src/assets/projects/
   --------------------------------------------------------------------------- */
const motogpGallery = [
  { src: motogpTimeAttack, captionKey: 'time_attack' },
  { src: motogpPreRacePace, captionKey: 'race_pace' },
  { src: motogpLiveSimulation, captionKey: 'live_prediction' },
  { src: motogpWeekendOverview, captionKey: 'weekend_overview' },
  { src: motogpLapByLap, captionKey: 'weekend_charts' },
  { src: motogpRiderGrades, captionKey: 'rider_grades' },
  { src: motogpRiderProfile, captionKey: 'rider_profile' },
  { src: motogpRaceVsQuali, captionKey: 'race_vs_quali' },
  { src: motogpConsistency, captionKey: 'consistency' },
  { src: motogpTeamPerformance, captionKey: 'team_performance' },
  { src: motogp3dMapping, captionKey: 'env_mapping_3d' }
];

const polifyGallery = [
  { src: polifyHome, captionKey: 'home' },
  { src: polifySondaggio, captionKey: 'sondaggio' },
  { src: polifyRisultato, captionKey: 'risultato' },
  { src: polifyMappa, captionKey: 'mappa' },
  { src: polifyAreaPerArea, captionKey: 'area_per_area' },
  { src: polifyClassifica, captionKey: 'classifica' },
  { src: polifyCondividi, captionKey: 'condividi' },
  { src: polifyPartiti, captionKey: 'partiti' }
];

const pomodoroGallery = [{ src: pomodoroMainDashboard, captionKey: 'main_dashboard' }];

const adosGallery = [
  { src: adosOverview, captionKey: 'overview' },
  { src: adosLabelStats, captionKey: 'label_stats' },
  { src: adosNotesAiSummary, captionKey: 'notes_ai_summary' },
  { src: adosLabelTimelineImu, captionKey: 'label_timeline_imu' },
  { src: adosSensorOnlyRisk, captionKey: 'sensor_only_risk' },
  { src: adosMovementTimelines, captionKey: 'movement_timelines' },
  { src: adosPatientVsCohort, captionKey: 'patient_vs_cohort' },
  { src: adosToyLeaderboard, captionKey: 'toy_leaderboard' },
  { src: adosToyEntropy, captionKey: 'toy_entropy' }
];

const enjoyGallery = [
  { src: enjoyOnboardingWelcome, captionKey: 'onboarding_welcome' },
  { src: enjoyDashboardOverview, captionKey: 'dashboard' },
  { src: enjoyAddDrink, captionKey: 'add_drink' },
  { src: enjoyOverLimit, captionKey: 'over_limit' },
  { src: enjoyHistory24h, captionKey: 'history_24h' },
  { src: enjoyHistory3h, captionKey: 'history_3h' },
  { src: enjoyDateRangePicker, captionKey: 'date_range_picker' },
  { src: enjoySettings, captionKey: 'settings' }
];

/* Plots lifted straight out of the notebooks in the coursework repos. 26 repos
   is too many to read as one strip, so they are filed under macro topics and
   the shots from a single project stay next to each other inside its folder. */
const uniGalleryGroups = [
  {
    id: 'biomedical',
    images: [
      { src: uniMriAnnotations, captionKey: 'mri_annotations' },
      { src: uniUnetSeg, captionKey: 'unet_segmentation' },
      { src: uniTumorClass, captionKey: 'tumor_classification' },
      { src: uniTumorConfusion, captionKey: 'tumor_confusion' },
      { src: uniTumorRoc, captionKey: 'tumor_roc' },
      { src: uniMolecules, captionKey: 'molecules' },
      { src: uniDrugDesign, captionKey: 'drug_design' },
      { src: uniStressSignals, captionKey: 'stress_signals' },
      { src: uniStressConfusion, captionKey: 'stress_confusion' },
      { src: uniStressShap, captionKey: 'stress_shap' },
      { src: uniEvooFluorescence, captionKey: 'evoo_fluorescence' },
      { src: uniSweetBitter, captionKey: 'sweet_bitter' }
    ]
  },
  {
    id: 'robotics',
    images: [
      { src: uniDronePipeline, captionKey: 'drone_pipeline' },
      { src: uniDroneBall, captionKey: 'drone_vision' },
      { src: uniDroneObstacle, captionKey: 'drone_obstacle' },
      { src: uniDroneTof, captionKey: 'drone_control' },
      { src: uniRobotArm, captionKey: 'robot_arm' }
    ]
  },
  {
    id: 'forecasting',
    images: [
      { src: uniEvFleet, captionKey: 'ev_fleet' },
      { src: uniFleetForecast, captionKey: 'fleet_forecast' },
      { src: uniFleetProb, captionKey: 'fleet_probabilistic' },
      { src: uniRevenue, captionKey: 'revenue' },
      { src: uniRevenueForecast, captionKey: 'revenue_forecast' },
      { src: uniForecastCompare, captionKey: 'forecast_comparison' },
      { src: uniHoltWinters, captionKey: 'holt_winters' }
    ]
  },
  {
    id: 'bayesian',
    images: [
      { src: uniBayesian, captionKey: 'bayesian' },
      { src: uniMlMap, captionKey: 'ml_vs_map' },
      { src: uniGpEstimate, captionKey: 'gp_estimate' }
    ]
  },
  {
    id: 'security',
    images: [
      { src: uniIntrusion, captionKey: 'intrusion' },
      { src: uniTrafficConfusion, captionKey: 'traffic_confusion' },
      { src: uniTrafficRoc, captionKey: 'traffic_roc' }
    ]
  },
  {
    id: 'analytics',
    images: [
      { src: uniCreditRisk, captionKey: 'credit_risk' },
      { src: uniCreditConfusion, captionKey: 'credit_confusion' },
      { src: uniCreditRoc, captionKey: 'credit_roc' },
      { src: uniCitations, captionKey: 'citations' },
      { src: uniCitationGcn, captionKey: 'citation_gcn' },
      { src: uniMachineryConfusion, captionKey: 'machinery_confusion' },
      { src: uniNbaShots, captionKey: 'nba_shots' },
      { src: uniAutoencoderError, captionKey: 'autoencoder_error' }
    ]
  }
];

const alimentiGallery = [
  { src: alimentiHome, captionKey: 'home' },
  { src: alimentiPantry, captionKey: 'pantry' },
  { src: alimentiShoppingList, captionKey: 'shopping_list' },
  { src: alimentiRecipes, captionKey: 'recipes' },
  { src: alimentiDietCalendar, captionKey: 'diet_calendar' }
];

/* ---------------------------------------------------------------------------
   Project data
   `gallery` present => the project gets its own card, covered by gallery[0].
   `gallery` absent  => it falls into the category's single condensed card.
   --------------------------------------------------------------------------- */
const dataAiProjects = [
  {
    id: 'adosDashboard',
    link: null,
    referenceUrl: 'https://ieeexplore.ieee.org/document/8438636',
    badgeKey: 'in_progress',
    badgeClass: 'badge-in-progress',
    icon: <IconPulse />,
    gallery: adosGallery,
    hasHighlights: true
  },
  {
    id: 'motogp',
    link: 'https://motogp-analytics.onrender.com/',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    iconImg: motogpHelmet,
    iconZoom: 1.12,
    gallery: motogpGallery,
    hasHighlights: true
  },
  {
    id: 'uni',
    link: 'https://github.com/ManuCa93?tab=repositories',
    badgeKey: 'in_progress',
    badgeClass: 'badge-in-progress',
    icon: <IconGraduation />,
    galleryGroups: uniGalleryGroups,
    ctaKey: 'visit_projects',
    // one card, but it stands for 26 separate coursework repositories
    countsAs: 26
  },
  {
    id: 'football',
    link: 'https://github.com/ManuCa93/top-5-football-leagues-predictions',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    icon: <IconBall />,
    hasHighlights: true
  },
  {
    id: 'f1',
    link: 'https://github.com/ManuCa93/F1_pred_2024',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    icon: <IconCar />
  }
];

const mobileProjects = [
  {
    id: 'pantrypilot',
    link: null,
    badgeKey: 'in_progress',
    badgeClass: 'badge-in-progress',
    iconImg: logoImg,
    iconZoom: 1.45,
    gallery: alimentiGallery,
    hasHighlights: true,
    galleryOrientation: 'vertical'
  },
  {
    id: 'driving',
    link: 'https://github.com/ManuCa93/when_can_I_drive_app',
    badgeKey: 'to_publish',
    badgeClass: 'badge-to-publish',
    iconImg: enjoyLogo,
    iconZoom: 2.1,
    gallery: enjoyGallery,
    hasHighlights: true,
    galleryOrientation: 'vertical'
  }
];

const webProjects = [
  {
    id: 'polify',
    link: null,
    badgeKey: 'in_progress',
    badgeClass: 'badge-in-progress',
    icon: <IconBank />,
    gallery: polifyGallery,
    hasHighlights: true
  },
  {
    id: 'pomodoro',
    link: 'https://manuca93.github.io/pomodoroTimer/',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    iconImg: iconIco,
    iconZoom: 1.5,
    gallery: pomodoroGallery,
    hasHighlights: true
  },
  {
    id: 'priceTracker',
    link: 'https://github.com/ManuCa93/price-tracker',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    icon: <IconTag />
  }
];

const gameProjects = [
  {
    id: 'brickbreakers',
    link: 'https://github.com/ManuCa93/brickbrakers-F1',
    badgeKey: 'ended',
    badgeClass: 'badge-ended',
    icon: <IconGamepad />
  }
];

/* A project's shots live either in one flat list or in topic folders. */
const projectImages = p =>
  p.galleryGroups ? p.galleryGroups.flatMap(g => g.images) : p.gallery || [];

const countProjects = projects => projects.reduce((n, p) => n + (p.countsAs || 1), 0);

const CATEGORIES = [
  { id: 'data_ai', projects: dataAiProjects },
  { id: 'mobile', projects: mobileProjects },
  { id: 'websites', projects: webProjects },
  { id: 'games', projects: gameProjects }
];

/* MotoGP and F1 are one interest, so they share a single Motorsport card. */
const HOBBIES = [
  { id: 'football', icon: <IconBall /> },
  { id: 'motorsport', icon: <IconCheckeredFlag /> },
  { id: 'travel', icon: <IconGlobe /> },
  { id: 'fitness', icon: <IconDumbbell /> },
  { id: 'finance', icon: <IconTrend /> },
  { id: 'tech', icon: <IconPhone /> }
];

const SOCIALS = [
  { id: 'github', href: 'https://github.com/ManuCa93', label: 'GitHub', icon: <IconGitHub /> },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/manuel-cattoni-169631339/',
    label: 'LinkedIn',
    icon: <IconLinkedIn />
  },
  { id: 'email', href: 'mailto:manuel.cattoni93@gmail.com', label: 'Email', icon: <IconMail /> },
  { id: 'cv', href: './Cattoni_Resume.pdf?v=2', label: 'CV', icon: <IconDoc /> },
  { id: 'instagram', href: 'https://instagram.com/cattonii', label: 'Instagram', icon: <IconInstagram /> }
];

/* Locking scroll on <body> collapses the document height, because html's
   `overflow-x: clip` stops body's overflow from propagating to the viewport,
   so body becomes its own scroll container and the page's scrollTop gets
   clamped. The page then reopened higher up than it was left. Locking the
   real scrolling element instead keeps the position; scrollTo is a belt-and-
   braces restore, and must be instant or `scroll-behavior: smooth` animates it. */
const lockScroll = () => {
  const root = document.documentElement;
  const y = window.scrollY;
  const prevOverflow = root.style.overflow;
  const prevGutter = root.style.scrollbarGutter;
  root.style.overflow = 'hidden';
  root.style.scrollbarGutter = 'stable';
  return () => {
    root.style.overflow = prevOverflow;
    root.style.scrollbarGutter = prevGutter;
    window.scrollTo({ top: y, behavior: 'instant' });
  };
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Overlays animate in on mount, but unmounting is instant, so closing one just
   made it vanish. This keeps it mounted for the length of its exit animation,
   flagged with `closing` so CSS can play that animation, and only then hands
   control back to the parent. With reduced motion it closes straight away. */
const EXIT_MS = 320;

const useAnimatedClose = onClose => {
  const [closing, setClosing] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const requestClose = useCallback(() => {
    if (timerRef.current) return; // already on the way out
    if (prefersReducedMotion()) {
      onClose();
      return;
    }
    setClosing(true);
    timerRef.current = setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  return [closing, requestClose];
};

/* Switching folder replaced the whole grid in one frame, which read as a jump:
   different shots, different row count, no transition between the two. This
   fades the outgoing images out, animates the container to the height the new
   folder needs, then fades the incoming ones in with a short stagger. The tab
   highlight moves immediately so the click still feels instant. */
const SWAP_OUT_MS = 180;
const SWAP_HEIGHT_MS = 300;
const SWAP_IN_MS = 560;

const useFolderSwap = (folderIndex, setFolderIndex) => {
  const ref = useRef(null);
  const [phase, setPhase] = useState('idle'); // idle | out | in
  const [pending, setPending] = useState(null);
  const timers = useRef([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const select = useCallback(
    index => {
      if (index === folderIndex && pending === null) return;
      clearTimers();
      if (prefersReducedMotion()) {
        setPending(null);
        setPhase('idle');
        setFolderIndex(index);
        return;
      }
      const el = ref.current;
      if (el) el.style.height = `${el.offsetHeight}px`; // hold the outgoing height
      setPending(index);
      setPhase('out');
      timers.current.push(
        setTimeout(() => {
          setFolderIndex(index);
          setPending(null);
          setPhase('in');
        }, SWAP_OUT_MS)
      );
    },
    [clearTimers, folderIndex, pending, setFolderIndex]
  );

  useLayoutEffect(() => {
    if (phase !== 'in') return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const from = el.style.height;
    el.style.height = 'auto';
    const to = `${el.offsetHeight}px`; // images carry an aspect-ratio, so this is
    el.style.height = from || to; //      known before any of them has loaded
    void el.offsetHeight; // commit the old height before animating to the new one
    el.style.height = to;
    timers.current.push(
      setTimeout(() => {
        if (ref.current) ref.current.style.height = '';
      }, SWAP_HEIGHT_MS)
    );
    timers.current.push(setTimeout(() => setPhase('idle'), SWAP_IN_MS));
    return undefined;
  }, [phase, folderIndex]);

  return { ref, phase, select, activeIndex: pending === null ? folderIndex : pending };
};

/* Lets a translated string emphasise a fragment with **double asterisks**,
   without pulling in a Markdown dependency for one phrase. */
const RichText = ({ text }) => {
  if (typeof text !== 'string' || !text.includes('**')) return text;
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
};

/* Captions read "Label: rest of the sentence"; the label is emphasised. */
const FormattedCaption = ({ text }) => {
  const i = typeof text === 'string' ? text.indexOf(': ') : -1;
  if (i === -1) return text;
  return (
    <>
      <strong>{text.slice(0, i + 1)}</strong>
      {text.slice(i + 1)}
    </>
  );
};

/* ---------------------------------------------------------------------------
   Scroll reveal — one observer for every [data-reveal] node on the page.
   With reduced motion the nodes are simply marked revealed and nothing animates.
   --------------------------------------------------------------------------- */
const useScrollReveal = () => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      nodes.forEach(n => n.classList.add('is-revealed'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    nodes.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
};

/* ---------------------------------------------------------------------------
   Lightbox — full-bleed image viewer, opened from a gallery inside the modal.
   `enabled` is false while it isn't mounted, so the modal keeps Escape.
   --------------------------------------------------------------------------- */
const ZOOM_LEVELS = [1, 1.6, 2.4, 3.2];

const Lightbox = ({ gallery, projectId, startIndex, onClose }) => {
  const { t } = useTranslation();
  const [closing, requestClose] = useAnimatedClose(onClose);
  const [index, setIndex] = useState(startIndex);
  const [zoomStep, setZoomStep] = useState(0);
  const [zoomOrigin, setZoomOrigin] = useState('center center');
  const zoomed = zoomStep > 0;
  const wrapRef = useRef(null);
  const rafRef = useRef(null);
  const touchRef = useRef(null);

  const goNext = useCallback(() => {
    setZoomStep(0);
    setIndex(i => (i + 1) % gallery.length);
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    setZoomStep(0);
    setIndex(i => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const originFromEvent = e => {
    const rect = wrapRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    return `${x}% ${y}%`;
  };

  const handleImageClick = e => {
    setZoomOrigin(originFromEvent(e));
    setZoomStep(s => (s + 1) % ZOOM_LEVELS.length);
  };

  const handleMouseMove = e => {
    if (zoomStep === 0) return;
    const origin = originFromEvent(e);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setZoomOrigin(origin));
  };

  const handleTouchStart = e => {
    if (e.touches.length !== 1) return;
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = e => {
    if (!touchRef.current || zoomStep === 0 || e.touches.length !== 1) return;
    const origin = originFromEvent(e.touches[0]);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setZoomOrigin(origin));
  };

  const handleTouchEnd = e => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start || zoomStep > 0) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        requestClose();
      } else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [goNext, goPrev, requestClose]);

  const img = gallery[index];
  const caption = t(`projects.${projectId}.gallery.${img.captionKey}`);

  // The lightbox portals to <body>, but it still sits inside the modal's React
  // tree, so every click here would otherwise bubble up and close the modal too.
  const closeOnly = e => {
    e.stopPropagation();
    requestClose();
  };

  return createPortal(
    <div
      className={`lightbox-overlay ${zoomed ? 'is-zoomed' : ''} ${closing ? 'is-closing' : ''}`}
      onClick={closeOnly}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      <button className="lightbox-close" onClick={closeOnly} aria-label={t('ui.close')} type="button">
        <IconClose />
      </button>
      {gallery.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={e => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label={t('ui.previous_image')}
          type="button"
        >
          <IconChevronLeft />
        </button>
      )}
      <div
        className={`lightbox-content ${zoomed ? 'is-zoomed' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="lightbox-img-wrap"
          ref={wrapRef}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={img.src}
            alt={caption}
            className={`lightbox-img ${zoomed ? 'is-zoomed' : ''}`}
            style={{ transform: `scale(${ZOOM_LEVELS[zoomStep]})`, transformOrigin: zoomOrigin }}
            onClick={handleImageClick}
          />
        </div>
        {caption && (
          <p className="lightbox-caption">
            <FormattedCaption text={caption} />
          </p>
        )}
        <div className="lightbox-meta">
          <span>
            {index + 1} / {gallery.length}
          </span>
          <span className="lightbox-zoom-hint">
            {zoomStep === ZOOM_LEVELS.length - 1 ? t('ui.lightbox_zoom_reset') : t('ui.lightbox_zoom_in')}
          </span>
        </div>
      </div>
      {gallery.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={e => {
            e.stopPropagation();
            goNext();
          }}
          aria-label={t('ui.next_image')}
          type="button"
        >
          <IconChevronRight />
        </button>
      )}
    </div>,
    document.body
  );
};

/* ---------------------------------------------------------------------------
   Project modal — full-screen sheet on phones, centred dialog from 46rem up.
   Owns the lightbox so it can ignore Escape while an image is open.
   --------------------------------------------------------------------------- */
const ProjectModal = ({ project, categoryId, onClose }) => {
  const { t } = useTranslation();
  const [closing, requestClose] = useAnimatedClose(onClose);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  const { id, link, referenceUrl, badgeKey, badgeClass, gallery, hasHighlights, galleryOrientation, ctaKey } =
    project;
  const highlights = hasHighlights ? t(`projects.${id}.highlights`, { returnObjects: true }) : null;
  const isVertical = galleryOrientation === 'vertical';
  // One flat list and a set of folders are the same thing to everything below.
  const folders = project.galleryGroups || (gallery?.length ? [{ id: null, images: gallery }] : []);
  const [folderIndex, setFolderIndex] = useState(0);
  const { ref: galleryRef, phase: swapPhase, select: selectFolder, activeIndex } = useFolderSwap(
    folderIndex,
    setFolderIndex
  );
  const shown = folders[folderIndex]?.images || [];

  useEffect(() => {
    returnFocusRef.current = document.activeElement;
    const unlockScroll = lockScroll();
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      unlockScroll();
      if (returnFocusRef.current instanceof HTMLElement) {
        returnFocusRef.current.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    const handleKey = e => {
      if (lightboxIndex !== null) return; // the lightbox is on top and handles its own keys
      if (e.key === 'Escape') {
        requestClose();
        return;
      }
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), figure[tabindex], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, requestClose]);

  return createPortal(
    <div
      className={`modal-backdrop ${closing ? 'is-closing' : ''}`}
      data-accent={categoryId}
      onClick={requestClose}
    >
      <div
        className="modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${id}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-head">
          <div className="modal-heading">
            <div className="modal-eyebrow">
              <span>{t(`sections.${categoryId}`)}</span>
              <span className={`badge ${badgeClass}`}>{t(`badges.${badgeKey}`)}</span>
            </div>
            <h2 className="modal-title" id={`modal-title-${id}`}>
              {t(`projects.${id}.title`)}
            </h2>
          </div>
          <button
            className="modal-close"
            ref={closeRef}
            onClick={requestClose}
            aria-label={t('ui.close')}
            type="button"
          >
            <IconClose />
          </button>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3 className="modal-label">{t('ui.tech_stack')}</h3>
            <p className="modal-stack">{t(`projects.${id}.techStack`)}</p>
          </section>

          <section className="modal-section">
            <h3 className="modal-label">{t('ui.overview')}</h3>
            <p className="modal-text">
              <RichText text={t(`projects.${id}.details`)} />
            </p>
          </section>

          {referenceUrl && (
            <section className="modal-section">
              <p className="modal-ref">
                <a href={referenceUrl} target="_blank" rel="noreferrer">
                  {t(`projects.${id}.reference`)}
                </a>
              </p>
            </section>
          )}

          {Array.isArray(highlights) && highlights.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-label">{t('ui.highlights')}</h3>
              <ul className="highlights">
                {highlights.map((item, i) => {
                  const sep = item.indexOf(': ');
                  return (
                    <li key={i}>
                      {sep === -1 ? (
                        item
                      ) : (
                        <>
                          <strong>{item.slice(0, sep)}</strong>
                          {item.slice(sep)}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {shown.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-label">{t('ui.gallery')}</h3>
              {folders.length > 1 && (
                <div className="folder-tabs" role="tablist" aria-label={t('ui.gallery')}>
                  {folders.map((f, i) => (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={i === activeIndex}
                      className={`folder-tab ${i === activeIndex ? 'is-active' : ''}`}
                      onClick={() => selectFolder(i)}
                    >
                      {t(`projects.${id}.folders.${f.id}`)}
                      <span className="folder-tab-count">{f.images.length}</span>
                    </button>
                  ))}
                </div>
              )}
              <div
                className={[
                  'gallery',
                  isVertical && 'gallery--vertical',
                  swapPhase !== 'idle' && 'is-swapping',
                  swapPhase === 'out' && 'is-leaving',
                  swapPhase === 'in' && 'is-entering'
                ]
                  .filter(Boolean)
                  .join(' ')}
                ref={galleryRef}
              >
                {shown.map((img, i) => {
                  const caption = t(`projects.${id}.gallery.${img.captionKey}`);
                  return (
                    <figure
                      className="gallery-item"
                      key={img.captionKey}
                      style={{ '--swap-i': i }}
                      tabIndex={0}
                      role="button"
                      aria-label={caption}
                      onClick={() => setLightboxIndex(i)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setLightboxIndex(i);
                        }
                      }}
                    >
                      <img src={img.src} alt={caption} loading="lazy" />
                      <figcaption>
                        <FormattedCaption text={caption} />
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </section>
          )}

          <div className="modal-actions">
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t(`ui.${ctaKey || 'visit_project'}`)}
                <IconExternal />
              </a>
            ) : (
              <span className="btn btn-ghost">
                <IconClock />
                {t('ui.coming_soon')}
              </span>
            )}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          gallery={shown}
          projectId={id}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>,
    document.body
  );
};

/* --------------------------------------------------------------------------- */
const ProjectCard = ({ project, index, onOpen }) => {
  const { t } = useTranslation();
  const { id, badgeKey, badgeClass, icon, iconImg, iconZoom } = project;
  const cover = projectImages(project)[0];
  const title = t(`projects.${id}.title`);

  // The card is an <article>, not a <button>: a button may only contain phrasing
  // content, and this one holds a heading and a paragraph. The title button
  // stretches an invisible ::after over the whole card instead, so the entire
  // card is clickable while the accessible name stays just the project title.
  return (
    <article className="project-card" data-reveal style={{ '--reveal-i': index }}>
      <div className="project-cover">
        <img src={cover.src} alt={t(`projects.${id}.gallery.${cover.captionKey}`)} loading="lazy" />
      </div>
      <div className="project-body">
        <div className="project-top">
          <span className="project-icon">
            {iconImg ? <img src={iconImg} alt="" style={{ '--icon-zoom': iconZoom }} /> : icon}
          </span>
          <h3 className="project-title">
            <button type="button" className="project-open" onClick={() => onOpen(project)}>
              {title}
            </button>
          </h3>
          <span className={`badge ${badgeClass}`}>{t(`badges.${badgeKey}`)}</span>
        </div>
        <p className="project-summary">
          <RichText text={t(`projects.${id}.summary`)} />
        </p>
        <div className="project-foot">
          <span className="project-more" aria-hidden="true">
            {t('ui.details')}
            <IconArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
};

/* Every image-less project of a category, gathered into one compact block. */
const CondensedCard = ({ projects, index, standalone, onOpen }) => {
  const { t } = useTranslation();
  return (
    <div className="condensed" data-reveal style={{ '--reveal-i': index }}>
      {/* "Other projects" only makes sense next to the illustrated ones; when
          this card is all the category has, the heading has nothing to be
          other than. */}
      {!standalone && (
        <div className="condensed-head">
          <h3 className="condensed-title">{t('ui.other_projects')}</h3>
        </div>
      )}
      {projects.map(project => {
        const title = t(`projects.${project.id}.title`);
        return (
          <div className="condensed-row" key={project.id}>
            <button type="button" className="condensed-main" onClick={() => onOpen(project)}>
              <span className="condensed-name">
                {title}
                <span className={`badge ${project.badgeClass}`}>{t(`badges.${project.badgeKey}`)}</span>
              </span>
              <span className="condensed-desc">{t(`projects.${project.id}.summary`)}</span>
            </button>
            {project.link && (
              <a
                className="condensed-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} — ${t('ui.visit_project')}`}
              >
                <IconExternal />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* --------------------------------------------------------------------------- */
const CategorySection = ({ category, onOpen }) => {
  const { t } = useTranslation();
  const withImages = category.projects.filter(p => projectImages(p).length > 0);
  const withoutImages = category.projects.filter(p => projectImages(p).length === 0);

  return (
    <section className="section" id={category.id} data-accent={category.id}>
      <div className="shell">
        <header className="section-head" data-reveal>
          <p className="section-eyebrow">
            {t('ui.projects_count', { count: countProjects(category.projects) })}
          </p>
          <h2 className="section-title">{t(`sections.${category.id}`)}</h2>
        </header>
        {withImages.length > 0 && (
          <div className="project-grid">
            {withImages.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={onOpen} />
            ))}
          </div>
        )}
        {withoutImages.length > 0 && (
          <CondensedCard
            projects={withoutImages}
            index={withImages.length}
            standalone={withImages.length === 0}
            onOpen={onOpen}
          />
        )}
      </div>
    </section>
  );
};

/* --------------------------------------------------------------------------- */
function App() {
  const { t, i18n } = useTranslation();
  /* On a phone the name sits beside the portrait with the surname on its own
     line, so it is split explicitly rather than left to wrap wherever the
     column happens to end. */
  const [nameFirst, ...nameRest] = t('profile.title').split(' ');
  const nameLast = nameRest.join(' ');
  const [openProject, setOpenProject] = useState(null);
  const [compact, setCompact] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerCloseRef = useRef(null);
  const navToggleRef = useRef(null);

  /* Below 46rem the header nav is hidden and the category chips scroll away with
     the hero, which left no way to jump between categories once you were down
     the page. The drawer is that way back. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = e => e.key === 'Escape' && setMenuOpen(false);
    const mq = window.matchMedia('(min-width: 46rem)');
    const onWide = () => mq.matches && setMenuOpen(false);
    const toggle = navToggleRef.current; // captured now; the cleanup runs later
    const unlockScroll = lockScroll();
    // The drawer is still `visibility: hidden` this tick, and focus() is
    // rejected on a hidden subtree, so move focus once the frame has painted.
    // preventScroll matters: a plain focus() scrolls the target into view, which
    // is what was shifting the page up every time an overlay opened.
    const focusFrame = requestAnimationFrame(() =>
      drawerCloseRef.current?.focus({ preventScroll: true })
    );
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
      unlockScroll();
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  useScrollReveal();

  /* Keep <html lang> in step with the chosen language: screen readers pick the
     pronunciation rules from it, so leaving it on "en" reads Italian and German
     copy with English phonetics. */
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'en';
  }, [i18n.resolvedLanguage]);

  // Sticky header turns compact once the hero starts scrolling away.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCompact(window.scrollY > 48);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scrollspy: highlights the nav entry for the category currently in view.
     The observer only reports sections whose visibility changed, so the ratios
     are kept in a map and the winner recomputed each time. Without that, the
     first category to scroll into view stayed highlighted forever, including
     back up at the hero where no category is on screen at all. */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = CATEGORIES.map(c => document.getElementById(c.id)).filter(Boolean);
    const ratios = new Map();
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        setActiveId(best);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.75] }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleOpen = useCallback(project => setOpenProject(project), []);
  const handleClose = useCallback(() => setOpenProject(null), []);

  const openCategoryId = useMemo(
    () => (openProject ? CATEGORIES.find(c => c.projects.some(p => p.id === openProject.id))?.id : null),
    [openProject]
  );

  const langButtons = LANGUAGES.map(({ code, flag }) => (
    <button
      key={code}
      type="button"
      className={`lang-btn ${i18n.resolvedLanguage === code ? 'is-active' : ''}`}
      onClick={() => i18n.changeLanguage(code)}
      aria-label={t(`ui.lang_${code}`)}
      aria-pressed={i18n.resolvedLanguage === code}
    >
      {flag}
      <span className="lang-code">{code.toUpperCase()}</span>
    </button>
  ));

  // Everything but the mailto opens in a new tab, the CV included.
  const socialLinks = SOCIALS.map(s => (
    <a
      key={s.id}
      className="icon-link"
      href={s.href}
      aria-label={s.label}
      {...(s.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
    >
      {s.icon}
      <span>{s.label}</span>
    </a>
  ));

  return (
    <>
      <a className="skip-link" href="#main">
        {t('ui.skip_to_content')}
      </a>

      <header className={`site-header ${compact ? 'is-compact' : ''}`}>
        <div className="shell site-header-inner">
          <a className="brand" href="#top">
            <img
              className="brand-mark"
              src={BRAND_AVATAR_SRC}
              alt=""
              width="120"
              height="120"
              aria-hidden="true"
            />
            <span className="brand-name">{t('profile.title')}</span>
          </a>

          <nav className="header-nav" aria-label={t('ui.projects_label')}>
            <ul>
              {CATEGORIES.map(c => (
                <li key={c.id} data-accent={c.id}>
                  <a href={`#${c.id}`} className={activeId === c.id ? 'is-active' : ''}>
                    {t(`sections.${c.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lang-switcher lang-switcher--header">{langButtons}</div>

          <button
            type="button"
            className="nav-toggle"
            ref={navToggleRef}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={t('ui.menu')}
            onClick={() => setMenuOpen(true)}
          >
            <IconMenu />
          </button>
        </div>

      </header>


      <div
        className={`nav-scrim ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className={`nav-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label={t('ui.browse_by_category')}
      >
        <div className="nav-drawer-head">
          <span className="nav-drawer-title">{t('ui.menu')}</span>
          <button
            type="button"
            className="nav-toggle"
            ref={drawerCloseRef}
            onClick={() => setMenuOpen(false)}
            aria-label={t('ui.close')}
          >
            <IconClose />
          </button>
        </div>
        <div className="lang-switcher lang-switcher--menu">{langButtons}</div>
        <ul>
          <li>
            <a href="#hobbies" onClick={() => setMenuOpen(false)}>
              <span className="chip-dot" aria-hidden="true" />
              <span className="nav-drawer-label">{t('hobbies.title')}</span>
            </a>
          </li>
          {CATEGORIES.map(c => (
            <li key={c.id} data-accent={c.id}>
              <a href={`#${c.id}`} onClick={() => setMenuOpen(false)}>
                <span className="chip-dot" aria-hidden="true" />
                <span className="nav-drawer-label">{t(`sections.${c.id}`)}</span>
                <span className="chip-count">{countProjects(c.projects)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-grid">
            <img
              className="hero-portrait"
              src={HERO_PORTRAIT_SRC}
              alt={t('profile.title')}
              width="600"
              height="600"
              data-reveal
            />
            <div className="hero-intro">
              <h1 className="hero-name" data-reveal>
                <span className="hero-name-part">{nameFirst}</span>
                {nameLast && <> <span className="hero-name-part">{nameLast}</span></>}
              </h1>
              <p className="hero-meta" data-reveal style={{ '--reveal-i': 1 }}>
                <span className="hero-meta-item">
                  <IconPin />
                  {t('profile.location')}
                </span>
                <span className="hero-meta-sep" aria-hidden="true" />
                <span className="hero-meta-item">
                  <IconCake />
                  {t('profile.year')}
                </span>
              </p>
              <p className="hero-tagline" data-reveal style={{ '--reveal-i': 2 }}>
                {t('profile.subtitle')}
              </p>
              <nav className="hero-links" aria-label={t('ui.contact_links')} data-reveal style={{ '--reveal-i': 3 }}>
                {socialLinks}
              </nav>
            </div>
          </div>
        </section>

        <section className="chip-nav" aria-labelledby="chip-nav-title">
          <div className="shell">
            <h2 className="visually-hidden" id="chip-nav-title">
              {t('ui.browse_by_category')}
            </h2>
            <div className="chip-row">
              {CATEGORIES.map((c, i) => (
                <a
                  key={c.id}
                  className="chip"
                  href={`#${c.id}`}
                  data-accent={c.id}
                  data-reveal
                  style={{ '--reveal-i': i }}
                >
                  <span className="chip-dot" aria-hidden="true" />
                  <span className="chip-label">{t(`sections.${c.id}`)}</span>
                  <span className="chip-count">{countProjects(c.projects)}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="hobbies">
          <div className="shell">
            <header className="section-head" data-reveal>
              <p className="section-eyebrow">{t('hobbies.eyebrow')}</p>
              <h2 className="section-title">{t('hobbies.title')}</h2>
              <p className="section-note">{t('hobbies.intro')}</p>
            </header>
            <div className="hobby-grid">
              {HOBBIES.map((h, i) => (
                <article className="hobby-card" key={h.id} data-reveal style={{ '--reveal-i': i }}>
                  <span className="hobby-icon">{h.icon}</span>
                  <h3 className="hobby-title">{t(`hobbies.items.${h.id}.title`)}</h3>
                  <p className="hobby-note">{t(`hobbies.items.${h.id}.note`)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {CATEGORIES.map(category => (
          <CategorySection key={category.id} category={category} onOpen={handleOpen} />
        ))}
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <nav className="hero-links" aria-label={t('ui.contact_links')}>
            {socialLinks}
          </nav>
          <div>
            <p className="footer-note">
              © {new Date().getFullYear()} {t('profile.title')}
            </p>
            <a className="footer-note" href="#top">
              <IconArrowUp /> {t('ui.back_to_top')}
            </a>
          </div>
        </div>
      </footer>

      {openProject && (
        <ProjectModal project={openProject} categoryId={openCategoryId} onClose={handleClose} />
      )}
    </>
  );
}

export default App;
