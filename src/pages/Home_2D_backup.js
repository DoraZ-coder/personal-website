import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });

  // 生成行星背景 - 支持真实图片纹理
  const generatePlanetBackground = (textureType) => {
    // 尝试使用真实图片，如果图片不存在则使用CSS渐变备用方案
    const imagePath = `/images/planets/${textureType}.jpg`;

    // CSS渐变备用方案
    const fallbackTextures = {
      mercury: `#8c7853`,
      venus: `#e8c99d`,
      earth: `#1e88e5`,
      mars: `#c1440e`,
      jupiter: `#d4b896`,
      saturn: `#e8d4b8`,
      uranus: `#81d4fa`,
      neptune: `#3f51b5`
    };

    return {
      backgroundImage: `url(${imagePath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: fallbackTextures[textureType] || fallbackTextures.earth
    };
  };

  const initialPlanets = [
    {
      name: 'Mercury',
      title: 'About Me',
      description: 'Learn about my background, skills, and passion',
      link: '/about',
      color: '#8c7853',
      size: 24,
      distance: 120,
      angle: 0,
      speed: 0.8,
      texture: 'mercury'
    },
    {
      name: 'Venus',
      title: 'Internship Diary',
      description: 'Read about my professional growth journey',
      link: '/internship',
      color: '#ffc649',
      size: 36,
      distance: 170,
      angle: 45,
      speed: 0.6,
      texture: 'venus'
    },
    {
      name: 'Earth',
      title: 'Photo Album',
      description: 'Browse through my captured moments',
      link: '/photos',
      color: '#6b93d6',
      size: 42,
      distance: 220,
      angle: 90,
      speed: 0.5,
      texture: 'earth'
    },
    {
      name: 'Mars',
      title: 'Sports Life',
      description: 'See my active lifestyle and achievements',
      link: '/sports',
      color: '#c1440e',
      size: 30,
      distance: 270,
      angle: 135,
      speed: 0.4,
      texture: 'mars'
    },
    {
      name: 'Jupiter',
      title: 'My Projects',
      description: 'Explore my technical projects and creative works',
      link: '/projects',
      color: '#d8ca9d',
      size: 90,
      distance: 340,
      angle: 180,
      speed: 0.25,
      texture: 'jupiter'
    },
    {
      name: 'Saturn',
      title: 'Music World',
      description: 'The world in my ear - Discover my musical taste',
      link: '/music',
      color: '#fad5a5',
      size: 80,
      distance: 400,
      angle: 225,
      speed: 0.2,
      hasRings: true,
      texture: 'saturn'
    },
    {
      name: 'Uranus',
      title: 'Contact',
      description: 'Get in touch with me',
      link: '/contact',
      color: '#4fd0e7',
      size: 50,
      distance: 460,
      angle: 270,
      speed: 0.15,
      texture: 'uranus'
    },
    {
      name: 'Neptune',
      title: 'Resume',
      description: 'Download my resume',
      link: '/resume',
      color: '#4b70dd',
      size: 48,
      distance: 510,
      angle: 315,
      speed: 0.12,
      texture: 'neptune'
    }
  ];

  // 鼠标拖拽事件处理
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, rotation: rotation });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const rotationChange = deltaX * 0.8; // 提高灵敏度 (原0.3改为0.8)
    setRotation(dragStart.rotation + rotationChange);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 添加全局鼠标事件监听
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        background: '#000000',
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* 深空背景 - Milky Way */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/images/milky-way.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000000',
        opacity: 0.4,
        zIndex: 1
      }} />

      {/* 深空渐变遮罩层 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)',
        zIndex: 2
      }} />

      {/* 星空层1 - 小星星（快速闪烁） */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(1px 1px at 3% 8%, #ffffff, transparent),
          radial-gradient(1px 1px at 7% 15%, #ffffff, transparent),
          radial-gradient(1px 1px at 12% 5%, #ffffff, transparent),
          radial-gradient(1px 1px at 18% 22%, #ffffff, transparent),
          radial-gradient(1px 1px at 23% 12%, #ffffff, transparent),
          radial-gradient(1px 1px at 28% 30%, #ffffff, transparent),
          radial-gradient(1px 1px at 33% 18%, #ffffff, transparent),
          radial-gradient(1px 1px at 38% 35%, #ffffff, transparent),
          radial-gradient(1px 1px at 43% 25%, #ffffff, transparent),
          radial-gradient(1px 1px at 48% 8%, #ffffff, transparent),
          radial-gradient(1px 1px at 53% 40%, #ffffff, transparent),
          radial-gradient(1px 1px at 58% 28%, #ffffff, transparent),
          radial-gradient(1px 1px at 63% 15%, #ffffff, transparent),
          radial-gradient(1px 1px at 68% 45%, #ffffff, transparent),
          radial-gradient(1px 1px at 73% 32%, #ffffff, transparent),
          radial-gradient(1px 1px at 78% 20%, #ffffff, transparent),
          radial-gradient(1px 1px at 83% 50%, #ffffff, transparent),
          radial-gradient(1px 1px at 88% 38%, #ffffff, transparent),
          radial-gradient(1px 1px at 93% 25%, #ffffff, transparent),
          radial-gradient(1px 1px at 98% 55%, #ffffff, transparent),
          radial-gradient(1px 1px at 5% 60%, #ffffff, transparent),
          radial-gradient(1px 1px at 10% 72%, #ffffff, transparent),
          radial-gradient(1px 1px at 15% 85%, #ffffff, transparent),
          radial-gradient(1px 1px at 20% 68%, #ffffff, transparent),
          radial-gradient(1px 1px at 25% 90%, #ffffff, transparent),
          radial-gradient(1px 1px at 30% 75%, #ffffff, transparent),
          radial-gradient(1px 1px at 35% 95%, #ffffff, transparent),
          radial-gradient(1px 1px at 40% 80%, #ffffff, transparent),
          radial-gradient(1px 1px at 45% 65%, #ffffff, transparent),
          radial-gradient(1px 1px at 50% 88%, #ffffff, transparent),
          radial-gradient(1px 1px at 55% 70%, #ffffff, transparent),
          radial-gradient(1px 1px at 60% 92%, #ffffff, transparent),
          radial-gradient(1px 1px at 65% 78%, #ffffff, transparent),
          radial-gradient(1px 1px at 70% 62%, #ffffff, transparent),
          radial-gradient(1px 1px at 75% 85%, #ffffff, transparent),
          radial-gradient(1px 1px at 80% 72%, #ffffff, transparent),
          radial-gradient(1px 1px at 85% 95%, #ffffff, transparent),
          radial-gradient(1px 1px at 90% 80%, #ffffff, transparent),
          radial-gradient(1px 1px at 95% 68%, #ffffff, transparent),
          radial-gradient(1px 1px at 2% 45%, #ffffff, transparent),
          radial-gradient(1px 1px at 8% 52%, #ffffff, transparent),
          radial-gradient(1px 1px at 14% 38%, #ffffff, transparent),
          radial-gradient(1px 1px at 22% 48%, #ffffff, transparent),
          radial-gradient(1px 1px at 32% 58%, #ffffff, transparent),
          radial-gradient(1px 1px at 42% 42%, #ffffff, transparent),
          radial-gradient(1px 1px at 52% 52%, #ffffff, transparent),
          radial-gradient(1px 1px at 62% 48%, #ffffff, transparent),
          radial-gradient(1px 1px at 72% 55%, #ffffff, transparent),
          radial-gradient(1px 1px at 82% 45%, #ffffff, transparent),
          radial-gradient(1px 1px at 92% 58%, #ffffff, transparent)
        `,
        backgroundRepeat: 'no-repeat',
        animation: 'twinkleFast 4s ease-in-out infinite alternate',
        zIndex: 6
      }} />

      {/* 星空层2 - 中等星星（中速闪烁） */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 5% 10%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 25% 35%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 35% 18%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 45% 42%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 55% 28%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 65% 50%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 75% 38%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 85% 60%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 95% 48%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 10% 65%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 20% 78%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 30% 88%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 40% 72%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 50% 82%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 60% 68%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 70% 92%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 80% 75%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 90% 85%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 8% 40%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 18% 55%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 28% 45%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 38% 62%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 48% 52%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 58% 32%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 68% 58%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 78% 48%, rgba(255,255,255,0.9), transparent),
          radial-gradient(2px 2px at 88% 65%, rgba(255,255,255,0.9), transparent)
        `,
        backgroundRepeat: 'no-repeat',
        animation: 'twinkleMedium 6s ease-in-out infinite alternate',
        zIndex: 7
      }} />

      {/* 星空层3 - 明亮大星星（慢速闪烁） */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(3px 3px at 12% 20%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 30% 15%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 48% 35%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 65% 25%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 82% 40%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 22% 60%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 40% 75%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 58% 65%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 75% 80%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(3px 3px at 90% 70%, rgba(255,255,255,1), rgba(255,255,255,0.3) 50%, transparent),
          radial-gradient(4px 4px at 18% 45%, rgba(200,220,255,1), rgba(200,220,255,0.4) 50%, transparent),
          radial-gradient(4px 4px at 52% 50%, rgba(255,240,200,1), rgba(255,240,200,0.4) 50%, transparent),
          radial-gradient(4px 4px at 78% 55%, rgba(255,220,220,1), rgba(255,220,220,0.4) 50%, transparent)
        `,
        backgroundRepeat: 'no-repeat',
        animation: 'twinkleSlow 8s ease-in-out infinite alternate',
        zIndex: 8
      }} />

      {/* 星云效果 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(75, 0, 130, 0.15) 0%, rgba(138, 43, 226, 0.1) 30%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'nebula 12s ease-in-out infinite alternate',
        zIndex: 4
      }} />

      {/* 彗星 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '200px',
        height: '4px',
        background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        borderRadius: '2px',
        animation: 'comet 15s linear infinite',
        zIndex: 5
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '150px',
        height: '2px',
        background: 'linear-gradient(90deg, #87ceeb 0%, rgba(135, 206, 235, 0.6) 30%, transparent 100%)',
        borderRadius: '1px',
        animation: 'comet 15s linear infinite',
        zIndex: 5
      }} />

      {/* 太阳系容器 - 3D透视 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1200px',
        height: '1200px',
        perspective: '2000px',
        perspectiveOrigin: '50% 50%',
        zIndex: 10
      }}>
        {/* 倾斜容器 - 给整个太阳系一个复合旋转角度 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateY(45deg) rotateX(30deg)', // Y轴向右转45度，再X轴向下倾斜30度
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%'
        }}>
        {/* 太阳 - 正中心 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateX(-30deg) rotateY(-45deg)', // 反向旋转保持正圆
          transformStyle: 'preserve-3d',
          width: '180px',
          height: '180px',
          backgroundImage: 'url(/images/planets/sun.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#ff8c00',
          borderRadius: '50%',
          boxShadow: `
            0 0 50px #ffd700,
            0 0 100px #ff8c00,
            0 0 150px #ff4500,
            0 0 200px rgba(255, 69, 0, 0.3),
            inset -20px -20px 40px rgba(0,0,0,0.3)
          `,
          animation: 'solarPulse 5s ease-in-out infinite alternate',
          zIndex: 15
        }} />

        {/* 太阳表面纹理和耀斑 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateX(-30deg) rotateY(-45deg)', // 反向旋转保持正圆
          transformStyle: 'preserve-3d',
          width: '180px',
          height: '180px',
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(255,255,255,0.25) 0%, transparent 45%),
            radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 0%, transparent 30%),
            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 35%)
          `,
          borderRadius: '50%',
          zIndex: 16
        }} />

        {/* 太阳耀斑效果 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateX(-30deg) rotateY(-45deg)', // 反向旋转保持正圆
          transformStyle: 'preserve-3d',
          width: '250px',
          height: '250px',
          background: `
            radial-gradient(ellipse at 30% 30%, transparent 60%, rgba(255,255,255,0.15) 80%, transparent 100%),
            radial-gradient(ellipse at 70% 70%, transparent 70%, rgba(255,255,255,0.08) 90%, transparent 100%),
            radial-gradient(ellipse at 50% 20%, transparent 50%, rgba(255,255,255,0.1) 70%, transparent 100%)
          `,
          borderRadius: '50%',
          animation: 'solarFlare 8s ease-in-out infinite alternate',
          zIndex: 14
        }} />

        {/* 小行星带 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '640px',
          height: '640px',
          background: `
            radial-gradient(circle, transparent 300px, rgba(255,255,255,0.02) 320px, transparent 340px),
            radial-gradient(circle, transparent 300px, rgba(255,255,255,0.01) 330px, transparent 350px)
          `,
          borderRadius: '50%',
          animation: 'asteroidBelt 20s linear infinite',
          zIndex: 8
        }} />

        {/* 小行星带中的小行星 */}
        {Array.from({ length: 20 }, (_, i) => {
          const angle = (i * 18) * Math.PI / 180;
          const radius = 320 + Math.random() * 20;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                width: '2px',
                height: '2px',
                background: '#888',
                borderRadius: '50%',
                animation: 'twinkle 3s ease-in-out infinite alternate',
                animationDelay: `${i * 0.1}s`,
                zIndex: 9
              }}
            />
          );
        })}

        {/* 圆形轨道线 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1400px',
          height: '1400px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%',
          zIndex: 5
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '1200px',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '50%',
          zIndex: 5
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '50%',
          zIndex: 5
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: '50%',
          zIndex: 5
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          border: '1px solid rgba(255,255,255,0.03)',
          borderRadius: '50%',
          zIndex: 5
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          border: '1px solid rgba(255,255,255,0.02)',
          borderRadius: '50%',
          zIndex: 5
        }} />

        {/* 行星 - 3D椭圆轨道 */}
        {initialPlanets.map((planet, index) => {
          // 计算行星当前角度（初始角度 + 旋转角度）
          const currentAngle = (planet.angle + rotation * planet.speed) * Math.PI / 180;

          // 圆形轨道计算（在水平面上）
          const centerX = 600; // 容器中心X坐标
          const centerY = 600; // 容器中心Y坐标

          // X轴：左右移动（圆形轨道）
          const x = centerX + Math.cos(currentAngle) * planet.distance;

          // Y轴：保持在同一水平面（不上下移动）
          const y = centerY;

          // Z轴：前后移动（圆形轨道的深度分量）
          const z = Math.sin(currentAngle) * planet.distance;

          // 根据Z轴位置计算缩放（近大远小）
          const scale = 1 + z / 1000;

          // 根据Z轴位置计算透明度（前面清晰，后面稍暗）
          const opacity = 0.6 + (z / planet.distance) * 0.4;

          // 计算实际显示尺寸
          const displaySize = planet.size * scale;

          return (
            <div key={planet.name} style={{
              position: 'absolute',
              left: x,
              top: y,
              transform: `translate(-50%, -50%) translateZ(${z}px)`,
              transformStyle: 'preserve-3d',
              zIndex: Math.floor(100 + z), // Z轴越大，层级越高（离观察者越近）
              opacity: opacity,
              transition: 'none'
            }}>
              {/* 行星容器 */}
              <div style={{
                position: 'relative',
                width: displaySize,
                height: displaySize,
                zIndex: 12
              }}>
              {/* 行星阴影 */}
              <div style={{
                position: 'absolute',
                width: displaySize * 1.3,
                height: displaySize * 0.4,
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 80%)',
                borderRadius: '50%',
                top: '75%',
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'blur(3px)',
                zIndex: -1
              }} />

              {/* 行星本体 */}
              <Link
                to={planet.link}
                style={{
                  position: 'relative',
                  width: displaySize,
                  height: displaySize,
                  ...generatePlanetBackground(planet.texture),
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'rotateX(-30deg) rotateY(-45deg)', // 反向旋转抵消父容器的变形，保持正圆
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 0 ${displaySize * 0.6}px ${planet.color}40,
                    0 0 ${displaySize * 1.2}px ${planet.color}20,
                    inset -${displaySize * 0.25}px -${displaySize * 0.25}px ${displaySize * 0.4}px rgba(0,0,0,0.7),
                    inset ${displaySize * 0.2}px ${displaySize * 0.2}px ${displaySize * 0.3}px rgba(255,255,255,0.15),
                    inset ${displaySize * 0.1}px ${displaySize * 0.1}px ${displaySize * 0.25}px rgba(255,255,255,0.1),
                    0 ${displaySize * 0.1}px ${displaySize * 0.3}px rgba(0,0,0,0.5)
                  `,
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.3)';
                  e.target.style.boxShadow = `
                    0 0 ${displaySize * 1}px ${planet.color}70,
                    0 0 ${displaySize * 1.8}px ${planet.color}40,
                    inset -${displaySize * 0.3}px -${displaySize * 0.3}px ${displaySize * 0.5}px rgba(0,0,0,0.8),
                    inset ${displaySize * 0.25}px ${displaySize * 0.25}px ${displaySize * 0.4}px rgba(255,255,255,0.2),
                    inset ${displaySize * 0.15}px ${displaySize * 0.15}px ${displaySize * 0.35}px rgba(255,255,255,0.15),
                    0 ${displaySize * 0.15}px ${displaySize * 0.4}px rgba(0,0,0,0.6)
                  `;
                  setHoveredPlanet(planet);
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = `
                    0 0 ${displaySize * 0.6}px ${planet.color}40,
                    0 0 ${displaySize * 1.2}px ${planet.color}20,
                    inset -${displaySize * 0.25}px -${displaySize * 0.25}px ${displaySize * 0.4}px rgba(0,0,0,0.7),
                    inset ${displaySize * 0.2}px ${displaySize * 0.2}px ${displaySize * 0.3}px rgba(255,255,255,0.15),
                    inset ${displaySize * 0.1}px ${displaySize * 0.1}px ${displaySize * 0.25}px rgba(255,255,255,0.1),
                    0 ${displaySize * 0.1}px ${displaySize * 0.3}px rgba(0,0,0,0.5)
                  `;
                  // Planet unhovered
                }}
              >
                {/* 行星表面高光层 */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  left: '8%',
                  width: '40%',
                  height: '40%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                {/* 行星边缘高光 */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  right: '5%',
                  bottom: '5%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                <div style={{
                  fontSize: `${0.9 * scale}rem`,
                  marginBottom: '3px',
                  textAlign: 'center',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 10
                }}>
                  {planet.name}
                </div>
                <div style={{
                  fontSize: `${0.8 * scale}rem`,
                  textAlign: 'center',
                  lineHeight: 1.1,
                  maxWidth: displaySize * 0.9,
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 10
                }}>
                  {planet.title}
                </div>
              </Link>

              {/* 土星光环 */}
              {planet.hasRings && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: displaySize * 3.2,
                    height: displaySize * 3.2,
                    border: '2px solid transparent',
                    borderImage: 'linear-gradient(45deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1), rgba(255,255,255,0.4)) 1',
                    borderRadius: '50%',
                    animation: 'rotate 20s linear infinite',
                    zIndex: -1
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: displaySize * 2.8,
                    height: displaySize * 2.8,
                    border: '1px solid transparent',
                    borderImage: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2)) 1',
                    borderRadius: '50%',
                    animation: 'rotate 15s linear infinite reverse',
                    zIndex: -1
                  }} />
                </>
              )}

              {/* 行星大气层效果 */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: displaySize * 1.2,
                height: displaySize * 1.2,
                background: `radial-gradient(circle, transparent 70%, ${planet.color}15 100%)`,
                borderRadius: '50%',
                zIndex: -1,
                animation: 'atmosphere 8s ease-in-out infinite alternate'
              }} />
              </div>
            </div>
          );
        })}
        </div>
      </div>


      <style jsx>{`
        @keyframes solarPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 40px #ffd700,
              0 0 80px #ff8c00,
              0 0 120px #ff4500,
              inset -15px -15px 30px rgba(0,0,0,0.4);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.08);
            box-shadow:
              0 0 60px #ffd700,
              0 0 120px #ff8c00,
              0 0 180px #ff4500,
              inset -20px -20px 40px rgba(0,0,0,0.5);
          }
        }

        @keyframes solarFlare {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
          }
        }

        @keyframes twinkleFast {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        @keyframes twinkleMedium {
          0% { opacity: 0.4; }
          50% { opacity: 0.9; }
          100% { opacity: 0.5; }
        }

        @keyframes twinkleSlow {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }

        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes nebula {
          0% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          100% { 
            transform: scale(1.3) rotate(360deg);
            opacity: 0.6;
          }
        }
        
        @keyframes atmosphere {
          0% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          100% { 
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        @keyframes planetOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes comet {
          0% { 
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateX(100vw) translateY(-50px);
            opacity: 0;
          }
        }
        
        @keyframes asteroidBelt {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;