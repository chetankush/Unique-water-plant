import { useState, useEffect, useCallback } from 'react';
import { Phone, Droplets, Shield } from 'lucide-react';
import heroImage from '../assets/image.png';
import heroImage1 from '../assets/bottles-conveyer.png';

const carouselImages = [
  heroImage,
  heroImage1,
  'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&q=80',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="hero-section">
      {/* Background Carousel */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {carouselImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              willChange: 'opacity'
            }}
          />
        ))}
        {/* Blue overlay - covers entire hero including bottom */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,58,93,0.92) 0%, rgba(11,58,93,0.88) 60%, rgba(11,58,93,0.95) 100%)',
          zIndex: 2
        }} />
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            style={{
              width: currentSlide === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentSlide === index ? '#FF6B35' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave decoration - transitions to Products section (#F8FAFC) */}
      <div className="wave-container">
        <svg className="wave-front" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#F8FAFC" d="M0,60 C240,100 480,20 720,50 C960,80 1200,30 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* Tagline */}
          <p className="hero-tagline">
            ✦ Trusted by Thousands • Pure & Safe • Since 2024 ✦
          </p>

          {/* Headline */}
          <h1 className="hero-headline">
            Unique Mineral<br />
            <span style={{ color: '#00D9FF' }}>Drinking Water</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subheading">
            Manufacturers of Premium Packaged Drinking Water
          </p>

          {/* Location */}
          <p className="hero-location">
            Location: Khatkiya, Kumbhraj (District Guna) - 473222
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <a href="tel:+919111670455" className="cta-primary">
              <Phone style={{ width: '18px', height: '18px' }} />
              +91-91116-70455
            </a>
            <a href="tel:+917610662296" className="cta-secondary">
              <Phone style={{ width: '18px', height: '18px' }} />
              +91-76106-62296
            </a>
          </div>

          {/* Campaign Date Badge */}
          {/* <div className="campaign-badge">
            <Calendar style={{ width: '18px', height: '18px', color: '#FF6B35', flexShrink: 0 }} />
            <span>
              <strong style={{ color: '#FF6B35' }}>रेट लिस्ट लागू:</strong> 05 अगस्त 2025 से 31 दिसंबर 2025 तक
            </span>
          </div> */}

          {/* Trust badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-icon">
                <Droplets style={{ width: '18px', height: '18px', color: '#00D9FF' }} />
              </div>
              <span>100% Pure</span>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">
                <Shield style={{ width: '18px', height: '18px', color: '#00D9FF' }} />
              </div>
              <span>Licensed Brand</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 85vh;
          overflow: hidden;
          background-color: #0B3A5D;
        }
        
        .carousel-indicators {
          position: absolute;
          bottom: 130px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          gap: 8px;
        }
        
        .wave-container {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 120px;
          z-index: 15;
        }
        
        .wave-front {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 120px;
        }
        
        .hero-content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px 160px;
          z-index: 10;
        }
        
        .hero-inner {
          max-width: 650px;
          margin-left: 36px;
        }
        
        .hero-tagline {
          font-size: 13px;
          color: #00D9FF;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          margin-top: 20px;
        }
        
        .hero-headline {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 600;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }
        
        .hero-subheading {
          font-size: 16px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 8px;
          line-height: 1.6;
          max-width: 450px;
          text-shadow: 0 1px 10px rgba(0,0,0,0.2);
        }
        
        .hero-location {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 24px;
        }
        
        .hero-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%);
          color: #fff;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 14px;
          box-shadow: 0 8px 30px rgba(255,107,53,0.4);
          transition: all 0.3s;
        }
        
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255,107,53,0.5);
        }
        
        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          color: #fff;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s;
        }
        
        .cta-secondary:hover {
          background-color: rgba(255,255,255,0.25);
        }
        
        .campaign-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255,255,255,0.95);
          padding: 10px 16px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          color: #0B3A5D;
          font-size: 13px;
        }
        
        .trust-badges {
          display: flex;
          gap: 24px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .trust-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: rgba(255,255,255,0.15);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .trust-badge span {
          color: rgba(255,255,255,0.95);
          font-size: 13px;
          font-weight: 500;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
          }
          
          .hero-content {
            padding: 90px 20px 180px;
            display: flex;
            align-items: center;
          }
          
          .hero-inner {
            margin-left: 0;
            text-align: center;
            max-width: 100%;
          }
          
          .hero-tagline {
            font-size: 11px;
            letter-spacing: 1px;
          }
          
          .hero-headline {
            font-size: 28px;
          }
          
          .hero-subheading {
            font-size: 14px;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-location {
            font-size: 13px;
          }
          
          .hero-cta-buttons {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          
          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
            padding: 14px 20px;
          }
          
          .campaign-badge {
            font-size: 11px;
            padding: 10px 12px;
            text-align: left;
            max-width: 100%;
          }
          
          .trust-badges {
            justify-content: center;
            gap: 16px;
          }
          
          .carousel-indicators {
            bottom: 160px;
          }
          
          .wave-container {
            height: 80px;
          }
          
          .wave-front {
            height: 80px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-headline {
            font-size: 24px;
          }
          
          .hero-tagline {
            font-size: 10px;
          }
          
          .campaign-badge {
            flex-direction: column;
            text-align: center;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}
