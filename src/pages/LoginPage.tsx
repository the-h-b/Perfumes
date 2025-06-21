import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LoginPageProps {
  onLogin: (email: string, password: string) => boolean;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const success = onLogin(email, password);
      
      if (!success) {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <Navbar />
      
      <div className="login-container py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <div className="login-form">
                <h2 className="login-title">Welcome Back</h2>
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Text className="text-muted">
                      Demo accounts: user@theblendco.com / admin@theblemdco.com
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Form.Text className="text-muted">
                      Demo passwords: user123 / admin123
                    </Form.Text>
                  </Form.Group>
                  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label="Remember me" 
                      id="rememberMe" 
                    />
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-2" 
                    style={{ backgroundColor: 'var(--gold)', borderColor: 'var(--gold)' }}
                    disabled={loading}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </Form>
                
                <div className="text-center mt-4">
                  <p>Don't have an account? <Link to="/register">Create one</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Footer />
    </>
  );
};

export default LoginPage;