import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/uwp_logo.jpeg';

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: '#0B3A5D', color: '#fff' }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
               style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
              <img src={logo} alt="Unique Water Plant" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '10px', 
                objectFit: 'cover',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }} />
              <div>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'Poppins, sans-serif', display: 'block' }}>Unique Water Plant</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Crypto Packaged Drinking Water</span>
              </div>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
              Manufacturers of Premium Packaged Drinking Water for retailers and distributors.
            </p>
            <p style={{ color: '#00D9FF', fontWeight: 600, fontSize: '15px' }}>#drinkcrypto</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Products', 'Pricing', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}
                   onClick={(e) => { e.preventDefault(); scrollTo(`#${link === 'Home' ? 'hero' : link.toLowerCase()}`); }}
                   style={{
                     color: 'rgba(255,255,255,0.7)',
                     textDecoration: 'none',
                     fontSize: '14px',
                     transition: 'color 0.2s'
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >{link}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="tel:+918435996985" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#FF6B35' }} />
                +91-84359-96985
              </a>
              <a href="tel:+918871989370" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#FF6B35' }} />
                +91-88719-89370
              </a>
              <a href="mailto:deepanshurajput998@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                <Mail style={{ width: '16px', height: '16px', color: '#FF6B35' }} />
                deepanshurajput998@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#FF6B35' }} />
                ऑफिस विजय नगर, इंदौर (म.प्र.)
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Business Hours</h4>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.8 }}>
              <p>Monday - Saturday</p>
              <p style={{ color: '#fff', fontWeight: 500 }}>9:00 AM - 6:00 PM</p>
              <p style={{ marginTop: '8px' }}>Sunday</p>
              <p style={{ color: '#FF6B35', fontWeight: 500 }}>Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
            © {new Date().getFullYear()} Unique Water Plant. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '13px' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
