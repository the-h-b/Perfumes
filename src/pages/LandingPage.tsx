import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  // Sample featured perfumes data
  const featuredPerfumes = [
    {
      id: 1,
      name: 'Midnight Orchid',
      description: 'A mysterious blend of rare orchids, vanilla, and amber.',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Golden Citrus',
      description: 'Vibrant notes of bergamot, lemon, and mandarin with a hint of musk.',
      price: '$95',
      image: 'https://images.unsplash.com/photo-1616604847462-ad9c15c4e8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Velvet Rose',
      description: 'Luxurious blend of Bulgarian roses, peony, and sandalwood.',
      price: '$135',
      image: 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1596203721435-99e556ab67fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="hero-title">Discover Your Signature Scent</h1>
          <p className="hero-subtitle">Handcrafted luxury perfumes that tell your unique story</p>
          <LinkContainer to="/collections">
            <Button 
              className="btn-gold px-4 py-2"
              style={{ fontSize: '1.1rem' }}
            >
              Explore Collections
            </Button>
          </LinkContainer>
        </Container>
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-section py-5">
        <Container>
          <h2 className="section-title">Featured Fragrances</h2>
          <Row>
            {featuredPerfumes.map(perfume => (
              <Col key={perfume.id} lg={4} md={6} className="mb-4">
                <Card className="perfume-card h-100">
                  <Card.Img variant="top" src={perfume.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{perfume.name}</Card.Title>
                    <Card.Text>{perfume.description}</Card.Text>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="perfume-price">{perfume.price}</span>
                      <Button variant="outline-dark" size="sm">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <LinkContainer to="/collections">
              <Button 
                className="btn-outline-gold px-4 py-2"
              >
                View All Collections
              </Button>
            </LinkContainer>
          </div>
        </Container>
      </section>
      
      {/* Story Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--black)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Perfume crafting" 
                className="img-fluid rounded"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={6} className="px-lg-5">
              <h2 className="mb-4" style={{ color: 'var(--gold)' }}>Our Story</h2>
              <p className="mb-4" style={{ color: 'var(--white)' }}>
                At The Blend Co., we believe that fragrance is an invisible but powerful accessory. 
                Founded in 2010, our journey began with a passion for creating scents that evoke emotions, 
                memories, and dreams.
              </p>
              <p className="mb-4" style={{ color: 'var(--white)' }}>
                Each perfume is meticulously crafted using the finest ingredients sourced from around the world. 
                Our master perfumers blend art and science to create fragrances that are both timeless and contemporary.
              </p>
              <LinkContainer to="/our-story">
                <Button 
                  className="btn-outline-gold"
                >
                  Learn More
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Collection Categories */}
      <section className="py-5">
        <Container>
          <h2 className="section-title">Explore Our Collections</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div 
                className="position-relative rounded overflow-hidden" 
                style={{ height: '300px' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="For Her" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div 
                  className="position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <h3 className="text-white mb-3">For Her</h3>
                  <LinkContainer to="/collections/women">
                    <Button 
                      className="btn-outline-gold"
                      style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
                    >
                      Explore
                    </Button>
                  </LinkContainer>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div 
                className="position-relative rounded overflow-hidden" 
                style={{ height: '300px' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="For Him" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div 
                  className="position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <h3 className="text-white mb-3">For Him</h3>
                  <LinkContainer to="/collections/men">
                    <Button 
                      className="btn-outline-gold"
                      style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
                    >
                      Explore
                    </Button>
                  </LinkContainer>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div 
                className="position-relative rounded overflow-hidden" 
                style={{ height: '300px' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Unisex" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div 
                  className="position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <h3 className="text-white mb-3">Unisex</h3>
                  <LinkContainer to="/collections/unisex">
                    <Button 
                      className="btn-outline-gold"
                      style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
                    >
                      Explore
                    </Button>
                  </LinkContainer>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <h2 className="section-title">What Our Customers Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className="bi bi-star-fill me-1" 
                        style={{ color: 'var(--gold)' }}
                      ></i>
                    ))}
                  </div>
                  <Card.Text className="mb-4">
                    "The Midnight Orchid perfume is absolutely divine! I receive compliments every time I wear it. 
                    The scent lasts all day and evolves beautifully. Truly worth every penny."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle overflow-hidden me-3" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      <img 
                        src="https://randomuser.me/api/portraits/women/12.jpg" 
                        alt="Customer" 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-0">Sarah Johnson</h6>
                      <small className="text-muted">Loyal Customer</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className="bi bi-star-fill me-1" 
                        style={{ color: 'var(--gold)' }}
                      ></i>
                    ))}
                  </div>
                  <Card.Text className="mb-4">
                    "Golden Citrus has become my signature scent. It's fresh, sophisticated, and perfect for both 
                    day and evening wear. The packaging is also exquisite. Highly recommend!"
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle overflow-hidden me-3" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Customer" 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-0">Michael Chen</h6>
                      <small className="text-muted">Verified Buyer</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className="bi bi-star-fill me-1" 
                        style={{ color: 'var(--gold)' }}
                      ></i>
                    ))}
                  </div>
                  <Card.Text className="mb-4">
                    "I purchased Velvet Rose as a gift for my wife, and she absolutely loves it! The fragrance is 
                    elegant and romantic. The customer service was exceptional too. Will definitely shop again."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle overflow-hidden me-3" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      <img 
                        src="https://randomuser.me/api/portraits/men/67.jpg" 
                        alt="Customer" 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h6 className="mb-0">David Thompson</h6>
                      <small className="text-muted">Repeat Customer</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Newsletter Section */}
      <section 
        className="py-5" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div 
          className="position-absolute top-0 left-0 w-100 h-100" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        ></div>
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-white">
              <h2 className="mb-4" style={{ color: 'var(--gold)' }}>Join Our Newsletter</h2>
              <p className="mb-4">
                Subscribe to receive updates on new collections, exclusive offers, and fragrance tips.
              </p>
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
              <p className="small">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from The Blend Co.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default LandingPage;