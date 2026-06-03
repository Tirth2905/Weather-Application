import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import SearchHistory from './components/SearchHistory';
import { getCurrentWeather, getForecast, getHistory, clearHistory } from './api';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchHistory = useCallback(async () => {
    try {
      const h = await getHistory();
      setHistory(h);
    } catch {
      // History unavailable (MongoDB not connected)
    }
  }, []);

  useEffect(() => { fetchHistory(); }, [fetchHistory]);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const [w, f] = await Promise.all([
        getCurrentWeather({ city }),
        getForecast({ city })
      ]);
      setWeather(w);
      setForecast(f);
      fetchHistory();
    } catch (err) {
      const msg = err.response?.data?.error || 'Failed to fetch weather data';
      setError(msg);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = async () => {
    try {
      await clearHistory();
      setHistory([]);
    } catch { /* ignore */ }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-brand">
          <span className="brand-icon">◐</span>
          <span className="brand-name">WeatherApp</span>
        </div>
        <div className="app-subtitle">Real-time weather information</div>
      </header>

      <main className="app-main">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {error && (
          <div className="error-msg">
            <span>⚠</span> {error}
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
              </svg>
            </div>
            <div className="empty-title">Search a city to get started</div>
            <div className="empty-sub">Try "London", "New York", "Tokyo", or "Mumbai"</div>
          </div>
        )}

        {weather && (
          <div className="results">
            <WeatherCard data={weather} />
            <Forecast data={forecast} />
          </div>
        )}

        <SearchHistory
          history={history}
          onSelect={handleSearch}
          onClear={handleClearHistory}
        />
      </main>

      <footer className="app-footer">
        <span>Powered by WeatherApp</span>
      </footer>
    </div>
  );
}
