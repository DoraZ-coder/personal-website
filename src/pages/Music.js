import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Album from './music/Album';
import ReviewStandard from './music/ReviewStandard';
import AlbumDetail from './music/AlbumDetail';

const Music = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const musicSections = [
    { id: 'review-standard', name: 'Review Standard', path: '/music/review-standard' },
    { id: 'album', name: 'Reviews', path: '/music/album' }
  ];

  const mainSections = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About Me', link: '/about' },
    { id: 'projects', name: 'Projects', link: '/projects' },
    { id: 'internship', name: 'Internship', link: '/internship' },
    { id: 'music', name: 'Music', link: '/music' },
    { id: 'contact', name: 'Contact', link: '/contact' }
  ];

  const getCurrentSection = () => {
    if (location.pathname === '/music/review-standard') return 'review-standard';
    if (location.pathname.startsWith('/music/album')) return 'album';
    return 'album'; // default
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
          {/* Left side - Music sections */}
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center'
          }}>
            {musicSections.map((section) => (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: getCurrentSection() === section.id ? '#ffffff' : '#999',
                  fontSize: '16px',
                  fontWeight: getCurrentSection() === section.id ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  borderBottom: getCurrentSection() === section.id ? '2px solid #ffffff' : '2px solid transparent',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (getCurrentSection() !== section.id) {
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
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
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
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
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

      {/* Content Section */}
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Album />} />
          <Route path="/review-standard" element={<ReviewStandard />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:albumId" element={<AlbumDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Music;
