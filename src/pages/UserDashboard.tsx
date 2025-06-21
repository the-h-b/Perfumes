import { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface UserDashboardProps {
  onLogout: () => void;
}

const UserDashboard = ({ onLogout }: UserDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'user@theblendco.com',
    joinDate: 'June 15, 2023',
    orders: [
      { id: '#ORD-2023-1001', date: 'May 12, 2024', total: '$245.00', status: 'Delivered' },
      { id: '#ORD-2023-0845', date: 'April 3, 2024', total: '$120.00', status: 'Delivered' },
      { id: '#ORD-2023-0721', date: 'March 18, 2024', total: '$185.50', status: 'Delivered' }
    ],
    wishlist: [
      { id: 1, name: 'Midnight Orchid', price: '$120.00', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
      { id: 2, name: 'Golden Citrus', price: '$95.00', image: 'https://images.unsplash.com/photo-1616604847462-ad9c15c4e8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
    ],
    addresses: [
      { id: 1, type: 'Shipping', address: '123 Main St, Apt 4B, New York, NY 10001, USA', default: true },
      { id: 2, type: 'Billing', address: '123 Main St, Apt 4B, New York, NY 10001, USA', default: true }
    ]
  };
  
  // Sample recommended products
  const recommendedProducts = [
    { id: 3, name: 'Velvet Rose', price: '$135.00', image: 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Ocean Breeze', price: '$110.00', image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="dashboard-container">
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} lg={2} className="dashboard-sidebar">
            <div className="dashboard-logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--gold)' }}>The Blend Co.</h3>
              </Link>
            </div>
            
            <ul className="dashboard-nav">
              <li 
                className={`dashboard-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <i className="bi bi-grid me-2"></i> Dashboard
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="bi bi-bag me-2"></i> Orders
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <i className="bi bi-heart me-2"></i> Wishlist
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="bi bi-person me-2"></i> Profile
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <i className="bi bi-geo-alt me-2"></i> Addresses
              </li>
              <li className="dashboard-nav-item" onClick={onLogout}>
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </li>
            </ul>
          </Col>
          
          {/* Main Content */}
          <Col md={9} lg={10} className="dashboard-content">
            {/* Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Dashboard</h2>
                  <div>
                    <span className="me-2">Welcome back, {user.name}</span>
                    <Button 
                      as={Link} 
                      to="/collections" 
                      variant="outline-dark" 
                      size="sm"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
                
                <Row>
                  <Col md={4} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title">
                          <i className="bi bi-bag me-2" style={{ color: 'var(--gold)' }}></i> 
                          Recent Orders
                        </h5>
                        {user.orders.slice(0, 2).map((order, index) => (
                          <div key={index} className={`d-flex justify-content-between align-items-center ${index !== 0 ? 'mt-3' : ''}`}>
                            <div>
                              <p className="mb-0 fw-bold">{order.id}</p>
                              <small className="text-muted">{order.date}</small>
                            </div>
                            <div>
                              <Badge bg="success" className="me-2">{order.status}</Badge>
                              <span>{order.total}</span>
                            </div>
                          </div>
                        ))}
                        <Button 
                          variant="link" 
                          className="mt-3 p-0" 
                          onClick={() => setActiveTab('orders')}
                        >
                          View All Orders
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={4} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title">
                          <i className="bi bi-heart me-2" style={{ color: 'var(--gold)' }}></i> 
                          Wishlist
                        </h5>
                        {user.wishlist.map((item, index) => (
                          <div key={index} className={`d-flex align-items-center ${index !== 0 ? 'mt-3' : ''}`}>
                            <div 
                              className="me-3" 
                              style={{ width: '50px', height: '50px', overflow: 'hidden', borderRadius: '4px' }}
                            >
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                            <div>
                              <p className="mb-0 fw-bold">{item.name}</p>
                              <small>{item.price}</small>
                            </div>
                          </div>
                        ))}
                        <Button 
                          variant="link" 
                          className="mt-3 p-0" 
                          onClick={() => setActiveTab('wishlist')}
                        >
                          View Wishlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={4} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title">
                          <i className="bi bi-person-circle me-2" style={{ color: 'var(--gold)' }}></i> 
                          Account Info
                        </h5>
                        <div className="mb-3">
                          <p className="mb-1 fw-bold">Name</p>
                          <p className="mb-0">{user.name}</p>
                        </div>
                        <div className="mb-3">
                          <p className="mb-1 fw-bold">Email</p>
                          <p className="mb-0">{user.email}</p>
                        </div>
                        <div>
                          <p className="mb-1 fw-bold">Member Since</p>
                          <p className="mb-0">{user.joinDate}</p>
                        </div>
                        <Button 
                          variant="link" 
                          className="mt-3 p-0" 
                          onClick={() => setActiveTab('profile')}
                        >
                          Edit Profile
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                <h3 className="mt-4 mb-4">Recommended For You</h3>
                <Row>
                  {recommendedProducts.map((product) => (
                    <Col key={product.id} md={6} lg={3} className="mb-4">
                      <Card className="h-100 perfume-card">
                        <Card.Img 
                          variant="top" 
                          src={product.image} 
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="perfume-price">{product.price}</span>
                            <Button variant="outline-dark" size="sm">Add to Cart</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">My Orders</h2>
                </div>
                
                <Card className="dashboard-card">
                  <Card.Body>
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.orders.map((order, index) => (
                          <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.total}</td>
                            <td>
                              <Badge bg="success">{order.status}</Badge>
                            </td>
                            <td>
                              <Button variant="link" size="sm" className="p-0">View Details</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">My Wishlist</h2>
                </div>
                
                <Row>
                  {user.wishlist.map((item) => (
                    <Col key={item.id} md={6} lg={3} className="mb-4">
                      <Card className="h-100 perfume-card">
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="perfume-price">{item.price}</span>
                            <div>
                              <Button variant="outline-dark" size="sm" className="me-2">Add to Cart</Button>
                              <Button variant="outline-danger" size="sm">
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">My Profile</h2>
                </div>
                
                <Card className="dashboard-card">
                  <Card.Body>
                    <Tab.Container defaultActiveKey="personal">
                      <Nav variant="tabs" className="mb-4">
                        <Nav.Item>
                          <Nav.Link eventKey="personal">Personal Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="security">Security</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="preferences">Preferences</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      
                      <Tab.Content>
                        <Tab.Pane eventKey="personal">
                          <form>
                            <Row>
                              <Col md={6} className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" defaultValue="John" />
                              </Col>
                              <Col md={6} className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" defaultValue="Doe" />
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col md={6} className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" defaultValue={user.email} readOnly />
                              </Col>
                              <Col md={6} className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" defaultValue="+1 (555) 123-4567" />
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col md={6} className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" defaultValue="1990-01-15" />
                              </Col>
                              <Col md={6} className="mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select" defaultValue="male">
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                  <option value="prefer-not-to-say">Prefer not to say</option>
                                </select>
                              </Col>
                            </Row>
                            
                            <Button 
                              type="submit" 
                              className="mt-3" 
                              style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                            >
                              Save Changes
                            </Button>
                          </form>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="security">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">Current Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            
                            <div className="mb-3">
                              <label className="form-label">New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            
                            <div className="mb-3">
                              <label className="form-label">Confirm New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            
                            <Button 
                              type="submit" 
                              className="mt-3" 
                              style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                            >
                              Update Password
                            </Button>
                          </form>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="preferences">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">Email Notifications</label>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="orderUpdates" defaultChecked />
                                <label className="form-check-label" htmlFor="orderUpdates">
                                  Order updates
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="promotions" defaultChecked />
                                <label className="form-check-label" htmlFor="promotions">
                                  Promotions and discounts
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="newArrivals" defaultChecked />
                                <label className="form-check-label" htmlFor="newArrivals">
                                  New arrivals and collections
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="newsletter" defaultChecked />
                                <label className="form-check-label" htmlFor="newsletter">
                                  Newsletter
                                </label>
                              </div>
                            </div>
                            
                            <div className="mb-3">
                              <label className="form-label">Fragrance Preferences</label>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="floral" defaultChecked />
                                <label className="form-check-label" htmlFor="floral">
                                  Floral
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="woody" defaultChecked />
                                <label className="form-check-label" htmlFor="woody">
                                  Woody
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="oriental" />
                                <label className="form-check-label" htmlFor="oriental">
                                  Oriental
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="fresh" />
                                <label className="form-check-label" htmlFor="fresh">
                                  Fresh
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="fruity" />
                                <label className="form-check-label" htmlFor="fruity">
                                  Fruity
                                </label>
                              </div>
                            </div>
                            
                            <Button 
                              type="submit" 
                              className="mt-3" 
                              style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                            >
                              Save Preferences
                            </Button>
                          </form>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">My Addresses</h2>
                  <Button 
                    variant="outline-dark" 
                    size="sm"
                  >
                    <i className="bi bi-plus me-1"></i> Add New Address
                  </Button>
                </div>
                
                <Row>
                  {user.addresses.map((address) => (
                    <Col key={address.id} md={6} className="mb-4">
                      <Card className="dashboard-card h-100">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <h5 className="dashboard-card-title mb-0">
                              {address.type} Address
                              {address.default && (
                                <Badge bg="success" className="ms-2">Default</Badge>
                              )}
                            </h5>
                            <div>
                              <Button variant="link" className="p-0 me-2" size="sm">Edit</Button>
                              <Button variant="link" className="p-0 text-danger" size="sm">Delete</Button>
                            </div>
                          </div>
                          <p className="mb-0">{address.address}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;