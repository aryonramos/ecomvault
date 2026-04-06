import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 32px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
      background: 'var(--off-white)', padding: '48px 16px',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', letterSpacing: '2px' }}>
        ECOM<span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '26px' }}>vault</span>
      </span>
      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '13px', color: 'var(--muted)' }}>
        <Link href="/">Home</Link>
        <Link href="/supplier">Supplier Connect</Link>
        <Link href="/custom-store">Custom Built Store</Link>
        <Link href="/launch-bundle">Launch Bundle</Link>
      </div>
      <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center' }}>
        © {new Date().getFullYear()} EcomVault. All rights reserved. · Australia
      </p>
    </footer>
  )
}
