import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/supplier', label: 'Supplier' },
    { href: '/custom-store', label: 'Custom Store' },
    { href: '/launch-bundle', label: 'Launch Bundle' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', padding: '0 32px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '2px', color: 'var(--black)' }}>
          ECOM<span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '22px', letterSpacing: '1px' }}>vault</span>
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.5px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--black)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
              {l.label}
            </Link>
          ))}
          <a href={process.env.NEXT_PUBLIC_DISCORD_LINK || 'https://discord.gg/gYENecc7'} target="_blank" rel="noreferrer" style={{
            background: 'var(--black)', color: 'var(--white)',
            padding: '9px 22px', borderRadius: '3px',
            fontFamily: 'var(--font-display)', fontSize: '15px', letterSpacing: '1px',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Join Free
          </a>
        </div>

        <button className="mobile-btn" onClick={() => setOpen(o => !o)} style={{
          background: 'none', border: 'none', display: 'none',
          flexDirection: 'column', gap: '5px', padding: '8px',
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--black)', borderRadius: '2px',
              transform: open && i === 0 ? 'rotate(45deg) translate(5px, 5px)' : open && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
              transition: 'all 0.25s',
            }} />
          ))}
        </button>
      </nav>

      <div style={{
        position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
        background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e8e8e8',
        maxHeight: open ? '300px' : '0', overflow: 'hidden',
        transition: 'max-height 0.35s ease, padding 0.35s ease',
        padding: open ? '24px 32px' : '0 32px',
        display: 'flex', flexDirection: 'column', gap: '20px',
      }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: '18px', fontFamily: 'var(--font-display)', letterSpacing: '1px', color: 'var(--muted)' }}>
            {l.label}
          </Link>
        ))}
        <a href={process.env.NEXT_PUBLIC_DISCORD_LINK || 'https://discord.gg/gYENecc7'} target="_blank" rel="noreferrer" style={{
          display: 'inline-block', background: 'var(--black)', color: 'var(--white)',
          padding: '14px 28px', borderRadius: '3px', fontFamily: 'var(--font-display)',
          fontSize: '16px', letterSpacing: '1px', textAlign: 'center',
        }}>Join Free</a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
