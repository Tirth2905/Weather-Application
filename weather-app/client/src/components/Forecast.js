import React from 'react';
import './Forecast.css';

export default function Forecast({ data }) {
  if (!data || !data.list) return null;

  // Get one entry per day (at noon)
  const daily = [];
  const seen = new Set();
  for (const item of data.list) {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();
    if (!seen.has(dayKey) && daily.length < 5) {
      seen.add(dayKey);
      daily.push(item);
    }
  }

  return (
    <div className="forecast">
      <div className="forecast-title">5-Day Forecast</div>
      <div className="forecast-list">
        {daily.map((item, i) => {
          const date = new Date(item.dt * 1000);
          return (
            <div className="forecast-item" key={i}>
              <div className="fc-day">
                {i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <img
                className="fc-icon"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
              <div className="fc-desc">{item.weather[0].main}</div>
              <div className="fc-temps">
                <span className="fc-high">{Math.round(item.main.temp_max)}°</span>
                <span className="fc-low">{Math.round(item.main.temp_min)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
