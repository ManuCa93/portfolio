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
            time_attack: "Live session replay — Time Attack mode",
            race_pace: "Pre-race AI pace prediction",
            weekend_overview: "Race Weekend Analysis — overview & report card",
            weekend_charts: "Race Weekend Analysis — lap-by-lap position & pace",
            analytics: "Advanced Analytics — algorithmic rider grades",
            rider_profile: "Rider profile",
            circuit_breakdown: "Circuit breakdown",
            team_performance: "Team & constructor performance",
            eda: "Environmental data exploration (EDA)"
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
          summary: "A comprehensive collection of academic projects covering core computer science principles.",
          techStack: "Java, C++, Python, SQL",
          details: "A diverse portfolio of academic assignments focusing on algorithms, distributed systems, and software engineering principles. These projects demonstrate a solid theoretical foundation applied to practical coding challenges."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Thesis)",
          summary: "The final deliverable of my Bachelor's thesis on autism-screening research: an offline clinical dashboard letting psychologists review a toddler's ADOS-2 session — video, IMU toy sensors and behavioral annotations — on one synchronized timeline.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "This dashboard is the presentation-facing layer of a much larger thesis pipeline: the IMU signal processing, feature engineering, the sensor-only ADOS risk model (RandomForest, evaluated out-of-fold) and the statistical analysis behind every number shown here all happen upstream, largely offline. What's pictured is the finished interface a clinician would actually use, handling sensitive health data of minors under GDPR Art. 9 with no outbound network calls.",
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
            patient_complete: "Patient detail view with complete session data",
            sensor_only: "Sensor-only ADOS risk prediction and movement timelines",
            patient_pending: "Patient card flagged with pending behavioral labels",
            sensor_flags: "Sensor-only analysis with a data-quality warning",
            notes_editor: "Clinician notes editor with extractive AI summary",
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
            dashboard: "Onboarding screen for a personalized BAC estimate"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "An ultra-premium, AI-driven app that merges diet tracking, grocery planning and pantry inventory into one breathtakingly minimalist Flutter experience.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "PantryPilot uses Gemini 2.5 Flash to read diets straight from a photo or PDF, then turns that plan into a priced grocery list, a live pantry inventory and zero-waste recipes — all inside one glassmorphic, dual-tab analytics dashboard.",
          highlights: [
            "Multimodal Diet Scanner — imports diets straight from a photo or PDF via Gemini 2.5 Flash, handling OCR, translation and portion sizing.",
            "Smart Price Estimation — estimates the precise cost of any grocery list across multiple countries (IT, DE, CH).",
            "Zero-Waste Recipe Generator (\"Svuota Frigo\") — turns expiring pantry items into recipes that minimize food waste.",
            "Unified Analytics Dashboard — a dual-tab view tracking both macronutrients and grocery spending.",
            "Magic Pantry (new) — automatically deducts recipe ingredients from inventory and merges duplicate foods, now with diet reuse via a calendar and a smart allergens backend.",
            "Premium minimalist UI — glassmorphic navigation, immersive cooking mode, zero emojis."
          ]
        },
        polify: {
          title: "Polify",
          summary: "A political matching test that explains every question before you answer, scoring your affinity with Italian and international parties across 68 real, documented issues.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify walks you through 68 documented political issues, weighting each answer against 239+ verified party positions to compute your affinity — nationally and, for the first time, across 10 other countries.",
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
            risultati: "Results with the leading group (accounting for statistical margin of error) and the new international match.",
            risultati_mobile: "Mobile detail view to see affinity on individual topics.",
            sfida: "Challenge mode: share your unique link and find points of agreement and divergence."
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
            main_timer: "Main timer view with circular progress indicator",
            info_settings: "Info & settings panel with theme customization"
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
            time_attack: "Replay della sessione live — modalità Time Attack",
            race_pace: "Previsione AI del passo gara pre-gara",
            weekend_overview: "Analisi weekend di gara — panoramica e pagella",
            weekend_charts: "Analisi weekend di gara — grafici giro per giro",
            analytics: "Analisi avanzata — pagelle algoritmiche dei piloti",
            rider_profile: "Profilo pilota",
            circuit_breakdown: "Analisi circuito",
            team_performance: "Prestazioni di squadra e costruttori",
            eda: "Esplorazione dati ambientali (EDA)"
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
          summary: "Una raccolta completa di progetti accademici sui principi fondamentali dell'informatica.",
          techStack: "Java, C++, Python, SQL",
          details: "Un portfolio diversificato di incarichi accademici incentrati su algoritmi, sistemi distribuiti e principi di ingegneria del software. Questi progetti dimostrano una solida base teorica applicata a sfide pratiche di programmazione."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Tesi)",
          summary: "L'output finale della mia tesi di Bachelor sulla ricerca nello screening dell'autismo: una dashboard clinica offline che permette a psicologi di rivedere una sessione ADOS-2 di un bambino — video, sensori IMU sui giochi e annotazioni comportamentali — su un'unica timeline sincronizzata.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Questa dashboard è lo strato presentativo di una pipeline di tesi molto più ampia: l'elaborazione del segnale IMU, il feature engineering, il modello di rischio ADOS basato solo sui sensori (RandomForest, valutato out-of-fold) e l'analisi statistica dietro ogni numero mostrato avvengono a monte, in gran parte offline. Quello che si vede è l'interfaccia finita che un clinico userebbe davvero, progettata per gestire dati sanitari sensibili di minori secondo il GDPR Art. 9 senza alcuna chiamata di rete in uscita.",
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
            patient_complete: "Vista dettaglio paziente con dati di sessione completi",
            sensor_only: "Previsione di rischio ADOS solo da sensori e timeline di movimento",
            patient_pending: "Scheda paziente segnalata con etichette comportamentali in sospeso",
            sensor_flags: "Analisi solo sensori con avviso di qualità dei dati",
            notes_editor: "Editor delle note del clinico con riassunto AI estrattivo",
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
            dashboard: "Schermata di onboarding per una stima personalizzata del BAC"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Un'app ultra-premium basata su AI che unisce tracciamento della dieta, pianificazione della spesa e inventario della dispensa in un'esperienza Flutter minimalista e curatissima.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "PantryPilot usa Gemini 2.5 Flash per leggere le diete direttamente da una foto o un PDF, trasformando il piano in una lista della spesa con prezzi stimati, un inventario della dispensa sempre aggiornato e ricette a spreco zero — il tutto in una dashboard analitica glassmorphic a doppia scheda.",
          highlights: [
            "Scanner Dieta Multimodale — importa diete direttamente da foto o PDF tramite Gemini 2.5 Flash, gestendo OCR, traduzione e porzioni.",
            "Stima Intelligente dei Prezzi — calcola il costo preciso di qualsiasi lista della spesa in più paesi (IT, DE, CH).",
            "Generatore di Ricette a Spreco Zero (\"Svuota Frigo\") — trasforma gli alimenti in scadenza in ricette che riducono lo spreco.",
            "Dashboard Analitica Unificata — vista a doppia scheda che traccia sia i macronutrienti sia la spesa.",
            "Magic Pantry (novità) — scala automaticamente gli ingredienti delle ricette dall'inventario e unisce alimenti duplicati, ora con riutilizzo delle diete via calendario e un backend intelligente per gli allergeni.",
            "UI Premium Minimalista — navigazione glassmorphic, modalità cucina immersiva, zero emoji."
          ]
        },
        polify: {
          title: "Polify",
          summary: "Un test politico che ti spiega ogni domanda prima di porla, calcolando quanto sei vicino a ciascun partito italiano e internazionale su 68 temi reali e documentati.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify ti guida attraverso 68 temi politici documentati, confrontando ogni risposta con oltre 239 posizioni di partito verificate per calcolare la tua affinità — a livello nazionale e, per la prima volta, anche in altre 10 nazioni.",
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
            sondaggio: "Spiegazione trasparente e glossario a comparsa prima di prendere una decisione.",
            risultati: "I risultati con il gruppo di testa e il nuovo matching internazionale.",
            risultati_mobile: "Dettaglio su scala mobile per l'affinità sulle singole tematiche.",
            sfida: "Modalità Sfida: condividi il link univoco e scopri punti di contatto e divergenza."
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
            main_timer: "Vista principale del timer con indicatore di progresso circolare",
            info_settings: "Pannello info e impostazioni con personalizzazione del tema"
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
            time_attack: "Live-Session-Replay — Time-Attack-Modus",
            race_pace: "KI-Vorhersage der Rennpace vor dem Rennen",
            weekend_overview: "Rennwochenend-Analyse — Übersicht & Bewertung",
            weekend_charts: "Rennwochenend-Analyse — Runde-für-Runde-Diagramme",
            analytics: "Erweiterte Analyse — algorithmische Fahrerbewertungen",
            rider_profile: "Fahrerprofil",
            circuit_breakdown: "Streckenanalyse",
            team_performance: "Team- und Konstrukteursleistung",
            eda: "Umweltdaten-Exploration (EDA)"
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
          summary: "Eine umfassende Sammlung akademischer Projekte zu den Grundlagen der Informatik.",
          techStack: "Java, C++, Python, SQL",
          details: "Ein vielfältiges Portfolio akademischer Aufgaben mit Schwerpunkt auf Algorithmen, verteilten Systemen und Prinzipien der Softwareentwicklung. Diese Projekte demonstrieren ein solides theoretisches Fundament, das auf praktische Programmierherausforderungen angewendet wird."
        },
        adosDashboard: {
          title: "ADOS Clinical Dashboard (Bachelorarbeit)",
          summary: "Das finale Ergebnis meiner Bachelorarbeit zur Autismus-Screening-Forschung: ein offline-fähiges klinisches Dashboard, mit dem Psycholog:innen eine ADOS-2-Sitzung eines Kleinkinds — Video, IMU-Spielzeugsensoren und Verhaltensannotationen — auf einer synchronisierten Zeitleiste überprüfen können.",
          techStack: "Python, Dash/Plotly, Flask, Pandas, scikit-learn, Quill.js",
          details: "Dieses Dashboard ist die präsentationsseitige Schicht einer deutlich größeren Thesis-Pipeline: die IMU-Signalverarbeitung, das Feature Engineering, das rein sensorbasierte ADOS-Risikomodell (RandomForest, out-of-fold evaluiert) und die statistische Analyse hinter jeder gezeigten Zahl laufen vorgelagert, größtenteils offline, ab. Zu sehen ist die fertige Oberfläche, die eine Klinikerin tatsächlich nutzen würde — ausgelegt für sensible Gesundheitsdaten von Minderjährigen gemäß DSGVO Art. 9, ganz ohne ausgehende Netzwerkaufrufe.",
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
            patient_complete: "Patientendetailansicht mit vollständigen Sitzungsdaten",
            sensor_only: "Rein sensorbasierte ADOS-Risikovorhersage und Bewegungszeitleisten",
            patient_pending: "Patientenkarte mit ausstehenden Verhaltenslabels markiert",
            sensor_flags: "Sensor-Only-Analyse mit Datenqualitätswarnung",
            notes_editor: "Kliniknotizen-Editor mit extraktiver KI-Zusammenfassung",
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
            dashboard: "Onboarding-Bildschirm für eine personalisierte BAK-Schätzung"
          }
        },
        pantrypilot: {
          title: "PantryPilot",
          summary: "Eine ultra-premium, KI-gestützte App, die Diät-Tracking, Einkaufsplanung und Vorratsverwaltung in einer minimalistischen Flutter-Erfahrung vereint.",
          techStack: "Flutter, Riverpod, Hive, Google Gemini 2.5 Flash, Node.js",
          details: "PantryPilot liest Diätpläne direkt von einem Foto oder PDF mittels Gemini 2.5 Flash und verwandelt sie in eine bepreiste Einkaufsliste, ein aktuelles Vorratsinventar und Zero-Waste-Rezepte — alles in einem glasmorphen Dual-Tab-Analytics-Dashboard.",
          highlights: [
            "Multimodaler Diät-Scanner — importiert Diäten direkt von Foto oder PDF via Gemini 2.5 Flash, inklusive OCR, Übersetzung und Portionsgrößen.",
            "Intelligente Preisschätzung — berechnet die genauen Kosten jeder Einkaufsliste in mehreren Ländern (IT, DE, CH).",
            "Zero-Waste-Rezeptgenerator (\"Svuota Frigo\") — verwandelt ablaufende Vorräte in Rezepte, die Lebensmittelverschwendung minimieren.",
            "Einheitliches Analytics-Dashboard — Dual-Tab-Ansicht für Makronährstoffe und Ausgaben.",
            "Magic Pantry (neu) — zieht Rezeptzutaten automatisch vom Inventar ab und führt doppelte Lebensmittel zusammen, jetzt mit Diät-Wiederverwendung per Kalender und einem intelligenten Allergene-Backend.",
            "Premium minimalistisches UI — glasmorphe Navigation, immersiver Kochmodus, keine Emojis."
          ]
        },
        polify: {
          title: "Polify",
          summary: "Ein politischer Matching-Test, der jede Frage vor der Beantwortung erklärt und deine Übereinstimmung mit italienischen und internationalen Parteien anhand von 68 realen, dokumentierten Themen berechnet.",
          techStack: "Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, GSAP",
          details: "Polify führt dich durch 68 dokumentierte politische Themen und vergleicht jede Antwort mit über 239 geprüften Parteipositionen, um deine Übereinstimmung zu berechnen — national und erstmals auch in 10 weiteren Ländern.",
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
            risultati: "Ergebnisse mit der Führungsgruppe (unter Berücksichtigung der statistischen Fehlermarge) und dem neuen internationalen Abgleich.",
            risultati_mobile: "Mobile Detailansicht zur Affinität bei einzelnen Themen.",
            sfida: "Challenge-Modus: teile deinen eigenen Link und entdecke Gemeinsamkeiten und Unterschiede."
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
            main_timer: "Haupttimer-Ansicht mit kreisförmiger Fortschrittsanzeige",
            info_settings: "Info- und Einstellungspanel mit Themenanpassung"
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
