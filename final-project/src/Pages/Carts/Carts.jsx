import { useState, useEffect } from 'react';
import './Carts.css'; 

function Carts() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (key) => {
    const updated = cartItems.filter(item => item.key !== key);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-dark text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-dark text-center"><b>No books in cart.</b> </p>
      ) : (
        <>
          <div className="mb-4 text-end">
            <button className="btn btn-outline-secondary btn-lg px-4 shadow  mt-3" onClick={handleClearCart}>
             🗑 Clear All
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cartItems.map((item) => (
              <div className="col" key={item.key}>
                <div className="custom-card h-100 text-white d-flex flex-column justify-content-between">
                  <div className="text-center p-3">
                    {item.cover ? (
                      <img
                        src={`https://covers.openlibrary.org/b/id/${item.cover}-M.jpg`}
                        className="book-img img-fluid rounded"
                        alt={item.title}
                      />
                    ) : (
                      <div className="text-muted">No Image</div>
                    )}
                  </div>
                  <div className="px-3 pb-3 text-center flex-grow-1 d-flex flex-column justify-content-between">
                    <h5 className="mb-3">{item.title}</h5>
                    <button
                      className="btn btn-outline-light mt-3"
                      onClick={() => handleRemove(item.key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
