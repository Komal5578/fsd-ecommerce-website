import React, { useState } from 'react';
import '../styles/GiftsPage.css';

// Import images
import customizedPen from '../assets/customized_pen.png';
import wallets from '../assets/wallets.png';
import nutsHamper from '../assets/nuts_hamper.png';
import birthdayBag from '../assets/birthday_bag.png';
import premiumNutsHamper from '../assets/premium_nuts_hamper.png';
import personalizedWallets from '../assets/personalized_wallets.png';
import ferreroRocherBouquet from '../assets/ferroro_rocher_bouquet.png';
import mensGift from '../assets/mens_gift.png';
import valentineGift from '../assets/valentine_gift.png';
import sunflowerKeychain from '../assets/sunflower_keychain.png';
import pinkFlowerBouquet from '../assets/pink_flower_bouquet.png';
import puffBlossomKeychain from '../assets/puff_blossom_keychain.png';
import lilyBouquet from '../assets/lily_bouquet.png';
import sunflowerSingle from '../assets/sunflower_single.png';

const gifts = [
  {
    id: 1,
    name: 'Customized Pen',
    price: 150,
    image: customizedPen,
    description: 'Personalized pen with custom engraving'
  },
  {
    id: 2,
    name: 'Premium Wallets',
    price: 500,
    image: wallets,
    description: 'Elegant leather wallets collection'
  },
  {
    id: 3,
    name: 'Nuts Hamper',
    price: 899,
    image: nutsHamper,
    description: 'Assorted premium dry fruits basket'
  },
  {
    id: 4,
    name: 'Birthday Bag',
    price: 399,
    image: birthdayBag,
    description: 'Curated birthday surprise package'
  },
  {
    id: 5,
    name: 'Premium Nuts Hamper',
    price: 799,
    image: premiumNutsHamper,
    description: 'Luxury dry fruits gift box'
  },
  {
    id: 6,
    name: 'Personalized Wallets',
    price: 149,
    image: personalizedWallets,
    description: 'Custom name embossed wallets'
  },
  {
    id: 7,
    name: 'Ferrero Rocher Bouquet',
    price: 499,
    image: ferreroRocherBouquet,
    description: 'Chocolate bouquet arrangement'
  },
  {
    id: 8,
    name: 'Mens Gift Set',
    price: 1299,
    image: mensGift,
    description: 'Complete grooming essentials kit'
  },
  {
    id: 9,
    name: 'Valentine Gift Box',
    price: 1200,
    image: valentineGift,
    description: 'Romantic gift hamper for loved ones'
  },
  {
    id: 10,
    name: 'Sunflower Keychain',
    price: 99,
    image: sunflowerKeychain,
    description: 'Handmade sunflower accessory'
  },
  {
    id: 11,
    name: 'Pink Flower Bouquet',
    price: 600,
    image: pinkFlowerBouquet,
    description: 'Beautiful pink blooms arrangement'
  },
  {
    id: 12,
    name: 'Puff Blossom Keychain',
    price: 80,
    image: puffBlossomKeychain,
    description: 'Cute fluffy blossom charm'
  },
  {
    id: 13,
    name: 'Lily Bouquet',
    price: 799,
    image: lilyBouquet,
    description: 'Elegant lily flower arrangement'
  },
  {
    id: 14,
    name: 'Sunflower Single Stem',
    price: 80,
    image: sunflowerSingle,
    description: 'Single sunflower with wrapping'
  }
];

const GiftsPage = ({ onNavigate }) => {
  const [cart, setCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (gift) => {
    setCart([...cart, gift]);
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handleCheckout = () => {
    setOrderConfirmed(true);
    setCart([]);
    setShowCart(false);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="gifts-container">
      <header className="header">
        <div className="logo" onClick={onNavigate}>
          <span className="logo-icon">♥</span>
          <span className="logo-text">Blushberry Gifts</span>
        </div>
        <div className="cart-indicator" onClick={() => setShowCart(!showCart)} style={{ cursor: 'pointer' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-count">{cart.length}</span>
        </div>
      </header>

      <main className="main-content">
        <section className="gifts-section">
         
          <div className="gifts-grid">
            {gifts.map((gift) => (
              <div key={gift.id} className="gift-card">
                <div className="gift-image">
                  <img src={gift.image} alt={gift.name} />
                </div>
                <h3 className="gift-name">{gift.name}</h3>
                <p className="gift-description">{gift.description}</p>
                <div className="gift-footer">
                  <span className="gift-price">{gift.price.toFixed(2)}</span>
                  <button 
                    className="add-btn"
                    onClick={() => addToCart(gift)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {showCart && (
          <aside className="cart-sidebar">
            <div className="cart-header">
              <h2 className="cart-title">Your Cart</h2>
              <button className="close-cart-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-icon" />
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">{item.price.toFixed(2)}</span>
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">{cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
              </>
            )}
          </aside>
        )}

        {orderConfirmed && (
          <div className="order-modal-overlay">
            <div className="order-modal">
              <div className="order-checkmark">✓</div>
              <h2>Order Confirmed!</h2>
              <p>Thank you for shopping with Blushberry Gifts</p>
              <button className="close-modal-btn" onClick={() => setOrderConfirmed(false)}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Blushberry Gifts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GiftsPage;
