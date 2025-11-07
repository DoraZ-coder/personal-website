import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mainSections = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About Me', link: '/' },
    { id: 'projects', name: 'Projects', link: '/projects' },
    { id: 'internship', name: 'Internship', link: '/internship' },
    { id: 'music', name: 'Music', link: '/music' },
    { id: 'contact', name: 'Contact', link: '/contact' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS configuration
    const serviceId = 'service_qep8w3m';
    const templateId = 'template_o1d3zlj';
    const publicKey = 'tqaz-8MOtAbdGsj57';

    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully! I will reply to you soon.');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again or contact me directly via email.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Top Navigation Bar - Menu Only */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        borderBottom: '1px solid #333',
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          {/* Left side - Title */}
          <h1 style={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: '600',
            margin: 0,
            letterSpacing: '0.5px'
          }}>
            Contact
          </h1>

          {/* Right side - Menu button */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: '2px solid #ffffff',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              Menu {menuOpen ? '▲' : '▼'}
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                border: '1px solid #333',
                borderRadius: '15px',
                minWidth: '200px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}>
                {mainSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={section.link}
                    style={{
                      display: 'block',
                      padding: '15px 25px',
                      color: '#999',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      borderBottom: index < mainSections.length - 1 ? '1px solid #222' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1a1a1a';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#999';
                    }}
                  >
                    {section.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Content area with padding for fixed nav */}
      <div style={{ paddingTop: '70px' }}>

        {/* Hero Section */}
        <section style={{
          padding: '100px 0 80px 0',
          background: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Get In Touch
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              I'd love to hear from you. Whether you have a question or just want to say hi, feel free to drop a message.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{
          padding: '80px 0',
          background: '#ffffff'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              {/* Name Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: '10px',
                  letterSpacing: '0.5px'
                }}>
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: '#ffffff',
                    color: '#000'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#000';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e0e0e0';
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: '10px',
                  letterSpacing: '0.5px'
                }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: '#ffffff',
                    color: '#000'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#000';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e0e0e0';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: '10px',
                  letterSpacing: '0.5px'
                }}>
                  HOW CAN I HELP?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    background: '#ffffff',
                    color: '#000',
                    lineHeight: '1.6'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#000';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e0e0e0';
                  }}
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                style={{
                  background: isSending ? '#666' : '#000',
                  color: '#fff',
                  border: 'none',
                  padding: '18px 40px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSending ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px',
                  opacity: isSending ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSending) {
                    e.target.style.background = '#333';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = isSending ? '#666' : '#000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>

            {/* Contact Info */}
            <div style={{
              marginTop: '80px',
              paddingTop: '40px',
              borderTop: '1px solid #f0f0f0',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '14px',
                color: '#999',
                marginBottom: '15px'
              }}>
                Or reach me directly at
              </p>
              <a
                href="mailto:jojotongzhou@gmail.com"
                style={{
                  fontSize: '18px',
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#666';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#000';
                }}
              >
                jojotongzhou@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
