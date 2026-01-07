import { Truck, Clock, Shield, Award, Droplets, Users } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep within 24 hours.',
    color: '#22c55e'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round the clock customer support for all your queries.',
    color: '#3b82f6'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'BIS certified and lab tested pure drinking water.',
    color: '#8b5cf6'
  },
  {
    icon: Award,
    title: 'Best Pricing',
    description: 'Competitive wholesale rates for distributors and retailers.',
    color: '#FF6B35'
  },
  {
    icon: Droplets,
    title: 'Pure Water',
    description: 'Multi-stage RO purification for 100% safe drinking water.',
    color: '#22d3ee'
  },
  {
    icon: Users,
    title: 'Bulk Orders',
    description: 'Special discounts on bulk orders for events and businesses.',
    color: '#f59e0b'
  }
];

export default function Services() {
  return (
    <section id="our-services" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(59,130,246,0.1)',
            color: '#3b82f6',
            padding: '5px 14px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>हमारी सेवाएं</span>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#0B3A5D',
            marginBottom: '8px',
            fontFamily: 'Poppins, sans-serif'
          }}>Our Services</h2>
          <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '450px', margin: '0 auto' }}>
            We provide complete water solutions for your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }} className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = service.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: service.color + '15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <IconComponent 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      color: service.color 
                    }} 
                  />
                </div>

                {/* Content */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0B3A5D',
                  marginBottom: '8px',
                  fontFamily: 'Poppins, sans-serif'
                }}>{service.title}</h3>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748b', 
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .services-grid > div { padding: 16px !important; }
          .services-grid h3 { font-size: 14px !important; }
          .services-grid p { font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
