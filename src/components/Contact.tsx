// import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  // const [form, setForm] = useState({ name: '', lastName: '', email: '', phone: '', message: '' });
  // const [errors, setErrors] = useState<Record<string, string>>({});
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  // const validate = () => {
  //   const e: Record<string, string> = {};
  //   if (!form.name.trim()) e.name = 'Required';
  //   if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
  //   if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid phone required';
  //   setErrors(e);
  //   return Object.keys(e).length === 0;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validate()) return;
  //   setLoading(true);
  //   await new Promise(r => setTimeout(r, 1500));
  //   setLoading(false);
  //   setSuccess(true);
  //   setForm({ name: '', lastName: '', email: '', phone: '', message: '' });
  //   setTimeout(() => setSuccess(false), 5000);
  // };

  // const inputStyle = (error?: string) => ({
  //   width: '100%',
  //   padding: '14px 16px',
  //   borderRadius: '8px',
  //   border: `1px solid ${error ? '#ef4444' : '#e2e8f0'}`,
  //   backgroundColor: '#fff',
  //   fontSize: '15px',
  //   outline: 'none',
  //   transition: 'border-color 0.2s'
  // });

  return (
    <section id="contact" style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
      <style>{`
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .contact-form-container {
          background-color: #fff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.06);
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-header h2 {
          font-size: 36px;
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-form-container {
            padding: 24px 16px;
            border-radius: 16px;
          }
          .contact-header h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#0B3A5D',
            marginBottom: '12px',
            fontFamily: 'Poppins, sans-serif'
          }}>Get in touch now</h2>
        </div>

        {/* Contact Info Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255,107,53,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin style={{ width: '20px', height: '20px', color: '#FF6B35' }} />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>Location</p>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#0B3A5D' }}>Khatkiya, Kumbhraj (District Guna) - 473222</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255,107,53,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mail style={{ width: '20px', height: '20px', color: '#FF6B35' }} />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>Email</p>
              <a href="mailto:abhimeena1402@gmail.com" style={{ fontSize: '14px', fontWeight: 500, color: '#0B3A5D', textDecoration: 'none' }}>
                abhimeena1402@gmail.com
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255,107,53,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Phone style={{ width: '20px', height: '20px', color: '#FF6B35' }} />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>Telephone</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a href="tel:+919111670455" style={{ fontSize: '14px', fontWeight: 500, color: '#0B3A5D', textDecoration: 'none' }}>
                  +91-91116-70455
                </a>
                <span style={{ color: '#64748b' }}>|</span>
                <a href="tel:+917610662296" style={{ fontSize: '14px', fontWeight: 500, color: '#0B3A5D', textDecoration: 'none' }}>
                  +91-76106-62296
                </a>
                <span style={{ color: '#64748b' }}>|</span>
                <a href="tel:+918085557159" style={{ fontSize: '14px', fontWeight: 500, color: '#0B3A5D', textDecoration: 'none' }}>
                  +91-80855-57159
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="contact-form-container">
          {success && (
            <div style={{
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#059669'
            }}>
              <CheckCircle style={{ width: '20px', height: '20px' }} />
              <p style={{ fontWeight: 500 }}>Thank you! We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle(errors.name)}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#00D9FF'}
                  onBlur={(e) => e.currentTarget.style.borderColor = errors.name ? '#ef4444' : '#e2e8f0'}
                />
                {errors.name && <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  style={inputStyle()}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#00D9FF'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle(errors.email)}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#00D9FF'}
                  onBlur={(e) => e.currentTarget.style.borderColor = errors.email ? '#ef4444' : '#e2e8f0'}
                />
                {errors.email && <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle(errors.phone)}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#00D9FF'}
                  onBlur={(e) => e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : '#e2e8f0'}
                />
                {errors.phone && <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.phone}</p>}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle(), resize: 'none' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#00D9FF'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '15px',
                boxShadow: '0 8px 25px rgba(255,107,53,0.3)',
                transition: 'all 0.3s',
                opacity: loading ? 0.7 : 1
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {loading ? (
                <>
                  <Loader2 style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send style={{ width: '18px', height: '18px' }} />
                </>
              )}
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}

