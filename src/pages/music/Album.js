import React from 'react';
import { Link } from 'react-router-dom';

const Album = () => {
  const albums = [
    {
      id: 'charm',
      title: 'Charm',
      artist: 'Clairo',
      cover: '/images/album-cover/Charm.jpg',
      year: '2024',
      genre: 'Indie Pop'
    },
    {
      id: 'smithereens',
      title: 'SMITHEREENS',
      artist: 'Joji',
      cover: '/images/album-cover/SMITHEREENS.jpg',
      year: '2022',
      genre: 'Pop'
    },
    {
      id: 'virgin',
      title: 'Virgin',
      artist: 'Lorde',
      cover: '/images/album-cover/Virgin.jpg',
      year: '2025',
      genre: 'Pop'
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '1rem'
        }}>
          Album Reviews
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#999',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Click on any album to read my detailed review
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '40px',
        justifyContent: 'center'
      }}>
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/music/album/${album.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              background: '#111',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #333',
              boxShadow: '0 8px 30px rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = '#666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = '#333';
            }}>
              {/* Album Cover */}
              <div style={{
                width: '100%',
                paddingTop: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: '#f0f0f0'
              }}>
                <img
                  src={album.cover}
                  alt={album.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        font-size: 3rem;
                      ">🎵</div>
                    `;
                  }}
                />
              </div>

              {/* Album Info */}
              <div style={{
                padding: '20px'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '8px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {album.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#ccc',
                  marginBottom: '12px',
                  fontWeight: '500'
                }}>
                  {album.artist}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#999'
                }}>
                  <span>{album.year}</span>
                  <span style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                    {album.genre}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Album;
