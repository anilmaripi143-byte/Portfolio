import React, { useState } from 'react';
import { SPECIAL_ITEM } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Star, Plus, Check, Info } from 'lucide-react';

export default function TodaysSpecial() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    addToCart(SPECIAL_ITEM);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="special-section" id="special">
      <div className="special-ribbon">Today's Special</div>
      <div className="special-inner">
        <div className="reveal-left visible">
          <div className="special-label">{SPECIAL_ITEM.tagline}</div>
          <h2 className="special-title">
            The <em>Coastal</em><br />Club Royale
          </h2>
          <p className="special-desc">{SPECIAL_ITEM.desc}</p>

          <div className="special-price">
            <span className="amt">$14</span>
            <span className="dec">.90</span>
            <span className="label">/ sandwich</span>
          </div>

          <div className="special-tags">
            {SPECIAL_ITEM.chips.map((chip, idx) => (
              <span key={idx} className={`tag-chip ${chip.type}`}>
                {chip.text}
              </span>
            ))}
          </div>

          <div className="special-actions">
            <button
              className={`add-btn special-add-btn ${added ? 'added' : ''}`}
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Order!
                </>
              ) : (
                <>
                  <Plus size={16} /> Add Special to Order ($14.90)
                </>
              )}
            </button>

            <button className="info-btn" onClick={() => setShowModal(true)}>
              <Info size={15} /> Ingredients & Nutrition
            </button>
          </div>
        </div>

        <div className="special-img reveal visible">
          <img
            src={SPECIAL_ITEM.img}
            alt={SPECIAL_ITEM.name}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="special-img-badge">
            ⭐ {SPECIAL_ITEM.rating} · {SPECIAL_ITEM.ordersToday} orders today
          </div>
        </div>
      </div>

      {/* Ingredients & Nutrition Modal */}
      {showModal && (
        <div className="special-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="special-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{SPECIAL_ITEM.name} — Nutrition & Ingredients</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-ingredients">
                <strong>Ingredients:</strong> {SPECIAL_ITEM.ingredients}
              </p>
              <div className="tt-nutrition">
                <div className="tt-nut-item teal">
                  <div className="tt-nut-val">{SPECIAL_ITEM.nutrition.kcal}</div>
                  <div className="tt-nut-key">kcal</div>
                </div>
                <div className="tt-nut-item">
                  <div className="tt-nut-val">{SPECIAL_ITEM.nutrition.protein}</div>
                  <div className="tt-nut-key">protein</div>
                </div>
                <div className="tt-nut-item amber">
                  <div className="tt-nut-val">{SPECIAL_ITEM.nutrition.carbs}</div>
                  <div className="tt-nut-key">carbs</div>
                </div>
                <div className="tt-nut-item">
                  <div className="tt-nut-val">{SPECIAL_ITEM.nutrition.fat}</div>
                  <div className="tt-nut-key">fat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
