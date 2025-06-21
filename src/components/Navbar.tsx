import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <BootstrapNavbar 
      expand="lg" 
      className="py-3" 
      style={{ 
        backgroundColor: location.pathname === '/' ? 'transparent' : 'var(--black)',
        position: location.pathname === '/' ? 'absolute' : 'relative',
        width: '100%',
        zIndex: 1000,
      }}
      variant="dark"
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '1.8rem', 
            color: 'var(--gold)' 
          }}>
            The Blend Co.
          </span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/collections" 
              className={location.pathname === '/collections' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Collections
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/login" 
              className={`ms-lg-3 ${location.pathname === '/login' ? 'active' : ''}`}
              style={{ 
                backgroundColor: 'var(--gold)', 
                color: 'var(--black)', 
                borderRadius: '4px',
                padding: '0.5rem 1.5rem',
              }}
              onClick={() => setExpanded(false)}
            >
              Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;