import { Link } from 'react-router-dom';
import './Home.css';
import libraryImage from './assets/Book.jpg';

function Home() {
  return (
    <div className="online-library-section">
      <div className="online-library-content">
        <div className="text-content">
          <h2 className="title"> Welcome to Bartleby Library!</h2>
          <p className="description">
           Discover our collection of books and dive into the world of reading and knowledge.
          </p>
          <Link to="/Categories" className="btn btn-outline-secondary btn-lg px-4 shadow  mt-3">
          View Categories
          </Link>
        </div>
        <div className="image-content">
          <img src={libraryImage} alt="Online Library Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Home;
