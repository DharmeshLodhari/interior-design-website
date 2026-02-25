import './Portfolio.css';
import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'jewelry', name: 'Jewelry Showrooms' },
    { id: 'residential', name: 'Resident Properties' },
    { id: 'office', name: 'Office Design' },
    { id: 'restaurant', name: 'Restaurant Design' }
  ];

  const portfolioItems = [
    // Jewelry Showrooms
    { id: 1, category: 'jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', title: 'Gokul Jawellars', description: 'Timeless elegance in every showcase' },
    { id: 2, category: 'jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', title: 'Ashapura Jawellars', description: 'Divine craftsmanship, refined interiors' },
    { id: 3, category: 'jewelry', image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80', title: 'Bhakti Jawellars', description: 'Warm luxury meets devotional aesthetics' },

    // Resident Properties
    { id: 5, category: 'residential', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', title: 'Modern Luxury Villa', description: 'Contemporary elegance meets comfort' },
    { id: 6, category: 'residential', image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80', title: 'Contemporary Apartment', description: 'Sleek urban living redefined' },
    { id: 7, category: 'residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Elegant Penthouse', description: 'Luxury high-rise living' },
    { id: 8, category: 'residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', title: 'Suburban Family Home', description: 'Warm and welcoming family space' },

    // Office Design
    { id: 9, category: 'office', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', title: 'Corporate Office', description: 'Professional workspace excellence' },
    { id: 10, category: 'office', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', title: 'Executive Suite', description: 'Power and prestige combined' },
    { id: 11, category: 'office', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80', title: 'Creative Workspace', description: 'Inspiring collaborative environment' },
    { id: 12, category: 'office', image: 'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80', title: 'Tech Office Space', description: 'Modern innovation hub design' },

    // Restaurant Design
    { id: 13, category: 'restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', title: 'Govardhan Thal', description: 'Authentic Indian dosa restaurant, Porbandar' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-monkey">
              <div className="monkey-circle">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
              </div>
            </div>
            <div className="logo-name">
              <span className="logo-pipe">|</span>
              <span className="logo-hindi-text">विनेश कानजी लोढारी</span>
              <span className="logo-pipe">|</span>
            </div>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/portfolio" className="active">Portfolio</Link></li>
            <li><Link to="/#testimonials">Testimonials</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Portfolio Header */}
      <div className="portfolio-header">
        <div className="portfolio-header-content">
          <h1>Our Portfolio</h1>
          <p>Explore our collection of stunning interior design projects</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="container">
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-gallery">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/project/${item.id}`} className="view-btn">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-monkey">
                  <div className="footer-monkey-circle">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
                  </div>
                </div>
                <div className="footer-logo-name">
                  <span className="footer-logo-pipe">|</span>
                  <span className="footer-logo-hindi-text">विनेश कानजी लोढारी</span>
                  <span className="footer-logo-pipe">|</span>
                </div>
              </div>
              <p>Transforming spaces, elevating lifestyles.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/#services">Residential Design</Link></li>
                <li><Link to="/#services">Commercial Spaces</Link></li>
                <li><Link to="/#services">Color Consultation</Link></li>
                <li><Link to="/#services">Space Planning</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 LuxeInteriors. All rights reserved. | Designed with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
