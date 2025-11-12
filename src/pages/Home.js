import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Home', path: '/', color: '#ffffff' },
    { id: 'about', name: 'About Me', path: '#about', color: '#ffffff' },
    { id: 'projects', name: 'Projects', path: '/projects', color: '#ffffff' },
    { id: 'internship', name: 'Internship', path: '/internship', color: '#ffffff' },
    { id: 'music', name: 'Music', path: '/music', color: '#ffffff' },
    { id: 'contact', name: 'Contact', path: '/contact', color: '#ffffff' }
  ];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Track active section for potential future use
          console.log('Active section:', entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll highlight effect for About section
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('scroll-container');
      if (!container) return;

      const scrollTop = container.scrollTop;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollTop + viewportHeight / 2;

      const paragraphs = document.querySelectorAll('[data-scroll-index]');
      paragraphs.forEach((p) => {
        const rect = p.getBoundingClientRect();
        const elementTop = scrollTop + rect.top;
        const elementCenter = elementTop + rect.height / 2;

        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        const threshold = viewportHeight / 8;

        if (distanceFromCenter < threshold) {
          p.style.color = '#000';
          p.style.opacity = '1';
        } else {
          p.style.color = 'rgba(255, 255, 255, 0.3)';
          p.style.opacity = '0.5';
        }
      });
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      id="scroll-container"
      style={{
        width: '100%',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        background: '#000000',
      }}
    >
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
          <h1 style={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: '600',
            margin: 0,
            letterSpacing: '0.5px',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('home')}
          >
            Tongzhou Zhang
          </h1>

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
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    onClick={() => {
                      if (section.path.startsWith('#')) {
                        scrollToSection(section.id);
                      } else if (section.path === '/') {
                        scrollToSection('home');
                      } else {
                        navigate(section.path);
                      }
                      setMenuOpen(false);
                    }}
                    style={{
                      padding: '15px 25px',
                      color: '#999',
                      fontSize: '16px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      borderBottom: index < sections.length - 1 ? '1px solid #222' : 'none',
                      cursor: 'pointer'
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          paddingTop: '70px',
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '800px',
          textAlign: 'center',
          padding: '0 40px'
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '-2px',
            lineHeight: 1.1
          }}>
            Tongzhou Zhang
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#999',
            marginBottom: '60px',
            lineHeight: 1.6
          }}>
            Web Designer & Developer
          </p>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '80px'
          }}>
            {sections.slice(1).map((section) => (
              <div
                key={section.id}
                onClick={() => {
                  if (section.path.startsWith('#')) {
                    scrollToSection(section.id);
                  } else {
                    navigate(section.path);
                  }
                }}
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '12px 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderBottomColor = '#000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderBottomColor = 'transparent';
                }}
              >
                {section.name}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#999',
          fontSize: '14px',
          animation: 'bounce 2s infinite'
        }}>
          ↓ Scroll to explore
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          padding: '120px 20px'
        }}
      >
        <div style={{
          maxWidth: '900px',
          width: '100%'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '80px',
            textAlign: 'center'
          }}>
            About Me
          </h2>

          <div style={{
            fontSize: '22px',
            lineHeight: '1.8',
            textAlign: 'left'
          }}>
            <p data-scroll-index="0" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              I am Tongzhou Zhang, born in Beijing, China, and now a Canadian high school student at Langley Fundamental Middle & Secondary School.
            </p>

            <p data-scroll-index="1" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              I am the girl who once believed she would never code again, but has now developed a passionate obsession with programming; the girl who was once hesitant to speak her mind in a crowd but is now driven to make a significant contribution to society; the girl whose mantra used to be "I can't do it," but who now lives by the creed: Self-motivated, Innovative, and Diligent.
            </p>

            <p data-scroll-index="2" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              Reflecting on my three years of high school, it continues to astonish me how much I've accomplished. I never imagined I would be capable of building an Arduino-based self-watering plant system from scratch, securing an internship at a university research lab, or developing, marketing, and launching a social app to the public.
            </p>

            <p data-scroll-index="3" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              It reminds me of what Steve Jobs said in his Stanford speech: "Again, you can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future."
            </p>

            <p data-scroll-index="4" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              He was absolutely correct. The wonderful things that have happened to me have not occurred by chance. Driving them is a thirst for knowledge that has motivated me to learn, the courage to continuously venture beyond my comfort zone, the steadfast support of my parents, and the commitment of each teacher who has ever guided me. Each of these moments, like pieces of a puzzle, has turned every challenging difficulty into a part of my accomplishments.
            </p>

            <p data-scroll-index="5" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              In the future, I will maintain a profound respect and a strong desire for knowledge, looking forward to exploring new horizons at university.
            </p>

            <p data-scroll-index="6" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              I created this website to share my authentic experiences with you, offering not just a brief overview of my achievements, but the complete narrative behind them.
            </p>

            <p data-scroll-index="7" style={{
              marginBottom: '60px',
              transition: 'color 0.5s ease, opacity 0.5s ease',
              color: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.5'
            }}>
              So, please, continue your exploration!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#000',
        color: '#fff',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Let's Connect
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#999',
            marginBottom: '40px'
          }}>
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <div
              onClick={() => navigate('/projects')}
              style={{
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#999'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              Projects
            </div>
            <div
              onClick={() => navigate('/internship')}
              style={{
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#999'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              Internship
            </div>
            <div
              onClick={() => navigate('/contact')}
              style={{
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#999'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              Contact
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #333',
            paddingTop: '30px',
            color: '#999',
            fontSize: '14px'
          }}>
            © 2025 Tongzhou Zhang. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
