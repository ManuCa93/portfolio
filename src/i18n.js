import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        subtitle: "Software Developer | Data & AI Enthusiast"
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
          summary: "Machine learning models featuring race pace estimation and qualifying simulation.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "A machine learning suite acting as a \"Virtual Pit Wall\": it predicts live lap times, grid positions, race pace and tyre strategy for MotoGP, built on a SQLite pipeline ingesting real PDF timing sheets (2024-2026 seasons, 34 riders, 23 circuits, ~73k laps).",
          highlights: [
            "Live Lap Time & Position Predictor — estimates a rider's final lap time and live leaderboard position at each sector, using an ensemble of 5 regressors (XGBoost, SVR, Neural Network, Ridge, AdaBoost).",
            "Race Pace & Tyre Strategy Engine — predicts average race pace, tyre degradation and likely compound choice from Free Practice telemetry and weather conditions.",
            "Race Weekend Analysis (new) — per-session report card, an \"ideal lap\" execution score, and lap-by-lap position/pace charts.",
            "Analytics Dashboard — algorithmic rider ratings, momentum indicator, circuit breakdown, head-to-head comparison, team performance trends.",
            "Advanced EDA — 3D environmental mapping, Random Forest feature importance, K-Means/PCA circuit clustering."
          ],
          gallery: {
            time_attack: "Time Attack mode — live session replay and leaderboard (Misano)",
            race_pace: "Pre-Race AI Pace Predictor — clean/dirty-air pace, tyre drop and projected gaps (Mugello)",
            live_prediction: "Live Race Simulation — in-race ML position predictor, synced to the replay scrubber",
            weekend_overview: "Race Weekend Analysis — weekend overview and report card (Misano)",
            weekend_charts: "Lap-by-Lap Race Analysis — position and pace, lap by lap",
            rider_grades: "Rider Grades — algorithmic qualifying/sprint/race scores across every 2026 round",
            rider_profile: "Rider profile — grade history across the season",
            race_vs_quali: "Race vs Qualifying — Sunday riders who gain positions vs qualifying specialists who lose them",
            consistency: "Finishing position, DNF rate and lap-to-lap consistency",
            team_performance: "Best Rider Independent of Bike, plus constructor and team performance"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "A data-driven betting portfolio optimizer for top European football leagues.",
          techStack: "Python, XGBoost, API integration",
          details: "This project generates sustainable weekly profits using advanced ML predictions across the top 5 European leagues. It incorporates various statistical indicators and team form to compute outcome probabilities and optimize a betting strategy."
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Evaluation of machine learning predictions on the 2024 Formula 1 season.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Analyzes historical performance data to forecast race outcomes for the 2024 season. It compares different modeling approaches to predict driver standings and race-by-race finishing positions."
        },
        uni: {
          title: "University Projects",
          summary: "26 academic repositories from my Bachelor's — healthcare and biomedical work (drug design, bioinformatics, brain tumor classification, olive oil quality), time series forecasting, Bayesian statistics, blockchain, robotics/drone control, reinforcement learning and more.",
          techStack: "Python (Jupyter Notebook), R",
          details: "26 repositories from coursework across the degree, covering a wide range of topics: healthcare and biomedical data (drug design, bioinformatics, brain tumor classification from MRI, olive oil and food-compound quality), time series forecasting, Bayesian statistics and optimization, blockchain, robotics and drone control, reinforcement learning, anomaly detection with autoencoders, and sports/finance analytics (NBA shot data, credit risk). Written mostly as Jupyter notebooks and R Markdown, some solved individually and others in pairs or small groups depending on the course. Browse them all on GitHub."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Thesis)",
          summary: "The final deliverable of my Bachelor's thesis on autism-screening research: an offline clinical dashboard letting psychologists review a toddler's ADOS-2 session — video, IMU toy sensors and behavioral annotations — on one synchronized timeline.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "This dashboard runs entirely locally, with no outbound network calls: it's the presentation-facing layer of a much larger thesis pipeline built for GDPR Art. 9-sensitive health data of minors. The IMU signal processing, feature engineering, the sensor-only ADOS risk model (a RandomForest trained for the thesis's data-science analysis, evaluated out-of-fold) and the statistical analysis behind every number shown here all run upstream on the same machine. Clinician notes are summarized by a local, extractive text model that lifts sentences verbatim, never a cloud LLM — chosen after generative summaries were found to fabricate clinical claims.",
          highlights: [
            "Synchronized Patient Detail — video playback linked bidirectionally to an interactive label timeline and the raw IMU signal plot; toy and camera angle are selected independently per session.",
            "Sensor-Only Analysis (new) — runs the sensor-only ADOS risk model on a child's motion data alone, benchmarked against the cohort and same-risk peers, with three overlaid movement timelines comparing automated detection to the human record.",
            "Data-quality transparency (new) — a saturated sensor, broken recording or low sample coverage surfaces an explicit warning next to the prediction, instead of a silently wrong number.",
            "Clinician Notes with extractive AI summary (new) — a rich-text editor (multiple notes/clinicians per patient, exportable to docx/pdf/txt) that summarizes notes by lifting sentences verbatim, after generative summaries were found to fabricate clinical claims.",
            "Toy Analytics — cross-patient view of action counts, intentionality (child-initiated / accidental / educator-led) and action diversity per toy.",
            "Cohort data-quality overview — surfaces per-child completeness directly (missing labels, unreadable data, sensor issues) rather than hiding it behind an aggregate."
          ],
          gallery: {
            overview: "Dashboard overview — cohort KPIs and ADOS score distribution",
            label_stats: "Label statistics and toy-usage heatmap",
            notes_ai_summary: "Patient session view with video, clinician notes and the local extractive AI summary",
            sensor_only_risk: "Sensor-only ADOS risk prediction, benchmarked against the cohort and same-risk peers",
            patient_vs_cohort: "Patient vs cohort statistics — intentionality, toy usage and behavioral metrics",
            label_timeline_imu: "Synchronized label timeline, multi-clinician notes and raw IMU signal plot",
            toy_leaderboard: "Most-used toys leaderboard",
            toy_entropy: "Action diversity and intentionality per toy"
          }
        },
        driving: {
          title: "Enjoy the Night",
          summary: "A mobile and web app that tracks your drinks and calculates Blood Alcohol Content in real time, to help you stay safe on a night out.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) estimates BAC decay over time from a user's profile and logged drinks, now with myth-busting explanations, persistent safety disclaimers and full multilingual support.",
          highlights: [
            "Real-time BAC Calculation — accurate blood alcohol estimates based on user profile and logged drinks.",
            "Calculation Insights & Myth-Busting (new) — interactive popups explaining how the calculation works and debunking common drinking myths.",
            "Health & Safety Disclaimer (new) — a persistent disclaimer across Dashboard, History and Settings promoting responsible drinking.",
            "Multilingual Support (new) — fully localized in English, German, Spanish, French and Italian.",
            "Drink History & Quick Add — a detailed log of past drinks plus a bottom-sheet shortcut to log a new one with minimal friction."
          ],
          gallery: {
            onboarding_welcome: "Onboarding — safety disclaimer, gender selector, and bounded stepper sliders for weight, height and age",
            dashboard: "Dashboard — animated BAC gauge, sobriety countdown and today's logged drinks",
            add_drink: "Add Drink bottom sheet — category chips, glass stepper and live volume/ABV recompute",
            over_limit: "Over-the-limit warning — the gauge and hydration advice update live after a new drink",
            history_24h: "History — 24h BAC trend with the legal limit line and a projection back to zero",
            history_3h: "History — quick-range chips rescale the chart to the last 3 hours",
            date_range_picker: "Custom date range picker, with future dates disabled",
            settings: "Settings — profile, theme, \"New Driver\" mode and time-format preferences"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "An ultra-premium, AI-driven app for students and people living (and cooking) alone who need to keep diet, groceries and pantry under control without the mental overhead — merging diet tracking, grocery planning and pantry inventory into one breathtakingly minimalist Flutter experience.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Built for anyone organizing their own food solo — students, young professionals living alone — PantryPilot uses Google Gemini 2.5 Flash in the backend to read diets straight from a photo or PDF, then turns that plan into a priced grocery list, a live pantry inventory and zero-waste recipes — all inside one glassmorphic, dual-tab analytics dashboard.",
          highlights: [
            "Multimodal Diet Scanner — imports diets straight from a photo or PDF via Gemini 2.5 Flash, handling OCR, translation and portion sizing.",
            "Smart Price Estimation — estimates the precise cost of any grocery list across multiple countries (IT, DE, CH).",
            "Zero-Waste Recipe Generator (\"Svuota Frigo\") — turns expiring pantry items into recipes that minimize food waste.",
            "Unified Analytics Dashboard — a dual-tab view tracking both macronutrients and grocery spending.",
            "Magic Pantry (new) — automatically deducts recipe ingredients from inventory and merges duplicate foods, now with diet reuse via a calendar and a smart allergens backend.",
            "Premium minimalist UI — glassmorphic navigation, immersive cooking mode, zero emojis."
          ],
          gallery: {
            home: "Home dashboard — diet quality score, next meal, pantry alerts and today's plan",
            pantry: "Pantry inventory — expiry tracking by item, searchable and filterable by location",
            shopping_list: "Shopping list — estimated prices per store, recently-bought shortcuts and receipt scanning",
            recipes: "Recipes — favorites, zero-waste suggestions and macro/cost breakdown per dish",
            diet_calendar: "Diet & Calendar — daily meal plan with cost and macros, synced with the pantry"
          }
        },
        polify: {
          title: "Polify",
          summary: "A political matching test that explains every question before you answer, scoring your affinity with Italian and international parties across 68 real, documented issues — built ahead of Italy's 2027 elections, while several parties still haven't taken a public position on every topic.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify walks you through 68 documented political issues, weighting each answer against 239+ verified party positions to compute your affinity — nationally and, for the first time, across 10 other countries. Built in the run-up to the 2027 Italian general election, it's transparent about its own gaps: newer or smaller parties (e.g. ORA!, Potere al Popolo) still have positions documented on fewer than half of the 68 issues, and that coverage is shown on every party's page instead of being hidden behind an average.",
          highlights: [
            "Transparent, documented scoring engine — matches answers against 239+ verified, locked party positions, weighted by source reliability (e.g. parliamentary vote vs. statement).",
            "International Match (new) — discover your closest ideologies and matching parties across 10 different countries.",
            "Area-by-area analysis — separate rankings across 9 topic areas (economy, rights, etc.), because no one agrees with a single party on everything.",
            "Separated-newsroom architecture — a local text editor (on a dedicated port) lets editors write and score questions in real time, watching the impact on the model, with no code.",
            "Privacy-first results & sharing — encrypted comparison via URL (\"Challenge\"); the server stores nothing, every calculation happens in the browser, GDPR-friendly.",
            "Premium aesthetics & UX — modern black-and-white interface with native dark mode, smooth micro-animations, single-column layout, and a built-in glossary for complex terms."
          ],
          gallery: {
            home: "Animated dark-mode home page, with custom-made ink portraits.",
            sondaggio: "Transparent explanation and pop-up glossary before answering.",
            risultato: "Result page — your ideological compass and the closest parties, within the margin of error.",
            mappa: "2D political map — where your answers place you against every party on two axes.",
            area_per_area: "Area-by-area ranking — economy, civil rights, immigration, justice, environment and more.",
            classifica: "Full ranked list of every party, expandable into topic-by-topic agreement and disagreement.",
            condividi: "Private, link-based sharing, plus an in-app survey checking whether the result actually felt accurate.",
            partiti: "Parties page — how many of the 68 issues each party currently has a documented, sourced position on."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "A highly customizable Pomodoro timer and study analytics dashboard, available as a web app and an Electron desktop app.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Goes beyond simple countdowns: a mini-timer widget, a Notion-style task board and a full analytics dashboard turn the classic Pomodoro flow into a lightweight study companion, on the web or as a desktop app.",
          highlights: [
            "Mini-Timer Widget (new) — a floating, always-on-top window (desktop) or popup (web) that keeps you aware of time while working in other apps.",
            "Notion-Style Task Board (new) — set a macro-subject, outline topics and manage tasks in an interactive, keyboard-navigable table, saved automatically.",
            "Info & Settings Panel (new) — adjust durations, fully customize the color theme, and toggle aesthetic background bubbles.",
            "Analytics Dashboard — track daily, weekly, monthly and lifetime progress with interactive Chart.js charts.",
            "Core Timer — classic work → short break → long break flow with a responsive circular progress indicator."
          ],
          gallery: {
            main_dashboard: "Full app view — circular timer with break preview, the Stats panel's activity chart, and the Notion-style task board for the current focus"
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
        coming_soon: "Coming soon",
        lightbox_zoom_in: "Click image to zoom in",
        lightbox_zoom_reset: "Click image to reset zoom"
      }
    }
  },
  it: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        subtitle: "Sviluppatore Software | Appassionato di Dati e IA"
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
          summary: "Modelli di machine learning per la stima del passo gara e simulazione delle qualifiche.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "Una suite di machine learning che funge da \"box radio virtuale\": prevede tempi sul giro, posizioni in griglia, passo gara e strategia gomme in MotoGP, basata su una pipeline SQLite che elabora fogli tempi PDF reali (stagioni 2024-2026, 34 piloti, 23 circuiti, ~73mila giri).",
          highlights: [
            "Predittore di tempo sul giro e posizione live — stima il tempo finale e la posizione in classifica a ogni settore, tramite un ensemble di 5 regressori (XGBoost, SVR, rete neurale, Ridge, AdaBoost).",
            "Motore di passo gara e strategia gomme — prevede il passo gara medio, il degrado gomme e la mescola più probabile a partire dalla telemetria delle prove libere e dal meteo.",
            "Analisi del weekend di gara (novità) — pagella per sessione, punteggio di \"giro ideale\" e grafici giro per giro di posizione e passo.",
            "Dashboard analitica — pagelle algoritmiche dei piloti, indicatore di momentum, analisi circuiti, confronto testa a testa, trend di squadra.",
            "EDA avanzata — mappatura ambientale 3D, importanza delle feature, clustering dei circuiti con K-Means/PCA."
          ],
          gallery: {
            time_attack: "Modalità Time Attack — replay della sessione live e classifica (Misano)",
            race_pace: "Predittore AI del passo gara pre-gara — passo in aria pulita/sporca, calo gomme e distacchi previsti (Mugello)",
            live_prediction: "Simulazione di gara live — predittore ML delle posizioni in tempo reale, sincronizzato con la barra di avanzamento",
            weekend_overview: "Analisi weekend di gara — panoramica e pagella (Misano)",
            weekend_charts: "Analisi giro per giro — posizione e passo, giro dopo giro",
            rider_grades: "Pagelle piloti — punteggi algoritmici di qualifica/sprint/gara per ogni round 2026",
            rider_profile: "Profilo pilota — storico delle pagelle lungo la stagione",
            race_vs_quali: "Gara vs Qualifiche — piloti che guadagnano posizioni in gara contro specialisti delle qualifiche che le perdono",
            consistency: "Posizione di arrivo, tasso di ritiro e costanza giro su giro",
            team_performance: "Miglior pilota a prescindere dalla moto, più prestazioni di costruttori e team"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "Un ottimizzatore di portafoglio scommesse basato sui dati per i principali campionati europei.",
          techStack: "Python, XGBoost, Integrazione API",
          details: "Questo progetto genera profitti settimanali sostenibili utilizzando previsioni ML avanzate sui 5 principali campionati europei. Incorpora vari indicatori statistici e lo stato di forma delle squadre per calcolare le probabilità di risultato e ottimizzare la strategia di scommessa."
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Valutazione delle previsioni di machine learning sulla stagione 2024 di Formula 1.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Analizza i dati storici delle prestazioni per prevedere i risultati delle gare della stagione 2024. Confronta diversi approcci di modellazione per prevedere le classifiche dei piloti e le posizioni di arrivo gara per gara."
        },
        uni: {
          title: "Progetti Universitari",
          summary: "26 repository accademici della triennale — lavori di ambito sanitario e biomedico (drug design, bioinformatica, classificazione di tumori cerebrali, qualità dell'olio d'oliva), previsione di serie storiche, statistica bayesiana, blockchain, controllo di droni/robot, reinforcement learning e altro.",
          techStack: "Python (Jupyter Notebook), R",
          details: "26 repository nati dagli esami del corso di laurea, che coprono un ampio ventaglio di temi: dati sanitari e biomedici (drug design, bioinformatica, classificazione di tumori cerebrali da risonanza, qualità dell'olio d'oliva e dei composti alimentari), previsione di serie storiche, statistica bayesiana e ottimizzazione, blockchain, robotica e controllo di droni, reinforcement learning, anomaly detection con autoencoder, e analisi sportive/finanziarie (dati sui tiri NBA, rischio di credito). Scritti perlopiù in notebook Jupyter e R Markdown, alcuni svolti da solo e altri in coppia o piccoli gruppi a seconda del corso. Si possono sfogliare tutti su GitHub."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Tesi)",
          summary: "L'output finale della mia tesi di Bachelor sulla ricerca nello screening dell'autismo: una dashboard clinica offline che permette a psicologi di rivedere una sessione ADOS-2 di un bambino — video, sensori IMU sui giochi e annotazioni comportamentali — su un'unica timeline sincronizzata.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Questa dashboard gira interamente in locale, senza alcuna chiamata di rete in uscita: è lo strato presentativo di una pipeline di tesi molto più ampia, pensata per dati sanitari di minori sensibili ai sensi del GDPR Art. 9. L'elaborazione del segnale IMU, il feature engineering, il modello di rischio ADOS basato solo sui sensori (una RandomForest addestrata per l'analisi di data science della tesi, valutata out-of-fold) e l'analisi statistica dietro ogni numero mostrato girano tutti a monte, sulla stessa macchina. Le note dei clinici vengono riassunte da un modello di testo locale ed estrattivo, che riprende le frasi testualmente, mai da un LLM in cloud — scelto dopo che i riassunti generativi si erano dimostrati capaci di inventare affermazioni cliniche.",
          highlights: [
            "Patient Detail sincronizzato — riproduzione video collegata bidirezionalmente a una timeline interattiva delle etichette e al grafico del segnale IMU grezzo; giocattolo e angolo camera si selezionano indipendentemente per sessione.",
            "Sensor-Only Analysis (novità) — applica il modello di rischio ADOS basato solo sui sensori ai dati di movimento del bambino, confrontandolo con la coorte e con i pari a rischio simile, con tre timeline di movimento sovrapposte che confrontano il rilevamento automatico con il dato umano.",
            "Trasparenza sulla qualità dei dati (novità) — un sensore saturo, una registrazione interrotta o una bassa copertura dei campioni mostrano un avviso esplicito accanto alla previsione, invece di un numero silenziosamente sbagliato.",
            "Note del Clinico con riassunto AI estrattivo (novità) — un editor di rich-text (più note e più clinici per paziente, esportabile in docx/pdf/txt) che riassume le note estraendo frasi testuali, dopo che i riassunti generativi si erano dimostrati capaci di inventare affermazioni cliniche.",
            "Toy Analytics — vista cross-paziente di conteggio azioni, intenzionalità (avviata dal bambino / accidentale / guidata dall'educatore) e diversità delle azioni per giocattolo.",
            "Panoramica sulla qualità dei dati della coorte — mostra direttamente la completezza per ogni bambino (etichette mancanti, dati illeggibili, problemi ai sensori) invece di nasconderla dietro un aggregato."
          ],
          gallery: {
            overview: "Panoramica dashboard — KPI di coorte e distribuzione dei punteggi ADOS",
            label_stats: "Statistiche sulle etichette e heatmap di utilizzo dei giocattoli",
            notes_ai_summary: "Vista sessione paziente con video, note del clinico e riassunto AI estrattivo locale",
            sensor_only_risk: "Previsione di rischio ADOS solo da sensori, confrontata con la coorte e i pari a rischio simile",
            patient_vs_cohort: "Statistiche paziente vs coorte — intenzionalità, utilizzo dei giocattoli e metriche comportamentali",
            label_timeline_imu: "Timeline delle etichette sincronizzata, note di più clinici e grafico del segnale IMU grezzo",
            toy_leaderboard: "Classifica dei giocattoli più utilizzati",
            toy_entropy: "Diversità delle azioni e intenzionalità per giocattolo"
          }
        },
        driving: {
          title: "Enjoy the Night",
          summary: "Un'app mobile e web che traccia i drink consumati e calcola il tasso alcolemico (BAC) in tempo reale, per aiutarti a restare al sicuro durante una serata.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) stima il decadimento del BAC nel tempo a partire dal profilo utente e dai drink registrati, ora con spiegazioni anti-mito, disclaimer di sicurezza persistenti e supporto multilingua completo.",
          highlights: [
            "Calcolo BAC in tempo reale — stime accurate del tasso alcolemico basate sul profilo utente e sui drink registrati.",
            "Approfondimenti sul calcolo e Anti-Mito (novità) — popup interattivi che spiegano come funziona il calcolo e sfatano i miti comuni sull'alcol.",
            "Disclaimer di Salute e Sicurezza (novità) — un avviso persistente su Dashboard, Cronologia e Impostazioni che promuove un consumo responsabile.",
            "Supporto Multilingua (novità) — localizzazione completa in inglese, tedesco, spagnolo, francese e italiano.",
            "Cronologia Drink e Aggiunta Rapida — un registro dettagliato dei drink passati più una bottom sheet per registrarne uno nuovo con il minimo sforzo."
          ],
          gallery: {
            onboarding_welcome: "Onboarding — disclaimer di sicurezza, selettore di genere e slider a stepper (con limiti) per peso, altezza ed età",
            dashboard: "Dashboard — indicatore BAC animato, countdown alla sobrietà e drink registrati oggi",
            add_drink: "Bottom sheet Aggiungi Drink — categorie a chip, stepper dei bicchieri e ricalcolo live di volume/gradazione",
            over_limit: "Avviso di superamento limite — indicatore e consiglio sull'idratazione si aggiornano subito dopo un nuovo drink",
            history_24h: "Cronologia — andamento del BAC nelle ultime 24h con la linea del limite legale e la proiezione fino ad azzerarsi",
            history_3h: "Cronologia — i chip di intervallo rapido riscalano il grafico alle ultime 3 ore",
            date_range_picker: "Selettore di intervallo di date personalizzato, con le date future disabilitate",
            settings: "Impostazioni — profilo, tema, modalità \"Neopatentato\" e formato ora"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Un'app ultra-premium basata su AI pensata per studenti e per chi vive (e cucina) da solo e deve tenere sotto controllo dieta, spesa e dispensa senza il carico mentale che comporta — unendo tracciamento della dieta, pianificazione della spesa e inventario della dispensa in un'esperienza Flutter minimalista e curatissima.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Pensata per chi organizza da solo i propri pasti — studenti fuori sede, giovani che vivono da soli — PantryPilot usa Google Gemini 2.5 Flash nel backend per leggere le diete direttamente da una foto o un PDF, trasformando il piano in una lista della spesa con prezzi stimati, un inventario della dispensa sempre aggiornato e ricette a spreco zero — il tutto in una dashboard analitica glassmorphic a doppia scheda.",
          highlights: [
            "Scanner Dieta Multimodale — importa diete direttamente da foto o PDF tramite Gemini 2.5 Flash, gestendo OCR, traduzione e porzioni.",
            "Stima Intelligente dei Prezzi — calcola il costo preciso di qualsiasi lista della spesa in più paesi (IT, DE, CH).",
            "Generatore di Ricette a Spreco Zero (\"Svuota Frigo\") — trasforma gli alimenti in scadenza in ricette che riducono lo spreco.",
            "Dashboard Analitica Unificata — vista a doppia scheda che traccia sia i macronutrienti sia la spesa.",
            "Magic Pantry (novità) — scala automaticamente gli ingredienti delle ricette dall'inventario e unisce alimenti duplicati, ora con riutilizzo delle diete via calendario e un backend intelligente per gli allergeni.",
            "UI Premium Minimalista — navigazione glassmorphic, modalità cucina immersiva, zero emoji."
          ],
          gallery: {
            home: "Dashboard principale — punteggio di qualità della dieta, prossimo pasto, avvisi dispensa e piano di oggi",
            pantry: "Inventario dispensa — scadenze per articolo, ricercabile e filtrabile per posizione",
            shopping_list: "Lista della spesa — prezzi stimati per negozio, scorciatoie per gli acquisti recenti e scansione scontrino",
            recipes: "Ricette — preferiti, suggerimenti a spreco zero e dettaglio macro/costo per piatto",
            diet_calendar: "Dieta e Calendario — piano pasti giornaliero con costo e macro, sincronizzato con la dispensa"
          }
        },
        polify: {
          title: "Polify",
          summary: "Un test politico che ti spiega ogni domanda prima di porla, calcolando quanto sei vicino a ciascun partito italiano e internazionale su 68 temi reali e documentati — pensato per il periodo a ridosso delle elezioni italiane del 2027, quando molti partiti non hanno ancora preso posizione pubblica su tutti i temi.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify ti guida attraverso 68 temi politici documentati, confrontando ogni risposta con oltre 239 posizioni di partito verificate per calcolare la tua affinità — a livello nazionale e, per la prima volta, anche in altre 10 nazioni. Costruito in vista delle elezioni politiche italiane del 2027, il test è trasparente sui propri limiti: i partiti più piccoli o di nuova formazione (es. ORA!, Potere al Popolo) hanno ancora posizioni documentate su meno della metà dei 68 temi, e questa copertura è mostrata nella pagina di ogni partito invece di essere nascosta dietro una media.",
          highlights: [
            "Motore di calcolo trasparente e documentato — confronta le risposte con oltre 239 posizioni di partito verificate e bloccate, pesate in base all'affidabilità della fonte (es. voto parlamentare vs. dichiarazione).",
            "Match Internazionale (novità) — scopri le tue ideologie affini e i partiti corrispondenti in 10 nazioni diverse.",
            "Analisi area per area — classifiche separate su 9 temi (economia, diritti, ecc.), perché nessuno è d'accordo su tutto con un solo partito.",
            "Architettura a redazione separata — editor testuale locale per creare e valutare le domande in tempo reale, senza toccare codice.",
            "Risultati e condivisione privacy-first — confronto crittografato via URL (\"Sfida\"); tutti i calcoli restano nel browser, nessun dato salvato sul server.",
            "Estetica e UX Premium — interfaccia bianco e nero con dark mode nativa, micro-animazioni fluide, layout a colonna singola e glossario integrato per i termini complessi."
          ],
          gallery: {
            home: "La home page animata in tema scuro, con ritratti a inchiostro creati appositamente.",
            sondaggio: "Spiegazione trasparente e glossario a comparsa prima di rispondere.",
            risultato: "Pagina dei risultati — la tua bussola ideologica e i partiti più vicini, dentro il margine di errore.",
            mappa: "Mappa politica 2D — dove ti collocano le tue risposte rispetto a ogni partito su due assi.",
            area_per_area: "Classifica area per area — economia, diritti civili, immigrazione, giustizia, ambiente e altro.",
            classifica: "Classifica completa di tutti i partiti, espandibile tema per tema in punti di accordo e divergenza.",
            condividi: "Condivisione privata tramite link, più un sondaggio in-app per verificare se il risultato è sembrato azzeccato.",
            partiti: "Pagina dei partiti — su quanti dei 68 temi ogni partito ha oggi una posizione documentata e con fonte."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Un timer Pomodoro altamente personalizzabile e una dashboard di analisi dello studio, disponibile come web app e come app desktop Electron.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Va oltre il semplice conto alla rovescia: un widget mini-timer, una bacheca delle attività in stile Notion e una dashboard analitica completa trasformano il classico flusso Pomodoro in un compagno di studio leggero, sul web o come app desktop.",
          highlights: [
            "Widget Mini-Timer (novità) — una finestra flottante sempre in primo piano (desktop) o un popup (web) per restare consapevoli del tempo anche lavorando in altre app.",
            "Bacheca Attività stile Notion (novità) — imposta una macro-materia, delinea gli argomenti e gestisci le attività in una tabella interattiva navigabile da tastiera, salvata automaticamente.",
            "Pannello Info & Impostazioni (novità) — regola le durate, personalizza completamente il tema colore e attiva le bolle di sfondo decorative.",
            "Dashboard Analitica — tieni traccia dei progressi giornalieri, settimanali, mensili e complessivi con grafici interattivi Chart.js.",
            "Timer Principale — il classico flusso lavoro → pausa breve → pausa lunga con un indicatore di progresso circolare responsive."
          ],
          gallery: {
            main_dashboard: "Vista completa dell'app — timer circolare con anteprima della pausa, il grafico di attività del pannello Stats e la bacheca delle attività in stile Notion per il focus corrente"
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
        coming_soon: "Presto online",
        lightbox_zoom_in: "Clicca sull'immagine per ingrandire",
        lightbox_zoom_reset: "Clicca sull'immagine per azzerare lo zoom"
      }
    }
  },
  de: {
    translation: {
      profile: {
        title: "Manuel Cattoni",
        location: "Varese / Lugano",
        subtitle: "Softwareentwickler | Daten- & KI-Enthusiast"
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
          summary: "Machine-Learning-Modelle für Rennpace-Schätzung und Qualifying-Simulation.",
          techStack: "Python, Flask, scikit-learn, XGBoost, Pandas, SQLite | Render",
          details: "Eine Machine-Learning-Suite als \"virtuelle Boxenwand\": sie sagt Rundenzeiten, Startpositionen, Rennpace und Reifenstrategie für MotoGP voraus, basierend auf einer SQLite-Pipeline, die echte PDF-Zeitmessblätter verarbeitet (Saisons 2024-2026, 34 Fahrer, 23 Strecken, ~73.000 Runden).",
          highlights: [
            "Live-Rundenzeit- & Positionsvorhersage — schätzt die finale Rundenzeit und die Live-Position an jedem Sektor mittels eines Ensembles aus 5 Regressoren (XGBoost, SVR, neuronales Netz, Ridge, AdaBoost).",
            "Rennpace- & Reifenstrategie-Engine — sagt die durchschnittliche Rennpace, den Reifenabbau und die wahrscheinliche Mischungswahl anhand von Freien-Training-Telemetrie und Wetter voraus.",
            "Rennwochenend-Analyse (neu) — Bewertung pro Session, ein \"Ideal-Lap\"-Score sowie Runde-für-Runde-Diagramme zu Position und Pace.",
            "Analytics-Dashboard — algorithmische Fahrerbewertungen, Momentum-Indikator, Streckenanalyse, direkter Vergleich, Team-Performance-Trends.",
            "Erweiterte EDA — 3D-Umweltmapping, Feature-Importance, K-Means/PCA-Streckenclustering."
          ],
          gallery: {
            time_attack: "Time-Attack-Modus — Live-Session-Replay und Rangliste (Misano)",
            race_pace: "KI-Vorhersage der Rennpace vor dem Rennen — Pace in sauberer/gestörter Luft, Reifenabbau und prognostizierte Abstände (Mugello)",
            live_prediction: "Live-Rennsimulation — ML-Positionsvorhersage in Echtzeit, synchron mit dem Replay-Regler",
            weekend_overview: "Rennwochenend-Analyse — Übersicht und Bewertung (Misano)",
            weekend_charts: "Runde-für-Runde-Analyse — Position und Pace, Runde für Runde",
            rider_grades: "Fahrerbewertungen — algorithmische Qualifying-/Sprint-/Rennnoten für jede Runde der Saison 2026",
            rider_profile: "Fahrerprofil — Bewertungsverlauf über die Saison",
            race_vs_quali: "Rennen vs. Qualifying — Fahrer, die im Rennen Plätze gutmachen, gegen Qualifying-Spezialisten, die welche verlieren",
            consistency: "Zielposition, Ausfallquote und Rundenkonstanz",
            team_performance: "Bester Fahrer unabhängig vom Motorrad, plus Konstrukteurs- und Team-Performance"
          }
        },
        football: {
          title: "Football Predictions",
          summary: "Ein datengesteuerter Wettportfolio-Optimierer für die europäischen Top-Ligen.",
          techStack: "Python, XGBoost, API-Integration",
          details: "Dieses Projekt generiert nachhaltige wöchentliche Gewinne mithilfe fortschrittlicher ML-Vorhersagen in den fünf großen europäischen Ligen. Es integriert verschiedene statistische Indikatoren und die Teamform, um Ergebniswahrscheinlichkeiten zu berechnen und eine Wettstrategie zu optimieren."
        },
        f1: {
          title: "F1 Predictions 2024",
          summary: "Evaluierung von Machine-Learning-Vorhersagen für die Formel-1-Saison 2024.",
          techStack: "Python, TensorFlow/Keras, Jupyter",
          details: "Analysiert historische Leistungsdaten, um Rennergebnisse für die Saison 2024 vorherzusagen. Es vergleicht verschiedene Modellierungsansätze, um die Fahrerwertung und die Rennplatzierungen Rennen für Rennen vorherzusagen."
        },
        uni: {
          title: "Universitätsprojekte",
          summary: "26 akademische Repositories aus dem Bachelorstudium — Arbeiten aus dem Gesundheits- und Biomedizinbereich (Drug Design, Bioinformatik, Hirntumor-Klassifikation, Olivenöl-Qualität), Zeitreihenprognosen, Bayes-Statistik, Blockchain, Drohnen-/Robotersteuerung, Reinforcement Learning und mehr.",
          techStack: "Python (Jupyter Notebook), R",
          details: "26 Repositories aus Kursarbeiten des Studiums, die ein breites Themenspektrum abdecken: Gesundheits- und Biomedizindaten (Drug Design, Bioinformatik, Hirntumor-Klassifikation aus MRT-Bildern, Qualität von Olivenöl und Lebensmittelverbindungen), Zeitreihenprognosen, Bayes-Statistik und -Optimierung, Blockchain, Robotik und Drohnensteuerung, Reinforcement Learning, Anomalieerkennung mit Autoencodern sowie Sport-/Finanzanalysen (NBA-Wurfdaten, Kreditrisiko). Meist als Jupyter-Notebooks und R-Markdown geschrieben, manche allein, andere zu zweit oder in kleinen Gruppen, je nach Kurs. Alle einsehbar auf GitHub."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Bachelorarbeit)",
          summary: "Das finale Ergebnis meiner Bachelorarbeit zur Autismus-Screening-Forschung: ein offline-fähiges klinisches Dashboard, mit dem Psycholog:innen eine ADOS-2-Sitzung eines Kleinkinds — Video, IMU-Spielzeugsensoren und Verhaltensannotationen — auf einer synchronisierten Zeitleiste überprüfen können.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Dieses Dashboard läuft vollständig lokal, ganz ohne ausgehende Netzwerkaufrufe: Es ist die präsentationsseitige Schicht einer deutlich größeren Thesis-Pipeline, ausgelegt für nach DSGVO Art. 9 sensible Gesundheitsdaten von Minderjährigen. Die IMU-Signalverarbeitung, das Feature Engineering, das rein sensorbasierte ADOS-Risikomodell (ein für die Data-Science-Analyse der Arbeit trainierter RandomForest, out-of-fold evaluiert) und die statistische Analyse hinter jeder gezeigten Zahl laufen alle vorgelagert auf derselben Maschine. Kliniknotizen werden von einem lokalen, extraktiven Textmodell zusammengefasst, das Sätze wörtlich übernimmt — nie von einem Cloud-LLM —, gewählt, nachdem generative Zusammenfassungen nachweislich klinische Aussagen erfunden hatten.",
          highlights: [
            "Synchronisierte Patientenansicht — Videowiedergabe bidirektional mit einer interaktiven Label-Zeitleiste und dem rohen IMU-Signalplot verknüpft; Spielzeug und Kamerawinkel werden pro Sitzung unabhängig ausgewählt.",
            "Sensor-Only-Analyse (neu) — wendet das rein sensorbasierte ADOS-Risikomodell auf die Bewegungsdaten eines Kindes an, verglichen mit der Kohorte und gleich-risikoreichen Peers, mit drei überlagerten Bewegungszeitleisten, die automatische Erkennung mit dem menschlichen Protokoll vergleichen.",
            "Datenqualitäts-Transparenz (neu) — ein gesättigter Sensor, eine unterbrochene Aufnahme oder geringe Sample-Abdeckung zeigen eine explizite Warnung neben der Vorhersage, statt einer still falschen Zahl.",
            "Kliniknotizen mit extraktiver KI-Zusammenfassung (neu) — ein Rich-Text-Editor (mehrere Notizen/Kliniker pro Patient, exportierbar nach docx/pdf/txt), der Notizen zusammenfasst, indem er Sätze wörtlich übernimmt, nachdem generative Zusammenfassungen nachweislich klinische Aussagen erfunden hatten.",
            "Toy Analytics — patientenübergreifende Ansicht von Aktionszahlen, Intentionalität (kindinitiiert / zufällig / pädagogengeführt) und Aktionsvielfalt pro Spielzeug.",
            "Kohorten-Datenqualitätsübersicht — zeigt die Vollständigkeit pro Kind direkt an (fehlende Labels, unlesbare Daten, Sensorprobleme), statt sie hinter einem Aggregat zu verstecken."
          ],
          gallery: {
            overview: "Dashboard-Übersicht — Kohorten-KPIs und ADOS-Score-Verteilung",
            label_stats: "Label-Statistiken und Spielzeugnutzungs-Heatmap",
            notes_ai_summary: "Patientensitzungsansicht mit Video, Kliniknotizen und lokaler extraktiver KI-Zusammenfassung",
            sensor_only_risk: "Rein sensorbasierte ADOS-Risikovorhersage, verglichen mit Kohorte und gleich-risikoreichen Peers",
            patient_vs_cohort: "Patient-vs-Kohorte-Statistiken — Intentionalität, Spielzeugnutzung und Verhaltensmetriken",
            label_timeline_imu: "Synchronisierte Label-Zeitleiste, Notizen mehrerer Kliniker und roher IMU-Signalplot",
            toy_leaderboard: "Rangliste der meistgenutzten Spielzeuge",
            toy_entropy: "Aktionsvielfalt und Intentionalität pro Spielzeug"
          }
        },
        driving: {
          title: "Enjoy the Night",
          summary: "Eine mobile und Web-App, die deine Drinks verfolgt und die Blutalkoholkonzentration (BAK) in Echtzeit berechnet, damit du an einem Abend sicher unterwegs bist.",
          techStack: "Flutter, Provider | iOS, Android, Web",
          details: "Enjoy the Night (Sober Track) schätzt den BAK-Abbau über die Zeit anhand des Nutzerprofils und der erfassten Drinks, jetzt mit Mythen-Aufklärung, dauerhaften Sicherheitshinweisen und vollständiger Mehrsprachigkeit.",
          highlights: [
            "BAK-Berechnung in Echtzeit — präzise Blutalkoholschätzungen basierend auf Nutzerprofil und erfassten Drinks.",
            "Berechnungs-Einblicke & Mythen-Aufklärung (neu) — interaktive Popups, die erklären, wie die Berechnung funktioniert, und gängige Trinkmythen widerlegen.",
            "Gesundheits- und Sicherheitshinweis (neu) — ein dauerhafter Hinweis auf Dashboard, Verlauf und Einstellungen, der verantwortungsvolles Trinken fördert.",
            "Mehrsprachigkeit (neu) — vollständig lokalisiert in Englisch, Deutsch, Spanisch, Französisch und Italienisch.",
            "Drink-Verlauf & Schnellerfassung — ein detailliertes Protokoll vergangener Drinks plus ein Bottom-Sheet, um neue mit minimalem Aufwand zu erfassen."
          ],
          gallery: {
            onboarding_welcome: "Onboarding — Sicherheitshinweis, Geschlechtsauswahl und begrenzte Stepper-Schieberegler für Gewicht, Größe und Alter",
            dashboard: "Dashboard — animierte BAK-Anzeige, Nüchternheits-Countdown und die heutigen erfassten Drinks",
            add_drink: "Bottom Sheet „Drink hinzufügen“ — Kategorie-Chips, Glas-Stepper und Live-Neuberechnung von Menge/Alkoholgehalt",
            over_limit: "Warnung bei Grenzüberschreitung — Anzeige und Trinkwasser-Empfehlung aktualisieren sich sofort nach einem neuen Drink",
            history_24h: "Verlauf — BAK-Trend der letzten 24h mit der gesetzlichen Grenzlinie und einer Prognose bis auf null",
            history_3h: "Verlauf — Schnellauswahl-Chips skalieren das Diagramm auf die letzten 3 Stunden",
            date_range_picker: "Individueller Datumsbereich-Picker, zukünftige Daten sind deaktiviert",
            settings: "Einstellungen — Profil, Design, Modus „Neuer Fahrer“ und Zeitformat"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Eine ultra-premium, KI-gestützte App für Studierende und alle, die allein leben (und kochen) und Diät, Einkauf und Vorrat ohne den mentalen Aufwand im Griff behalten wollen — sie vereint Diät-Tracking, Einkaufsplanung und Vorratsverwaltung in einer minimalistischen Flutter-Erfahrung.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "Entwickelt für alle, die ihre Ernährung allein organisieren — Studierende, junge Berufstätige, die allein leben — liest PantryPilot Diätpläne im Backend mit Google Gemini 2.5 Flash direkt von einem Foto oder PDF und verwandelt sie in eine bepreiste Einkaufsliste, ein aktuelles Vorratsinventar und Zero-Waste-Rezepte — alles in einem glasmorphen Dual-Tab-Analytics-Dashboard.",
          highlights: [
            "Multimodaler Diät-Scanner — importiert Diäten direkt von Foto oder PDF via Gemini 2.5 Flash, inklusive OCR, Übersetzung und Portionsgrößen.",
            "Intelligente Preisschätzung — berechnet die genauen Kosten jeder Einkaufsliste in mehreren Ländern (IT, DE, CH).",
            "Zero-Waste-Rezeptgenerator (\"Svuota Frigo\") — verwandelt ablaufende Vorräte in Rezepte, die Lebensmittelverschwendung minimieren.",
            "Einheitliches Analytics-Dashboard — Dual-Tab-Ansicht für Makronährstoffe und Ausgaben.",
            "Magic Pantry (neu) — zieht Rezeptzutaten automatisch vom Inventar ab und führt doppelte Lebensmittel zusammen, jetzt mit Diät-Wiederverwendung per Kalender und einem intelligenten Allergene-Backend.",
            "Premium minimalistisches UI — glasmorphe Navigation, immersiver Kochmodus, keine Emojis."
          ],
          gallery: {
            home: "Haupt-Dashboard — Diätqualitäts-Score, nächste Mahlzeit, Vorratswarnungen und Tagesplan",
            pantry: "Vorratsinventar — Verfallsdaten pro Artikel, durchsuchbar und nach Lagerort filterbar",
            shopping_list: "Einkaufsliste — geschätzte Preise pro Geschäft, Schnellzugriff auf zuletzt Gekauftes und Kassenbon-Scan",
            recipes: "Rezepte — Favoriten, Zero-Waste-Vorschläge und Makro-/Kostenaufschlüsselung pro Gericht",
            diet_calendar: "Diät & Kalender — täglicher Essensplan mit Kosten und Makros, synchronisiert mit dem Vorrat"
          }
        },
        polify: {
          title: "Polify",
          summary: "Ein politischer Matching-Test, der jede Frage vor der Beantwortung erklärt und deine Übereinstimmung mit italienischen und internationalen Parteien anhand von 68 realen, dokumentierten Themen berechnet — konzipiert für die Zeit vor der italienischen Wahl 2027, in der viele Parteien noch keine öffentliche Position zu allen Themen bezogen haben.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify führt dich durch 68 dokumentierte politische Themen und vergleicht jede Antwort mit über 239 geprüften Parteipositionen, um deine Übereinstimmung zu berechnen — national und erstmals auch in 10 weiteren Ländern. Entstanden im Vorfeld der italienischen Parlamentswahl 2027, ist der Test transparent über seine eigenen Lücken: kleinere oder neuere Parteien (z. B. ORA!, Potere al Popolo) haben bisher zu weniger als der Hälfte der 68 Themen dokumentierte Positionen — diese Abdeckung wird auf der Seite jeder Partei angezeigt, statt hinter einem Durchschnitt versteckt zu werden.",
          highlights: [
            "Transparente, dokumentierte Berechnungs-Engine — vergleicht Antworten mit über 239 geprüften, fixierten Parteipositionen, gewichtet nach Quellenzuverlässigkeit.",
            "Internationaler Abgleich (neu) — entdecke deine nächstliegenden Ideologien und passende Parteien in 10 verschiedenen Ländern.",
            "Analyse nach Themenbereich — getrennte Ranglisten für 9 Themenbereiche (Wirtschaft, Rechte usw.), denn niemand stimmt bei allem mit nur einer Partei überein.",
            "Getrennte Redaktionsarchitektur — ein lokaler Text-Editor (auf eigenem Port) lässt Redakteure Fragen in Echtzeit erstellen und bewerten, ganz ohne Code.",
            "Datenschutzfreundliche Ergebnisse & Teilen — verschlüsselter Vergleich per URL (\"Challenge\"); der Server speichert nichts, alle Berechnungen laufen im Browser, DSGVO-konform.",
            "Premium-Ästhetik & UX — modernes Schwarz-Weiß-Interface mit nativem Dark Mode, flüssige Mikroanimationen, einspaltiges Layout und integriertes Glossar für komplexe Begriffe."
          ],
          gallery: {
            home: "Animierte Startseite im Dark Mode mit eigens erstellten Tuschezeichnungen-Portraits.",
            sondaggio: "Transparente Erklärung und Popup-Glossar vor jeder Antwort.",
            risultato: "Ergebnisseite — dein ideologischer Kompass und die nächstgelegenen Parteien, innerhalb der Fehlermarge.",
            mappa: "2D-Politikkarte — wo dich deine Antworten im Vergleich zu jeder Partei auf zwei Achsen platzieren.",
            area_per_area: "Rangliste nach Themenbereich — Wirtschaft, Bürgerrechte, Einwanderung, Justiz, Umwelt und mehr.",
            classifica: "Vollständige Rangliste aller Parteien, aufklappbar nach Zustimmung und Abweichung je Thema.",
            condividi: "Private Weitergabe per Link, plus eine In-App-Umfrage, ob sich das Ergebnis stimmig anfühlt.",
            partiti: "Parteienseite — bei wie vielen der 68 Themen jede Partei aktuell eine dokumentierte, belegte Position hat."
          }
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Ein hochgradig anpassbarer Pomodoro-Timer und ein Lern-Analytics-Dashboard, verfügbar als Web-App und als Electron-Desktop-App.",
          techStack: "Vanilla JS, Electron, Chart.js, LocalStorage | GitHub Pages",
          details: "Geht über einfaches Herunterzählen hinaus: ein Mini-Timer-Widget, ein Notion-artiges Aufgabenboard und ein vollständiges Analytics-Dashboard machen aus dem klassischen Pomodoro-Ablauf einen leichten Lernbegleiter, im Web oder als Desktop-App.",
          highlights: [
            "Mini-Timer-Widget (neu) — ein schwebendes, immer im Vordergrund bleibendes Fenster (Desktop) oder Popup (Web), das dich auch in anderen Apps über die Zeit informiert.",
            "Notion-artiges Aufgabenboard (neu) — lege ein Hauptthema fest, gliedere Themen und verwalte Aufgaben in einer interaktiven, per Tastatur navigierbaren Tabelle, automatisch gespeichert.",
            "Info- & Einstellungspanel (neu) — passe Zeiten an, personalisiere das Farbthema vollständig und schalte dekorative Hintergrundblasen ein.",
            "Analytics-Dashboard — verfolge täglichen, wöchentlichen, monatlichen und Gesamtfortschritt mit interaktiven Chart.js-Diagrammen.",
            "Haupttimer — der klassische Ablauf Arbeit → kurze Pause → lange Pause mit einer responsiven kreisförmigen Fortschrittsanzeige."
          ],
          gallery: {
            main_dashboard: "Vollständige App-Ansicht — kreisförmiger Timer mit Pausenvorschau, das Aktivitätsdiagramm des Stats-Panels und das Notion-artige Aufgabenboard für den aktuellen Fokus"
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
        coming_soon: "Demnächst verfügbar",
        lightbox_zoom_in: "Bild anklicken zum Vergrößern",
        lightbox_zoom_reset: "Bild anklicken, um Zoom zurückzusetzen"
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
