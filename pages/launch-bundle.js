import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EmbeddedCheckout = dynamic(() => import('../components/EmbeddedCheckout'), { ssr: false })

export default function LaunchBundle() {
  return (
    <>
      <Head><title>The Launch Bundle — EcomVault</title></Head>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{
          padding: '100px 24px 80px', background: '#0a0a0a', color: '#fff',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

          {/* Best value badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', padding: '6px 18px', marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', color: '#4ade80', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>Best value — save $367 AUD</span>
          </div>

          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>EcomVault Service</p>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 9vw, 100px)', lineHeight: 0.95, letterSpacing: '2px', marginBottom: '24px' }}>
            THE LAUNCH<br />
            <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(40px, 7vw, 86px)', color: '#aaa' }}>bundle.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#888', maxWidth: '580px', margin: '0 auto 48px', fontWeight: 300, lineHeight: 1.8 }}>
            Everything you need to launch a real ecommerce store — a winning product, a custom built Shopify store, and direct access to our vetted supplier. Done for you, start to finish.
          </p>

          {/* What's included pills */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            {['Supplier Access — $699', 'Custom Built Store + Product — $597', 'Total value — $1,296'].map((t, i) => (
              <div key={i} style={{
                background: i === 2 ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: `1px solid ${i === 2 ? 'rgba(255,255,255,0.2)' : '#333'}`,
                borderRadius: '100px', padding: '8px 18px',
                fontSize: '13px', color: i === 2 ? '#fff' : '#888',
                textDecoration: i === 2 ? 'none' : 'line-through',
              }}>{t}</div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '80px', lineHeight: 1, color: '#fff' }}>$999</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '16px', color: '#666' }}>AUD — one time</div>
              <div style={{ fontSize: '13px', color: '#4ade80' }}>Save $297 AUD</div>
            </div>
          </div>
          <a href="#order" style={{ display: 'inline-block', background: '#fff', color: '#0a0a0a', padding: '18px 56px', borderRadius: '3px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '2px' }}>
            Get The Launch Bundle
          </a>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>

          {/* Two columns — what you get */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {/* Supplier */}
            <div style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '36px' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', letterSpacing: '2px', color: '#888', marginBottom: '12px' }}>INCLUDED — SUPPLIER ACCESS</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '16px' }}>Direct Supplier Introduction</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Personal introduction to our vetted supplier', 'Access to thousands of products at competitive prices', 'Fast shipping options for Australian customers', 'Low MOQ — test before you scale', 'Ongoing direct relationship — no middleman'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#555' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom store */}
            <div style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: '4px', padding: '36px', color: '#fff' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', letterSpacing: '2px', color: '#666', marginBottom: '12px' }}>INCLUDED — CUSTOM BUILT STORE</div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '16px' }}>Store + Winning Product</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Hand-picked winning product from our curated list', 'Fully custom designed Shopify storefront', 'Product setup — descriptions, images, pricing', 'Custom branding tailored to your product', 'Payment gateway configured and tested', 'Delivered within 3–5 business days'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#888' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it works */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '1px', marginBottom: '48px' }}>HOW IT WORKS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px' }}>
              {[
                { num: '01', title: 'Pay & submit', desc: 'Pay the bundle fee and submit your email, phone, and Discord.' },
                { num: '02', title: 'Get the product list', desc: 'We send you our curated winning product list within 24hrs.' },
                { num: '03', title: 'Pick your product', desc: 'Choose the product that resonates with you.' },
                { num: '04', title: 'Supplier intro', desc: 'We personally introduce you to our supplier within 24hrs.' },
                { num: '05', title: 'Store delivered', desc: 'Your fully built store is handed over within 3–5 business days.' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#f8f8f6', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: '#888', margin: '0 auto 16px' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '0.5px', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.8, fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Order form */}
          <div id="order" style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '48px', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', letterSpacing: '1px', marginBottom: '6px', textAlign: 'center' }}>GET THE BUNDLE</h2>
            <p style={{ fontSize: '13px', color: '#888', textAlign: 'center', marginBottom: '8px' }}>$999 AUD — everything included</p>
            <p style={{ fontSize: '12px', color: '#4ade80', textAlign: 'center', marginBottom: '32px' }}>You save $297 AUD vs buying separately</p>
            <EmbeddedCheckout product="launch-bundle" price="$999" label="The Launch Bundle" fields={['email', 'phone', 'discord']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
