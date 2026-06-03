import React from 'react';
import './SearchHistory.css';

export default function SearchHistory({ history, onSelect, onClear }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="history">
      <div className="history-header">
        <span className="history-title">Recent Searches</span>
        <button className="history-clear" onClick={onClear}>Clear</button>
      </div>
      <div className="history-list">
        {history.map((item, i) => (
          <button
            key={i}
            className="history-item"
            onClick={() => onSelect(item.city)}
          >
            <span className="hi-city">{item.city}</span>
            <span className="hi-country">{item.country}</span>
            <span className="hi-time">{new Date(item.searchedAt).toLocaleDateString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
