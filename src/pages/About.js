import React, { useState } from 'react';

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'React & TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Database Design', level: 65 }
  ];

  const interests = [
    { title: 'Programming', description: 'Love creating and solving problems' },
    { title: 'Photography', description: 'Capturing beautiful moments' },
    { title: 'Music', description: 'Music is the soul of life' },
    { title: 'Sports', description: 'Staying active and healthy' },
    { title: 'Reading', description: 'Learning from great minds' },
    { title: 'Coffee', description: 'Fuel for creativity' }
  ];

  const mainSections = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About Me', link: '/about' },
    { id: 'projects', name: 'Projects', link: '/projects' },
    { id: 'internship', name: 'Internship', link: '/internship' },
    { id: 'music', name: 'Music', link: '/music' },
    { id: 'contact', name: 'Contact', link: '/contact' }
  ];

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
          justifyContent: 'flex-end',
          height: '70px'
        }}>
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
                e.target.style.background = '#000000';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#000000';
              }}
            >
              Menu {menuOpen ? '▲' : '▼'}
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: 0,
                background: 'rgba(0, 0, 0, 0.98)',
                border: '1px solid #333',
                borderRadius: '12px',
                padding: '12px',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                {mainSections.map((section) => (
                  <a
                    key={section.id}
                    href={section.link}
                    style={{
                      display: 'block',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      fontSize: '15px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
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

      {/* Personal Story */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '100px',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>
                My Story
              </h2>
              <div style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#999'
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  I'm a curious developer who fell in love with coding during university.
                  The magic of turning ideas into reality through code has always fascinated me.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Beyond programming, I'm passionate about photography, music, and sports.
                  I believe technology should serve life and make the world more beautiful.
                </p>
                <p>
                  My goal is to become a full-stack developer while maintaining my love for life
                  and pursuit of beauty. I believe that only by balancing work and life can we
                  create truly meaningful products.
                </p>
              </div>
            </div>

            <div style={{
              background: '#000000',
              border: '1px solid #333',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#ffffff'
              }}>
                Your Name
              </h3>
              <p style={{
                color: '#999',
                marginBottom: '30px'
              }}>
                Full-Stack Developer & Life Enthusiast
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div style={{
                  background: '#000000',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #333'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: '#ffffff'
                  }}>
                    2+
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#999'
                  }}>
                    Years Experience
                  </div>
                </div>
                <div style={{
                  background: '#000000',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #333'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: '#ffffff'
                  }}>
                    10+
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#999'
                  }}>
                    Projects
                  </div>
                </div>
                <div style={{
                  background: '#000000',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #333'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: '#ffffff'
                  }}>
                    5+
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#999'
                  }}>
                    Skills
                  </div>
                </div>
                <div style={{
                  background: '#000000',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #333'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: '#ffffff'
                  }}>
                    ∞
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#999'
                  }}>
                    Passion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{
        padding: '100px 0',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Technical Skills
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#999',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Continuously learning new technologies and improving my skill set
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {skills.map((skill, index) => (
              <div key={skill.name} style={{
                background: '#000000',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                border: '1px solid #333'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    fontWeight: '600',
                    color: '#ffffff',
                    fontSize: '1.1rem'
                  }}>
                    {skill.name}
                  </span>
                  <span style={{
                    color: '#999',
                    fontSize: '0.9rem'
                  }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#e5e5e5',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: '#000000',
                    borderRadius: '4px',
                    transition: 'width 1s ease-in-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section style={{
        padding: '100px 0 100px 0',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Interests & Hobbies
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#999',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Life is not just about work, there's poetry and distance
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {interests.map((interest, index) => (
              <div key={interest.title} style={{
                background: '#000000',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                border: '1px solid #333',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#ccc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e5e5e5';
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '15px'
                }}>
                  {interest.title}
                </h3>
                <p style={{
                  color: '#999',
                  lineHeight: 1.6
                }}>
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
