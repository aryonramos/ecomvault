import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EmbeddedCheckout = dynamic(() => import('../components/EmbeddedCheckout'), { ssr: false })

export default function CustomStore() {
  return (
    <>
      <Head><title>Custom Built Store + Selected Product — EcomVault</title></Head>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{
          padding: '100px 24px 80px', background: '#0a0a0a', color: '#fff',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>EcomVault Service</p>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 9vw, 100px)', lineHeight: 0.95, letterSpacing: '2px', marginBottom: '24px' }}>
            CUSTOM BUILT STORE<br />
            <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(40px, 7vw, 86px)', color: '#aaa' }}>built for you.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#888', maxWidth: '560px', margin: '0 auto 48px', fontWeight: 300, lineHeight: 1.8 }}>
            Pick from our curated list of winning products. We build your entire Shopify store around it — custom designed and ready to drive traffic within 3–5 business days.
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '72px', lineHeight: 1, color: '#fff' }}>$597</span>
            <span style={{ fontSize: '16px', color: '#666' }}>AUD — one time</span>
          </div>
          <a href="#order" style={{ display: 'inline-block', background: '#fff', color: '#0a0a0a', padding: '16px 48px', borderRadius: '3px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '2px' }}>Get Your Store Built</a>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {[
              { title: 'Winning product included', desc: 'Choose from our curated list of hand-picked, high-margin products with proven demand.' },
              { title: 'Custom designed storefront', desc: 'Not a template — a fully custom Shopify store designed for your product and audience.' },
              { title: 'Full product setup', desc: 'Descriptions, images, pricing and variants all configured and ready.' },
              { title: 'Custom branding', desc: 'Colour palette, typography and logo direction tailored to your product and niche.' },
              { title: 'Payment gateway configured', desc: 'Shopify Payments set up and tested so you can take real orders from day one.' },
              { title: 'Delivered in 3–5 days', desc: 'From briefing to handover in 3–5 business days.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '28px', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.5px', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '1px', marginBottom: '48px' }}>HOW IT WORKS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
              {[
                { num: '01', title: 'Pay & submit', desc: 'Pay the one-time fee and submit your email and Discord username.' },
                { num: '02', title: 'Get the product list', desc: 'We send you our curated winning product list within 24hrs.' },
                { num: '03', title: 'Pick your product', desc: 'Choose the product that resonates with you.' },
                { num: '04', title: 'Store delivered', desc: 'Your fully built store is handed over within 3–5 business days.' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#f8f8f6', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: '#888', margin: '0 auto 16px' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '0.5px', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.8, fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="order" style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '48px', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', letterSpacing: '1px', marginBottom: '6px', textAlign: 'center' }}>GET STARTED</h2>
            <p style={{ fontSize: '13px', color: '#888', textAlign: 'center', marginBottom: '32px' }}>$597 AUD · Store delivered in 3–5 business days</p>
            <EmbeddedCheckout product="custom-store" price="$597" label="Custom Built Store + Selected Product" fields={['email', 'discord']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
