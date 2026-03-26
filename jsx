import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showGhostField, setShowGhostField] = useState(false);
  const [reflection, setReflection] = useState("");

  const SPOTIFY_LINK = "spotify:playlist:0G38p5E6BvHwZ4j1v8i2Oq";

  const handleToggleFocus = () => {
    if (!isActive) {
      window.location.href = SPOTIFY_LINK;
      setIsActive(true);
      setShowGhostField(false);
    } else {
      setIsActive(false);
      setTimeout(() => setShowGhostField(true), 800);
    }
  };

  return (
    <div className="app-container">
      <header className={isActive ? 'fade-out' : 'fade-in'}>
        <h1 className="branding">HORIZON</h1>
      </header>

      <div className="interaction-zone">
        <div className="button-wrapper" onClick={handleToggleFocus}>
          {isActive && <div className="breath-ring"></div>}
          {isActive && <div className="breath-ring delay"></div>}
          
          <div className={`main-button ${isActive ? 'active' : ''}`}>
            <span className="button-text">
              {isActive ? 'IMMERSION' : 'BEGIN'}
            </span>
          </div>
        </div>

        <div className="ghost-container">
          {showGhostField && !isActive && (
            <input 
              autoFocus
              type="text"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="What was achieved?"
              className="ghost-input"
            />
          )}
        </div>
      </div>

      <footer className={isActive ? 'fade-out' : 'fade-in'}>
        <p className="footer-text">EFFICIENCY THROUGH FOCUS</p>
      </footer>
    </div>
  );
}

export default App;
