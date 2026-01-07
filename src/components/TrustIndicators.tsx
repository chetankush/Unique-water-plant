import { Droplets, Shield, BadgeCheck, Truck } from 'lucide-react';
import { useState } from 'react';

const services = [
  { icon: Droplets, label: 'Retailers', desc: 'Shop owners & stores', color: '#22d3ee' },
  { icon: Shield, label: 'Distributors', desc: 'Wholesale partners', color: '#3b82f6' },
  { icon: BadgeCheck, label: 'Hotels', desc: 'Hospitality sector', color: '#8b5cf6' },
  { icon: Truck, label: 'Bulk Orders', desc: 'Large quantity needs', color: '#FF6B35' },
];

export default function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="trust-header" style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#0B3A5D',
            marginBottom: '8px',
            fontFamily: 'Poppins, sans-serif'
          }}>Our Services</h2>
          <p style={{ fontSize: '15px', color: '#64748b' }}>
            What business sectors we provide services to?
          </p>
        </div>

        {/* Service Cards */}
        <div className="trust-services-grid">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  padding: '28px 20px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: isHovered ? service.color + '15' : '#F8FAFC',
                  border: isHovered ? `2px solid ${service.color}` : '2px solid transparent',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 12px 30px ${service.color}30` : '0 2px 10px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  margin: '0 auto 14px',
                  borderRadius: '14px',
                  backgroundColor: isHovered ? service.color : service.color + '20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <service.icon style={{
                    width: '26px',
                    height: '26px',
                    color: isHovered ? '#fff' : service.color,
                    transition: 'color 0.3s'
                  }} />
                </div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: isHovered ? service.color : '#0B3A5D',
                  marginBottom: '4px',
                  transition: 'color 0.3s'
                }}>{service.label}</h3>
                <p style={{ 
                  fontSize: '12px', 
                  color: isHovered ? service.color + 'cc' : '#64748b',
                  transition: 'color 0.3s'
                }}>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .trust-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .trust-header h2 {
          font-size: 28px;
        }
        @media (max-width: 1024px) {
          .trust-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .trust-services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .trust-header h2 { font-size: 22px !important; }
          .trust-header p { font-size: 13px !important; }
        }
      `}</style>
    </section>
  );
}
