import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    placeOrder,
    orderPlaced,
    totalAmount,
    totalCount
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [tableOrBeach, setTableOrBeach] = useState('Pier 7 Pickup');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isCartOpen) return null;

  const tax = totalAmount * 0.085;
  const grandTotal = totalAmount + tax;

  return (
    <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div className="cart-title-row">
            <ShoppingBag size={20} className="teal-icon" />
            <h2>Your Beachside Order</h2>
            <span className="cart-count-pill">{totalCount} items</span>
          </div>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {orderPlaced ? (
          <div className="order-success-view">
            <CheckCircle2 size={64} className="success-icon" />
            <h3>Order Received! 🎉</h3>
            <p>Your fresh meal is being prepared at Boardwalk Level, Pier 7.</p>
            <div className="order-receipt-summary">
              <div className="receipt-row">
                <span>Pickup Option:</span> <strong>{tableOrBeach}</strong>
              </div>
              <div className="receipt-row">
                <span>Total Paid:</span> <strong>${grandTotal.toFixed(2)}</strong>
              </div>
            </div>
            <p className="est-time">Estimated Pickup Time: <strong>12-15 mins</strong></p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="empty-cart-view">
            <div className="empty-cart-emoji">🥪</div>
            <h3>Your order is empty</h3>
            <p>Add some handcrafted sandwiches, bowls, or fresh lemonade to get started!</p>
            <button
              className="start-order-btn"
              onClick={() => setIsCartOpen(false)}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer-body">
              <div className="cart-items-list">
                {cartItems.map(({ item, quantity }) => (
                  <div key={item.id} className="cart-item-row">
                    <div className="cart-item-img">
                      {item.emoji ? (
                        <span>{item.emoji}</span>
                      ) : (
                        <img src={item.img || item.fallbackImg} alt={item.name} />
                      )}
                    </div>

                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <div className="cart-item-price">${(item.price * quantity).toFixed(2)}</div>
                    </div>

                    <div className="cart-qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
                        <Minus size={12} />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="cart-order-details">
                <label className="cart-label">
                  Pickup / Delivery Spot:
                  <select
                    value={tableOrBeach}
                    onChange={(e) => setTableOrBeach(e.target.value)}
                    className="cart-select"
                  >
                    <option value="Pier 7 Pickup Counter">Pier 7 Pickup Counter</option>
                    <option value="Beach Umbrella Delivery (Pier 7)">Beach Umbrella Delivery (Pier 7)</option>
                    <option value="Takeout Box">Takeout Box</option>
                  </select>
                </label>

                <label className="cart-label">
                  Name for Order:
                  <input
                    type="text"
                    placeholder="e.g. Alex"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="cart-input"
                  />
                </label>

                <label className="cart-label">
                  Special Notes:
                  <input
                    type="text"
                    placeholder="e.g. Extra lemon-herb aioli on side"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="cart-input"
                  />
                </label>
              </div>
            </div>

            <div className="cart-drawer-footer">
              <div className="cart-summary-totals">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>CA Tax (8.5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row grand-total">
                  <span>Total Due</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-footer-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
                <button className="checkout-btn" onClick={placeOrder}>
                  Place Order <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
