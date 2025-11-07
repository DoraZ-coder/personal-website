import React from 'react';

const ReviewStandard = () => {
  const singleCriteria = [
    {
      title: 'Composition',
      points: '3 points',
      description: 'Chord progressions, vocal melodies'
    },
    {
      title: 'Arrangement',
      points: '3 points',
      description: 'Acoustic instruments, synthesizers'
    },
    {
      title: 'Lyrics',
      points: '2 points',
      description: 'Theme, subject matter, depth'
    },
    {
      title: 'Vocals',
      points: '1 point',
      description: 'Timbre, technique'
    },
    {
      title: 'Resonance',
      points: '1 point',
      description: 'Personal connection/"get"'
    }
  ];

  const albumCriteria = [
    'The album\'s conceptual strength, coherence, and overall execution',
    'Tracklist and sequencing – whether it feels bloated or needs refinement',
    'Album cover and visual aesthetics',
    'How well the album\'s mood and musical style align'
  ];

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '60px 20px',
      minHeight: '100vh'
    }}>
      {/* Introduction */}
      <div style={{
        background: '#111',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid #333',
        boxShadow: '0 10px 40px rgba(255,255,255,0.05)',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: '#999',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Every review I write is based on my own original thoughts and content.
          I will strictly adhere to the following criteria for all scoring.
        </p>
      </div>

      {/* Single Rating Criteria */}
      <div style={{
        background: '#111',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid #333',
        boxShadow: '0 10px 40px rgba(255,255,255,0.05)',
        marginBottom: '40px'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          Single: [10-point scale]
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#999',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          A 9-point score consists of:
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {singleCriteria.map((criterion, index) => (
            <div key={index} style={{
              padding: '20px',
              background: '#1a1a1a',
              borderRadius: '16px',
              borderLeft: '4px solid #fff',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#222';
              e.currentTarget.style.transform = 'translateX(8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a1a';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {criterion.title}
                </h4>
                <span style={{
                  background: '#000',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {criterion.points}
                </span>
              </div>
              <p style={{
                color: '#999',
                lineHeight: 1.6
              }}>
                {criterion.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Album Rating Criteria */}
      <div style={{
        background: '#111',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid #333',
        boxShadow: '0 10px 40px rgba(255,255,255,0.05)',
        marginBottom: '40px'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Album: [10-point scale]
        </h3>

        {/* Important Notes */}
        <div style={{
          marginBottom: '50px',
          padding: '24px',
          background: '#1a1a1a',
          borderRadius: '12px',
          borderLeft: '4px solid #fff'
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '16px'
          }}>
            Important Notes:
          </h4>
          <ul style={{
            color: '#999',
            fontSize: '1rem',
            lineHeight: 2,
            paddingLeft: '20px',
            margin: 0
          }}>
            <li>Since the overall album score on platforms like Pitchfork is often derived from the average of individual track ratings, I cannot assign a completely free-form score.</li>
            <li style={{ marginTop: '12px' }}>If the calculated average differs significantly from my gut reaction to the album, I may adjust individual track ratings to better reflect the final album score.</li>
          </ul>
        </div>

        {/* Detailed Scoring Criteria */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            Detailed Scoring Criteria:
          </h4>
          <p style={{
            color: '#999',
            fontSize: '1rem',
            marginBottom: '24px',
            fontStyle: 'italic'
          }}>
            (Beyond individual track ratings, additional considerations include)
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {albumCriteria.map((criterion, index) => (
              <div key={index} style={{
                padding: '18px 24px',
                background: '#1a1a1a',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#222';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1a1a1a';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <span style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1.4 }}>•</span>
                <p style={{
                  color: '#999',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  margin: 0
                }}>
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewStandard;
