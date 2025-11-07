import React, { useState } from 'react';

const Sports = () => {
  const [selectedSport, setSelectedSport] = useState('all');

  const sports = [
    { id: 'all', name: 'All', icon: '🏃', color: '#667eea' },
    { id: 'equestrian', name: 'Equestrian', icon: '🐎', color: '#fa709a' },
    { id: 'soccer', name: 'Soccer', icon: '⚽', color: '#43e97b' },
    { id: 'volleyball', name: 'Volleyball', icon: '🏐', color: '#4facfe' },
    { id: 'basketball', name: 'Basketball', icon: '🏀', color: '#f093fb' },
    { id: 'roller-skating', name: 'Roller Skating', icon: '🛼', color: '#764ba2' },
    { id: 'skateboard', name: 'Skateboard', icon: '🛹', color: '#667eea' },
    { id: 'ping-pong', name: 'Ping Pong', icon: '🏓', color: '#fa709a' },
    { id: 'skiing', name: 'Skiing', icon: '🎿', color: '#43e97b' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Equestrian Competition Champion',
      sport: 'equestrian',
      date: '2024-05-15',
      description: 'Won first place in city-level equestrian jumping competition',
      level: 'City Level',
      medal: 'gold'
    },
    {
      id: 2,
      title: 'Soccer League Top Scorer',
      sport: 'soccer',
      date: '2024-04-20',
      description: 'Scored 15 goals in university soccer league, earned top scorer title',
      level: 'University',
      medal: 'gold'
    },
    {
      id: 3,
      title: 'Volleyball Tournament Runner-up',
      sport: 'volleyball',
      date: '2024-03-10',
      description: 'Participated in inter-school volleyball tournament, won second place',
      level: 'Inter-school',
      medal: 'silver'
    },
    {
      id: 4,
      title: 'Roller Skating Skills 3rd Place',
      sport: 'roller-skating',
      date: '2024-02-28',
      description: 'Won third place in roller skating skills competition',
      level: 'City Level',
      medal: 'bronze'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      sport: 'equestrian',
      activity: 'Jumping Training',
      date: '2024-06-20',
      duration: '2 hours',
      calories: 450,
      distance: '8 km',
      location: 'Equestrian Club',
      notes: 'Great performance today, completed all obstacles'
    },
    {
      id: 2,
      sport: 'soccer',
      activity: 'Friendly Match',
      date: '2024-06-18',
      duration: '90 minutes',
      calories: 600,
      distance: '10 km',
      location: 'Sports Field',
      notes: 'Had a great time playing with friends'
    },
    {
      id: 3,
      sport: 'basketball',
      activity: 'Shooting Practice',
      date: '2024-06-15',
      duration: '1 hour',
      calories: 300,
      distance: '3 km',
      location: 'Basketball Court',
      notes: 'Three-point shooting accuracy improved'
    },
    {
      id: 4,
      sport: 'roller-skating',
      activity: 'Skills Practice',
      date: '2024-06-12',
      duration: '1.5 hours',
      calories: 400,
      distance: '5 km',
      location: 'Skating Park',
      notes: 'Learned new trick moves'
    },
    {
      id: 5,
      sport: 'ping-pong',
      activity: 'Training Match',
      date: '2024-06-10',
      duration: '1 hour',
      calories: 200,
      distance: '1 km',
      location: 'Ping Pong Hall',
      notes: 'Practiced with coach, skills improved'
    }
  ];

  const filteredActivities = recentActivities.filter(activity => 
    selectedSport === 'all' || activity.sport === selectedSport
  );

  const getMedalColor = (medal) => {
    switch (medal) {
      case 'gold': return '#fa709a';
      case 'silver': return '#4facfe';
      case 'bronze': return '#43e97b';
      default: return '#666';
    }
  };

  const getSportName = (sportId) => {
    const sport = sports.find(s => s.id === sportId);
    return sport ? sport.name : sportId;
  };

  const getSportColor = (sportId) => {
    const sport = sports.find(s => s.id === sportId);
    return sport ? sport.color : '#667eea';
  };

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
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
            My Sports Life
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Sports are an important part of my life, from equestrian to soccer, 
            from roller skating to skiing. Each sport brings me different experiences and growth.
          </p>
        </div>
      </section>

      {/* Sports Overview */}
      <section style={{
        padding: '100px 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '1rem'
            }}>
              Sports I Love
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Various sports that I'm passionate about
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {sports.slice(1).map((sport) => (
              <div key={sport.id} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
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
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: sport.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '2.5rem'
                }}>
                  {sport.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {sport.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{
        padding: '100px 0',
        background: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '1rem'
            }}>
              Sports Achievements
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Honors and recognition I've earned in sports
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {achievements.map((achievement) => (
              <div key={achievement.id} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: getMedalColor(achievement.medal),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  🏆
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '10px'
                }}>
                  {achievement.title}
                </h3>
                <p style={{
                  color: '#666',
                  marginBottom: '15px',
                  fontSize: '0.9rem'
                }}>
                  {achievement.description}
                </p>
                <span style={{
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  background: getMedalColor(achievement.medal),
                  color: 'white'
                }}>
                  {achievement.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section style={{
        padding: '100px 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Filter */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}>
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '25px',
                  border: 'none',
                  background: selectedSport === sport.id ? sport.color : '#f8f9fa',
                  color: selectedSport === sport.id ? 'white' : '#666',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (selectedSport !== sport.id) {
                    e.target.style.background = sport.color;
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedSport !== sport.id) {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.color = '#666';
                  }
                }}
              >
                <span>{sport.icon}</span>
                <span>{sport.name}</span>
              </button>
            ))}
          </div>

          {/* Activities List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {filteredActivities.map((activity) => (
              <div key={activity.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
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
                    width: '60px',
                    height: '60px',
                    borderRadius: '15px',
                    background: getSportColor(activity.sport),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    {sports.find(s => s.id === activity.sport)?.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>
                        {activity.activity}
                      </h3>
                      <span style={{
                        color: '#666',
                        fontSize: '0.9rem'
                      }}>
                        {activity.date}
                      </span>
                    </div>
                    <p style={{
                      color: '#666',
                      marginBottom: '15px'
                    }}>
                      {activity.notes}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      <span>⏰ {activity.duration}</span>
                      <span>🔥 {activity.calories} calories</span>
                      <span>📏 {activity.distance}</span>
                      <span>📍 {activity.location}</span>
                    </div>
                  </div>

                  <div>
                    <span style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      background: getSportColor(activity.sport),
                      color: 'white'
                    }}>
                      {getSportName(activity.sport)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>
                🏃
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#666',
                marginBottom: '10px'
              }}>
                No activities found
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

export default Sports;