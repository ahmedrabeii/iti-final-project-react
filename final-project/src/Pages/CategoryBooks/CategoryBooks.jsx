import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryBooks.css';

function CategoryBooks() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const cached = localStorage.getItem(`books_${name}`);
      if (cached) {
        setBooks(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://openlibrary.org/subjects/${name}.json?limit=20`);
        setBooks(response.data.works);
        localStorage.setItem(`books_${name}`, JSON.stringify(response.data.works));
      } catch (error) {
        console.error("Error loading category:", error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [name]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-dark text-capitalize text-center">
        {name.replace('_', ' ')} Books
      </h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => {
          const workKey = book.key.startsWith("/works/") ? book.key.replace("/works/", "") : null;

          return (
            <div className="col" key={book.key}>
              <div className="custom-card h-100 text-white d-flex flex-column justify-content-between">
                <div className="card-img-container text-center p-3">
                  {book.cover_id ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                      className="book-img img-fluid rounded"
                      alt={book.title}
                    />
                  ) : (
                    <div className="text-muted">No Image</div>
                  )}
                </div>

                <div className="px-3 pb-3 d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold mb-2">{book.title}</h5>
                  <p className="mb-auto">{book.authors?.[0]?.name || 'Unknown Author'}</p>

                  {workKey ? (
                    <Link to={`/books/${workKey}`} className="btn btn-outline-light mt-3">
                      View Details
                    </Link>
                  ) : (
                    <button className="btn btn-secondary mt-3" disabled>
                      No Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBooks;
