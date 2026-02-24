import './ProjectDetail.css';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  const projects = {
    1: {
      title: 'Modern Living Room',
      category: 'Living Room',
      description: 'A contemporary living space that combines elegance with comfort. This project showcases clean lines, neutral tones, and carefully selected furnishings that create a welcoming atmosphere.',
      location: 'Beverly Hills, CA',
      year: '2024',
      size: '450 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80',
        'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80'
      ]
    },
    2: {
      title: 'Minimalist Living',
      category: 'Living Room',
      description: 'Clean lines and open space define this minimalist living room design. Every element serves a purpose while maintaining aesthetic beauty.',
      location: 'Santa Monica, CA',
      year: '2024',
      size: '380 sq ft',
      images: [
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80'
      ]
    },
    5: {
      title: 'Luxury Bedroom',
      category: 'Bedroom',
      description: 'A serene sanctuary designed for ultimate relaxation and comfort. Featuring premium materials and sophisticated color palette.',
      location: 'Malibu, CA',
      year: '2024',
      size: '320 sq ft',
      images: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
        'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1200&q=80',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
        'https://images.unsplash.com/photo-1578898887155-72ddc3d48399?w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80'
      ]
    },
    9: {
      title: 'Gourmet Kitchen',
      category: 'Kitchen',
      description: 'A chef\'s dream kitchen combining functionality with stunning aesthetics. Modern appliances and custom cabinetry create the perfect cooking space.',
      location: 'West Hollywood, CA',
      year: '2024',
      size: '280 sq ft',
      images: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
        'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80',
        'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80'
      ]
    },
    13: {
      title: 'Spa Bathroom',
      category: 'Bathroom',
      description: 'Transform your daily routine into a spa-like experience. Luxurious finishes and thoughtful design create a personal wellness retreat.',
      location: 'Venice Beach, CA',
      year: '2024',
      size: '180 sq ft',
      images: [
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80'
      ]
    },
    17: {
      title: 'Home Office',
      category: 'Office',
      description: 'Productivity meets style in this contemporary home office. Designed to inspire creativity while maintaining professional aesthetics.',
      location: 'Downtown LA',
      year: '2024',
      size: '200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80',
        'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80'
      ]
    },
    21: {
      title: 'Elegant Dining',
      category: 'Dining',
      description: 'Where style meets sophistication. This dining room is designed for memorable gatherings and elegant entertaining.',
      location: 'Pasadena, CA',
      year: '2024',
      size: '250 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
        'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1200&q=80',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
        'https://images.unsplash.com/photo-1606744837616-56c3b3d95b7f?w=1200&q=80'
      ]
    }
  };

  const project = projects[id] || projects[1];

  return (
    <div className="project-detail-page">
      {/* Header */}
      <div className="project-detail-header">
        <div className="container">
          <Link to="/portfolio" className="back-button">
            ← Back to Portfolio
          </Link>
          <h1>{project.title}</h1>
          <p className="project-category">{project.category}</p>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-block">
              <h3>Location</h3>
              <p>{project.location}</p>
            </div>
            <div className="info-block">
              <h3>Year</h3>
              <p>{project.year}</p>
            </div>
            <div className="info-block">
              <h3>Size</h3>
              <p>{project.size}</p>
            </div>
          </div>
          <div className="project-description">
            <h3>About This Project</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="project-gallery">
        <div className="container">
          <h2>Project Gallery</h2>
          <div className="gallery-images">
            {project.images.map((image, index) => (
              <div key={index} className="gallery-image-item">
                <img src={image} alt={`${project.title} - Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="project-cta">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Let's create something beautiful together</p>
          <Link to="/#contact" className="cta-button">Start Your Project</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
