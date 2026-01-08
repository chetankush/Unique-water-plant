import { AlertCircle } from 'lucide-react';

const pricingData = [
  { size: '250 ml', name: 'Small Bottle', bottles: '40 पीस', distributor: '₹105', retailer: '₹130' },
  { size: '500 ml', name: 'Regular Bottle', bottles: '24 पीस', distributor: '₹84', retailer: '₹110' },
  { size: '1 Litre', name: 'Standard Bottle', bottles: '12 पीस', distributor: '₹63', retailer: '₹80-85' },
  { size: '2 Litre', name: 'Jumbo Bottle', bottles: '09 पीस', distributor: '₹105', retailer: '₹135-140' },
];

const terms = [
  { label: 'न्यूनतम ऑर्डर (Min Order)', value: 'होलसेल के लए 100 पेटी, रिटेलर के लए 5 पेटी' },
  { label: 'भुगतान (Payment)', value: '20% एडवांस बुकिंग पर, शेष राशी डलीवरी से पहले' },
  { label: 'दर (Rates)', value: 'बाजार के अनुसार कीमत 1-2₹ बदल सकती है' },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <style>{`
        .pricing-table-header {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          padding: 20px 24px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 16px;
        }
        .pricing-table-row {
          padding: 20px 24px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 16px;
          align-items: center;
        }
        .pricing-header h2 {
          font-size: 36px;
        }
        @media (max-width: 768px) {
          .pricing-table-header {
            display: none;
          }
          .pricing-table-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 16px;
            text-align: left;
          }
          .pricing-table-row > div:first-child {
            margin-bottom: 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e2e8f0;
          }
          .pricing-table-row span {
            text-align: left !important;
            display: block;
          }
          .pricing-table-row span::before {
            font-weight: 600;
            color: #64748b;
            font-size: 12px;
          }
          .pricing-header h2 {
            font-size: 28px !important;
          }
          .pricing-header p {
            font-size: 14px !important;
          }
          .terms-box {
            padding: 16px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="pricing-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0,217,255,0.1)',
            color: '#0B3A5D',
            padding: '6px 16px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '16px'
          }}>PRICING</span>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#0B3A5D',
            marginBottom: '12px',
            fontFamily: 'Poppins, sans-serif'
          }}>प्रोडक्ट और प्राइस लिस्ट</h2>
          <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>
            Product & Price List - Clear rates for distributors and retailers
          </p>
        </div>

        {/* Pricing Table */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)'
          }}>
            {/* Table Header */}
            <div className="pricing-table-header">
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>मॉडल (Size)</span>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textAlign: 'center' }}>पेकेज (Bottles/Box)</span>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textAlign: 'center' }}>होलसेल रेट (Distributor)</span>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textAlign: 'center' }}>रिटेलर रेट (Retailer)</span>
            </div>

            {/* Table Rows */}
            {pricingData.map((row, index) => (
              <div
                key={row.size}
                className="pricing-table-row"
                style={{
                  backgroundColor: index % 2 === 0 ? '#fff' : '#F8FAFC',
                  borderBottom: index < pricingData.length - 1 ? '1px solid #f1f5f9' : 'none'
                }}
              >
                <div>
                  <span style={{ fontWeight: 700, color: '#0B3A5D', fontSize: '16px', display: 'block' }}>{row.size}</span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{row.name}</span>
                </div>
                <span style={{ color: '#64748b', fontSize: '14px', textAlign: 'center' }}><span className="mobile-label" style={{ display: 'none' }}>Bottles: </span>{row.bottles}</span>
                <span style={{ fontWeight: 700, color: '#22c55e', fontSize: '15px', textAlign: 'center' }}><span className="mobile-label" style={{ display: 'none' }}>Distributor: </span>{row.distributor} / पेटी</span>
                <span style={{ fontWeight: 700, color: '#FF6B35', fontSize: '15px', textAlign: 'center' }}><span className="mobile-label" style={{ display: 'none' }}>Retailer: </span>{row.retailer} / पेटी</span>
              </div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <div className="terms-box" style={{
            marginTop: '32px',
            backgroundColor: '#FEF9C3',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #FDE047'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <AlertCircle style={{ width: '20px', height: '20px', color: '#CA8A04' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#854D0E' }}>नियम एवं शर्तें (Terms & Conditions)</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {terms.map((term) => (
                <li key={term.label} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '10px', 
                  marginBottom: '12px',
                  fontSize: '14px',
                  color: '#713F12'
                }}>
                  <span style={{ color: '#CA8A04', marginTop: '2px' }}>•</span>
                  <span><strong>{term.label}:</strong> {term.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Campaign Date */}
          <div style={{
            marginTop: '24px',
            backgroundColor: '#EFF6FF',
            borderRadius: '12px',
            padding: '16px 24px',
            textAlign: 'center',
            border: '1px solid #BFDBFE'
          }}>
            <p style={{ fontSize: '15px', color: '#1E40AF' }}>
              📅 <strong>रेट लिस्ट लागू दिनांक:</strong>{' '}
              <span style={{ color: '#DC2626', fontWeight: 700 }}>01 जनवरी 2026</span> से{' '}
              <span style={{ color: '#DC2626', fontWeight: 700 }}>31 दिसंबर 2027</span> तक
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
