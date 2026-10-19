import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import MenuCard from './MenuCard';
import { Search, Filter, Layers, Utensils, Coffee, Disc } from 'lucide-react';

export default function MenuSection({ activeCat, setActiveCat }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // all, vegan, gf, spicy

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const matchCat = activeCat === 'all' || item.cat === activeCat;
    
    // Search match
    const matchQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());

    // Dietary filter match
    let matchDietary = true;
    if (dietaryFilter === 'vegan') {
      matchDietary = item.chips?.some((c) => c.type === 'vegan');
    } else if (dietaryFilter === 'gf') {
      matchDietary = item.chips?.some((c) => c.type === 'gf');
    } else if (dietaryFilter === 'spicy') {
      matchDietary = item.chips?.some((c) => c.type === 'spicy');
    }

    return matchCat && matchQuery && matchDietary;
  });

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="menu-header">
          <div className="section-label reveal visible">Our Menu</div>
          <h2 className="section-title reveal visible">
            Everything <em>fresh</em>,<br />nothing boring.
          </h2>
        </div>

        {/* Search & Dietary Bar */}
        <div className="menu-search-bar">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search sandwiches, ingredients, bowls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>

          <div className="dietary-pills">
            <button
              className={`diet-pill ${dietaryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('all')}
            >
              All Diets
            </button>
            <button
              className={`diet-pill ${dietaryFilter === 'vegan' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('vegan')}
            >
              🌱 Vegan
            </button>
            <button
              className={`diet-pill ${dietaryFilter === 'gf' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('gf')}
            >
              🌾 Gluten-Free
            </button>
            <button
              className={`diet-pill ${dietaryFilter === 'spicy' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('spicy')}
            >
              🌶️ Spicy
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="cat-filter reveal visible">
          <button
            className={`cat-btn ${activeCat === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCat('all')}
          >
            <Layers size={15} /> All
          </button>
          <button
            className={`cat-btn ${activeCat === 'sandwich' ? 'active' : ''}`}
            onClick={() => setActiveCat('sandwich')}
          >
            <Utensils size={15} /> Sandwiches
          </button>
          <button
            className={`cat-btn ${activeCat === 'bowl' ? 'active' : ''}`}
            onClick={() => setActiveCat('bowl')}
          >
            <Disc size={15} /> Bowls
          </button>
          <button
            className={`cat-btn ${activeCat === 'side' ? 'active' : ''}`}
            onClick={() => setActiveCat('side')}
          >
            🥗 Sides
          </button>
          <button
            className={`cat-btn ${activeCat === 'drink' ? 'active' : ''}`}
            onClick={() => setActiveCat('drink')}
          >
            <Coffee size={15} /> Drinks
          </button>
        </div>

        {/* MENU CARDS GRID */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid" id="menuGrid">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <p>No items found matching your filters.</p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setActiveCat('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
