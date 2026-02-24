import './Portfolio.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'living', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'office', name: 'Office' },
    { id: 'dining', name: 'Dining' }
  ];

  const portfolioItems = [
    // Living Room
    { id: 1, category: 'living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', title: 'Modern Living Room', description: 'Contemporary elegance meets comfort' },
    { id: 2, category: 'living', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80', title: 'Minimalist Living', description: 'Clean lines and open space' },
    { id: 3, category: 'living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', title: 'Cozy Living Space', description: 'Warm and inviting atmosphere' },
    { id: 4, category: 'living', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80', title: 'Luxury Living', description: 'Sophisticated modern design' },

    // Bedroom
    { id: 5, category: 'bedroom', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', title: 'Luxury Bedroom', description: 'Serene sanctuary design' },
    { id: 6, category: 'bedroom', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', title: 'Modern Bedroom', description: 'Sleek and stylish retreat' },
    { id: 7, category: 'bedroom', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80', title: 'Cozy Bedroom', description: 'Comfortable and peaceful' },
    { id: 8, category: 'bedroom', image: 'https://images.unsplash.com/photo-1578898887155-72ddc3d48399?w=800&q=80', title: 'Master Suite', description: 'Elegant and spacious' },

    // Kitchen
    { id: 9, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80', title: 'Gourmet Kitchen', description: 'Functional beauty redefined' },
    { id: 10, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80', title: 'Modern Kitchen', description: 'Contemporary cooking space' },
    { id: 11, category: 'kitchen', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', title: 'Chef\'s Kitchen', description: 'Professional grade design' },
    { id: 12, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80', title: 'Family Kitchen', description: 'Warm and welcoming' },

    // Bathroom
    { id: 13, category: 'bathroom', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80', title: 'Spa Bathroom', description: 'Luxury meets relaxation' },
    { id: 14, category: 'bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Modern Bathroom', description: 'Clean and sophisticated' },
    { id: 15, category: 'bathroom', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', title: 'Master Bathroom', description: 'Elegant sanctuary' },
    { id: 16, category: 'bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', title: 'Contemporary Bath', description: 'Minimalist elegance' },

    // Office
    { id: 17, category: 'office', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', title: 'Home Office', description: 'Productivity in style' },
    { id: 18, category: 'office', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', title: 'Executive Office', description: 'Professional workspace' },
    { id: 19, category: 'office', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80', title: 'Creative Studio', description: 'Inspiring work environment' },
    { id: 20, category: 'office', image: 'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80', title: 'Modern Workspace', description: 'Contemporary office design' },

    // Dining
    { id: 21, category: 'dining', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', title: 'Elegant Dining', description: 'Where style meets sophistication' },
    { id: 22, category: 'dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', title: 'Modern Dining', description: 'Contemporary gathering space' },
    { id: 23, category: 'dining', image: 'https://images.unsplash.com/photo-1617806118857-a1b4d5c031d3?w=800&q=80', title: 'Formal Dining', description: 'Timeless elegance' },
    { id: 24, category: 'dining', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80', title: 'Family Dining', description: 'Warm and inviting' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Header */}
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
    </div>
  );
}

export default Portfolio;
