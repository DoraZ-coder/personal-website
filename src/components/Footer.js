import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#333',
      color: 'white',
      padding: '60px 0 30px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              About Me
            </h3>
            <p style={{
              color: '#ccc',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              A passionate developer who loves creating meaningful digital experiences. 
              Always learning, always growing.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                background: '#444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#444';
                e.target.style.transform = 'translateY(0)';
              }}>
                🐙
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                background: '#444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0077b5';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#444';
                e.target.style.transform = 'translateY(0)';
              }}>
                💼
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                background: '#444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#e4405f';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#444';
                e.target.style.transform = 'translateY(0)';
              }}>
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Quick Links
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="/about" style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ccc';
                e.target.style.paddingLeft = '0';
              }}>
                About Me
              </a>
              <a href="/projects" style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ccc';
                e.target.style.paddingLeft = '0';
              }}>
                My Projects
              </a>
              <a href="/internship" style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ccc';
                e.target.style.paddingLeft = '0';
              }}>
                Internship Diary
              </a>
              <a href="/contact" style={{
                color: '#ccc',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#667eea';
                e.target.style.paddingLeft = '10px';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ccc';
                e.target.style.paddingLeft = '0';
              }}>
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Contact Info
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ccc',
                fontSize: '0.95rem'
              }}>
                <span>📧</span>
                <span>your-email@example.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ccc',
                fontSize: '0.95rem'
              }}>
                <span>📞</span>
                <span>+86 138-0000-0000</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ccc',
                fontSize: '0.95rem'
              }}>
                <span>📍</span>
                <span>Beijing, China</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Stay Updated
            </h3>
            <p style={{
              color: '#ccc',
              marginBottom: '20px',
              fontSize: '0.95rem'
            }}>
              Subscribe to get updates on my latest projects and blog posts.
            </p>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px 15px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button style={{
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #444',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            color: '#ccc',
            fontSize: '0.9rem'
          }}>
            © {currentYear} My Personal Website. All rights reserved.
          </div>
          <div style={{
            display: 'flex',
            gap: '30px',
            fontSize: '0.9rem'
          }}>
            <a href="/privacy" style={{
              color: '#ccc',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#ccc';
            }}>
              Privacy Policy
            </a>
            <a href="/terms" style={{
              color: '#ccc',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#ccc';
            }}>
              Terms of Service
            </a>
            <a href="/sitemap" style={{
              color: '#ccc',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#ccc';
            }}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;