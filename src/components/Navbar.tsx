import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
        <LinkContainer to="/">
          <BootstrapNavbar.Brand className="d-flex align-items-center">
            <span style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: '1.8rem', 
              color: 'var(--gold)' 
            }}>
              The Blend Co.
            </span>
          </BootstrapNavbar.Brand>
        </LinkContainer>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/collections">
              <Nav.Link 
                className={location.pathname === '/collections' ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                Collections
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link 
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
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;