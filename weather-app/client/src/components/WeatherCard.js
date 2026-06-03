import React from 'react';
import './WeatherCard.css';

const windDir = (deg) => {
  const dirs = ['N','NE','E','SE','S','SW','W','NW'];
  return dirs[Math.round(deg / 45) % 8];
};

export default function WeatherCard({ data }) {
  if (!data) return null;
  const { name, sys, main, weather, wind, visibility, clouds } = data;
  const icon = weather[0].icon;
  const desc = weather[0].description;

  return (
    <div className="weather-card">
      <div className="wc-header">
        <div className="wc-location">
          <span className="wc-city">{name}</span>
          <span className="wc-country">{sys.country}</span>
        </div>
        <div className="wc-time">{new Date().toLocaleDateString('en-US', { weekday:'long', month:'short', day:'numeric' })}</div>
      </div>

      <div className="wc-main">
        <img
          className="wc-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={desc}
        />
        <div className="wc-temp">{Math.round(main.temp)}<span>°C</span></div>
        <div className="wc-desc">{desc}</div>
      </div>

      <div className="wc-feels">
        Feels like <strong>{Math.round(main.feels_like)}°C</strong>
        &nbsp;·&nbsp; {main.temp_min}° / {main.temp_max}°
      </div>

      <div className="wc-stats">
        <div className="wc-stat">
          <div className="wc-stat-label">Humidity</div>
          <div className="wc-stat-value">{main.humidity}<span>%</span></div>
          <div className="wc-bar"><div className="wc-bar-fill" style={{ width: `${main.humidity}%` }} /></div>
        </div>
        <div className="wc-stat">
          <div className="wc-stat-label">Pressure</div>
          <div className="wc-stat-value">{main.pressure}<span>hPa</span></div>
        </div>
        <div className="wc-stat">
          <div className="wc-stat-label">Wind</div>
          <div className="wc-stat-value">{wind.speed}<span>m/s</span></div>
          <div className="wc-stat-sub">{windDir(wind.deg)}</div>
        </div>
        <div className="wc-stat">
          <div className="wc-stat-label">Visibility</div>
          <div className="wc-stat-value">{(visibility / 1000).toFixed(1)}<span>km</span></div>
        </div>
        <div className="wc-stat">
          <div className="wc-stat-label">Clouds</div>
          <div className="wc-stat-value">{clouds.all}<span>%</span></div>
        </div>
        <div className="wc-stat">
          <div className="wc-stat-label">Sunrise</div>
          <div className="wc-stat-value mono">{new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
        </div>
      </div>
    </div>
  );
}
