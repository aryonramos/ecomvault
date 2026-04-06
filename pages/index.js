import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_LINK || 'https://discord.gg/gYENecc7'
const MEMBER_COUNT = 75

export default function Home() {
  const services = [
    {
      href: '/supplier',
      num: '01',
      title: 'Supplier Connect',
      desc: 'A direct personal introduction to our vetted supplier. Skip AliExpress guesswork entirely.',
      price: '$699 AUD',
      cta: 'Get connected',
      badge: null,
    },
    {
      href: '/custom-store',
      num: '02',
      title: 'Custom Built Store + Selected Product',
      desc: 'We build your entire Shopify store around a hand-picked winning product. Done for you.',
      price: '$597 AUD',
      cta: 'Get your store built',
      badge: null,
    },
    {
      href: '/launch-bundle',
      num: '03',
      title: 'The Launch Bundle',
      desc: 'Supplier access + custom built store + winning product. Everything you need to launch, bundled and discounted.',
      price: '$999 AUD',
      cta: 'Get the bundle',
      badge: 'Best Value',
    },
  ]

  const pillars = [
    { title: 'Product research', desc: 'How to find products that sell before you spend a cent.' },
    { title: 'Store setup', desc: 'Step-by-step Shopify setup guides from zero to live.' },
    { title: 'Organic traffic', desc: 'How to drive sales through TikTok and Instagram without paid ads.' },
    { title: 'Scaling', desc: 'What to do once you have your first sales and want to grow.' },
    { title: 'Supplier sourcing', desc: 'Where to find reliable suppliers and how to negotiate.' },
    { title: 'Community', desc: 'A group of people actually doing this — not just talking about it.' },
  ]

  return (
    <>
      <Head>
        <title>EcomVault — Financial Freedom Through Ecommerce</title>
        <meta name="description" content="EcomVault is a free community helping everyday people build profitable ecommerce businesses through dropshipping and Shopify." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <main style={{ paddingTop: '64px' }}>

        {/* HERO */}
        <section style={{
          minHeight: '95vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '80px 24px 60px',
          background: 'linear-gradient(180deg, #fff 0%, #f4f4f2 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Subtle grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px', pointerEvents: 'none',
          }} />

          <div className="fade-up" style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--black)', borderRadius: '100px',
              padding: '6px 18px', marginBottom: '36px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ fontSize: '11px', color: 'var(--white)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
                {MEMBER_COUNT} members and growing
              </span>
            </div>
          </div>

          <h1 className="fade-up-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 12vw, 130px)',
            lineHeight: 0.9, letterSpacing: '2px',
            marginBottom: '32px',
          }}>
            YOUR FINANCIAL<br />
            <span style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic',
              fontSize: 'clamp(56px, 10vw, 112px)',
              background: 'linear-gradient(90deg, #888, #1a1a1a, #888)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
              letterSpacing: '1px',
            }}>freedom</span><br />
            <span style={{ fontSize: 'clamp(64px, 12vw, 130px)', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>STARTS HERE</span>
          </h1>

          <p className="fade-up-2" style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--muted)',
            maxWidth: '540px', marginBottom: '48px', lineHeight: 1.8, fontWeight: 300,
          }}>
            EcomVault is a free community built to help everyday people build a real income through ecommerce — using a business model that's been proven time and time again.
          </p>

          <div className="fade-up-3 hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={DISCORD_LINK} target="_blank" rel="noreferrer" style={{
              background: 'var(--black)', color: 'var(--white)',
              padding: '16px 40px', borderRadius: '3px',
              fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '2px',
              transition: 'all 0.2s', display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
              Join Free — Discord
            </a>
            <Link href="/custom-store" style={{
              border: '1px solid var(--border)', color: 'var(--muted)',
              padding: '16px 32px', borderRadius: '3px',
              fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '1px',
              transition: 'all 0.2s', display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--black)'; e.currentTarget.style.color = 'var(--black)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}>
              Done For You
            </Link>
          </div>

          <div className="fade-up-4" style={{
            display: 'flex', gap: '32px', marginTop: '64px',
            flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {['100% free to join', 'Proven business model', 'Active community'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* WHY WE BUILT THIS */}
        <section style={{ padding: '120px 24px', background: 'var(--black)', color: 'var(--white)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Why we built this</p>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  lineHeight: 0.95, letterSpacing: '1px', marginBottom: '32px',
                }}>
                  FINANCIAL FREEDOM SHOULDN'T BE A SECRET
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '17px', color: '#aaa', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                  EcomVault was built with one goal — to help everyday people achieve financial freedom through a business model that has been proven time and time again.
                </p>
                <p style={{ fontSize: '17px', color: '#aaa', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                  Dropshipping and ecommerce changed what was possible for people willing to learn and take action. The problem was that the best information was always locked behind expensive courses, paywalls, or kept between a small group of people already winning.
                </p>
                <p style={{ fontSize: '17px', color: '#aaa', lineHeight: 1.9, fontWeight: 300 }}>
                  EcomVault exists to change that. Everything you need to build a real ecommerce business — completely free, inside our Discord community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ padding: '120px 24px', background: 'var(--off-white)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>What's inside</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '1px' }}>
                EVERYTHING YOU NEED.<br />
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 64px)' }}>completely free.</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
              {pillars.map((p, i) => (
                <div key={i} style={{
                  background: 'var(--white)', border: '1px solid var(--border)',
                  padding: '32px 28px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', color: 'var(--silver2)', lineHeight: 1, marginBottom: '16px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.5px', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href={DISCORD_LINK} target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                background: 'var(--black)', color: 'var(--white)',
                padding: '16px 48px', borderRadius: '3px',
                fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '2px',
              }}>
                Join The Community Free
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ padding: '120px 24px', background: 'var(--white)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Done for you</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '1px', marginBottom: '20px' }}>
                WANT TO SKIP<br />
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 64px)' }}>the hard parts?</span>
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
                Everything in EcomVault is free to learn. But if you want it done for you — we offer three premium services for members who want to move faster.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {services.map((s, i) => (
                <div key={i} style={{
                  background: s.badge ? 'var(--black)' : 'var(--off-white)',
                  border: s.badge ? '1px solid #333' : '1px solid var(--border)',
                  borderRadius: '4px', padding: '36px 28px',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                  {s.badge && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#4ade80', color: '#000', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', padding: '4px 10px', borderRadius: '100px', textTransform: 'uppercase' }}>{s.badge}</div>
                  )}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', color: s.badge ? '#333' : 'var(--silver2)', lineHeight: 1, marginBottom: '20px' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '0.5px', marginBottom: '12px', color: s.badge ? '#fff' : 'var(--black)' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: s.badge ? '#888' : 'var(--muted)', lineHeight: 1.8, fontWeight: 300, flex: 1, marginBottom: '28px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: s.badge ? '#fff' : 'var(--black)' }}>{s.price}</span>
                    <Link href={s.href} style={{
                      background: s.badge ? '#fff' : 'var(--black)',
                      color: s.badge ? '#000' : 'var(--white)',
                      padding: '10px 20px', borderRadius: '3px',
                      fontFamily: 'var(--font-display)', fontSize: '14px', letterSpacing: '1px',
                    }}>{s.cta}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{
          padding: '120px 24px', textAlign: 'center',
          background: 'var(--black)', color: 'var(--white)',
        }}>
          <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>Ready to start?</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 9vw, 100px)',
            lineHeight: 0.95, letterSpacing: '2px', marginBottom: '32px',
          }}>
            YOUR FIRST SALE<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(40px, 7vw, 86px)' }}>is closer than you think.</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#888', marginBottom: '48px', fontWeight: 300 }}>
            Join {MEMBER_COUNT}+ members already inside. It's free.
          </p>
          <a href={DISCORD_LINK} target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            background: 'var(--white)', color: 'var(--black)',
            padding: '18px 56px', borderRadius: '3px',
            fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '2px',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Join EcomVault Free
          </a>
        </section>

      </main>
      <Footer />
    </>
  )
}
