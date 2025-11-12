import React, { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('introduction');
  const [menuOpen, setMenuOpen] = useState(false);

  const projectSections = [
    { id: 'introduction', name: 'Introduction' },
    { id: 'product-design', name: 'Product Design' },
    { id: 'embedded-design', name: 'Embedded Design' },
    { id: 'iteration-plan', name: 'Iteration Plan' }
  ];

  const mainSections = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About Me', link: '/' },
    { id: 'projects', name: 'Projects', link: '/projects' },
    { id: 'internship', name: 'Internship', link: '/internship' },
    { id: 'music', name: 'Music', link: '/music' },
    { id: 'contact', name: 'Contact', link: '/contact' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive personal website built with React and TypeScript. Features clean design, smooth animations, and mobile-first approach.',
      image: '💻',
      category: 'web',
      technologies: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      status: 'completed'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user management, product catalog, shopping cart, and payment integration.',
      image: '🛒',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Music Streaming App',
      description: 'Cross-platform music player with online streaming, local music management, and playlist features.',
      image: '🎵',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Spotify API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'UI Design System',
      description: 'Comprehensive design system for team collaboration, including buttons, forms, navigation, and other components.',
      image: '🎨',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Task Management Tool',
      description: 'Team collaboration platform for project management, task assignment, and progress tracking.',
      image: '📋',
      category: 'web',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      status: 'completed'
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'Enterprise-level data analysis and visualization platform with real-time updates and multiple chart types.',
      image: '📊',
      category: 'web',
      technologies: ['D3.js', 'React', 'Python', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      status: 'completed'
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#ffffff';
      case 'in-progress': return '#cccccc';
      case 'planned': return '#999999';
      default: return '#666';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return 'Unknown';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000000' }}>
      {/* Top Navigation Bar */}
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
          {/* Left side - Project sections */}
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center'
          }}>
            {projectSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedCategory(section.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: selectedCategory === section.id ? '#ffffff' : '#999',
                  fontSize: '16px',
                  fontWeight: selectedCategory === section.id ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  borderBottom: selectedCategory === section.id ? '2px solid #ffffff' : '2px solid transparent',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== section.id) {
                    e.target.style.color = '#999';
                  }
                }}
              >
                {section.name}
              </button>
            ))}
          </div>

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

      {/* Introduction Section */}
      {selectedCategory === 'introduction' && (
        <section style={{
          padding: '80px 0',
          background: '#000000',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            {/* Title */}
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#ffffff',
              textAlign: 'center'
            }}>
              Introduction
            </h2>

            {/* Image Section - Above Text */}
            <div style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto 60px auto',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #ddd',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              lineHeight: 0,
              fontSize: 0
            }}>
              <img
                src="/images/project/intro.jpg"
                alt="Project Introduction"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  verticalAlign: 'bottom'
                }}
              />
            </div>

            {/* Text Section */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto 80px auto'
            }}>
              <div style={{
                color: '#ffffff',
                fontSize: '17px',
                lineHeight: '2',
                letterSpacing: '0.5px',
                textAlign: 'left'
              }}>
                <p style={{ marginBottom: '20px' }}>
                  As society advances and the pace of life accelerates, people face dual pressures from work and family while increasingly pursuing higher quality of life. Smart home products, with their convenience and efficiency, have gradually become the preferred choice for modern households. Against this backdrop, we have conceived an automated plant watering system deeply integrating IoT technology with modern agricultural science, aiming to provide urban dwellers with a revolutionary potted plant cultivation experience.
                </p>

                <p style={{ marginBottom: '20px' }}>
                  Traditional potted plant care is complex, demanding strict attention to factors like light intensity, water supply, temperature control, soil texture, and nutrient replenishment. However, the fast pace of modern life often makes it difficult for people to devote sufficient energy to meticulous plant management, leading to damage from improper care.
                </p>

                <p style={{ marginBottom: '20px' }}>
                  To address this, our automated potted plant management system integrates advanced IoT technology to monitor and precisely regulate key growth factors like light, water, temperature, soil texture, and nutrients in real time. Users can easily set threshold values for each parameter via a dedicated mobile app, enabling remote intelligent management of the plant's environment. Additionally, the system features high-defined video monitoring, allowing users to observe their plants' growth status anytime, anywhere, and enjoy the pleasure of gardening enhanced by technology.
                </p>

                <p>
                  The application of this system not only significantly improves the survival rate and growth quality of potted plants but also effectively frees up users' time and energy by simplifying the maintenance process, thereby enhancing their quality of life and efficiency.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div style={{
              width: '100%',
              maxWidth: '450px',
              margin: '0 auto'
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Project Demo
              </h3>

              <div style={{
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                background: '#000000'
              }}>
                <iframe
                  src="https://drive.google.com/file/d/1UCChwu6iheKNKn_dqbrnZrufIlO4bvVd/preview"
                  style={{
                    width: '100%',
                    height: '600px',
                    border: 'none',
                    display: 'block'
                  }}
                  allow="autoplay"
                  title="Demo Video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Design Section */}
      {selectedCategory === 'product-design' && (
        <section style={{
          padding: '80px 0',
          background: '#000000',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '80px',
              textAlign: 'center'
            }}>
              Product Design
            </h2>

            {/* Main Content Layout - Left: Text, Right: Large Image */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 0.8fr',
              gap: '60px',
              alignItems: 'end',
              marginBottom: '80px'
            }}>
              {/* Left Side - Text Content */}
              <div style={{
                paddingLeft: '40px'
              }}>
                {/* Design Highlights Section */}
                <div style={{ marginBottom: '60px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '25px'
                  }}>
                    Design Highlights:
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {[
                      {
                        title: 'Energy Efficient',
                        desc: 'The system uses low-power hardware and intelligent algorithms to ensure precise care while minimizing energy consumption.'
                      },
                      {
                        title: 'Intelligent Management',
                        desc: 'The system monitors the plant growth environment in real-time through integrated advanced sensors, automatically watering to reduce water waste.'
                      },
                      {
                        title: 'Personalized Customization',
                        desc: 'Users can choose the most suitable care plan based on their preferences and plant types.'
                      },
                      {
                        title: 'Recycling Utilization',
                        desc: 'Uses eco-friendly materials as carriers to reduce environmental pollution.'
                      }
                    ].map((highlight, index) => (
                      <div key={index} style={{
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '8px',
                          width: '6px',
                          height: '6px',
                          background: '#000000',
                          borderRadius: '50%'
                        }}></span>
                        <div>
                          <span style={{
                            fontSize: '17px',
                            fontWeight: '600',
                            color: '#ffffff'
                          }}>
                            {highlight.title}：
                          </span>
                          <span style={{
                            fontSize: '17px',
                            color: '#ffffff',
                            lineHeight: '1.6'
                          }}>
                            {highlight.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Small Images Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px'
                }}>
                  <div style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #ddd',
                    lineHeight: 0,
                    fontSize: 0
                  }}>
                    <img
                      src="/images/project/product1.png"
                      alt="产品图1"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        verticalAlign: 'bottom'
                      }}
                    />
                  </div>
                  <div style={{
                    lineHeight: 0,
                    fontSize: 0
                  }}>
                    <img
                      src="/images/project/product2.png"
                      alt="产品图2"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        verticalAlign: 'bottom'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Large Image */}
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: 0,
                fontSize: 0
              }}>
                <img
                  src="/images/project/product3.png"
                  alt="智能盆栽系统主图"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    verticalAlign: 'bottom'
                  }}
                />
              </div>
            </div>

            {/* Product Features Section - Centered with Interactive Cards */}
            <div style={{
              maxWidth: '1100px',
              margin: '0 auto 80px auto',
              padding: '0 40px'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '50px',
                textAlign: 'center'
              }}>
                Product Features
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '25px'
              }}>
                {[
                  { number: '01', title: 'Smart Watering', desc: 'Soil moisture monitoring with automatic watering based on moisture levels' },
                  { number: '02', title: 'CO₂ Monitoring', desc: 'Real-time detection of carbon dioxide concentration' },
                  { number: '03', title: 'Light Management', desc: 'Ambient light monitoring with automatic shading and supplemental lighting' },
                  { number: '04', title: 'Temperature Control', desc: 'Automatic ventilation and cooling based on temperature' },
                  { number: '05', title: 'Remote Monitoring', desc: 'Remote video monitoring to view plant growth status in real-time' },
                  { number: '06', title: 'Status Display', desc: 'Display screen showing monitoring status and data in real-time' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '35px 25px',
                      background: 'transparent',
                      borderRadius: '12px',
                      border: '1px solid #ddd',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#000000';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                      const number = e.currentTarget.querySelector('.feature-number');
                      if (number) {
                        number.style.color = '#000000';
                        number.style.transform = 'scale(1.1)';
                      }
                      const line = e.currentTarget.querySelector('.feature-line');
                      if (line) {
                        line.style.width = '100%';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#ddd';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                      const number = e.currentTarget.querySelector('.feature-number');
                      if (number) {
                        number.style.color = '#ccc';
                        number.style.transform = 'scale(1)';
                      }
                      const line = e.currentTarget.querySelector('.feature-line');
                      if (line) {
                        line.style.width = '40px';
                      }
                    }}
                  >
                    <div
                      className="feature-number"
                      style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#ccc',
                        marginBottom: '15px',
                        transition: 'all 0.4s ease',
                        fontFamily: 'monospace'
                      }}
                    >
                      {feature.number}
                    </div>
                    <div
                      className="feature-line"
                      style={{
                        width: '40px',
                        height: '2px',
                        background: '#000000',
                        marginBottom: '20px',
                        transition: 'all 0.4s ease'
                      }}
                    ></div>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '12px'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#999',
                      lineHeight: '1.8'
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Embedded Design Section */}
      {selectedCategory === 'embedded-design' && (
        <section style={{
          padding: '80px 0',
          background: '#000000',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '80px',
              textAlign: 'center'
            }}>
              Embedded Design
            </h2>

            {/* Hardware Components Display */}
            <div style={{
              background: '#000000',
              position: 'relative',
              minHeight: '700px',
              margin: '0 auto'
            }}>
              {/* Arduino Uno - Center */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 10
              }}>
                <img
                  src="/images/project/Arduino uno.webp"
                  alt="Arduino Uno"
                  style={{
                    width: '320px',
                    height: 'auto',
                    marginBottom: '15px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                  }}
                />
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#ffffff'
                }}>
                  Arduino Uno
                </div>
              </div>

              {/* Top Left - Moisture Sensor */}
              <div style={{
                position: 'absolute',
                left: '10%',
                top: '10%',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/moisture sensor.jpeg"
                  alt="Soil Moisture Sensor"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  Soil Moisture Sensor
                </div>
              </div>

              {/* Top Center - DHT11 */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0%',
                transform: 'translateX(-50%)',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/dht11.jpg"
                  alt="DHT11 Temperature & Humidity"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  DHT11 Temp & Humidity
                </div>
              </div>

              {/* Top Right - GY30 */}
              <div style={{
                position: 'absolute',
                right: '10%',
                top: '10%',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/GY30.jpg"
                  alt="GY30 Light Sensor"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  GY30 Light Sensor
                </div>
              </div>

              {/* Left - Servo */}
              <div style={{
                position: 'absolute',
                left: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/servo.jpeg"
                  alt="Servo Motor"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  Servo Motor
                </div>
              </div>

              {/* Right - Relay */}
              <div style={{
                position: 'absolute',
                right: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/relay.jpg"
                  alt="Relay"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  Relay
                </div>
              </div>

              {/* Bottom Left - Buzzer */}
              <div style={{
                position: 'absolute',
                left: '10%',
                bottom: '10%',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/buzzer.jpg"
                  alt="Buzzer"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  Buzzer
                </div>
              </div>

              {/* Bottom Center - RGB LED */}
              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: '0%',
                transform: 'translateX(-50%)',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/RGB LED.webp"
                  alt="RGB LED"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  RGB LED
                </div>
              </div>

              {/* Bottom Right - OLED Display */}
              <div style={{
                position: 'absolute',
                right: '10%',
                bottom: '10%',
                textAlign: 'center'
              }}>
                <img
                  src="/images/project/OLED.jpg"
                  alt="OLED Display"
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                  OLED Display
                </div>
              </div>

              {/* Connecting Lines */}
              <svg style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
              }}>
                {/* Lines from components to Arduino center */}
                <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="50%" y1="10%" x2="50%" y2="45%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="10%" y1="50%" x2="42%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="90%" y1="50%" x2="58%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="15%" y1="85%" x2="50%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="50%" y1="90%" x2="50%" y2="55%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#444" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </section>
      )}

      {/* Iteration Plan Section */}
      {selectedCategory === 'iteration-plan' && (
        <section style={{
          padding: '80px 0',
          background: '#000000',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '80px',
              textAlign: 'center'
            }}>
              Iteration Plan
            </h2>

            {/* Main Content Layout - Left: Text, Right: Image */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '80px',
              alignItems: 'start'
            }}>
              {/* Left Side - Iteration Content */}
              <div>
                {/* Appearance Section */}
                <div style={{ marginBottom: '50px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#999',
                      fontFamily: 'monospace'
                    }}>01</span>
                    Appearance
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    color: '#ffffff',
                    lineHeight: '1.8',
                    paddingLeft: '36px'
                  }}>
                    Optimize components and appearance design to be more suitable for home placement
                  </p>
                </div>

                {/* Hardware Section */}
                <div style={{ marginBottom: '50px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#999',
                      fontFamily: 'monospace'
                    }}>02</span>
                    Hardware
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    color: '#ffffff',
                    lineHeight: '1.8',
                    paddingLeft: '36px'
                  }}>
                    Improve sensor accuracy by upgrading to higher-precision sensors
                  </p>
                </div>

                {/* Software Section */}
                <div style={{ marginBottom: '50px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#999',
                      fontFamily: 'monospace'
                    }}>03</span>
                    Software
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    color: '#ffffff',
                    lineHeight: '1.8',
                    paddingLeft: '36px'
                  }}>
                    All data can be uploaded to the cloud, viewable and controllable through a mobile app
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                lineHeight: 0,
                fontSize: 0,
                position: 'sticky',
                top: '100px'
              }}>
                <img
                  src="/images/project/iteration.jpeg"
                  alt="Iteration Plan Design"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    verticalAlign: 'bottom'
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Old Projects Grid - keeping for reference, you can remove later */}
      <section style={{
        padding: '100px 0',
        background: '#000000',
        display: 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {filteredProjects.map((project) => (
              <div key={project.id} style={{
                background: '#1a1a1a',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 20px 60px rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 40px rgba(255,255,255,0.05)';
              }}>
                {/* Project Image */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #333 0%, #000 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <span style={{
                      padding: '5px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      background: getStatusColor(project.status),
                      color: 'white'
                    }}>
                      {getStatusText(project.status)}
                    </span>
                    {project.featured && (
                      <span style={{
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        background: '#000000',
                        color: '#ffffff'
                      }}>
                        Featured
                      </span>
                    )}
                  </div>
                  {project.image}
                </div>

                {/* Project Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: '15px'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#999',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    fontSize: '0.95rem'
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '25px'
                  }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={{
                        padding: '5px 12px',
                        background: '#000',
                        color: '#999',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid #333'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    gap: '15px'
                  }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px 20px',
                        background: '#000',
                        color: '#999',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem',
                        border: '1px solid #333'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#000';
                        e.target.style.color = '#999';
                      }}
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px 20px',
                        background: '#000',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>
                🔍
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '10px'
              }}>
                No projects found
              </h3>
              <p style={{
                color: '#999'
              }}>
                Try adjusting your filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Projects;