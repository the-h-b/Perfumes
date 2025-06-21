import { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Nav, Tab, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data for admin dashboard
  const dashboardData = {
    totalSales: '$24,580',
    totalOrders: 187,
    totalCustomers: 142,
    totalProducts: 48,
    recentOrders: [
      { id: '#ORD-2023-1005', customer: 'Sarah Johnson', date: 'June 20, 2024', total: '$245.00', status: 'Processing' },
      { id: '#ORD-2023-1004', customer: 'Michael Chen', date: 'June 19, 2024', total: '$185.00', status: 'Shipped' },
      { id: '#ORD-2023-1003', customer: 'Emily Wilson', date: 'June 18, 2024', total: '$320.00', status: 'Delivered' },
      { id: '#ORD-2023-1002', customer: 'David Thompson', date: 'June 17, 2024', total: '$95.00', status: 'Delivered' },
      { id: '#ORD-2023-1001', customer: 'Jessica Brown', date: 'June 16, 2024', total: '$210.00', status: 'Delivered' }
    ],
    products: [
      { id: 1, name: 'Midnight Orchid', sku: 'PRF-001', category: 'Women', price: '$120.00', stock: 25, status: 'Active' },
      { id: 2, name: 'Golden Citrus', sku: 'PRF-002', category: 'Men', price: '$95.00', stock: 18, status: 'Active' },
      { id: 3, name: 'Velvet Rose', sku: 'PRF-003', category: 'Women', price: '$135.00', stock: 12, status: 'Active' },
      { id: 4, name: 'Ocean Breeze', sku: 'PRF-004', category: 'Unisex', price: '$110.00', stock: 20, status: 'Active' },
      { id: 5, name: 'Amber Wood', sku: 'PRF-005', category: 'Men', price: '$125.00', stock: 0, status: 'Out of Stock' }
    ],
    customers: [
      { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', orders: 5, spent: '$620.00', joined: 'Jan 15, 2023' },
      { id: 2, name: 'Michael Chen', email: 'michael@example.com', orders: 3, spent: '$345.00', joined: 'Feb 22, 2023' },
      { id: 3, name: 'Emily Wilson', email: 'emily@example.com', orders: 7, spent: '$890.00', joined: 'Nov 10, 2022' },
      { id: 4, name: 'David Thompson', email: 'david@example.com', orders: 2, spent: '$230.00', joined: 'Apr 5, 2023' },
      { id: 5, name: 'Jessica Brown', email: 'jessica@example.com', orders: 4, spent: '$510.00', joined: 'Mar 18, 2023' }
    ]
  };

  return (
    <div className="dashboard-container">
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} lg={2} className="dashboard-sidebar">
            <div className="dashboard-logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--gold)' }}>The Blend Co.</h3>
                <small style={{ color: 'var(--white)' }}>Admin Panel</small>
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
                className={`dashboard-nav-item ${activeTab === 'products' ? 'active' : ''}`}
                onClick={() => setActiveTab('products')}
              >
                <i className="bi bi-box me-2"></i> Products
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'customers' ? 'active' : ''}`}
                onClick={() => setActiveTab('customers')}
              >
                <i className="bi bi-people me-2"></i> Customers
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                <i className="bi bi-graph-up me-2"></i> Analytics
              </li>
              <li 
                className={`dashboard-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <i className="bi bi-gear me-2"></i> Settings
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
                  <h2 className="dashboard-title">Admin Dashboard</h2>
                  <div>
                    <span className="me-2">Welcome, Admin</span>
                    <Button 
                      variant="outline-dark" 
                      size="sm"
                      onClick={() => setActiveTab('products')}
                    >
                      <i className="bi bi-plus me-1"></i> Add Product
                    </Button>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <Row>
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="dashboard-card-title mb-0">Total Sales</h5>
                          <div 
                            style={{ 
                              backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                              width: '40px', 
                              height: '40px', 
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className="bi bi-currency-dollar" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i>
                          </div>
                        </div>
                        <h3 className="mb-0">{dashboardData.totalSales}</h3>
                        <small className="text-success">
                          <i className="bi bi-arrow-up me-1"></i> 12.5% from last month
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="dashboard-card-title mb-0">Total Orders</h5>
                          <div 
                            style={{ 
                              backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                              width: '40px', 
                              height: '40px', 
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className="bi bi-bag" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i>
                          </div>
                        </div>
                        <h3 className="mb-0">{dashboardData.totalOrders}</h3>
                        <small className="text-success">
                          <i className="bi bi-arrow-up me-1"></i> 8.3% from last month
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="dashboard-card-title mb-0">Customers</h5>
                          <div 
                            style={{ 
                              backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                              width: '40px', 
                              height: '40px', 
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className="bi bi-people" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i>
                          </div>
                        </div>
                        <h3 className="mb-0">{dashboardData.totalCustomers}</h3>
                        <small className="text-success">
                          <i className="bi bi-arrow-up me-1"></i> 5.7% from last month
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="dashboard-card-title mb-0">Products</h5>
                          <div 
                            style={{ 
                              backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                              width: '40px', 
                              height: '40px', 
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className="bi bi-box" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i>
                          </div>
                        </div>
                        <h3 className="mb-0">{dashboardData.totalProducts}</h3>
                        <small className="text-success">
                          <i className="bi bi-arrow-up me-1"></i> 3.2% from last month
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                {/* Recent Orders */}
                <Card className="dashboard-card mb-4">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="dashboard-card-title mb-0">Recent Orders</h5>
                      <Button 
                        variant="link" 
                        className="p-0" 
                        onClick={() => setActiveTab('orders')}
                      >
                        View All
                      </Button>
                    </div>
                    
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.recentOrders.map((order, index) => (
                          <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.total}</td>
                            <td>
                              <Badge 
                                bg={
                                  order.status === 'Delivered' ? 'success' : 
                                  order.status === 'Shipped' ? 'info' : 
                                  order.status === 'Processing' ? 'warning' : 'secondary'
                                }
                              >
                                {order.status}
                              </Badge>
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
                
                {/* Low Stock Products */}
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="dashboard-card-title mb-0">Low Stock Products</h5>
                      <Button 
                        variant="link" 
                        className="p-0" 
                        onClick={() => setActiveTab('products')}
                      >
                        View All Products
                      </Button>
                    </div>
                    
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>SKU</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.products
                          .filter(product => product.stock < 15)
                          .map((product, index) => (
                            <tr key={index}>
                              <td>{product.name}</td>
                              <td>{product.sku}</td>
                              <td>{product.category}</td>
                              <td>{product.price}</td>
                              <td>{product.stock}</td>
                              <td>
                                <Badge 
                                  bg={product.status === 'Active' ? 'success' : 'danger'}
                                >
                                  {product.status}
                                </Badge>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Orders Management</h2>
                  <div>
                    <Button 
                      variant="outline-dark" 
                      size="sm"
                      className="me-2"
                    >
                      <i className="bi bi-filter me-1"></i> Filter
                    </Button>
                    <Button 
                      variant="outline-dark" 
                      size="sm"
                    >
                      <i className="bi bi-download me-1"></i> Export
                    </Button>
                  </div>
                </div>
                
                <Card className="dashboard-card mb-4">
                  <Card.Body>
                    <div className="mb-4">
                      <InputGroup>
                        <Form.Control
                          placeholder="Search orders..."
                          aria-label="Search orders"
                        />
                        <Button variant="outline-secondary">
                          <i className="bi bi-search"></i>
                        </Button>
                      </InputGroup>
                    </div>
                    
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.recentOrders.map((order, index) => (
                          <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.total}</td>
                            <td>
                              <Badge 
                                bg={
                                  order.status === 'Delivered' ? 'success' : 
                                  order.status === 'Shipped' ? 'info' : 
                                  order.status === 'Processing' ? 'warning' : 'secondary'
                                }
                              >
                                {order.status}
                              </Badge>
                            </td>
                            <td>
                              <Button variant="link" size="sm" className="p-0 me-2">View</Button>
                              <Button variant="link" size="sm" className="p-0 text-danger">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>Showing 1 to 5 of 187 entries</div>
                      <nav>
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Products Tab */}
            {activeTab === 'products' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Products Management</h2>
                  <div>
                    <Button 
                      variant="gold" 
                      size="sm"
                      style={{ backgroundColor: 'var(--gold)', color: 'var(--black)' }}
                    >
                      <i className="bi bi-plus me-1"></i> Add New Product
                    </Button>
                  </div>
                </div>
                
                <Card className="dashboard-card mb-4">
                  <Card.Body>
                    <div className="mb-4 d-flex justify-content-between">
                      <InputGroup className="w-50">
                        <Form.Control
                          placeholder="Search products..."
                          aria-label="Search products"
                        />
                        <Button variant="outline-secondary">
                          <i className="bi bi-search"></i>
                        </Button>
                      </InputGroup>
                      
                      <div>
                        <Button 
                          variant="outline-dark" 
                          size="sm"
                          className="me-2"
                        >
                          <i className="bi bi-filter me-1"></i> Filter
                        </Button>
                        <Button 
                          variant="outline-dark" 
                          size="sm"
                        >
                          <i className="bi bi-download me-1"></i> Export
                        </Button>
                      </div>
                    </div>
                    
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>SKU</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.products.map((product, index) => (
                          <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                              <Badge 
                                bg={product.status === 'Active' ? 'success' : 'danger'}
                              >
                                {product.status}
                              </Badge>
                            </td>
                            <td>
                              <Button variant="link" size="sm" className="p-0 me-2">Edit</Button>
                              <Button variant="link" size="sm" className="p-0 text-danger">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>Showing 1 to 5 of 48 entries</div>
                      <nav>
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Customers Management</h2>
                  <div>
                    <Button 
                      variant="outline-dark" 
                      size="sm"
                      className="me-2"
                    >
                      <i className="bi bi-filter me-1"></i> Filter
                    </Button>
                    <Button 
                      variant="outline-dark" 
                      size="sm"
                    >
                      <i className="bi bi-download me-1"></i> Export
                    </Button>
                  </div>
                </div>
                
                <Card className="dashboard-card mb-4">
                  <Card.Body>
                    <div className="mb-4">
                      <InputGroup>
                        <Form.Control
                          placeholder="Search customers..."
                          aria-label="Search customers"
                        />
                        <Button variant="outline-secondary">
                          <i className="bi bi-search"></i>
                        </Button>
                      </InputGroup>
                    </div>
                    
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Orders</th>
                          <th>Total Spent</th>
                          <th>Joined</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardData.customers.map((customer, index) => (
                          <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.orders}</td>
                            <td>{customer.spent}</td>
                            <td>{customer.joined}</td>
                            <td>
                              <Button variant="link" size="sm" className="p-0 me-2">View</Button>
                              <Button variant="link" size="sm" className="p-0 text-danger">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>Showing 1 to 5 of 142 entries</div>
                      <nav>
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )}
            
            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Analytics</h2>
                  <div>
                    <select className="form-select form-select-sm">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>This year</option>
                    </select>
                  </div>
                </div>
                
                <Row>
                  <Col lg={8} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title mb-4">Sales Overview</h5>
                        <div className="text-center py-5">
                          <p>Sales chart will be displayed here</p>
                          <p className="text-muted">This is a placeholder for a chart component</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col lg={4} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title mb-4">Top Selling Products</h5>
                        <div className="mb-4">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Midnight Orchid</span>
                            <span>32%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '32%', backgroundColor: 'var(--gold)' }} 
                              aria-valuenow={32} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Velvet Rose</span>
                            <span>28%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '28%', backgroundColor: 'var(--gold)' }} 
                              aria-valuenow={28} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Golden Citrus</span>
                            <span>21%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '21%', backgroundColor: 'var(--gold)' }} 
                              aria-valuenow={21} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Ocean Breeze</span>
                            <span>15%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '15%', backgroundColor: 'var(--gold)' }} 
                              aria-valuenow={15} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="d-flex justify-content-between mb-2">
                            <span>Amber Wood</span>
                            <span>4%</span>
                          </div>
                          <div className="progress">
                            <div 
                              className="progress-bar" 
                              role="progressbar" 
                              style={{ width: '4%', backgroundColor: 'var(--gold)' }} 
                              aria-valuenow={4} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title mb-4">Sales by Category</h5>
                        <div className="text-center py-5">
                          <p>Category chart will be displayed here</p>
                          <p className="text-muted">This is a placeholder for a chart component</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <Card className="dashboard-card h-100">
                      <Card.Body>
                        <h5 className="dashboard-card-title mb-4">Customer Demographics</h5>
                        <div className="text-center py-5">
                          <p>Demographics chart will be displayed here</p>
                          <p className="text-muted">This is a placeholder for a chart component</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <>
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Settings</h2>
                </div>
                
                <Card className="dashboard-card">
                  <Card.Body>
                    <Tab.Container defaultActiveKey="general">
                      <Row>
                        <Col md={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="general">General</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="store">Store</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="shipping">Shipping</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="payment">Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="email">Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="account">Account</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        
                        <Col md={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="general">
                              <h4 className="mb-4">General Settings</h4>
                              <Form>
                                <Form.Group className="mb-3">
                                  <Form.Label>Store Name</Form.Label>
                                  <Form.Control type="text" defaultValue="The Blend Co." />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Store Email</Form.Label>
                                  <Form.Control type="email" defaultValue="info@theblendco.com" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Store Phone</Form.Label>
                                  <Form.Control type="tel" defaultValue="+1 (555) 123-4567" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Store Address</Form.Label>
                                  <Form.Control as="textarea" rows={3} defaultValue="123 Perfume Lane, Suite 101, New York, NY 10001, USA" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Currency</Form.Label>
                                  <Form.Select defaultValue="usd">
                                    <option value="usd">USD ($)</option>
                                    <option value="eur">EUR (€)</option>
                                    <option value="gbp">GBP (£)</option>
                                  </Form.Select>
                                </Form.Group>
                                
                                <Button 
                                  type="submit" 
                                  style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                                >
                                  Save Changes
                                </Button>
                              </Form>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="store">
                              <h4 className="mb-4">Store Settings</h4>
                              <Form>
                                <Form.Group className="mb-3">
                                  <Form.Label>Default Language</Form.Label>
                                  <Form.Select defaultValue="en">
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    <option value="es">Spanish</option>
                                  </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Timezone</Form.Label>
                                  <Form.Select defaultValue="est">
                                    <option value="est">Eastern Time (EST)</option>
                                    <option value="cst">Central Time (CST)</option>
                                    <option value="mst">Mountain Time (MST)</option>
                                    <option value="pst">Pacific Time (PST)</option>
                                  </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Check 
                                    type="switch"
                                    id="enableReviews"
                                    label="Enable Product Reviews"
                                    defaultChecked
                                  />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Check 
                                    type="switch"
                                    id="enableWishlist"
                                    label="Enable Wishlist Feature"
                                    defaultChecked
                                  />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Check 
                                    type="switch"
                                    id="enableInventory"
                                    label="Enable Inventory Management"
                                    defaultChecked
                                  />
                                </Form.Group>
                                
                                <Button 
                                  type="submit" 
                                  style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                                >
                                  Save Changes
                                </Button>
                              </Form>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="shipping">
                              <h4 className="mb-4">Shipping Settings</h4>
                              <p>Configure shipping methods and rates here.</p>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="payment">
                              <h4 className="mb-4">Payment Settings</h4>
                              <p>Configure payment gateways and options here.</p>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="email">
                              <h4 className="mb-4">Email Settings</h4>
                              <p>Configure email templates and notifications here.</p>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="account">
                              <h4 className="mb-4">Account Settings</h4>
                              <Form>
                                <Form.Group className="mb-3">
                                  <Form.Label>Admin Email</Form.Label>
                                  <Form.Control type="email" defaultValue="admin@theblemdco.com" readOnly />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Current Password</Form.Label>
                                  <Form.Control type="password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>New Password</Form.Label>
                                  <Form.Control type="password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                  <Form.Label>Confirm New Password</Form.Label>
                                  <Form.Control type="password" />
                                </Form.Group>
                                
                                <Button 
                                  type="submit" 
                                  style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                                >
                                  Update Password
                                </Button>
                              </Form>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;