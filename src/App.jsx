import React from 'react';
import appIcon from './assets/app_icon.png';
import iconIco from './assets/icon.ico';
import logoImg from './assets/logo.png';
import telegramPython from './assets/telegram_python.jpg';
import motogpHelmet from './assets/motogp_helmet.png';
import githubIcon from './assets/github_icon.png';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-profile">
          <img
            src="https://github.com/ManuCa93.png"
            alt="Manuel Cattoni"
            className="avatar"
          />
          <div className="header-info">
            <h1 className="title">Manuel Cattoni</h1>
            <p className="location">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Varese / Lugano
            </p>
            <p className="subtitle">Software Developer | Data & AI Enthusiast</p>

            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/manuel-cattoni-169631339/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/ManuCa93" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              {/* Email */}
              <a href="mailto:manuel.cattoni93@gmail.com" className="social-icon" aria-label="Email">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
              </a>
              {/* CV / Resume */}
              <a href="./Cattoni_Resume.pdf?v=2" target="_blank" rel="noreferrer" className="social-icon" aria-label="Curriculum Vitae">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v6h6v10H6zm2-8h8v2H8v-2zm0 4h5v2H8v-2z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/cattonii" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="fade-in">
        <h2 className="section-title">Data & AI Projects</h2>
        <div className="grid">
          {/* 1. MotoGP */}
          <a href="https://motogp-analytics.onrender.com/" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper">
              <img src={motogpHelmet} alt="MotoGP Helmet" />
            </div>
            <div className="link-content">
              <div className="link-title">MotoGP Position Estimator</div>
              <div className="link-desc">Machine learning models featuring race pace estimation, qualifying simulation with expected position, and post-hoc statistical analysis of rider performance.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          {/* 2. Football */}
          <a href="https://github.com/ManuCa93/top-5-football-leagues-predictions" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12l2 3h4M12 12l-2 3H6M12 12V7.5M7 4.5l2 3M17 4.5l-2 3M19.5 16l-3.5-1M4.5 16l3.5-1" />
              </svg>
            </div>
            <div className="link-content">
              <div className="link-title">Football Predictions</div>
              <div className="link-desc">A data-driven betting portfolio optimizer that generates sustainable weekly profits using advanced ML predictions across top 5 European leagues.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          {/* 3. F1 */}
          <a href="https://github.com/ManuCa93/F1_pred_2024" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <div className="link-content">
              <div className="link-title">F1 Predictions 2024</div>
              <div className="link-desc">Evaluation of machine learning predictions on the 2024 Formula 1 season. Analyzes historical performance to forecast race outcomes.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          {/* 4. University Projects */}
          <a href="https://github.com/ManuCa93?tab=repositories" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-in-progress">In Progress</span>
            <div className="link-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="link-content">
              <div className="link-title">University Projects</div>
              <div className="link-desc">A comprehensive collection of academic projects covering algorithms, distributed systems, and software engineering principles.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>
        </div>
      </div>

      <div className="fade-in delay-1">
        <h2 className="section-title">Mobile Apps</h2>
        <div className="grid">
          <a href="https://github.com/ManuCa93/when_can_I_drive_app" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-to-publish">To Publish</span>
            <div className="link-icon-wrapper">
              <img src={appIcon} alt="When Can I Drive Icon" style={{ transform: 'scale(1.5)' }} />
            </div>
            <div className="link-content">
              <div className="link-title">When Can I Drive</div>
              <div className="link-desc">A mobile app that helps users calculate when they can safely drive after consuming alcohol by estimating their BAC decay.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          <a href="https://github.com/ManuCa93/flutter_alimenti" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-in-progress">In Progress</span>
            <div className="link-icon-wrapper">
              <img src={logoImg} alt="FreshTrack Icon" style={{ transform: 'scale(1.5)' }} />
            </div>
            <div className="link-content">
              <div className="link-title">FreshTrack</div>
              <div className="link-desc">A mobile application built with Flutter to manage food inventory, track expiration dates, and reduce food waste at home.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>
        </div>
      </div>

      <div className="fade-in delay-2">
        <h2 className="section-title">Websites</h2>
        <div className="grid">
          <a href="https://manuca93.github.io/pomodoroTimer/" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper">
              <img src={iconIco} alt="Pomodoro Timer Icon" style={{ transform: 'scale(1.5)' }} />
            </div>
            <div className="link-content">
              <div className="link-title">Pomodoro Timer</div>
              <div className="link-desc">A minimalist web application implementing the Pomodoro technique for better productivity. It manages focus sessions and securely stores your data locally in the browser.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          <a href="https://github.com/ManuCa93/price-tracker" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper" style={{ position: 'relative' }}>
              {/* Python SVG */}
              <svg viewBox="0 0 24 24" fill="#3776AB" width="24" height="24" style={{ position: 'absolute' }}>
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.31-.33.4-.25.5-.16.6-.07.7-.02.77v5.36l.02.8.06.7.13.6.19.5.25.4.3.3.34.2.36.1.37.03h.36l.33-.03.28-.08.21-.11.13-.13.04-.13V20.5l.02-.2.05-.2.1-.2.15-.2.22-.2.29-.19.38-.17.47-.13.57-.1.68-.05h4.63l.6-.06.53-.13.43-.22.31-.3.2-.4.1-.5.02-.6v-2.05l-.02-.13-.05-.13-.1-.13-.15-.13-.2-.12-.25-.1-.3-.08-.34-.05-.36-.02H18l-.2.02-.2.05-.17.08-.12.11-.06.13-.01.14v1.83l-.02.13-.05.1-.1.08-.14.05-.18.03-.2.01h-2.15l-.2-.01-.18-.03-.14-.05-.1-.08-.05-.1-.02-.13V18.1l.02-.13.05-.1.1-.08.14-.05.18-.03.2-.01h2.15l.6-.05.54-.12.45-.22.34-.33.23-.44.13-.57.03-.7v-3.32l-.03-.7-.13-.57-.23-.44-.34-.33-.45-.22-.54-.12-.6-.05h-4.63l-.68-.05-.57-.1-.47-.13-.38-.17-.29-.19-.22-.2-.15-.2-.1-.2-.05-.2-.02-.2v-2.05l.02-.13.05-.13.1-.13.15-.13.2-.12.25-.1.3-.08.34-.05.36-.02H13.6l.2-.02.2-.05.17-.08.12-.11.06-.13.01-.14V3.65l.02-.13.05-.1.1-.08.14-.05.18-.03.2-.01h2.15l.2.01.18.03.14.05.1.08.05.1.02.13v1.82l-.02.13-.05.1-.1.08-.14.05-.18.03-.2.01h-2.15l-.2-.01-.18-.03-.14-.05-.1-.08-.05-.1-.02-.13V3.65z" />
              </svg>
              {/* Telegram Plane Cutout (creates a negative space gap) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--card-bg)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ position: 'absolute', transform: 'translate(6px, -4px)' }}>
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {/* Telegram Plane */}
              <svg viewBox="0 0 24 24" fill="var(--text-primary)" stroke="var(--text-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ position: 'absolute', transform: 'translate(6px, -4px)' }}>
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
            <div className="link-content">
              <div className="link-title">Price Tracker</div>
              <div className="link-desc">An automated web scraper connected to a Telegram bot that tracks the price of Nothing Ear (1) headphones and sends notifications when it drops below a threshold.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>
        </div>
      </div>

      <div className="fade-in delay-2">
        <h2 className="section-title">Games & Fun</h2>
        <div className="grid">
          <a href="https://github.com/ManuCa93/brickbrakers-F1" target="_blank" rel="noreferrer" className="link-card">
            <span className="card-badge badge-ended">Ended</span>
            <div className="link-icon-wrapper">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="link-content">
              <div className="link-title">Brickbreakers F1</div>
              <div className="link-desc">A Formula 1 themed brickbreaker arcade game built from scratch. Features F1-styled levels, custom ball physics, and challenging mechanics.</div>
            </div>
            <div className="link-arrow">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
