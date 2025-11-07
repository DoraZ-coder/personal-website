import React, { useState } from 'react';

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All', color: '#667eea' },
    { id: 'travel', name: 'Travel', color: '#4facfe' },
    { id: 'nature', name: 'Nature', color: '#43e97b' },
    { id: 'portrait', name: 'Portrait', color: '#fa709a' },
    { id: 'street', name: 'Street', color: '#f093fb' },
    { id: 'food', name: 'Food', color: '#fa709a' },
    { id: 'sports', name: 'Sports', color: '#764ba2' },
    { id: 'daily', name: 'Daily', color: '#666' }
  ];

  const photos = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      description: 'Beautiful sunrise in the mountains, sea of clouds, magnificent rays',
      category: 'nature',
      date: '2024-05-15',
      location: 'Mountain Huang',
      tags: ['sunrise', 'clouds', 'mountain'],
      likes: 24,
      views: 156,
      isLiked: true
    },
    {
      id: 2,
      title: 'City Night View',
      description: 'Night city with brilliant lights and flowing traffic',
      category: 'street',
      date: '2024-05-10',
      location: 'Shanghai',
      tags: ['night', 'city', 'lights'],
      likes: 18,
      views: 89,
      isLiked: false
    },
    {
      id: 3,
      title: 'Food Close-up',
      description: 'Carefully prepared food, perfect color, aroma and taste',
      category: 'food',
      date: '2024-05-08',
      location: 'Home',
      tags: ['food', 'close-up', 'life'],
      likes: 32,
      views: 203,
      isLiked: true
    },
    {
      id: 4,
      title: 'Sports Moment',
      description: 'Exciting moment on the soccer field, sweat and passion',
      category: 'sports',
      date: '2024-05-05',
      location: 'Stadium',
      tags: ['soccer', 'sports', 'moment'],
      likes: 15,
      views: 67,
      isLiked: false
    },
    {
      id: 5,
      title: 'Beach Sunset',
      description: 'Sunset by the sea, sky and sea in one color, beautiful',
      category: 'travel',
      date: '2024-04-28',
      location: 'Qingdao',
      tags: ['sunset', 'beach', 'travel'],
      likes: 41,
      views: 234,
      isLiked: true
    },
    {
      id: 6,
      title: 'Portrait Photography',
      description: 'Capturing natural expressions and emotions of people',
      category: 'portrait',
      date: '2024-04-20',
      location: 'Studio',
      tags: ['portrait', 'expression', 'emotion'],
      likes: 28,
      views: 145,
      isLiked: false
    }
  ];

  const filteredPhotos = photos.filter(photo => 
    selectedCategory === 'all' || photo.category === selectedCategory
  );

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : '#667eea';
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            Photo Album
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Capturing beautiful moments in life with my lens, each photo carries 
            unique memories and emotions.
          </p>
        </div>
      </section>

      {/* Filter and View Mode */}
      <section style={{
        padding: '50px 0',
        background: 'white',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {/* Category Filter */}
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: 'none',
                    background: selectedCategory === category.id ? category.color : '#f8f9fa',
                    color: selectedCategory === category.id ? 'white' : '#666',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.background = category.color;
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.background = '#f8f9fa';
                      e.target.style.color = '#666';
                    }
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div style={{
              display: 'flex',
              border: '1px solid #e9ecef',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  background: viewMode === 'grid' ? '#667eea' : 'white',
                  color: viewMode === 'grid' ? 'white' : '#666',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ⊞ Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  background: viewMode === 'list' ? '#667eea' : 'white',
                  color: viewMode === 'list' ? 'white' : '#666',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ☰ List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Grid/List */}
      <section style={{
        padding: '100px 0',
        background: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {viewMode === 'grid' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {filteredPhotos.map((photo) => (
                <div key={photo.id} style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                }}>
                  {/* Photo Placeholder */}
                  <div style={{
                    height: '250px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px'
                    }}>
                      <span style={{
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        background: getCategoryColor(photo.category),
                        color: 'white'
                      }}>
                        {getCategoryName(photo.category)}
                      </span>
                    </div>
                    📸
                  </div>
                  
                  <div style={{ padding: '25px' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: '#333',
                      marginBottom: '10px'
                    }}>
                      {photo.title}
                    </h3>
                    <p style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      marginBottom: '15px',
                      lineHeight: 1.5
                    }}>
                      {photo.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.8rem',
                      color: '#666'
                    }}>
                      <span>📅 {photo.date}</span>
                      <span>📍 {photo.location}</span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '15px'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '15px'
                      }}>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: photo.isLiked ? '#fa709a' : '#666'
                        }}>
                          ❤️ {photo.likes}
                        </span>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          👁️ {photo.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {filteredPhotos.map((photo) => (
                <div key={photo.id} style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '120px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      flexShrink: 0
                    }}>
                      📸
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '8px'
                      }}>
                        <h3 style={{
                          fontSize: '1.3rem',
                          fontWeight: 'bold',
                          color: '#333'
                        }}>
                          {photo.title}
                        </h3>
                        <span style={{
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          background: getCategoryColor(photo.category),
                          color: 'white'
                        }}>
                          {getCategoryName(photo.category)}
                        </span>
                      </div>
                      <p style={{
                        color: '#666',
                        marginBottom: '10px',
                        fontSize: '0.9rem'
                      }}>
                        {photo.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: '20px',
                        fontSize: '0.8rem',
                        color: '#666'
                      }}>
                        <span>📅 {photo.date}</span>
                        <span>📍 {photo.location}</span>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: photo.isLiked ? '#fa709a' : '#666'
                        }}>
                          ❤️ {photo.likes}
                        </span>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          👁️ {photo.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredPhotos.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>
                📸
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#666',
                marginBottom: '10px'
              }}>
                No photos found
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
  );
};

export default Photos;