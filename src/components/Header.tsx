import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/uwp_logo.jpeg';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  // { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-menu { display: none; }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: block; }
        }
      `}</style>

      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            {/* Logo */}
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} 
               style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img 
                src={logo} 
                alt="Unique Water Plant Logo" 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              />
              <span style={{ 
                fontSize: '16px', 
                fontWeight: 700, 
                color: scrolled ? '#0B3A5D' : '#fff',
                fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.3s'
              }}>Unique Water Plant</span>
            </a>

            {/* Desktop Navigation */}
            <div className="desktop-nav" style={{ alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                   onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                   style={{
                     color: scrolled ? '#64748b' : 'rgba(255,255,255,0.9)',
                     textDecoration: 'none',
                     fontWeight: 500,
                     fontSize: '14px',
                     transition: 'color 0.2s'
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
                   onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#64748b' : 'rgba(255,255,255,0.9)'}
                >{link.name}</a>
              ))}
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                 style={{
                   background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                   color: '#fff',
                   fontWeight: 600,
                   padding: '10px 24px',
                   borderRadius: '50px',
                   textDecoration: 'none',
                   fontSize: '13px',
                   boxShadow: '0 4px 15px rgba(255,107,53,0.4)',
                   transition: 'all 0.3s'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >Contact Us</a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              style={{ 
                padding: '8px', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X style={{ width: '28px', height: '28px', color: scrolled ? '#1E293B' : '#fff' }} />
              ) : (
                <Menu style={{ width: '28px', height: '28px', color: scrolled ? '#1E293B' : '#fff' }} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            padding: '16px 24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            borderTop: '1px solid #f1f5f9'
          }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                 onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                 style={{ 
                   display: 'block', 
                   padding: '12px 0', 
                   color: '#1E293B', 
                   textDecoration: 'none', 
                   fontWeight: 500,
                   fontSize: '15px',
                   borderBottom: '1px solid #f1f5f9' 
                 }}
              >{link.name}</a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
               style={{
                 display: 'block',
                 textAlign: 'center',
                 background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                 color: '#fff',
                 fontWeight: 600,
                 padding: '12px',
                 borderRadius: '50px',
                 textDecoration: 'none',
                 marginTop: '16px',
                 fontSize: '14px'
               }}>Contact Us</a>
          </div>
        )}
      </header>
    </>
  );
}
