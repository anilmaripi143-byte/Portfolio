import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Info, Plus, Check } from 'lucide-react';

export default function MenuCard({ item }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="menu-card reveal visible" data-cat={item.cat}>
      <div className="card-img-wrap">
        {item.emoji ? (
          <div className="card-emoji-placeholder">
            <span style={{ fontSize: '72px', lineHeight: 1 }}>{item.emoji}</span>
          </div>
        ) : (
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              if (item.fallbackImg) {
                e.target.src = item.fallbackImg;
              } else {
                e.target.src = "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80";
              }
            }}
          />
        )}
        <span className="card-cat-badge">{item.cat}</span>
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3 className="card-name">{item.name}</h3>
          <span className="card-price">${item.price.toFixed(2)}</span>
        </div>

        <p className="card-desc">{item.desc}</p>

        <div className="card-chips">
          {item.chips && item.chips.map((chip, idx) => (
            <span key={idx} className={`card-chip chip-${chip.type}`}>
              {chip.text}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <div className="tooltip-wrap" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <button
              className="info-btn"
              onClick={() => setShowTooltip(!showTooltip)}
              type="button"
            >
              <Info size={15} /> Ingredients & Nutrition
            </button>

            <div className={`tooltip ${showTooltip ? 'active-tooltip' : ''}`}>
              <div className="tt-title">Ingredients</div>
              <div className="tt-ingredients">{item.ingredients}</div>
              <div className="tt-nutrition">
                <div className="tt-nut-item teal">
                  <div className="tt-nut-val">{item.nutrition.kcal}</div>
                  <div className="tt-nut-key">kcal</div>
                </div>
                <div className="tt-nut-item">
                  <div className="tt-nut-val">{item.nutrition.protein}</div>
                  <div className="tt-nut-key">protein</div>
                </div>
                <div className="tt-nut-item amber">
                  <div className="tt-nut-val">{item.nutrition.carbs}</div>
                  <div className="tt-nut-key">carbs</div>
                </div>
                <div className="tt-nut-item">
                  <div className="tt-nut-val">{item.nutrition.fat}</div>
                  <div className="tt-nut-key">fat</div>
                </div>
              </div>
            </div>
          </div>

          <button
            className={`add-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
            aria-label={`Add ${item.name} to order`}
          >
            {added ? (
              <>
                <Check size={14} /> Added!
              </>
            ) : (
              <>
                <Plus size={14} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
