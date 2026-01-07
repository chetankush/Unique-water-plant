import waterBottleImage from '../assets/water-bottle-image.png';

const products = [
  {
    name: '250ml Bottle',
    size: '250 ml',
    description: 'Perfect for on the go Hydration.',
    bottles: '40 पीस',
    distributorPrice: '₹105',
    retailerPrice: '₹130',
    color: '#22d3ee',
  },
  {
    name: '500ml Bottle',
    size: '500 ml',
    description: 'Compact and convenient everyday pack.',
    bottles: '24 पीस',
    distributorPrice: '₹84',
    retailerPrice: '₹110',
    color: '#3b82f6',
  },
  {
    name: '1L Bottle',
    size: '1 Litre',
    description: 'Ideal for daily personal use.',
    bottles: '12 पीस',
    distributorPrice: '₹63',
    retailerPrice: '₹80-85',
    color: '#6366f1',
  },
  {
    name: '2L Bottle',
    size: '2 Litre',
    description: 'Best value for families.',
    bottles: '09 पीस',
    distributorPrice: '₹105',
    retailerPrice: '₹135-140',
    color: '#8b5cf6',
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: '60px 0', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255,107,53,0.1)',
            color: '#FF6B35',
            padding: '5px 14px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>प्रोडक्ट और प्राइस लिस्ट</span>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#0B3A5D',
            marginBottom: '8px',
            fontFamily: 'Poppins, sans-serif'
          }}>Product & Price List</h2>
          <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '400px', margin: '0 auto' }}>
            Choose the perfect size for your business
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="products-grid">
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                position: 'relative',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
              }}
            >
              {/* Product Visual - Water Bottle Image (Square, Full Fill) */}
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={waterBottleImage} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0B3A5D',
                  marginBottom: '6px',
                  fontFamily: 'Poppins, sans-serif'
                }}>{product.name}</h3>
                
                <p style={{ 
                  fontSize: '13px', 
                  color: '#64748b', 
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {product.description}
                </p>
                
                <p style={{ 
                  fontSize: '12px', 
                  color: '#94a3b8', 
                  marginBottom: '12px',
                  fontWeight: 500
                }}>
                  {product.bottles} / Box
                </p>

                {/* Pricing */}
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  padding: '12px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '8px',
                    paddingBottom: '8px',
                    borderBottom: '1px dashed #e2e8f0'
                  }}>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>Distributor</span>
                    <span style={{ 
                      fontSize: '16px', 
                      fontWeight: 800, 
                      color: '#22c55e',
                      fontFamily: 'Poppins, sans-serif'
                    }}>{product.distributorPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>Retailer</span>
                    <span style={{ 
                      fontSize: '16px', 
                      fontWeight: 800, 
                      color: '#FF6B35',
                      fontFamily: 'Poppins, sans-serif'
                    }}>{product.retailerPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .products-grid > div { border-radius: 12px !important; }
          .products-grid h3 { font-size: 14px !important; }
          .products-grid p { font-size: 11px !important; }
        }
      `}</style>
    </section>
  );
}
