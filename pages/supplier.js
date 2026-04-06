import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EmbeddedCheckout = dynamic(() => import('../components/EmbeddedCheckout'), { ssr: false })

export default function Supplier() {
  return (
    <>
      <Head><title>Supplier Connect — EcomVault</title></Head>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ padding: '100px 24px 80px', background: 'linear-gradient(180deg, #f8f8f6 0%, #fff 100%)', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#888', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>EcomVault Service</p>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 9vw, 100px)', lineHeight: 0.95, letterSpacing: '2px', marginBottom: '24px' }}>
            SUPPLIER<br />
            <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(40px, 7vw, 86px)' }}>connect.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#888', maxWidth: '520px', margin: '0 auto 48px', fontWeight: 300, lineHeight: 1.8 }}>
            Stop wasting time on unreliable suppliers. Get a direct personal introduction to the same vetted supplier we use for our own stores.
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '72px', lineHeight: 1 }}>$699</span>
            <span style={{ fontSize: '16px', color: '#888' }}>AUD — one time</span>
          </div>
          <a href="#order" style={{ display: 'inline-block', background: '#0a0a0a', color: '#fff', padding: '16px 48px', borderRadius: '3px', fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '2px' }}>Get Connected</a>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {[
              { title: 'Vetted and trusted', desc: 'Personally vetted supplier we use for our own stores — not a random AliExpress seller.' },
              { title: 'Competitive pricing', desc: 'Access to thousands of products at prices that allow real margins.' },
              { title: 'Fast shipping', desc: 'Shipping options that work for Australian customers — not 45-day delays.' },
              { title: 'Low MOQ', desc: 'Test products with small quantities before committing to scale.' },
              { title: 'Personal introduction', desc: 'A direct personal intro — not a generic link. You get introduced properly.' },
              { title: 'Ongoing relationship', desc: 'Once introduced, you deal directly. No middleman, no ongoing fees.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.5px', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#0a0a0a', color: '#fff', borderRadius: '4px', padding: '40px', maxWidth: '700px', margin: '0 auto 64px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px', marginBottom: '32px' }}>HOW IT WORKS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px' }}>
              {[
                { num: '01', text: 'Pay the one-time fee and submit your details' },
                { num: '02', text: 'We personally introduce you to our supplier within 24hrs' },
                { num: '03', text: 'You deal directly from there — no middleman ongoing' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '40px', color: '#444', lineHeight: 1, marginBottom: '12px' }}>{s.num}</div>
                  <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.8, fontWeight: 300 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="order" style={{ background: '#f8f8f6', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '48px', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', letterSpacing: '1px', marginBottom: '6px', textAlign: 'center' }}>GET CONNECTED</h2>
            <p style={{ fontSize: '13px', color: '#888', textAlign: 'center', marginBottom: '32px' }}>$699 AUD · Introduction within 24hrs</p>
            <EmbeddedCheckout product="supplier" price="$699" label="Supplier Introduction" fields={['email', 'phone']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
