import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PRODUCTS = {
  'supplier': { label: 'Supplier Introduction', next: 'We will personally introduce you to our supplier within 24 hours.' },
  'custom-store': { label: 'Custom Built Store + Selected Product', next: 'We will reach out via Discord within 24 hours to get your brief and send you the winning product list.' },
  'launch-bundle': { label: 'The Launch Bundle', next: 'We will reach out via Discord within 24 hours to get your brief, send you the product list, and introduce you to our supplier.' },
}

export default function Success() {
  const router = useRouter()
  const product = PRODUCTS[router.query.product] || { label: 'Your order', next: 'We will be in touch shortly.' }

  return (
    <>
      <Head><title>Order Confirmed — EcomVault</title></Head>
      <div style={{
        minHeight: '100vh', background: '#f8f8f6', fontFamily: 'DM Sans, sans-serif',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '40px 24px', textAlign: 'center',
      }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: '#f0fdf4', border: '1px solid #bbf7d0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '28px',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>

        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 6vw, 56px)', letterSpacing: '2px', marginBottom: '12px' }}>
          Payment confirmed.
        </h1>
        <p style={{ fontSize: '18px', color: '#888', marginBottom: '8px' }}>{product.label}</p>
        <p style={{ fontSize: '15px', color: '#aaa', maxWidth: '420px', lineHeight: 1.7, marginBottom: '40px' }}>{product.next}</p>

        <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '24px 32px', maxWidth: '400px', width: '100%', marginBottom: '32px' }}>
          {['Payment received', 'Order confirmed', 'We will be in touch shortly'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: i < 2 ? '1px solid #f0f0f0' : 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ fontSize: '14px', color: '#555' }}>{s}</span>
            </div>
          ))}
        </div>

        <Link href="/" style={{
          background: '#0a0a0a', color: '#fff',
          padding: '13px 36px', borderRadius: '3px',
          fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '1px',
        }}>Back to EcomVault</Link>

        <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');`}</style>
      </div>
    </>
  )
}
