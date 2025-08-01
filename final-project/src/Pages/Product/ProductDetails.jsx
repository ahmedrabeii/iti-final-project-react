import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../../Service/Api.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetails.css';  

function ProductDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getProduct(id);
        setBook(data);
      } catch (err) {
        console.error("Error fetching book:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.key === book.key);

    if (!exists) {
      cart.push({
        key: book.key,
        title: book.title,
        cover: book.covers?.[0],
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));

      
      toast.success(`"${book.title}" has been added to your cart!`, {
        position: 'top-center',
      });
    } else {
     
      toast.info(`"${book.title}" is already in your cart.`, {
        position: 'top-center',
      });
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!book) {
    return <div className="mt-4 text-danger">Book not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="product-card shadow-sm p-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-5 text-center">
                {book?.covers?.length > 0 ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                    alt={book.title}
                    className="img-fluid rounded book-cover"
                  />
                ) : (
                  <div className="text-muted">No Image Available</div>
                )}
              </div>

              <div className="col-md-7 text-white">
                <h2 className="mb-3">{book.title || "No Title"}</h2>

                {book.description && (
                  <p>
                    <b>Description: </b>
                    {typeof book.description === 'string'
                      ? book.description
                      : book.description?.value || 'No description available.'}
                  </p>
                )}

                {book.subjects && (
                  <p>
                    <b>Subjects: </b>
                    {book.subjects.slice(0, 5).join(', ')}
                  </p>
                )}

                <div className="d-grid gap-2 mt-4">
                  <button className="btn btn-outline-light mt-3" onClick={handleAddToCart}>
                    <b>Add to Cart</b>
                  </button>
                  <Link to="/categories" className="btn btn-outline-light mt-3">
                    <b>Back to Categories</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;
