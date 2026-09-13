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
        driving: {
          title: "When Can I Drive",
          summary: "A mobile app calculating when it's safe to drive after consuming alcohol.",
          techStack: "Flutter, Dart",
          details: "A mobile utility that helps users calculate when they can safely drive after consuming alcohol. It uses standard pharmacokinetic formulas to estimate BAC (Blood Alcohol Concentration) decay over time based on user inputs."
        },
        freshtrack: {
          title: "FreshTrack",
          summary: "A food inventory app to track expiration dates and reduce food waste.",
          techStack: "Flutter, Firebase, SQLite",
          details: "An intuitive mobile application designed to manage home food inventory. It allows users to scan or manually enter items, track their expiration dates, and receive timely notifications to consume food before it spoils."
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "A minimalist web app implementing the Pomodoro productivity technique.",
          techStack: "React, LocalStorage | GitHub Pages",
          details: "A web application that helps users maintain focus using the Pomodoro technique. It manages work and break sessions, offers customizable timers, and securely stores user session data locally in the browser."
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
        visit_project: "Visit Project"
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
        driving: {
          title: "When Can I Drive",
          summary: "Un'app mobile che calcola quando è sicuro guidare dopo aver consumato alcol.",
          techStack: "Flutter, Dart",
          details: "Un'utilità mobile che aiuta gli utenti a calcolare quando possono guidare in sicurezza dopo aver consumato alcol. Utilizza formule farmacocinetiche standard per stimare il decadimento del tasso alcolemico (BAC) nel tempo in base ai dati inseriti dall'utente."
        },
        freshtrack: {
          title: "FreshTrack",
          summary: "Un'app per l'inventario alimentare per tracciare le scadenze e ridurre gli sprechi.",
          techStack: "Flutter, Firebase, SQLite",
          details: "Un'applicazione mobile intuitiva progettata per gestire l'inventario alimentare domestico. Permette agli utenti di scansionare o inserire manualmente gli articoli, tracciare le date di scadenza e ricevere notifiche tempestive per consumare il cibo prima che si deteriori."
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Un'app web minimalista che implementa la tecnica di produttività del Pomodoro.",
          techStack: "React, LocalStorage | GitHub Pages",
          details: "Un'applicazione web che aiuta gli utenti a mantenere la concentrazione utilizzando la tecnica del Pomodoro. Gestisce le sessioni di lavoro e di pausa, offre timer personalizzabili e memorizza in modo sicuro i dati delle sessioni dell'utente localmente nel browser."
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
        visit_project: "Visita il Progetto"
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
        driving: {
          title: "When Can I Drive",
          summary: "Eine mobile App, die berechnet, wann Sie nach Alkoholkonsum sicher fahren können.",
          techStack: "Flutter, Dart",
          details: "Ein mobiles Dienstprogramm, das Benutzern hilft zu berechnen, wann sie nach Alkoholkonsum sicher fahren können. Es verwendet standardmäßige pharmakokinetische Formeln, um den Abbau der Blutalkoholkonzentration (BAK) im Laufe der Zeit basierend auf Benutzereingaben zu schätzen."
        },
        freshtrack: {
          title: "FreshTrack",
          summary: "Eine App für Lebensmittelbestände zur Verfolgung von Verfallsdaten und Reduzierung von Verschwendung.",
          techStack: "Flutter, Firebase, SQLite",
          details: "Eine intuitive mobile Anwendung zur Verwaltung des Lebensmittelbestands zu Hause. Sie ermöglicht Benutzern das Scannen oder manuelle Eingeben von Artikeln, das Verfolgen von Verfallsdaten und den Erhalt rechtzeitiger Benachrichtigungen, um Lebensmittel vor dem Verderben zu konsumieren."
        },
        pomodoro: {
          title: "Pomodoro Timer",
          summary: "Eine minimalistische Web-App zur Umsetzung der Pomodoro-Produktivitätstechnik.",
          techStack: "React, LocalStorage | GitHub Pages",
          details: "Eine Webanwendung, die Benutzern hilft, mithilfe der Pomodoro-Technik den Fokus zu behalten. Sie verwaltet Arbeits- und Pausensitzungen, bietet anpassbare Timer und speichert Benutzer-Sitzungsdaten sicher lokal im Browser."
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
        visit_project: "Projekt besuchen"
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
