import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        year: "Class of 2004",
        subtitle: "Student & Software Developer | Data & AI Enthusiast"
      },
      hobbies: {
        eyebrow: "Off the clock",
        title: "Hobbies & passions",
        intro: "What I spend my time on when I'm not writing code.",
        items: {
          football: {
            title: "Football",
            note: "Milan supporter and shirt collector."
          },
          motorsport: {
            title: "Motorsport",
            note: "MotoGP and Formula 1: every race weekend, backing Marquez and Norris."
          },
          travel: {
            title: "Travel",
            note: "Exploring new places whenever I can: from European capitals to South Korea."
          },
          fitness: {
            title: "Gym & running",
            note: "Lifting during the week and weekend runs to stay in shape."
          },
          finance: {
            title: "Finance",
            note: "Financial markets, investing and data analysis."
          },
          tech: {
            title: "Technology",
            note: "Hardware, benchmarks, new devices and tech industry trends."
          }
        }
      },
      sections: {
        data_ai: "Data & AI Projects",
        mobile: "Mobile Apps",
        websites: "Websites",
        games: "Games & Fun"
      },
      badges: {
        ended: "Ended",
        in_progress: "In Progress",
        to_publish: "To Publish"
      },
      projects: {
        motogp: {
          title: "MotoGP Position Estimator",
          summary: "A virtual pit wall for MotoGP: live lap-time and position calls, race pace and tyre strategy, read off roughly 73,000 real laps.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "A machine learning suite acting as a \"Virtual Pit Wall\": it predicts live lap times, grid positions, race pace and tyre strategy for MotoGP, built on a SQLite pipeline ingesting real PDF timing sheets (2024-2026 seasons, 34 riders, 23 circuits, ~73k laps).",
          highlights: [
            "Live Lap Time & Position Predictor: estimates a rider's final lap time and live leaderboard position at each sector, using an ensemble of 5 regressors (XGBoost, SVR, Neural Network, Ridge, AdaBoost).",
            "Race Pace & Tyre Strategy Engine: predicts average race pace, tyre degradation and likely compound choice from Free Practice telemetry and weather conditions.",
            "Race Weekend Analysis (new): per-session report card, an \"ideal lap\" execution score, and lap-by-lap position/pace charts.",
            "Analytics Dashboard: algorithmic rider ratings, momentum indicator, circuit breakdown, head-to-head comparison, team performance trends.",
            "Advanced EDA: 3D environmental mapping, Random Forest feature importance, K-Means/PCA circuit clustering."
          ],
          gallery: {
            time_attack: "Time Attack mode: live session replay with rolling leaderboard and model selector (Misano 2026, Q2)",
            live_sector_prediction: "Live Track Feed: sector-by-sector cards with the AI lap-time prediction made at S1/S2/S3 and the error against the actual lap",
            live_prediction: "Live Race Simulation: in-race ML position predictor with projected final gaps, synced to the replay scrubber and the animated track map",
            race_pace: "Pre-Race AI Pace Predictor: clean-air and dirty-air pace, tyre drop, compound choice and projected gaps built from practice data only (Misano 2026)",
            accuracy_report: "AI Estimation Accuracy Report: MAE, RMSE and position match rates of the lap-time model at each of the three checkpoints, with a per-rider breakdown",
            weekend_overview: "Race Weekend Analysis: weekend overview and report card, with grades for FP, qualifying, sprint and race plus real championship points (Misano 2026)",
            quali_ideal_lap: "Qualifying Deep Dive: ideal lap (sum of each rider's best sectors) against their actual best lap, with an execution score for the delta",
            quali_sector_deltas: "Sector deltas in qualifying: teammate against teammate, manufacturer against the fastest bike, plus the Q1 to Q2 improvement",
            race_classification: "Final race classification: laps completed, status, gap to the leader, best lap and average pace for every rider (Misano 2026)",
            position_by_lap: "Position by lap: track position for every rider, lap by lap, with per-rider pills to isolate a battle and box zoom on any stretch of the race",
            pace_by_lap: "Pace by lap: raw lap times side by side, pit laps flagged, with lap 1 excluded by default so the standing start does not squash the scale",
            pace_lap_ranges: "Pace comparison across lap ranges: each half of the race treated as a standalone mini-race, ranked by total time or by average pace",
            custom_lap_range: "Custom lap range: pick any window of the race and recompute total time, gap, average pace and best lap for the whole field",
            lap_distribution_riders: "Lap time distribution by rider: violin plots showing who was metronomic and who was inconsistent over the race distance",
            race_trace: "Race trace: cumulative time delta to the winner's average lap — where the lines cross, the riders swapped places on track",
            dirty_air_impact: "Traffic and dirty air impact: time lost per lap versus each rider's own clean-air potential from practice long runs",
            rider_vs_bike: "Rider performance versus own bike: each rider plotted against the average of their brand-mates on tyre management and race pace — bottom-left is strongest",
            predicted_vs_actual: "Predicted pace position versus actual finish: the order the model expected from practice pace alone, against where riders really ended up",
            pace_by_team: "Pace by team: real race pace and tyre drop per lap for each garage, with the pre-race prediction struck through next to it",
            team_battles: "Team lap time distribution and intra-team battles: teammate head-to-head on real race pace, same bike and same strategy window",
            pace_by_manufacturer: "Pace by manufacturer: average race pace, tyre drop and lap-by-lap pace pooled across every rider of each brand",
            manufacturer_battles: "Manufacturer lap distribution and intra-brand gaps: how far the best rider of each brand was ahead of the rest of the same machinery",
            weather_conditions: "Weather and track conditions: road and air temperature and the average tyre drop-off recorded for the weekend",
            sprint_analysis: "The same analysis switched to the Saturday sprint: classification and position by lap over the shorter race (Misano 2026)",
            analytics_standings: "Advanced Analytics: filter by year, session, circuit and rider, then read the championship standings computed over exactly the races selected",
            cumulative_points: "Cumulative championship points across the selected races, round by round, with a picker to add or remove any rider",
            rider_grades: "Rider Grades: algorithmic qualifying, sprint and race scores for every round of the season, colour-coded and sortable",
            ideal_lap_ranking: "Ideal Lap Ranking: who gets closest to the sum of their own best sectors, split by rider, team and manufacturer",
            difference_maker: "Best rider independent of bike: who extracts more from the machine than the machine deserves, measured against their own brand-mates",
            constructor_performance: "Constructor analysis: average finishing position, pace versus the field, season trend round by round and best in class per brand",
            team_performance: "Team analysis: average finishing position, pace versus the field, season trend and teammate head-to-head on race pace",
            finishing_position: "Rider finishing position across the season: mean, median or mode result for every rider over the selected races",
            consistency: "Consistency and reliability: DNF rate per rider next to positional variance, separating the fast from the dependable",
            wet_masters: "Wet Conditions Masters: average finishing position of every rider in the races run in wet or mixed conditions",
            race_vs_quali: "Race versus Qualifying: Sunday riders who gain positions against qualifying specialists who lose them",
            env_mapping_3d: "MotoGP AI Data Lab: interactive 3D environmental mapping of track temperature, humidity and tyre drop, chapter one of a ten-chapter EDA report",
            feature_importance: "Random Forest feature importance for tyre drop, alongside the Pearson correlation matrix of the environmental variables",
            clustering_pca: "Unsupervised circuit profiling: K-Means clustering of tracks into four archetypes and the PCA projection of the same weather footprint",
            regression_anomaly: "OLS regression of road temperature against tyre drop, plus Isolation Forest anomaly detection flagging the races that behave unlike any other"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "A data-driven betting portfolio optimizer for top European football leagues.",
          techStack: "Python, scikit-learn, pandas, football-data.org API",
          details: "This project generates sustainable weekly profits using advanced ML predictions across the top 5 European leagues. It incorporates various statistical indicators and team form to compute outcome probabilities and optimize a betting strategy.",
          highlights: [
            "Stacking Ensemble Model: combines Random Forest, AdaBoost and Gradient Boosting with a Logistic Regression meta-model, calibrated for reliable probabilities and reaching 81.9% training accuracy on 2025 data.",
            "27-Feature Engineering Pipeline: blends classic metrics like ELO ratings and form with newer additions such as Expected Goals (xG), rest-day analysis, head-to-head patterns and exponential momentum decay.",
            "Tiered Betting Portfolio: allocates each week's stakes across four risk tiers, from Ultra Safe to high-odds picks, sized with Kelly Criterion fractional staking and a built-in probability safety margin."
          ]
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Neural networks put up against the 2024 Formula 1 season: who finishes where on a given Sunday, and what the championship table looks like by the end.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Trained on historical performance data, the models call the 2024 season race by race: each driver's finishing position on a given Sunday, and the championship standings that fall out of those results. Several modelling approaches are lined up side by side to see which one reads a race weekend best."
        },
        uni: {
          title: "University Projects",
          summary: "**26 academic repositories** from my Bachelor's, spanning healthcare and biomedical ML, wearable sensing, time series forecasting, Bayesian statistics, blockchain, robotics and reinforcement learning.",
          techStack: "Python (Jupyter Notebook), R",
          details: "**26 repositories** from coursework across the degree, covering a wide range of topics: healthcare and biomedical data (drug design, bioinformatics, brain tumor classification from MRI, stress detection from wrist-worn sensors, olive oil and food-compound quality), time series forecasting, Bayesian statistics and optimization, blockchain, robotics and drone control, reinforcement learning, anomaly detection with autoencoders, and sports/finance analytics (NBA shot data, credit risk). Written mostly as Jupyter notebooks and R Markdown, some solved individually and others in pairs or small groups depending on the course. Browse them all on GitHub.",
          folders: {
            biomedical: "Healthcare & biomedical",
            robotics: "Robotics & drones",
            forecasting: "Time series & forecasting",
            bayesian: "Bayesian & statistics",
            security: "Network security",
            analytics: "Finance, sport & research"
          },
          gallery: {
            stress_signals: "Raw wrist signals for one subject: blood volume pulse, skin conductance, temperature and acceleration under the study protocol labels",
            stress_confusion: "Stress against non-stress: confusion matrices for four models under leave-one-subject-out validation",
            stress_shap: "SHAP summary for the stress classifier: mean heart rate and skin conductance carry most of the signal",
            evoo_fluorescence: "Olive oil under fluorescence spectroscopy: excitation-emission maps at three stages of ageing",
            sweet_bitter: "Sweet against bitter compounds: validation accuracy as the feature selector keeps adding features",
            gp_estimate: "Gaussian process surrogate against the true function across three input dimensions, inside the Bayesian optimization loop",
            autoencoder_error: "Autoencoder anomaly detection: the reconstructions that failed hardest are the Fashion-MNIST items the model never trained on",
            tumor_confusion: "Brain tumour classifier: confusion matrix on the validation set, tumour against non-tumour",
            tumor_roc: "Brain tumour classifiers compared: ROC curves for logistic regression, a CNN and a fully connected CNN",
            fleet_forecast: "24h-ahead fleet forecast: the model's continuation against the naive, mean and seasonal-naive baselines",
            fleet_probabilistic: "Probabilistic forecast: the predicted continuation with 50%, 80% and 90% prediction intervals around it",
            revenue_forecast: "Seven days of revenue forecast on genuinely unseen days, four models against what actually happened",
            forecast_comparison: "Forecast error compared across models on MAE, MSE and RMSE",
            holt_winters: "Holt-Winters residual diagnostics: residuals over time, their distribution, the ACF and a QQ plot",
            traffic_confusion: "Network traffic: Random Forest and Gradient Boosting confusion matrices, benign against attack",
            traffic_roc: "Network traffic ROC curves: an MLP at 0.991 AUC against a linear SVM at 0.826",
            credit_confusion: "Credit risk: confusion matrix on the test set, good borrowers against defaults",
            credit_roc: "Credit risk ROC curve, 0.81 AUC",
            machinery_confusion: "Machinery fuel efficiency: four-class confusion matrix at 91.7% test accuracy",
            citation_gcn: "Citation prediction with a graph neural network: training curves, predicted probability spread and confusion matrix",
            unet_segmentation: "Tumour segmentation: U-Net validation predictions, with the scan, the ground-truth mask, the probability heatmap and the predicted mask",
            mri_annotations: "Brain tumour MRI: annotated scans grouped by tumour category, with the labelled region boxed",
            tumor_classification: "Brain tumour classification: predictions on 20 random test scans, each against its true label",
            molecules: "Drug design: sample CYP2C19 inhibitor structures, the molecules the classifier has to tell apart",
            drone_pipeline: "Drone vision pipeline: the raw frame, the segmentation mask and the overlay with the detected centroid",
            robot_arm: "Robotics: a real robot-arm run played back, 3D end-effector trajectory with height profile and position error",
            drone_obstacle: "Drone navigation: the onboard camera view of an obstacle, the input to the avoidance logic",
            ml_vs_map: "Estimation theory: maximum likelihood against maximum a posteriori under a Gaussian prior",
            bayesian: "Bayesian statistics: hierarchical regression, posterior station intercepts with partial pooling, on Ticino temperature data",
            ev_fleet: "Time series forecasting: hourly energy consumption and vehicle presence across an electric fleet",
            drone_vision: "Drone vision: the red ball's centroid and area, detected frame by frame from the onboard camera",
            drone_control: "Drone control: time-of-flight distance profile over a run, with the dodge, clear and stop thresholds",
            intrusion: "Network traffic classification: row-normalised confusion matrix of the multi-class Random Forest across nine classes",
            drug_design: "Drug design: best cross-validated AUROC per feature set (descriptors, Morgan fingerprints, combined) and per model",
            nba_shots: "Sports analytics: NBA shot density map, with every attempt overlaid on the court",
            credit_risk: "Credit risk fairness: outcome by gender, the bias the project set out to measure",
            citations: "Research analytics: the 15 features most correlated with a paper's citation count",
            revenue: "Business time series: revenue over time across eight cities"
          }
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Thesis)",
          summary: "The final deliverable of my Bachelor's thesis on autism-screening research: an offline clinical dashboard for reviewing a toddler's ADOS-2 session on one synchronized timeline.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "This dashboard runs entirely locally, with no outbound network calls: it's the presentation-facing layer of a much larger thesis pipeline built for GDPR Art. 9-sensitive health data of minors. The IMU signal processing, feature engineering, the sensor-only ADOS (Autism Diagnostic Observation Schedule) risk model (a RandomForest trained for the thesis's data-science analysis, evaluated out-of-fold) and the statistical analysis behind every number shown here all run upstream on the same machine. Clinician notes are summarized by a local, extractive text model that lifts sentences verbatim, never a cloud LLM, chosen after generative summaries were found to fabricate clinical claims. The thesis itself has already been completed and delivered; this dashboard is the part still being refined and polished.",
          highlights: [
            "Synchronized Patient Detail: video playback linked bidirectionally to an interactive label timeline and the raw IMU signal plot; toy and camera angle are selected independently per session.",
            "Sensor-Only Analysis (new): runs the sensor-only ADOS risk model on a child's motion data alone, benchmarked against the cohort and same-risk peers, with three overlaid movement timelines comparing automated detection to the human record.",
            "Data-quality transparency (new): a saturated sensor, broken recording or low sample coverage surfaces an explicit warning next to the prediction, instead of a silently wrong number.",
            "Clinician Notes with extractive AI summary (new): a rich-text editor (multiple notes/clinicians per patient, exportable to docx/pdf/txt) that summarizes notes by lifting sentences verbatim, after generative summaries were found to fabricate clinical claims.",
            "Toy Analytics: cross-patient view of action counts, intentionality (child-initiated / accidental / educator-led) and action diversity per toy.",
            "Cohort data-quality overview: surfaces per-child completeness directly (missing labels, unreadable data, sensor issues) rather than hiding it behind an aggregate."
          ],
          gallery: {
            overview: "Dashboard overview: cohort KPIs and ADOS score distribution",
            label_stats: "Label Statistics: toy-usage heatmap",
            notes_ai_summary: "Patient Session View: video, clinician notes and the local extractive AI summary",
            sensor_only_risk: "Sensor-Only Risk Prediction: benchmarked against the cohort and same-risk peers",
            movement_timelines: "Movement timelines behind the prediction: detected motion, manual annotation and educator-excluded stretches, overlaid session by session",
            patient_vs_cohort: "Patient vs cohort statistics: intentionality, toy usage and behavioral metrics",
            label_timeline_imu: "Synchronized Label Timeline: multi-clinician notes and raw IMU signal plot",
            toy_leaderboard: "Toy Leaderboard: the most-used toys, ranked",
            toy_entropy: "Toy Entropy: action diversity and intentionality per toy"
          },
          reference: "Related research: \"AutoPlay: a smart toys-kit for an objective analysis of children ludic behavior and development\" (Faraci et al., IEEE MeMeA 2018), the sensor-based, play-driven approach to early autism spectrum disorder screening this thesis builds on."
        },
        driving: {
          title: "Enjoy the Night",
          summary: "A mobile and web app that tracks your drinks and calculates Blood Alcohol Content in real time, to help you stay safe on a night out.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) estimates BAC decay over time from a user's profile and logged drinks, now with myth-busting explanations, persistent safety disclaimers and full multilingual support.",
          highlights: [
            "Real-time BAC Calculation: accurate blood alcohol estimates based on user profile and logged drinks.",
            "Calculation Insights & Myth-Busting (new): interactive popups explaining how the calculation works and debunking common drinking myths.",
            "Health & Safety Disclaimer (new): a persistent disclaimer across Dashboard, History and Settings promoting responsible drinking.",
            "Multilingual Support (new): fully localized in English, German, Spanish, French and Italian.",
            "Drink History & Quick Add: a detailed log of past drinks plus a bottom-sheet shortcut to log a new one with minimal friction."
          ],
          gallery: {
            onboarding_welcome: "Onboarding: safety disclaimer, gender selector, and bounded stepper sliders for weight, height and age",
            dashboard: "Dashboard: animated BAC gauge, sobriety countdown and today's logged drinks",
            add_drink: "Add Drink bottom sheet: category chips, glass stepper and live volume/ABV recompute",
            over_limit: "Over-the-limit warning: the gauge and hydration advice update live after a new drink",
            history_24h: "History: 24h BAC trend with the legal limit line and a projection back to zero",
            history_3h: "History: quick-range chips rescale the chart to the last 3 hours",
            date_range_picker: "Date Range Picker: custom range selection, with future dates disabled",
            settings: "Settings: profile, theme, \"New Driver\" mode and time-format preferences"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "An AI-driven app for students and people living (and cooking) alone, merging diet tracking, grocery planning and pantry inventory into one minimalist Flutter experience.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Built for anyone organizing their own food solo, like students or young professionals living alone, PantryPilot uses Google Gemini 2.5 Flash in the backend to read diets straight from a photo or PDF, then turns that plan into a priced grocery list, a live pantry inventory and zero-waste recipes, all inside one glassmorphic, dual-tab analytics dashboard. Before publishing it, I plan to test it myself during the two months I'll be living alone in Berlin, while I also figure out a monetization strategy.",
          highlights: [
            "Multimodal Diet Scanner: imports diets straight from a photo or PDF via Gemini 2.5 Flash, handling OCR, translation and portion sizing.",
            "Smart Price Estimation: estimates the precise cost of any grocery list across multiple countries (IT, DE, CH).",
            "Zero-Waste Recipe Generator (\"Svuota Frigo\"): turns expiring pantry items into recipes that minimize food waste.",
            "Unified Analytics Dashboard: a dual-tab view tracking both macronutrients and grocery spending.",
            "Magic Pantry (new): automatically deducts recipe ingredients from inventory and merges duplicate foods, now with diet reuse via a calendar and a smart allergens backend.",
            "Premium minimalist UI: glassmorphic navigation, immersive cooking mode, zero emojis."
          ],
          gallery: {
            home: "Home dashboard: diet quality score, next meal, pantry alerts and today's plan",
            pantry: "Pantry inventory: expiry tracking by item, searchable and filterable by location",
            shopping_list: "Shopping list: estimated prices per store, recently-bought shortcuts and receipt scanning",
            recipes: "Recipes: favorites, zero-waste suggestions and macro/cost breakdown per dish",
            diet_calendar: "Diet & Calendar: daily meal plan with cost and macros, synced with the pantry"
          }
        },
        polify: {
          title: "Polify",
          summary: "A political matching test that explains every question before you answer, scoring your affinity with Italian and international parties across 68 real, documented issues.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify walks you through 68 documented political issues, weighting each answer against 239+ verified party positions to compute your affinity, nationally and, for the first time, across 10 other countries. Built in the run-up to the 2027 Italian general election, it's transparent about its own gaps: newer or smaller parties (e.g. ORA!, Potere al Popolo) still have positions documented on fewer than half of the 68 issues, and that coverage is shown on every party's page instead of being hidden behind an average.",
          highlights: [
            "Transparent, documented scoring engine: matches answers against 239+ verified, locked party positions, weighted by source reliability (e.g. parliamentary vote vs. statement).",
            "International Match (new): discover your closest ideologies and matching parties across 10 different countries.",
            "Area-by-area analysis: separate rankings across 9 topic areas (economy, rights, etc.), because no one agrees with a single party on everything.",
            "Separated-newsroom architecture: a local text editor (on a dedicated port) lets editors write and score questions in real time, watching the impact on the model, with no code.",
            "Privacy-first results & sharing: encrypted comparison via URL (\"Challenge\"); the server stores nothing, every calculation happens in the browser, GDPR-friendly.",
            "Premium aesthetics & UX: modern black-and-white interface with native dark mode, smooth micro-animations, single-column layout, and a built-in glossary for complex terms."
          ],
          gallery: {
            home: "Home Page: animated dark-mode design with custom-made ink portraits.",
            sondaggio: "Survey Flow: transparent explanation and pop-up glossary before answering.",
            risultato: "Result page: your ideological compass and the closest parties, within the margin of error.",
            mappa: "2D political map: where your answers place you against every party on two axes.",
            area_per_area: "Area-by-area ranking: economy, civil rights, immigration, justice, environment and more.",
            classifica: "Full Rankings: every party, expandable into topic-by-topic agreement and disagreement.",
            condividi: "Private Sharing: shareable via link, plus an in-app survey checking whether the result actually felt accurate.",
            partiti: "Parties page: how many of the 68 issues each party currently has a documented, sourced position on."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "A highly customizable Pomodoro timer and study analytics dashboard, available as a web app and an Electron desktop app.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Goes beyond simple countdowns: a mini-timer widget, a Notion-style task board and a full analytics dashboard turn the classic Pomodoro flow into a lightweight study companion, on the web or as a desktop app.",
          highlights: [
            "Mini-Timer Widget (new): a floating, always-on-top window (desktop) or popup (web) that keeps you aware of time while working in other apps.",
            "Notion-Style Task Board (new): set a macro-subject, outline topics and manage tasks in an interactive, keyboard-navigable table, saved automatically.",
            "Info & Settings Panel (new): adjust durations, fully customize the color theme, and toggle aesthetic background bubbles.",
            "Analytics Dashboard: track daily, weekly, monthly and lifetime progress with interactive Chart.js charts.",
            "Core Timer: classic work → short break → long break flow with a responsive circular progress indicator."
          ],
          gallery: {
            main_dashboard: "Full app view: circular timer with break preview, the Stats panel's activity chart, and the Notion-style task board for the current focus"
          }
        },
        priceTracker: {
          title: "Price Tracker",
          summary: "An automated web scraper tracking prices and sending Telegram alerts.",
          techStack: "Python, BeautifulSoup, Telegram Bot API",
          details: "A script that periodically scrapes e-commerce websites for the price of Nothing Ear (1) headphones. If the price drops below a defined threshold, it immediately notifies the user via a custom Telegram bot."
        },
        brickbreakers: {
          title: "Brickbreakers F1",
          summary: "A Formula 1 themed brickbreaker arcade game.",
          techStack: "JavaScript, HTML5 Canvas",
          details: "An engaging web-based arcade game built from scratch. It features F1-styled levels, custom ball physics, collision detection, and challenging mechanics that increase in difficulty as the player progresses."
        }
      },
      ui: {
        visit_project: "Visit Project",
        visit_projects: "Visit Projects",
        coming_soon: "Coming soon",
        lightbox_zoom_in: "Click image to zoom in",
        lightbox_zoom_reset: "Click image to reset zoom",
        details: "Details",
        tech_stack: "Tech stack",
        overview: "Overview",
        highlights: "Highlights",
        gallery: "Gallery",
        other_projects: "Other projects",
        projects_label: "projects",
        projects_count_one: "{{count}} project",
        projects_count_other: "{{count}} projects",
        browse_by_category: "Browse by category",
        contact_links: "Contact links",
        skip_to_content: "Skip to content",
        back_to_top: "Back to top",
        menu: "Menu",
        close: "Close",
        previous_image: "Previous image",
        next_image: "Next image",
        lang_en: "Switch to English",
        lang_it: "Passa all'italiano",
        lang_de: "Zu Deutsch wechseln"
      }
    }
  },
  it: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        year: "Classe 2004",
        subtitle: "Studente e Sviluppatore Software | Appassionato di Dati e IA"
      },
      hobbies: {
        eyebrow: "Fuori dal codice",
        title: "Hobby e passioni",
        intro: "Come passo il tempo quando non sto scrivendo codice.",
        items: {
          football: {
            title: "Calcio",
            note: "Milanista e collezionista di maglie."
          },
          motorsport: {
            title: "Motorsport",
            note: "MotoGP e Formula 1: ogni weekend di gara, con il tifo per Marquez e Norris."
          },
          travel: {
            title: "Viaggi",
            note: "Girare posti nuovi ogni volta che posso: dalle capitali europee fino alla Corea del Sud."
          },
          fitness: {
            title: "Palestra e corsa",
            note: "Sala pesi in settimana e corsa nel weekend per tenersi in forma."
          },
          finance: {
            title: "Finanza",
            note: "Mercati finanziari, investimenti e analisi dati."
          },
          tech: {
            title: "Tecnologia",
            note: "Hardware, benchmark, nuovi dispositivi e tendenze del settore tech."
          }
        }
      },
      sections: {
        data_ai: "Progetti Dati e IA",
        mobile: "App Mobile",
        websites: "Siti Web",
        games: "Giochi e Divertimento"
      },
      badges: {
        ended: "Concluso",
        in_progress: "In Corso",
        to_publish: "Da Pubblicare"
      },
      projects: {
        motogp: {
          title: "MotoGP Position Estimator",
          summary: "Un box radio virtuale per la MotoGP: tempi sul giro e posizioni in tempo reale, passo gara e strategia gomme, letti da circa 73.000 giri veri.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "Una suite di machine learning che funge da \"box radio virtuale\": prevede tempi sul giro, posizioni in griglia, passo gara e strategia gomme in MotoGP, basata su una pipeline SQLite che elabora fogli tempi PDF reali (stagioni 2024-2026, 34 piloti, 23 circuiti, ~73mila giri).",
          highlights: [
            "Predittore di tempo sul giro e posizione live: stima il tempo finale e la posizione in classifica a ogni settore, tramite un ensemble di 5 regressori (XGBoost, SVR, rete neurale, Ridge, AdaBoost).",
            "Motore di passo gara e strategia gomme: prevede il passo gara medio, il degrado gomme e la mescola più probabile a partire dalla telemetria delle prove libere e dal meteo.",
            "Analisi del weekend di gara (novità): pagella per sessione, punteggio di \"giro ideale\" e grafici giro per giro di posizione e passo.",
            "Dashboard analitica: pagelle algoritmiche dei piloti, indicatore di momentum, analisi circuiti, confronto testa a testa, trend di squadra.",
            "EDA avanzata: mappatura ambientale 3D, importanza delle feature, clustering dei circuiti con K-Means/PCA."
          ],
          gallery: {
            time_attack: "Modalità Time Attack: replay live della sessione con classifica dinamica e selettore del modello (Misano 2026, Q2)",
            live_sector_prediction: "Live Track Feed: schede settore per settore con la previsione AI del tempo sul giro fatta a S1/S2/S3 e l'errore rispetto al giro reale",
            live_prediction: "Simulazione di gara live: predittore ML delle posizioni in tempo reale con distacchi finali stimati, sincronizzato con la barra di avanzamento e la mappa animata del circuito",
            race_pace: "Predittore AI del passo gara: passo in aria pulita e sporca, calo gomme, scelta mescole e distacchi previsti, calcolati solo dai dati delle libere (Misano 2026)",
            accuracy_report: "Report di accuratezza dell'AI: MAE, RMSE e percentuali di posizione corretta del modello a ciascuno dei tre checkpoint, con dettaglio per pilota",
            weekend_overview: "Analisi weekend di gara: panoramica e pagella, con voti per libere, qualifica, sprint e gara più i punti iridati reali (Misano 2026)",
            quali_ideal_lap: "Analisi qualifiche: giro ideale (somma dei migliori settori di ogni pilota) contro il loro miglior giro reale, con punteggio di esecuzione sul delta",
            quali_sector_deltas: "Delta per settore in qualifica: compagno contro compagno, costruttore contro la moto più veloce, più il miglioramento da Q1 a Q2",
            race_classification: "Classifica finale di gara: giri completati, stato, distacco dal leader, miglior giro e passo medio per ogni pilota (Misano 2026)",
            position_by_lap: "Posizione giro per giro: la posizione in pista di ogni pilota, giro dopo giro, con pill per isolare un duello e zoom a riquadro su qualsiasi tratto di gara",
            pace_by_lap: "Passo giro per giro: tempi sul giro grezzi a confronto, giri ai box segnalati, con il giro 1 escluso di default perché la partenza da fermo schiaccia la scala",
            pace_lap_ranges: "Confronto del passo su intervalli di giri: ogni metà di gara trattata come una mini-gara a sé, ordinata per tempo totale o per passo medio",
            custom_lap_range: "Intervallo di giri personalizzato: scegli qualsiasi finestra della gara e ricalcola tempo totale, distacco, passo medio e miglior giro per tutti",
            lap_distribution_riders: "Distribuzione dei tempi sul giro per pilota: violin plot che mostrano chi è stato un metronomo e chi incostante sulla distanza di gara",
            race_trace: "Race trace: delta cumulativo rispetto al giro medio del vincitore — dove le linee si incrociano, i piloti si sono scambiati la posizione in pista",
            dirty_air_impact: "Impatto di traffico e aria sporca: tempo perso al giro rispetto al potenziale in aria pulita mostrato da ogni pilota nei long run delle libere",
            rider_vs_bike: "Prestazione del pilota rispetto alla propria moto: ogni pilota confrontato con la media dei piloti della stessa marca su gestione gomme e passo gara — in basso a sinistra c'è il migliore",
            predicted_vs_actual: "Posizione prevista dal passo contro arrivo reale: l'ordine che il modello si aspettava solo dal passo nelle libere, contro dove i piloti sono finiti davvero",
            pace_by_team: "Passo per team: passo gara reale e calo gomme al giro per ogni box, con accanto barrata la previsione pre-gara",
            team_battles: "Distribuzione dei tempi per team e duelli interni: confronto diretto tra compagni sul passo gara reale, stessa moto e stessa finestra di strategia",
            pace_by_manufacturer: "Passo per costruttore: passo gara medio, calo gomme e passo giro per giro calcolati su tutti i piloti di ogni marca",
            manufacturer_battles: "Distribuzione dei giri per costruttore e distacchi interni alla marca: quanto il miglior pilota di ogni brand era davanti agli altri con la stessa moto",
            weather_conditions: "Meteo e condizioni pista: temperatura asfalto e aria e calo medio delle gomme registrato nel weekend",
            sprint_analysis: "La stessa analisi applicata alla sprint del sabato: classifica e posizione giro per giro sulla gara corta (Misano 2026)",
            analytics_standings: "Advanced Analytics: filtra per anno, sessione, circuito e pilota, poi leggi la classifica iridata calcolata esattamente sulle gare selezionate",
            cumulative_points: "Punti iridati cumulati sulle gare selezionate, round dopo round, con selettore per aggiungere o togliere qualsiasi pilota",
            rider_grades: "Pagelle piloti: voti algoritmici di qualifica, sprint e gara per ogni round della stagione, con colori e ordinamento",
            ideal_lap_ranking: "Classifica del giro ideale: chi si avvicina di più alla somma dei propri migliori settori, divisa per pilota, team e moto",
            difference_maker: "Miglior pilota a prescindere dalla moto: chi tira fuori dalla moto più di quanto la moto meriti, misurato contro i piloti della stessa marca",
            constructor_performance: "Analisi costruttori: posizione media di arrivo, passo rispetto alla media del gruppo, trend stagionale round per round e best in class per marca",
            team_performance: "Analisi team: posizione media di arrivo, passo rispetto alla media del gruppo, trend stagionale e confronto diretto fra compagni sul passo gara",
            finishing_position: "Posizione di arrivo dei piloti nella stagione: risultato medio, mediano o modale per ogni pilota sulle gare selezionate",
            consistency: "Costanza e affidabilità: tasso di ritiro per pilota accanto alla varianza di posizione, per separare i veloci dagli affidabili",
            wet_masters: "Maestri del bagnato: posizione media di arrivo di ogni pilota nelle gare disputate su pista bagnata o mista",
            race_vs_quali: "Gara vs Qualifiche: piloti da domenica che guadagnano posizioni contro gli specialisti delle qualifiche che le perdono",
            env_mapping_3d: "MotoGP AI Data Lab: mappatura ambientale 3D interattiva di temperatura pista, umidità e calo gomme, primo capitolo di un report EDA in dieci capitoli",
            feature_importance: "Importanza delle feature secondo Random Forest per il calo gomme, accanto alla matrice di correlazione di Pearson delle variabili ambientali",
            clustering_pca: "Profilazione non supervisionata dei circuiti: clustering K-Means delle piste in quattro archetipi e proiezione PCA della stessa impronta meteo",
            regression_anomaly: "Regressione OLS fra temperatura asfalto e calo gomme, più anomaly detection con Isolation Forest che segnala le gare fuori scala"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "Un ottimizzatore di portafoglio scommesse basato sui dati per i principali campionati europei.",
          techStack: "Python, scikit-learn, pandas, API football-data.org",
          details: "Questo progetto genera profitti settimanali sostenibili utilizzando previsioni ML avanzate sui 5 principali campionati europei. Incorpora vari indicatori statistici e lo stato di forma delle squadre per calcolare le probabilità di risultato e ottimizzare la strategia di scommessa.",
          highlights: [
            "Modello a Stacking Ensemble: combina Random Forest, AdaBoost e Gradient Boosting con un meta-modello di Logistic Regression, calibrato per probabilità affidabili e con un'accuratezza dell'81,9% sui dati di training 2025.",
            "Pipeline con 27 feature ingegnerizzate: unisce metriche classiche come il rating ELO e la forma con aggiunte più recenti come Expected Goals (xG), analisi dei giorni di riposo, precedenti scontri diretti e decadimento esponenziale del momentum.",
            "Portafoglio scommesse a livelli: distribuisce ogni settimana la puntata su quattro livelli di rischio, da Ultra Safe a quote più alte, dimensionati con il Criterio di Kelly frazionario e un margine di sicurezza sulla probabilità."
          ]
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Reti neurali contro la stagione 2024 di Formula 1: chi arriva dove in una data domenica, e che faccia ha la classifica alla fine.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Addestrati sui dati storici delle prestazioni, i modelli chiamano la stagione 2024 gara per gara: la posizione d'arrivo di ogni pilota in una data domenica e la classifica piloti che ne viene fuori. Diversi approcci di modellazione vengono messi uno accanto all'altro per vedere quale legge meglio un weekend di gara."
        },
        uni: {
          title: "Progetti Universitari",
          summary: "**26 repository accademici** della triennale, con lavori di ambito sanitario e biomedico, sensori indossabili, previsione di serie storiche, statistica bayesiana, blockchain, robotica e reinforcement learning.",
          techStack: "Python (Jupyter Notebook), R",
          details: "**26 repository** nati dagli esami del corso di laurea, che coprono un ampio ventaglio di temi: dati sanitari e biomedici (drug design, bioinformatica, classificazione di tumori cerebrali da risonanza, rilevamento dello stress da sensori da polso, qualità dell'olio d'oliva e dei composti alimentari), previsione di serie storiche, statistica bayesiana e ottimizzazione, blockchain, robotica e controllo di droni, reinforcement learning, anomaly detection con autoencoder, e analisi sportive/finanziarie (dati sui tiri NBA, rischio di credito). Scritti perlopiù in notebook Jupyter e R Markdown, alcuni svolti da solo e altri in coppia o piccoli gruppi a seconda del corso. Si possono sfogliare tutti su GitHub.",
          folders: {
            biomedical: "Sanitario e biomedico",
            robotics: "Robotica e droni",
            forecasting: "Serie storiche e previsione",
            bayesian: "Bayesiana e statistica",
            security: "Sicurezza di rete",
            analytics: "Finanza, sport e ricerca"
          },
          gallery: {
            stress_signals: "Segnali grezzi da polso di un soggetto: volume del polso sanguigno, conduttanza cutanea, temperatura e accelerazione sotto le etichette del protocollo",
            stress_confusion: "Stress contro non-stress: matrici di confusione di quattro modelli con validazione leave-one-subject-out",
            stress_shap: "Riepilogo SHAP del classificatore dello stress: frequenza cardiaca media e conduttanza cutanea portano gran parte del segnale",
            evoo_fluorescence: "Olio d'oliva alla spettroscopia di fluorescenza: mappe eccitazione-emissione a tre stadi di invecchiamento",
            sweet_bitter: "Composti dolci contro amari: accuratezza di validazione man mano che il selettore aggiunge feature",
            gp_estimate: "Surrogato a processo gaussiano contro la funzione vera su tre dimensioni di input, dentro il ciclo di ottimizzazione bayesiana",
            autoencoder_error: "Anomaly detection con autoencoder: le ricostruzioni peggiori sono i capi Fashion-MNIST su cui il modello non si è mai allenato",
            tumor_confusion: "Classificatore di tumori cerebrali: matrice di confusione sul validation set, tumore contro non tumore",
            tumor_roc: "Classificatori a confronto: curve ROC di regressione logistica, CNN e CNN completamente connessa",
            fleet_forecast: "Previsione della flotta a 24 ore: la continuazione del modello contro le baseline naive, media e naive stagionale",
            fleet_probabilistic: "Previsione probabilistica: la serie predetta con gli intervalli di predizione al 50%, 80% e 90%",
            revenue_forecast: "Sette giorni di ricavi previsti su giorni mai visti, quattro modelli contro quello che è successo davvero",
            forecast_comparison: "Errore di previsione a confronto tra modelli su MAE, MSE e RMSE",
            holt_winters: "Diagnostica dei residui di Holt-Winters: residui nel tempo, distribuzione, ACF e QQ plot",
            traffic_confusion: "Traffico di rete: matrici di confusione di Random Forest e Gradient Boosting, benigno contro attacco",
            traffic_roc: "Curve ROC sul traffico di rete: MLP a 0.991 di AUC contro SVM lineare a 0.826",
            credit_confusion: "Credit risk: matrice di confusione sul test set, clienti solvibili contro insolventi",
            credit_roc: "Curva ROC del credit risk, AUC 0.81",
            machinery_confusion: "Efficienza dei consumi dei macchinari: matrice di confusione a quattro classi, 91,7% di accuratezza sul test",
            citation_gcn: "Previsione delle citazioni con una graph neural network: curve di training, distribuzione delle probabilità predette e matrice di confusione",
            unet_segmentation: "Segmentazione del tumore: predizioni U-Net sul validation set, con scansione, maschera reale, heatmap di probabilità e maschera predetta",
            mri_annotations: "MRI di tumori cerebrali: scansioni annotate raggruppate per categoria di tumore, con la regione etichettata evidenziata",
            tumor_classification: "Classificazione di tumori cerebrali: predizioni su 20 scansioni di test casuali, ciascuna a confronto con l'etichetta reale",
            molecules: "Drug design: strutture di alcuni inibitori del CYP2C19, le molecole che il classificatore deve distinguere",
            drone_pipeline: "Pipeline di visione del drone: fotogramma grezzo, maschera di segmentazione e overlay con il centroide rilevato",
            robot_arm: "Robotica: replay di una corsa reale del braccio robotico, traiettoria 3D dell'end-effector con profilo di altezza ed errore di posizione",
            drone_obstacle: "Navigazione del drone: la vista della camera di bordo su un ostacolo, l'input della logica di evitamento",
            ml_vs_map: "Teoria della stima: massima verosimiglianza contro massimo a posteriori con prior gaussiana",
            bayesian: "Statistica bayesiana: regressione gerarchica, intercette a posteriori per stazione con partial pooling, su dati di temperatura del Ticino",
            ev_fleet: "Previsione di serie storiche: consumo energetico orario e presenza dei veicoli di una flotta elettrica",
            drone_vision: "Visione del drone: centroide e area della palla rossa, rilevati fotogramma per fotogramma dalla camera di bordo",
            drone_control: "Controllo del drone: profilo di distanza time-of-flight durante una corsa, con le soglie di scarto, via libera e stop",
            intrusion: "Classificazione del traffico di rete: matrice di confusione normalizzata per riga del Random Forest multi-classe su nove classi",
            drug_design: "Drug design: miglior AUROC in cross-validation per set di feature (descrittori, fingerprint di Morgan, combinati) e per modello",
            nba_shots: "Sports analytics: mappa di densità dei tiri NBA, con ogni tentativo sovrapposto al campo",
            credit_risk: "Equità nel credit risk: esito per genere, il bias che il progetto voleva misurare",
            citations: "Analisi della ricerca: le 15 feature più correlate al numero di citazioni di un paper",
            revenue: "Serie storiche di business: ricavi nel tempo su otto città"
          }
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Tesi)",
          summary: "L'output finale della mia tesi di Bachelor sulla ricerca nello screening dell'autismo: una dashboard clinica offline per rivedere una sessione ADOS-2 di un bambino su un'unica timeline sincronizzata.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Questa dashboard gira interamente in locale, senza alcuna chiamata di rete in uscita: è lo strato presentativo di una pipeline di tesi molto più ampia, pensata per dati sanitari di minori sensibili ai sensi del GDPR Art. 9. L'elaborazione del segnale IMU, il feature engineering, il modello di rischio ADOS (Autism Diagnostic Observation Schedule) basato solo sui sensori (una RandomForest addestrata per l'analisi di data science della tesi, valutata out-of-fold) e l'analisi statistica dietro ogni numero mostrato girano tutti a monte, sulla stessa macchina. Le note dei clinici vengono riassunte da un modello di testo locale ed estrattivo, che riprende le frasi testualmente, mai da un LLM in cloud, scelto dopo che i riassunti generativi si erano dimostrati capaci di inventare affermazioni cliniche. La tesi è già stata completata e consegnata; la dashboard in sé è invece ancora in fase di rifinitura.",
          highlights: [
            "Patient Detail sincronizzato: riproduzione video collegata bidirezionalmente a una timeline interattiva delle etichette e al grafico del segnale IMU grezzo; giocattolo e angolo camera si selezionano indipendentemente per sessione.",
            "Sensor-Only Analysis (novità): applica il modello di rischio ADOS basato solo sui sensori ai dati di movimento del bambino, confrontandolo con la coorte e con i pari a rischio simile, con tre timeline di movimento sovrapposte che confrontano il rilevamento automatico con il dato umano.",
            "Trasparenza sulla qualità dei dati (novità): un sensore saturo, una registrazione interrotta o una bassa copertura dei campioni mostrano un avviso esplicito accanto alla previsione, invece di un numero silenziosamente sbagliato.",
            "Note del Clinico con riassunto AI estrattivo (novità): un editor di rich-text (più note e più clinici per paziente, esportabile in docx/pdf/txt) che riassume le note estraendo frasi testuali, dopo che i riassunti generativi si erano dimostrati capaci di inventare affermazioni cliniche.",
            "Toy Analytics: vista cross-paziente di conteggio azioni, intenzionalità (avviata dal bambino / accidentale / guidata dall'educatore) e diversità delle azioni per giocattolo.",
            "Panoramica sulla qualità dei dati della coorte: mostra direttamente la completezza per ogni bambino (etichette mancanti, dati illeggibili, problemi ai sensori) invece di nasconderla dietro un aggregato."
          ],
          gallery: {
            overview: "Panoramica dashboard: KPI di coorte e distribuzione dei punteggi ADOS",
            label_stats: "Statistiche sulle Etichette: heatmap di utilizzo dei giocattoli",
            notes_ai_summary: "Vista Sessione Paziente: video, note del clinico e riassunto AI estrattivo locale",
            sensor_only_risk: "Previsione di Rischio Solo da Sensori: confrontata con la coorte e i pari a rischio simile",
            movement_timelines: "Le timeline di movimento dietro la previsione: rilevamento automatico, annotazione manuale e tratti con educatore esclusi, sovrapposti sessione per sessione",
            patient_vs_cohort: "Statistiche paziente vs coorte: intenzionalità, utilizzo dei giocattoli e metriche comportamentali",
            label_timeline_imu: "Timeline delle Etichette Sincronizzata: note di più clinici e grafico del segnale IMU grezzo",
            toy_leaderboard: "Classifica Giocattoli: i giocattoli più utilizzati, in classifica",
            toy_entropy: "Entropia dei Giocattoli: diversità delle azioni e intenzionalità per giocattolo"
          },
          reference: "Ricerca correlata: \"AutoPlay: a smart toys-kit for an objective analysis of children ludic behavior and development\" (Faraci et al., IEEE MeMeA 2018), l'approccio basato su sensori e gioco per lo screening precoce del disturbo dello spettro autistico da cui questa tesi prende spunto."
        },
        driving: {
          title: "Enjoy the Night",
          summary: "Un'app mobile e web che traccia i drink consumati e calcola il tasso alcolemico (BAC) in tempo reale, per aiutarti a restare al sicuro durante una serata.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) stima il decadimento del BAC nel tempo a partire dal profilo utente e dai drink registrati, ora con spiegazioni anti-mito, disclaimer di sicurezza persistenti e supporto multilingua completo.",
          highlights: [
            "Calcolo BAC in tempo reale: stime accurate del tasso alcolemico basate sul profilo utente e sui drink registrati.",
            "Approfondimenti sul calcolo e Anti-Mito (novità): popup interattivi che spiegano come funziona il calcolo e sfatano i miti comuni sull'alcol.",
            "Disclaimer di Salute e Sicurezza (novità): un avviso persistente su Dashboard, Cronologia e Impostazioni che promuove un consumo responsabile.",
            "Supporto Multilingua (novità): localizzazione completa in inglese, tedesco, spagnolo, francese e italiano.",
            "Cronologia Drink e Aggiunta Rapida: un registro dettagliato dei drink passati più una bottom sheet per registrarne uno nuovo con il minimo sforzo."
          ],
          gallery: {
            onboarding_welcome: "Onboarding: disclaimer di sicurezza, selettore di genere e slider a stepper (con limiti) per peso, altezza ed età",
            dashboard: "Dashboard: indicatore BAC animato, countdown alla sobrietà e drink registrati oggi",
            add_drink: "Bottom sheet Aggiungi Drink: categorie a chip, stepper dei bicchieri e ricalcolo live di volume/gradazione",
            over_limit: "Avviso di superamento limite: indicatore e consiglio sull'idratazione si aggiornano subito dopo un nuovo drink",
            history_24h: "Cronologia: andamento del BAC nelle ultime 24h con la linea del limite legale e la proiezione fino ad azzerarsi",
            history_3h: "Cronologia: i chip di intervallo rapido riscalano il grafico alle ultime 3 ore",
            date_range_picker: "Selettore di Intervallo Date: selezione personalizzata, con le date future disabilitate",
            settings: "Impostazioni: profilo, tema, modalità \"Neopatentato\" e formato ora"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Un'app basata su AI pensata per chi vive (e cucina) da solo, che unisce tracciamento della dieta, pianificazione della spesa e inventario della dispensa in un'unica esperienza Flutter minimalista.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Pensata per chi organizza da solo i propri pasti, come studenti fuori sede o giovani che vivono da soli, PantryPilot usa Google Gemini 2.5 Flash nel backend per leggere le diete direttamente da una foto o un PDF, trasformando il piano in una lista della spesa con prezzi stimati, un inventario della dispensa sempre aggiornato e ricette a spreco zero, il tutto in una dashboard analitica glassmorphic a doppia scheda. Prima di pubblicarla, ho intenzione di testarla io stesso durante i due mesi in cui vivrò da solo a Berlino, mentre valuto anche una strategia di monetizzazione.",
          highlights: [
            "Scanner Dieta Multimodale: importa diete direttamente da foto o PDF tramite Gemini 2.5 Flash, gestendo OCR, traduzione e porzioni.",
            "Stima Intelligente dei Prezzi: calcola il costo preciso di qualsiasi lista della spesa in più paesi (IT, DE, CH).",
            "Generatore di Ricette a Spreco Zero (\"Svuota Frigo\"): trasforma gli alimenti in scadenza in ricette che riducono lo spreco.",
            "Dashboard Analitica Unificata: vista a doppia scheda che traccia sia i macronutrienti sia la spesa.",
            "Magic Pantry (novità): scala automaticamente gli ingredienti delle ricette dall'inventario e unisce alimenti duplicati, ora con riutilizzo delle diete via calendario e un backend intelligente per gli allergeni.",
            "UI Premium Minimalista: navigazione glassmorphic, modalità cucina immersiva, zero emoji."
          ],
          gallery: {
            home: "Dashboard principale: punteggio di qualità della dieta, prossimo pasto, avvisi dispensa e piano di oggi",
            pantry: "Inventario dispensa: scadenze per articolo, ricercabile e filtrabile per posizione",
            shopping_list: "Lista della spesa: prezzi stimati per negozio, scorciatoie per gli acquisti recenti e scansione scontrino",
            recipes: "Ricette: preferiti, suggerimenti a spreco zero e dettaglio macro/costo per piatto",
            diet_calendar: "Dieta e Calendario: piano pasti giornaliero con costo e macro, sincronizzato con la dispensa"
          }
        },
        polify: {
          title: "Polify",
          summary: "Un test politico che ti spiega ogni domanda prima di porla, calcolando quanto sei vicino a ciascun partito italiano e internazionale su 68 temi reali e documentati.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify ti guida attraverso 68 temi politici documentati, confrontando ogni risposta con oltre 239 posizioni di partito verificate per calcolare la tua affinità, a livello nazionale e, per la prima volta, anche in altre 10 nazioni. Costruito in vista delle elezioni politiche italiane del 2027, il test è trasparente sui propri limiti: i partiti più piccoli o di nuova formazione (es. ORA!, Potere al Popolo) hanno ancora posizioni documentate su meno della metà dei 68 temi, e questa copertura è mostrata nella pagina di ogni partito invece di essere nascosta dietro una media.",
          highlights: [
            "Motore di calcolo trasparente e documentato: confronta le risposte con oltre 239 posizioni di partito verificate e bloccate, pesate in base all'affidabilità della fonte (es. voto parlamentare vs. dichiarazione).",
            "Match Internazionale (novità): scopri le tue ideologie affini e i partiti corrispondenti in 10 nazioni diverse.",
            "Analisi area per area: classifiche separate su 9 temi (economia, diritti, ecc.), perché nessuno è d'accordo su tutto con un solo partito.",
            "Architettura a redazione separata: editor testuale locale per creare e valutare le domande in tempo reale, senza toccare codice.",
            "Risultati e condivisione privacy-first: confronto crittografato via URL (\"Sfida\"); tutti i calcoli restano nel browser, nessun dato salvato sul server.",
            "Estetica e UX Premium: interfaccia bianco e nero con dark mode nativa, micro-animazioni fluide, layout a colonna singola e glossario integrato per i termini complessi."
          ],
          gallery: {
            home: "Pagina Iniziale: animata in tema scuro, con ritratti a inchiostro creati appositamente.",
            sondaggio: "Percorso del Sondaggio: spiegazione trasparente e glossario a comparsa prima di rispondere.",
            risultato: "Pagina dei risultati: la tua bussola ideologica e i partiti più vicini, dentro il margine di errore.",
            mappa: "Mappa politica 2D: dove ti collocano le tue risposte rispetto a ogni partito su due assi.",
            area_per_area: "Classifica area per area: economia, diritti civili, immigrazione, giustizia, ambiente e altro.",
            classifica: "Classifica Completa: tutti i partiti, espandibile tema per tema in punti di accordo e divergenza.",
            condividi: "Condivisione Privata: tramite link, più un sondaggio in-app per verificare se il risultato è sembrato azzeccato.",
            partiti: "Pagina dei partiti: su quanti dei 68 temi ogni partito ha oggi una posizione documentata e con fonte."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Un timer Pomodoro altamente personalizzabile e una dashboard di analisi dello studio, disponibile come web app e come app desktop Electron.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Va oltre il semplice conto alla rovescia: un widget mini-timer, una bacheca delle attività in stile Notion e una dashboard analitica completa trasformano il classico flusso Pomodoro in un compagno di studio leggero, sul web o come app desktop.",
          highlights: [
            "Widget Mini-Timer (novità): una finestra flottante sempre in primo piano (desktop) o un popup (web) per restare consapevoli del tempo anche lavorando in altre app.",
            "Bacheca Attività stile Notion (novità): imposta una macro-materia, delinea gli argomenti e gestisci le attività in una tabella interattiva navigabile da tastiera, salvata automaticamente.",
            "Pannello Info & Impostazioni (novità): regola le durate, personalizza completamente il tema colore e attiva le bolle di sfondo decorative.",
            "Dashboard Analitica: tieni traccia dei progressi giornalieri, settimanali, mensili e complessivi con grafici interattivi Chart.js.",
            "Timer Principale: il classico flusso lavoro → pausa breve → pausa lunga con un indicatore di progresso circolare responsive."
          ],
          gallery: {
            main_dashboard: "Vista completa dell'app: timer circolare con anteprima della pausa, il grafico di attività del pannello Stats e la bacheca delle attività in stile Notion per il focus corrente"
          }
        },
        priceTracker: {
          title: "Price Tracker",
          summary: "Uno scraper web automatizzato che traccia i prezzi e invia avvisi su Telegram.",
          techStack: "Python, BeautifulSoup, API Bot Telegram",
          details: "Uno script che raschia periodicamente i siti web di e-commerce alla ricerca del prezzo delle cuffie Nothing Ear (1). Se il prezzo scende al di sotto di una soglia definita, avvisa immediatamente l'utente tramite un bot Telegram personalizzato."
        },
        brickbreakers: {
          title: "Brickbreakers F1",
          summary: "Un gioco arcade brickbreaker a tema Formula 1.",
          techStack: "JavaScript, HTML5 Canvas",
          details: "Un coinvolgente gioco arcade basato sul web costruito da zero. Presenta livelli in stile F1, fisica della palla personalizzata, rilevamento delle collisioni e meccaniche stimolanti che aumentano di difficoltà man mano che il giocatore avanza."
        }
      },
      ui: {
        visit_project: "Visita il Progetto",
        visit_projects: "Visita i Progetti",
        coming_soon: "Presto online",
        lightbox_zoom_in: "Clicca sull'immagine per ingrandire",
        lightbox_zoom_reset: "Clicca sull'immagine per azzerare lo zoom",
        details: "Dettagli",
        tech_stack: "Tech stack",
        overview: "Panoramica",
        highlights: "In evidenza",
        gallery: "Galleria",
        other_projects: "Altri progetti",
        projects_label: "progetti",
        projects_count_one: "{{count}} progetto",
        projects_count_other: "{{count}} progetti",
        browse_by_category: "Naviga per categoria",
        contact_links: "Link di contatto",
        skip_to_content: "Vai al contenuto",
        back_to_top: "Torna su",
        menu: "Menu",
        close: "Chiudi",
        previous_image: "Immagine precedente",
        next_image: "Immagine successiva",
        lang_en: "Switch to English",
        lang_it: "Passa all'italiano",
        lang_de: "Zu Deutsch wechseln"
      }
    }
  },
  de: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        year: "Jahrgang 2004",
        subtitle: "Student & Softwareentwickler | Daten- & KI-Enthusiast"
      },
      hobbies: {
        eyebrow: "Abseits vom Code",
        title: "Hobbys & Leidenschaften",
        intro: "Womit ich meine Zeit verbringe, wenn ich nicht programmiere.",
        items: {
          football: {
            title: "Fußball",
            note: "Milan-Fan und Trikotsammler."
          },
          motorsport: {
            title: "Motorsport",
            note: "MotoGP und Formel 1: jedes Rennwochenende dabei, mit Daumendrücken für Marquez und Norris."
          },
          travel: {
            title: "Reisen",
            note: "Neue Orte entdecken, wann immer es geht: von europäischen Hauptstädten bis nach Südkorea."
          },
          fitness: {
            title: "Gym & Laufen",
            note: "Gewichte unter der Woche und Laufen am Wochenende, um fit zu bleiben."
          },
          finance: {
            title: "Finanzen",
            note: "Finanzmärkte, Investieren und Datenanalyse."
          },
          tech: {
            title: "Technologie",
            note: "Hardware, Benchmarks, neue Geräte und Trends in der Tech-Branche."
          }
        }
      },
      sections: {
        data_ai: "Daten- & KI-Projekte",
        mobile: "Mobile Apps",
        websites: "Websites",
        games: "Spiele & Spaß"
      },
      badges: {
        ended: "Beendet",
        in_progress: "In Bearbeitung",
        to_publish: "Zu veröffentlichen"
      },
      projects: {
        motogp: {
          title: "MotoGP Position Estimator",
          summary: "Eine virtuelle Boxenmauer für die MotoGP: Rundenzeiten und Positionen live, Rennpace und Reifenstrategie, aus rund 73.000 echten Runden gelesen.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "Eine Machine-Learning-Suite als \"virtuelle Boxenwand\": sie sagt Rundenzeiten, Startpositionen, Rennpace und Reifenstrategie für MotoGP voraus, basierend auf einer SQLite-Pipeline, die echte PDF-Zeitmessblätter verarbeitet (Saisons 2024-2026, 34 Fahrer, 23 Strecken, ~73.000 Runden).",
          highlights: [
            "Live-Rundenzeit- & Positionsvorhersage: schätzt die finale Rundenzeit und die Live-Position an jedem Sektor mittels eines Ensembles aus 5 Regressoren (XGBoost, SVR, neuronales Netz, Ridge, AdaBoost).",
            "Rennpace- & Reifenstrategie-Engine: sagt die durchschnittliche Rennpace, den Reifenabbau und die wahrscheinliche Mischungswahl anhand von Freien-Training-Telemetrie und Wetter voraus.",
            "Rennwochenend-Analyse (neu): Bewertung pro Session, ein \"Ideal-Lap\"-Score sowie Runde-für-Runde-Diagramme zu Position und Pace.",
            "Analytics-Dashboard: algorithmische Fahrerbewertungen, Momentum-Indikator, Streckenanalyse, direkter Vergleich, Team-Performance-Trends.",
            "Erweiterte EDA: 3D-Umweltmapping, Feature-Importance, K-Means/PCA-Streckenclustering."
          ],
          gallery: {
            time_attack: "Time-Attack-Modus: Live-Replay der Session mit laufender Rangliste und Modellauswahl (Misano 2026, Q2)",
            live_sector_prediction: "Live Track Feed: Sektor-Karten mit der KI-Rundenzeitprognose bei S1/S2/S3 und der Abweichung zur tatsächlichen Runde",
            live_prediction: "Live-Rennsimulation: ML-Positionsprognose während des Rennens mit projizierten Endabständen, synchron zum Replay-Regler und zur Streckenkarte",
            race_pace: "Pre-Race-KI-Pace-Predictor: Pace in freier und gestörter Luft, Reifenabbau, Mischungswahl und projizierte Abstände, nur aus den Trainingsdaten (Misano 2026)",
            accuracy_report: "KI-Genauigkeitsbericht: MAE, RMSE und Trefferquoten der Position des Modells an allen drei Checkpoints, samt Auswertung pro Fahrer",
            weekend_overview: "Rennwochenend-Analyse: Übersicht und Bewertungsbogen mit Noten für Training, Qualifying, Sprint und Rennen sowie echten WM-Punkten (Misano 2026)",
            quali_ideal_lap: "Qualifying-Analyse: ideale Runde (Summe der besten Sektoren jedes Fahrers) gegen die tatsächliche Bestzeit, mit Ausführungs-Score für die Differenz",
            quali_sector_deltas: "Sektor-Deltas im Qualifying: Teamkollege gegen Teamkollege, Hersteller gegen das schnellste Motorrad, plus die Steigerung von Q1 zu Q2",
            race_classification: "Rennendklassement: absolvierte Runden, Status, Rückstand auf den Führenden, schnellste Runde und Durchschnittspace pro Fahrer (Misano 2026)",
            position_by_lap: "Position pro Runde: die Streckenposition jedes Fahrers Runde für Runde, mit Pills zum Isolieren eines Duells und Zoom auf jeden Rennabschnitt",
            pace_by_lap: "Pace pro Runde: rohe Rundenzeiten im Vergleich, Boxenrunden markiert, Runde 1 standardmäßig ausgeschlossen, damit der Start die Skala nicht verzerrt",
            pace_lap_ranges: "Pace-Vergleich über Rundenbereiche: jede Rennhälfte als eigenes Mini-Rennen, sortiert nach Gesamtzeit oder Durchschnittspace",
            custom_lap_range: "Eigener Rundenbereich: beliebiges Rennfenster wählen und Gesamtzeit, Rückstand, Durchschnittspace und Bestzeit für das ganze Feld neu berechnen",
            lap_distribution_riders: "Verteilung der Rundenzeiten pro Fahrer: Violin-Plots zeigen, wer konstant wie ein Metronom war und wer schwankte",
            race_trace: "Race Trace: kumulierter Zeitunterschied zur Durchschnittsrunde des Siegers — wo sich Linien kreuzen, tauschten die Fahrer die Position",
            dirty_air_impact: "Einfluss von Verkehr und gestörter Luft: Zeitverlust pro Runde gegenüber dem eigenen Potenzial in freier Luft aus den Trainings-Longruns",
            rider_vs_bike: "Fahrerleistung im Vergleich zum eigenen Motorrad: jeder Fahrer gegen den Schnitt seiner Markenkollegen bei Reifenmanagement und Racepace — unten links ist am stärksten",
            predicted_vs_actual: "Prognostizierte Pace-Position gegen tatsächliches Ergebnis: die vom Modell aus der Trainingspace erwartete Reihenfolge gegen das echte Resultat",
            pace_by_team: "Pace pro Team: echte Racepace und Reifenabbau pro Runde je Garage, daneben durchgestrichen die Vorhersage vor dem Rennen",
            team_battles: "Rundenzeitverteilung der Teams und interne Duelle: direkter Vergleich der Teamkollegen bei echter Racepace, gleiches Bike und gleiches Strategiefenster",
            pace_by_manufacturer: "Pace pro Hersteller: durchschnittliche Racepace, Reifenabbau und Pace pro Runde über alle Fahrer jeder Marke",
            manufacturer_battles: "Rundenverteilung je Hersteller und markeninterne Abstände: wie weit der beste Fahrer jeder Marke vor den übrigen mit demselben Material lag",
            weather_conditions: "Wetter und Streckenbedingungen: Asphalt- und Lufttemperatur sowie der mittlere Reifenabbau des Wochenendes",
            sprint_analysis: "Dieselbe Analyse für den Samstags-Sprint: Klassement und Position pro Runde über die kurze Distanz (Misano 2026)",
            analytics_standings: "Advanced Analytics: nach Jahr, Session, Strecke und Fahrer filtern und die WM-Wertung genau über die gewählten Rennen lesen",
            cumulative_points: "Kumulierte WM-Punkte über die gewählten Rennen, Runde für Runde, mit Auswahl zum Hinzufügen oder Entfernen einzelner Fahrer",
            rider_grades: "Fahrernoten: algorithmische Bewertungen für Qualifying, Sprint und Rennen an jedem Saisonlauf, farbcodiert und sortierbar",
            ideal_lap_ranking: "Ideal-Lap-Ranking: wer der Summe seiner eigenen Bestsektoren am nächsten kommt, aufgeteilt nach Fahrer, Team und Hersteller",
            difference_maker: "Bester Fahrer unabhängig vom Motorrad: wer mehr aus dem Material holt, als es hergibt, gemessen an den eigenen Markenkollegen",
            constructor_performance: "Herstelleranalyse: durchschnittliche Zielposition, Pace gegenüber dem Feld, Saisontrend Lauf für Lauf und Best in Class je Marke",
            team_performance: "Teamanalyse: durchschnittliche Zielposition, Pace gegenüber dem Feld, Saisontrend und direkter Vergleich der Teamkollegen bei der Racepace",
            finishing_position: "Zielpositionen der Fahrer über die Saison: Mittelwert, Median oder Modus je Fahrer über die gewählten Rennen",
            consistency: "Konstanz und Zuverlässigkeit: Ausfallquote je Fahrer neben der Positionsvarianz — so trennen sich die Schnellen von den Verlässlichen",
            wet_masters: "Regenspezialisten: durchschnittliche Zielposition jedes Fahrers in Rennen auf nasser oder gemischter Strecke",
            race_vs_quali: "Rennen gegen Qualifying: Sonntagsfahrer, die Positionen gutmachen, gegen Qualifying-Spezialisten, die sie verlieren",
            env_mapping_3d: "MotoGP AI Data Lab: interaktive 3D-Umweltkarte aus Streckentemperatur, Luftfeuchte und Reifenabbau — Kapitel eins eines zehnteiligen EDA-Reports",
            feature_importance: "Random-Forest-Feature-Importance für den Reifenabbau, daneben die Pearson-Korrelationsmatrix der Umweltvariablen",
            clustering_pca: "Unüberwachte Streckenprofilierung: K-Means-Clustering der Strecken in vier Archetypen und PCA-Projektion desselben Wetterprofils",
            regression_anomaly: "OLS-Regression von Asphalttemperatur gegen Reifenabbau, dazu Isolation-Forest-Anomalieerkennung für Rennen, die aus dem Rahmen fallen"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "Ein datengesteuerter Wettportfolio-Optimierer für die europäischen Top-Ligen.",
          techStack: "Python, scikit-learn, pandas, football-data.org API",
          details: "Dieses Projekt generiert nachhaltige wöchentliche Gewinne mithilfe fortschrittlicher ML-Vorhersagen in den fünf großen europäischen Ligen. Es integriert verschiedene statistische Indikatoren und die Teamform, um Ergebniswahrscheinlichkeiten zu berechnen und eine Wettstrategie zu optimieren.",
          highlights: [
            "Stacking-Ensemble-Modell: kombiniert Random Forest, AdaBoost und Gradient Boosting mit einem Logistic-Regression-Metamodell, kalibriert für verlässliche Wahrscheinlichkeiten und mit 81,9% Trainingsgenauigkeit auf den 2025er-Daten.",
            "Feature-Engineering-Pipeline mit 27 Merkmalen: verbindet klassische Metriken wie ELO-Ratings und Form mit neueren Ergänzungen wie Expected Goals (xG), Analyse der Ruhetage, direkten Duellen und exponentiellem Momentum-Verfall.",
            "Gestaffeltes Wett-Portfolio: verteilt den wöchentlichen Einsatz auf vier Risikostufen, von Ultra Safe bis zu Wetten mit hohen Quoten, dimensioniert mit fraktioniertem Kelly-Kriterium und einer eingebauten Sicherheitsmarge auf die Wahrscheinlichkeit."
          ]
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Neuronale Netze gegen die Formel-1-Saison 2024: wer an einem bestimmten Sonntag wo landet, und wie die Tabelle am Ende aussieht.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Auf historischen Leistungsdaten trainiert, rufen die Modelle die Saison 2024 Rennen für Rennen aus: die Zielposition jedes Fahrers an einem bestimmten Sonntag und die Fahrerwertung, die sich daraus ergibt. Mehrere Modellierungsansätze stehen nebeneinander, um zu sehen, welcher ein Rennwochenende am besten liest."
        },
        uni: {
          title: "Universitätsprojekte",
          summary: "**26 akademische Repositories** aus dem Bachelorstudium, mit Arbeiten aus dem Gesundheits- und Biomedizinbereich, Wearable-Sensorik, Zeitreihenprognosen, Bayes-Statistik, Blockchain, Robotik und Reinforcement Learning.",
          techStack: "Python (Jupyter Notebook), R",
          details: "**26 Repositories** aus Kursarbeiten des Studiums, die ein breites Themenspektrum abdecken: Gesundheits- und Biomedizindaten (Drug Design, Bioinformatik, Hirntumor-Klassifikation aus MRT-Bildern, Stresserkennung aus Handgelenksensoren, Qualität von Olivenöl und Lebensmittelverbindungen), Zeitreihenprognosen, Bayes-Statistik und -Optimierung, Blockchain, Robotik und Drohnensteuerung, Reinforcement Learning, Anomalieerkennung mit Autoencodern sowie Sport-/Finanzanalysen (NBA-Wurfdaten, Kreditrisiko). Meist als Jupyter-Notebooks und R-Markdown geschrieben, manche allein, andere zu zweit oder in kleinen Gruppen, je nach Kurs. Alle einsehbar auf GitHub.",
          folders: {
            biomedical: "Gesundheit & Biomedizin",
            robotics: "Robotik & Drohnen",
            forecasting: "Zeitreihen & Prognose",
            bayesian: "Bayes & Statistik",
            security: "Netzwerksicherheit",
            analytics: "Finanzen, Sport & Forschung"
          },
          gallery: {
            stress_signals: "Rohe Handgelenksignale eines Probanden: Blutvolumenpuls, Hautleitfähigkeit, Temperatur und Beschleunigung unter den Protokoll-Labels",
            stress_confusion: "Stress gegen Nicht-Stress: Konfusionsmatrizen von vier Modellen unter Leave-One-Subject-Out-Validierung",
            stress_shap: "SHAP-Übersicht des Stressklassifikators: mittlere Herzfrequenz und Hautleitfähigkeit tragen den Großteil des Signals",
            evoo_fluorescence: "Olivenöl unter Fluoreszenzspektroskopie: Anregungs-Emissions-Karten in drei Alterungsstufen",
            sweet_bitter: "Süße gegen bittere Verbindungen: Validierungsgenauigkeit, während der Selektor weitere Merkmale aufnimmt",
            gp_estimate: "Gauß-Prozess-Surrogat gegen die wahre Funktion über drei Eingangsdimensionen, innerhalb der Bayes-Optimierungsschleife",
            autoencoder_error: "Anomalieerkennung mit Autoencoder: die schlechtesten Rekonstruktionen sind die Fashion-MNIST-Stücke, auf die das Modell nie trainiert wurde",
            tumor_confusion: "Hirntumor-Klassifikator: Konfusionsmatrix auf dem Validierungsset, Tumor gegen Nicht-Tumor",
            tumor_roc: "Klassifikatoren im Vergleich: ROC-Kurven von logistischer Regression, CNN und voll verbundenem CNN",
            fleet_forecast: "24-Stunden-Prognose der Flotte: die Fortsetzung des Modells gegen die Naive-, Mittelwert- und saisonale Naive-Baseline",
            fleet_probabilistic: "Probabilistische Prognose: die vorhergesagte Fortsetzung mit 50-, 80- und 90-Prozent-Prognoseintervallen",
            revenue_forecast: "Sieben Tage Umsatzprognose auf wirklich ungesehenen Tagen, vier Modelle gegen den tatsächlichen Verlauf",
            forecast_comparison: "Prognosefehler im Modellvergleich über MAE, MSE und RMSE",
            holt_winters: "Holt-Winters-Residuendiagnostik: Residuen über die Zeit, ihre Verteilung, die ACF und ein QQ-Plot",
            traffic_confusion: "Netzwerkverkehr: Konfusionsmatrizen von Random Forest und Gradient Boosting, gutartig gegen Angriff",
            traffic_roc: "ROC-Kurven zum Netzwerkverkehr: ein MLP mit 0,991 AUC gegen eine lineare SVM mit 0,826",
            credit_confusion: "Kreditrisiko: Konfusionsmatrix auf dem Testset, zahlungsfähige gegen ausgefallene Kunden",
            credit_roc: "ROC-Kurve zum Kreditrisiko, AUC 0,81",
            machinery_confusion: "Kraftstoffeffizienz von Maschinen: Vier-Klassen-Konfusionsmatrix bei 91,7 % Testgenauigkeit",
            citation_gcn: "Zitationsvorhersage mit einem Graph Neural Network: Trainingskurven, Verteilung der vorhergesagten Wahrscheinlichkeiten und Konfusionsmatrix",
            unet_segmentation: "Tumorsegmentierung: U-Net-Vorhersagen auf dem Validierungsset, mit Aufnahme, echter Maske, Wahrscheinlichkeits-Heatmap und vorhergesagter Maske",
            mri_annotations: "MRT von Hirntumoren: annotierte Aufnahmen nach Tumorkategorie gruppiert, mit markierter Region",
            tumor_classification: "Hirntumor-Klassifikation: Vorhersagen auf 20 zufälligen Test-Aufnahmen, jeweils gegen das echte Label",
            molecules: "Drug Design: Strukturen einiger CYP2C19-Inhibitoren, die Molekule, die der Klassifikator unterscheiden muss",
            drone_pipeline: "Drohnen-Bildverarbeitung: Rohbild, Segmentierungsmaske und Overlay mit erkanntem Schwerpunkt",
            robot_arm: "Robotik: Wiedergabe eines echten Roboterarm-Laufs, 3D-Trajektorie des Endeffektors mit Hohenprofil und Positionsfehler",
            drone_obstacle: "Drohnennavigation: Blick der Bordkamera auf ein Hindernis, die Eingabe fur die Ausweichlogik",
            ml_vs_map: "Schatztheorie: Maximum Likelihood gegen Maximum a posteriori unter einer Gauss-Prior",
            bayesian: "Bayessche Statistik: hierarchische Regression, A-posteriori-Achsenabschnitte je Station mit Partial Pooling, auf Temperaturdaten aus dem Tessin",
            ev_fleet: "Zeitreihenprognose: stündlicher Energieverbrauch und Fahrzeugpräsenz einer Elektroflotte",
            drone_vision: "Drohnen-Bildverarbeitung: Schwerpunkt und Fläche des roten Balls, Bild für Bild aus der Bordkamera erkannt",
            drone_control: "Drohnensteuerung: Time-of-Flight-Distanzprofil über einen Lauf, mit den Schwellen für Ausweichen, Freigabe und Stopp",
            intrusion: "Klassifikation von Netzwerkverkehr: zeilennormierte Konfusionsmatrix des Multiklassen-Random-Forest über neun Klassen",
            drug_design: "Drug Design: bestes kreuzvalidiertes AUROC je Feature-Set (Deskriptoren, Morgan-Fingerprints, kombiniert) und je Modell",
            nba_shots: "Sportanalyse: Dichtekarte der NBA-Würfe, mit jedem Versuch über dem Spielfeld",
            credit_risk: "Fairness im Kreditrisiko: Ergebnis nach Geschlecht, der Bias, den das Projekt messen sollte",
            citations: "Forschungsanalyse: die 15 Merkmale mit der stärksten Korrelation zur Zitationszahl eines Papers",
            revenue: "Business-Zeitreihen: Umsatzverlauf über acht Städte"
          }
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Bachelorarbeit)",
          summary: "Das finale Ergebnis meiner Bachelorarbeit zur Autismus-Screening-Forschung: ein offline-fähiges klinisches Dashboard zur Überprüfung einer ADOS-2-Sitzung eines Kleinkinds auf einer synchronisierten Zeitleiste.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Dieses Dashboard läuft vollständig lokal, ganz ohne ausgehende Netzwerkaufrufe: Es ist die präsentationsseitige Schicht einer deutlich größeren Thesis-Pipeline, ausgelegt für nach DSGVO Art. 9 sensible Gesundheitsdaten von Minderjährigen. Die IMU-Signalverarbeitung, das Feature Engineering, das rein sensorbasierte ADOS-Risikomodell (Autism Diagnostic Observation Schedule; ein für die Data-Science-Analyse der Arbeit trainierter RandomForest, out-of-fold evaluiert) und die statistische Analyse hinter jeder gezeigten Zahl laufen alle vorgelagert auf derselben Maschine. Kliniknotizen werden von einem lokalen, extraktiven Textmodell zusammengefasst, das Sätze wörtlich übernimmt, nie von einem Cloud-LLM, gewählt, nachdem generative Zusammenfassungen nachweislich klinische Aussagen erfunden hatten. Die Bachelorarbeit selbst wurde bereits abgeschlossen und eingereicht; das Dashboard selbst wird noch weiter verfeinert.",
          highlights: [
            "Synchronisierte Patientenansicht: Videowiedergabe bidirektional mit einer interaktiven Label-Zeitleiste und dem rohen IMU-Signalplot verknüpft; Spielzeug und Kamerawinkel werden pro Sitzung unabhängig ausgewählt.",
            "Sensor-Only-Analyse (neu): wendet das rein sensorbasierte ADOS-Risikomodell auf die Bewegungsdaten eines Kindes an, verglichen mit der Kohorte und gleich-risikoreichen Peers, mit drei überlagerten Bewegungszeitleisten, die automatische Erkennung mit dem menschlichen Protokoll vergleichen.",
            "Datenqualitäts-Transparenz (neu): ein gesättigter Sensor, eine unterbrochene Aufnahme oder geringe Sample-Abdeckung zeigen eine explizite Warnung neben der Vorhersage, statt einer still falschen Zahl.",
            "Kliniknotizen mit extraktiver KI-Zusammenfassung (neu): ein Rich-Text-Editor (mehrere Notizen/Kliniker pro Patient, exportierbar nach docx/pdf/txt), der Notizen zusammenfasst, indem er Sätze wörtlich übernimmt, nachdem generative Zusammenfassungen nachweislich klinische Aussagen erfunden hatten.",
            "Toy Analytics: patientenübergreifende Ansicht von Aktionszahlen, Intentionalität (kindinitiiert / zufällig / pädagogengeführt) und Aktionsvielfalt pro Spielzeug.",
            "Kohorten-Datenqualitätsübersicht: zeigt die Vollständigkeit pro Kind direkt an (fehlende Labels, unlesbare Daten, Sensorprobleme), statt sie hinter einem Aggregat zu verstecken."
          ],
          gallery: {
            overview: "Dashboard-Übersicht: Kohorten-KPIs und ADOS-Score-Verteilung",
            label_stats: "Label-Statistiken: Spielzeugnutzungs-Heatmap",
            notes_ai_summary: "Patientensitzungsansicht: Video, Kliniknotizen und lokale extraktive KI-Zusammenfassung",
            sensor_only_risk: "Rein Sensorbasierte Risikovorhersage: verglichen mit Kohorte und gleich-risikoreichen Peers",
            movement_timelines: "Die Bewegungszeitleisten hinter der Vorhersage: erkannte Bewegung, manuelle Annotation und ausgeschlossene Erzieher-Abschnitte, sitzungsweise überlagert",
            patient_vs_cohort: "Patient-vs-Kohorte-Statistiken: Intentionalität, Spielzeugnutzung und Verhaltensmetriken",
            label_timeline_imu: "Synchronisierte Label-Zeitleiste: Notizen mehrerer Kliniker und roher IMU-Signalplot",
            toy_leaderboard: "Spielzeug-Rangliste: die meistgenutzten Spielzeuge im Ranking",
            toy_entropy: "Spielzeug-Entropie: Aktionsvielfalt und Intentionalität pro Spielzeug"
          },
          reference: "Verwandte Forschung: \"AutoPlay: a smart toys-kit for an objective analysis of children ludic behavior and development\" (Faraci et al., IEEE MeMeA 2018), der sensorbasierte, spielgetriebene Ansatz zur frühen Erkennung von Autismus-Spektrum-Störungen, auf dem diese Arbeit aufbaut."
        },
        driving: {
          title: "Enjoy the Night",
          summary: "Eine mobile und Web-App, die deine Drinks verfolgt und die Blutalkoholkonzentration (BAK) in Echtzeit berechnet, damit du an einem Abend sicher unterwegs bist.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) schätzt den BAK-Abbau über die Zeit anhand des Nutzerprofils und der erfassten Drinks, jetzt mit Mythen-Aufklärung, dauerhaften Sicherheitshinweisen und vollständiger Mehrsprachigkeit.",
          highlights: [
            "BAK-Berechnung in Echtzeit: präzise Blutalkoholschätzungen basierend auf Nutzerprofil und erfassten Drinks.",
            "Berechnungs-Einblicke & Mythen-Aufklärung (neu): interaktive Popups, die erklären, wie die Berechnung funktioniert, und gängige Trinkmythen widerlegen.",
            "Gesundheits- und Sicherheitshinweis (neu): ein dauerhafter Hinweis auf Dashboard, Verlauf und Einstellungen, der verantwortungsvolles Trinken fördert.",
            "Mehrsprachigkeit (neu): vollständig lokalisiert in Englisch, Deutsch, Spanisch, Französisch und Italienisch.",
            "Drink-Verlauf & Schnellerfassung: ein detailliertes Protokoll vergangener Drinks plus ein Bottom-Sheet, um neue mit minimalem Aufwand zu erfassen."
          ],
          gallery: {
            onboarding_welcome: "Onboarding: Sicherheitshinweis, Geschlechtsauswahl und begrenzte Stepper-Schieberegler für Gewicht, Größe und Alter",
            dashboard: "Dashboard: animierte BAK-Anzeige, Nüchternheits-Countdown und die heutigen erfassten Drinks",
            add_drink: "Bottom Sheet „Drink hinzufügen“: Kategorie-Chips, Glas-Stepper und Live-Neuberechnung von Menge/Alkoholgehalt",
            over_limit: "Warnung bei Grenzüberschreitung: Anzeige und Trinkwasser-Empfehlung aktualisieren sich sofort nach einem neuen Drink",
            history_24h: "Verlauf: BAK-Trend der letzten 24h mit der gesetzlichen Grenzlinie und einer Prognose bis auf null",
            history_3h: "Verlauf: Schnellauswahl-Chips skalieren das Diagramm auf die letzten 3 Stunden",
            date_range_picker: "Datumsbereich-Picker: individuelle Auswahl, zukünftige Daten sind deaktiviert",
            settings: "Einstellungen: Profil, Design, Modus „Neuer Fahrer“ und Zeitformat"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Eine KI-gestützte App für alle, die allein leben (und kochen), die Diät-Tracking, Einkaufsplanung und Vorratsverwaltung in einer minimalistischen Flutter-Erfahrung vereint.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Entwickelt für alle, die ihre Ernährung allein organisieren, etwa Studierende oder junge Berufstätige, die allein leben, liest PantryPilot Diätpläne im Backend mit Google Gemini 2.5 Flash direkt von einem Foto oder PDF und verwandelt sie in eine bepreiste Einkaufsliste, ein aktuelles Vorratsinventar und Zero-Waste-Rezepte, alles in einem glasmorphen Dual-Tab-Analytics-Dashboard. Bevor ich sie veröffentliche, will ich sie selbst während der zwei Monate testen, in denen ich allein in Berlin lebe, und dabei auch eine Monetarisierungsstrategie ausarbeiten.",
          highlights: [
            "Multimodaler Diät-Scanner: importiert Diäten direkt von Foto oder PDF via Gemini 2.5 Flash, inklusive OCR, Übersetzung und Portionsgrößen.",
            "Intelligente Preisschätzung: berechnet die genauen Kosten jeder Einkaufsliste in mehreren Ländern (IT, DE, CH).",
            "Zero-Waste-Rezeptgenerator (\"Svuota Frigo\"): verwandelt ablaufende Vorräte in Rezepte, die Lebensmittelverschwendung minimieren.",
            "Einheitliches Analytics-Dashboard: Dual-Tab-Ansicht für Makronährstoffe und Ausgaben.",
            "Magic Pantry (neu): zieht Rezeptzutaten automatisch vom Inventar ab und führt doppelte Lebensmittel zusammen, jetzt mit Diät-Wiederverwendung per Kalender und einem intelligenten Allergene-Backend.",
            "Premium minimalistisches UI: glasmorphe Navigation, immersiver Kochmodus, keine Emojis."
          ],
          gallery: {
            home: "Haupt-Dashboard: Diätqualitäts-Score, nächste Mahlzeit, Vorratswarnungen und Tagesplan",
            pantry: "Vorratsinventar: Verfallsdaten pro Artikel, durchsuchbar und nach Lagerort filterbar",
            shopping_list: "Einkaufsliste: geschätzte Preise pro Geschäft, Schnellzugriff auf zuletzt Gekauftes und Kassenbon-Scan",
            recipes: "Rezepte: Favoriten, Zero-Waste-Vorschläge und Makro-/Kostenaufschlüsselung pro Gericht",
            diet_calendar: "Diät & Kalender: täglicher Essensplan mit Kosten und Makros, synchronisiert mit dem Vorrat"
          }
        },
        polify: {
          title: "Polify",
          summary: "Ein politischer Matching-Test, der jede Frage vor der Beantwortung erklärt und deine Übereinstimmung mit italienischen und internationalen Parteien anhand von 68 realen, dokumentierten Themen berechnet.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify führt dich durch 68 dokumentierte politische Themen und vergleicht jede Antwort mit über 239 geprüften Parteipositionen, um deine Übereinstimmung zu berechnen, national und erstmals auch in 10 weiteren Ländern. Entstanden im Vorfeld der italienischen Parlamentswahl 2027, ist der Test transparent über seine eigenen Lücken: kleinere oder neuere Parteien (z. B. ORA!, Potere al Popolo) haben bisher zu weniger als der Hälfte der 68 Themen dokumentierte Positionen, diese Abdeckung wird auf der Seite jeder Partei angezeigt, statt hinter einem Durchschnitt versteckt zu werden.",
          highlights: [
            "Transparente, dokumentierte Berechnungs-Engine: vergleicht Antworten mit über 239 geprüften, fixierten Parteipositionen, gewichtet nach Quellenzuverlässigkeit.",
            "Internationaler Abgleich (neu): entdecke deine nächstliegenden Ideologien und passende Parteien in 10 verschiedenen Ländern.",
            "Analyse nach Themenbereich: getrennte Ranglisten für 9 Themenbereiche (Wirtschaft, Rechte usw.), denn niemand stimmt bei allem mit nur einer Partei überein.",
            "Getrennte Redaktionsarchitektur: ein lokaler Text-Editor (auf eigenem Port) lässt Redakteure Fragen in Echtzeit erstellen und bewerten, ganz ohne Code.",
            "Datenschutzfreundliche Ergebnisse & Teilen: verschlüsselter Vergleich per URL (\"Challenge\"); der Server speichert nichts, alle Berechnungen laufen im Browser, DSGVO-konform.",
            "Premium-Ästhetik & UX: modernes Schwarz-Weiß-Interface mit nativem Dark Mode, flüssige Mikroanimationen, einspaltiges Layout und integriertes Glossar für komplexe Begriffe."
          ],
          gallery: {
            home: "Startseite: animiert im Dark Mode, mit eigens erstellten Tuschezeichnungen-Portraits.",
            sondaggio: "Umfrageablauf: transparente Erklärung und Popup-Glossar vor jeder Antwort.",
            risultato: "Ergebnisseite: dein ideologischer Kompass und die nächstgelegenen Parteien, innerhalb der Fehlermarge.",
            mappa: "2D-Politikkarte: wo dich deine Antworten im Vergleich zu jeder Partei auf zwei Achsen platzieren.",
            area_per_area: "Rangliste nach Themenbereich: Wirtschaft, Bürgerrechte, Einwanderung, Justiz, Umwelt und mehr.",
            classifica: "Vollständige Rangliste: alle Parteien, aufklappbar nach Zustimmung und Abweichung je Thema.",
            condividi: "Private Weitergabe: per Link, plus eine In-App-Umfrage, ob sich das Ergebnis stimmig anfühlt.",
            partiti: "Parteienseite: bei wie vielen der 68 Themen jede Partei aktuell eine dokumentierte, belegte Position hat."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Ein hochgradig anpassbarer Pomodoro-Timer und ein Lern-Analytics-Dashboard, verfügbar als Web-App und als Electron-Desktop-App.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Geht über einfaches Herunterzählen hinaus: ein Mini-Timer-Widget, ein Notion-artiges Aufgabenboard und ein vollständiges Analytics-Dashboard machen aus dem klassischen Pomodoro-Ablauf einen leichten Lernbegleiter, im Web oder als Desktop-App.",
          highlights: [
            "Mini-Timer-Widget (neu): ein schwebendes, immer im Vordergrund bleibendes Fenster (Desktop) oder Popup (Web), das dich auch in anderen Apps über die Zeit informiert.",
            "Notion-artiges Aufgabenboard (neu): lege ein Hauptthema fest, gliedere Themen und verwalte Aufgaben in einer interaktiven, per Tastatur navigierbaren Tabelle, automatisch gespeichert.",
            "Info- & Einstellungspanel (neu): passe Zeiten an, personalisiere das Farbthema vollständig und schalte dekorative Hintergrundblasen ein.",
            "Analytics-Dashboard: verfolge täglichen, wöchentlichen, monatlichen und Gesamtfortschritt mit interaktiven Chart.js-Diagrammen.",
            "Haupttimer: der klassische Ablauf Arbeit → kurze Pause → lange Pause mit einer responsiven kreisförmigen Fortschrittsanzeige."
          ],
          gallery: {
            main_dashboard: "Vollständige App-Ansicht: kreisförmiger Timer mit Pausenvorschau, das Aktivitätsdiagramm des Stats-Panels und das Notion-artige Aufgabenboard für den aktuellen Fokus"
          }
        },
        priceTracker: {
          title: "Price Tracker",
          summary: "Ein automatisierter Web-Scraper, der Preise verfolgt und Telegram-Benachrichtigungen sendet.",
          techStack: "Python, BeautifulSoup, Telegram Bot API",
          details: "Ein Skript, das regelmäßig E-Commerce-Websites nach dem Preis von Nothing Ear (1) Kopfhörern durchsucht. Wenn der Preis unter einen definierten Schwellenwert fällt, benachrichtigt es den Benutzer sofort über einen benutzerdefinierten Telegram-Bot."
        },
        brickbreakers: {
          title: "Brickbreakers F1",
          summary: "Ein Brickbreaker-Arcade-Spiel im Formel-1-Stil.",
          techStack: "JavaScript, HTML5 Canvas",
          details: "Ein fesselndes, von Grund auf neu erstelltes webbasiertes Arcade-Spiel. Es verfügt über Level im F1-Stil, individuelle Ballphysik, Kollisionserkennung und anspruchsvolle Mechaniken, deren Schwierigkeitsgrad mit zunehmendem Fortschritt des Spielers steigt."
        }
      },
      ui: {
        visit_project: "Projekt besuchen",
        visit_projects: "Projekte besuchen",
        coming_soon: "Demnächst verfügbar",
        lightbox_zoom_in: "Bild anklicken zum Vergrößern",
        lightbox_zoom_reset: "Bild anklicken, um Zoom zurückzusetzen",
        details: "Details",
        tech_stack: "Tech-Stack",
        overview: "Überblick",
        highlights: "Highlights",
        gallery: "Galerie",
        other_projects: "Weitere Projekte",
        projects_label: "Projekte",
        projects_count_one: "{{count}} Projekt",
        projects_count_other: "{{count}} Projekte",
        browse_by_category: "Nach Kategorie stöbern",
        contact_links: "Kontakt-Links",
        skip_to_content: "Zum Inhalt springen",
        back_to_top: "Nach oben",
        menu: "Menü",
        close: "Schließen",
        previous_image: "Vorheriges Bild",
        next_image: "Nächstes Bild",
        lang_en: "Switch to English",
        lang_it: "Passa all'italiano",
        lang_de: "Zu Deutsch wechseln"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
