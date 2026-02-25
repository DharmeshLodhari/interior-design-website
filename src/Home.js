import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-monkey">
              <div className="monkey-circle">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Monkey Logo" />
              </div>
            </div>
            <div className="logo-name">
              <span className="logo-pipe">|</span>
              <div className="logo-text-group">
                <span className="logo-hindi-text">विनेश कानजी लोढारी</span>
                <span className="logo-design-studio">Design Studio</span>
              </div>
              <span className="logo-pipe">|</span>
            </div>
          </Link>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); }}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' }); }}>Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Space</h1>
          <p className="hero-subtitle">Creating Beautiful, Functional Interiors That Inspire</p>
          <a href="#contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive interior design solutions tailored to your vision</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Design</h3>
              <p>Transform your home into a personalized sanctuary with our expert residential design services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Spaces</h3>
              <p>Create inspiring workspaces that boost productivity and reflect your brand identity.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Color Consultation</h3>
              <p>Expert guidance on color schemes that bring harmony and character to your space.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🪑</div>
              <h3>Furniture Selection</h3>
              <p>Curated furniture pieces that blend style, comfort, and functionality perfectly.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Lighting Design</h3>
              <p>Strategic lighting solutions that enhance ambiance and highlight your space's best features.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>Space Planning</h3>
              <p>Optimize your layout for maximum functionality and aesthetic appeal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore our recent projects and design transformations</p>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" alt="Jewelry Showroom" />
              <div className="portfolio-overlay">
                <h3>Jewelry Showrooms</h3>
                <p>Elegant display meets timeless design</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80" alt="Resident Properties" />
              <div className="portfolio-overlay">
                <h3>Resident Properties</h3>
                <p>Contemporary elegance meets comfort</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Office Design" />
              <div className="portfolio-overlay">
                <h3>Office Design</h3>
                <p>Professional workspace excellence</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Restaurant Design" />
              <div className="portfolio-overlay">
                <h3>Restaurant Design</h3>
                <p>Culinary art in elegant setting</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/portfolio" className="cta-button">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from satisfied homeowners</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"અમારા ઘરનું ઇન્ટિરિયર ડિઝાઇન અદ્ભૂત થઈ ગયું! વિનેશભાઈએ અમારી દરેક ઇચ્છા સમજીને એક સ્વપ્ન જેવું ઘર બનાવી આપ્યું. ખૂબ ખૂબ આભાર!"</p>
              <div className="testimonial-author">
                <strong>રાજેશભાઈ પટેલ</strong>
                <span>Homeowner, Porbandar</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Our jewellery showroom looks absolutely stunning after the redesign. The lighting and display layout has increased our customer footfall significantly. Highly recommended!"</p>
              <div className="testimonial-author">
                <strong>Mehulbhai Shah</strong>
                <span>Owner, Gokul Jawellars, Porbandar</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"અમારી ઓફિસ ડિઝાઇન ખૂબ જ સુંદર અને પ્રોફેશનલ બની છે. કામ કરવાનો આનંદ બેવડો થઈ ગયો છે. સ્ટાફ અને ક્લાઇન્ટ બંને ખૂબ પ્રભાવિત છે!"</p>
              <div className="testimonial-author">
                <strong>Dhruviben Desai</strong>
                <span>Business Owner, Rajkot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Create Something Beautiful</h2>
          <p className="section-subtitle">Get in touch to start your design journey</p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-card-body">
                  <span className="info-card-label">Visit Us</span>
                  <p className="info-card-text">Kuber Kastbhanjan Complex,<br/>Near Railway Station,<br/>Porbandar - 360575</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-card-body">
                  <span className="info-card-label">Call Us</span>
                  <p className="info-card-text">+91 98252 97632</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-card-body">
                  <span className="info-card-label">Email Us</span>
                  <p className="info-card-text">vineshkanjilodhari@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-card-body">
                  <span className="info-card-label">Working Hours</span>
                  <p className="info-card-text">Mon – Fri: 9:00 AM – 6:00 PM<br/>Sat: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-monkey">
                  <div className="footer-monkey-circle">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Monkey Logo" />
                  </div>
                </div>
                <div className="footer-logo-name">
                  <span className="footer-logo-pipe">|</span>
                  <div className="logo-text-group">
                    <span className="footer-logo-hindi-text">विनेश कानजी लोढारी</span>
                    <span className="logo-design-studio">Design Studio</span>
                  </div>
                  <span className="footer-logo-pipe">|</span>
                </div>
              </div>
              <p>Transforming spaces, elevating lifestyles.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Services</a></li>
                <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); }}>Portfolio</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' }); }}>Testimonials</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Residential Design</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Commercial Spaces</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Color Consultation</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Space Planning</a></li>
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

export default Home;
