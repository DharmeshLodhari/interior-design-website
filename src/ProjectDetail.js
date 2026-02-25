import './ProjectDetail.css';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  const projects = {
    1: {
      title: 'Gokul Jawellars',
      category: 'Jewelry Showrooms',
      description: 'Gokul Jawellars is a prestigious jewelry showroom designed to reflect timeless elegance. Rich display counters, warm ambient lighting, and luxurious finishes create an inviting space where every piece of jewelry truly shines.',
      location: 'Porbandar, Gujarat, India',
      year: '2024',
      size: '1200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
        'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=1200&q=80',
        'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1200&q=80'
      ]
    },
    2: {
      title: 'Ashapura Jawellars',
      category: 'Jewelry Showrooms',
      description: 'Ashapura Jawellars brings divine craftsmanship and refined interiors together. Inspired by traditional Gujarati artistry, the showroom blends cultural aesthetics with modern display techniques to create a memorable customer experience.',
      location: 'Porbandar, Gujarat, India',
      year: '2024',
      size: '950 sq ft',
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1200&q=80',
        'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=1200&q=80'
      ]
    },
    3: {
      title: 'Bhakti Jawellars',
      category: 'Jewelry Showrooms',
      description: 'Bhakti Jawellars is a warmly designed showroom that merges devotional aesthetics with contemporary luxury. Soft gold tones, elegant display units, and thoughtful lighting make every visit a serene and joyful experience.',
      location: 'Porbandar, Gujarat, India',
      year: '2024',
      size: '800 sq ft',
      images: [
        'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80'
      ]
    },
    5: {
      title: 'Modern Luxury Villa',
      category: 'Resident Properties',
      description: 'A contemporary villa designed with the perfect balance of elegance and comfort. Open-plan living spaces, premium finishes, and seamless indoor-outdoor flow define this stunning residence.',
      location: 'Pune, India',
      year: '2024',
      size: '3500 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'
      ]
    },
    6: {
      title: 'Contemporary Apartment',
      category: 'Resident Properties',
      description: 'A sleek urban apartment designed for modern living. Smart space planning, premium materials, and thoughtful lighting transform every square foot into a stylish retreat.',
      location: 'Bangalore, India',
      year: '2024',
      size: '1800 sq ft',
      images: [
        'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
      ]
    },
    7: {
      title: 'Elegant Penthouse',
      category: 'Resident Properties',
      description: 'High-rise luxury living at its finest. This penthouse features panoramic city views, bespoke interiors, and exceptional craftsmanship throughout every space.',
      location: 'Mumbai, India',
      year: '2024',
      size: '4200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'
      ]
    },
    8: {
      title: 'Suburban Family Home',
      category: 'Resident Properties',
      description: 'A beautifully designed family home that balances practicality with warmth. Functional layouts, durable finishes, and inviting spaces make it the perfect family sanctuary.',
      location: 'Ahmedabad, India',
      year: '2024',
      size: '2800 sq ft',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80'
      ]
    },
    9: {
      title: 'Corporate Office',
      category: 'Office Design',
      description: 'A dynamic corporate office designed to foster productivity and collaboration. Ergonomic workstations, open meeting zones, and branded interiors reflect the company\'s vision and values.',
      location: 'Hyderabad, India',
      year: '2024',
      size: '5000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80',
        'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80'
      ]
    },
    10: {
      title: 'Executive Suite',
      category: 'Office Design',
      description: 'A commanding executive office that projects authority and sophistication. Rich materials, custom furniture, and precise lighting create an environment of power and refinement.',
      location: 'Chennai, India',
      year: '2024',
      size: '800 sq ft',
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80'
      ]
    },
    11: {
      title: 'Creative Workspace',
      category: 'Office Design',
      description: 'An inspiring open-plan creative studio designed to spark ideas and nurture innovation. Flexible zones, vibrant accents, and thoughtful acoustics make collaboration effortless.',
      location: 'Bangalore, India',
      year: '2024',
      size: '3200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80',
        'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80'
      ]
    },
    12: {
      title: 'Tech Office Space',
      category: 'Office Design',
      description: 'A cutting-edge tech office built for the modern workforce. Smart infrastructure, modular furniture, and energetic design support a fast-paced, innovative culture.',
      location: 'Pune, India',
      year: '2024',
      size: '4500 sq ft',
      images: [
        'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80'
      ]
    },
    13: {
      title: 'Govardhan Thal',
      category: 'Restaurant Design',
      description: 'Govardhan Thal is a beloved Indian dosa restaurant in Porbandar, Gujarat. The interior design celebrates the warmth and vibrancy of traditional Indian dining culture — earthy tones, handcrafted décor elements, and cozy seating create an authentic and inviting atmosphere for guests.',
      location: 'Porbandar, Gujarat, India',
      year: '2024',
      size: '1600 sq ft',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80'
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
                <img src={image} alt={`${project.title} - view ${index + 1}`} />
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
