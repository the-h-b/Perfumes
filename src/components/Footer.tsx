import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-5" style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="mb-4" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>
              The Blend Co.
            </h3>
            <p className="mb-3">
              Crafting exquisite fragrances that tell a story. Our perfumes are a blend of art, 
              science, and emotion, designed to evoke memories and create new ones.
            </p>
            <div className="d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-facebook" style={{ color: 'var(--gold)', fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-instagram" style={{ color: 'var(--gold)', fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter" style={{ color: 'var(--gold)', fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </Col>
          
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5 className="mb-3" style={{ color: 'var(--gold)' }}>Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/collections">Collections</Link></li>
              <li className="mb-2"><Link to="/new-arrivals">New Arrivals</Link></li>
              <li className="mb-2"><Link to="/bestsellers">Bestsellers</Link></li>
              <li className="mb-2"><Link to="/gift-sets">Gift Sets</Link></li>
            </ul>
          </Col>
          
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5 className="mb-3" style={{ color: 'var(--gold)' }}>About</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/our-story">Our Story</Link></li>
              <li className="mb-2"><Link to="/ingredients">Ingredients</Link></li>
              <li className="mb-2"><Link to="/sustainability">Sustainability</Link></li>
              <li className="mb-2"><Link to="/blog">Blog</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3" style={{ color: 'var(--gold)' }}>Newsletter</h5>
            <p className="mb-3">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address" 
                aria-label="Your email address" 
              />
              <button 
                className="btn" 
                type="button" 
                style={{ backgroundColor: 'var(--gold)', color: 'var(--black)' }}
              >
                Subscribe
              </button>
            </div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Row className="mt-4">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">&copy; {currentYear} The Blend Co. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link to="/privacy-policy" className="me-3">Privacy Policy</Link>
            <Link to="/terms-of-service" className="me-3">Terms of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;