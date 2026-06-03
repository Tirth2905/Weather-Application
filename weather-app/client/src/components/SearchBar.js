import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search city... e.g. Tokyo, Mumbai"
        value={query}
        onChange={e => setQuery(e.target.value)}
        disabled={loading}
      />
      <button className="search-btn" type="submit" disabled={loading || !query.trim()}>
        {loading ? <span className="spinner" /> : 'Search'}
      </button>
    </form>
  );
}
