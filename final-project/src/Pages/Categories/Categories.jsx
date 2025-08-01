import { Link } from 'react-router-dom';
import {
  FaHeart, FaRobot, FaLandmark, FaHatWizard, FaUserSecret,
  FaUser, FaPaintBrush, FaPlane, FaBookOpen
} from 'react-icons/fa';
import './Categories.css';

const categories = [
  { name: 'Romance', key: 'romance', icon: <FaHeart /> },
  { name: 'Science Fiction', key: 'science_fiction', icon: <FaRobot /> },
  { name: 'History', key: 'history', icon: <FaLandmark /> },
  { name: 'Fantasy', key: 'fantasy', icon: <FaHatWizard /> },
  { name: 'Mystery', key: 'mystery', icon: <FaUserSecret /> },
  { name: 'Biography', key: 'biography', icon: <FaUser /> },
  { name: 'Art', key: 'art', icon: <FaPaintBrush /> },
  { name: 'Travel', key: 'travel', icon: <FaPlane /> },
  { name: 'Philosophy', key: 'philosophy', icon: <FaBookOpen /> },
];

function Categories() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center text-dark">Book Categories</h2>
      <div className="row justify-content-center">
        {categories.map((cat) => (
          <div className="col-md-4 col-lg-3 mb-4" key={cat.key}>
            <div className="category-card text-center shadow-sm">
              <div className="icon-circle mb-3">
                {cat.icon}
              </div>
              <h5 className="mb-3 text-white">{cat.name}</h5>
              <Link to={`/category/${cat.key}`} className="btn btn-outline-light mt-3"><b>
                 View Books </b>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
