import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function EmbeddedCheckout({ product, price, label, fields }) {
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    })
      .then(r => r.json())
      .then(data => { setClientSecret(data.clientSecret); setLoading(false) })
      .catch(() => setLoading(false))
  }, [product])

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0a0a0a',
      colorBackground: '#ffffff',
      colorText: '#0a0a0a',
      colorDanger: '#e53e3e',
      fontFamily: 'DM Sans, sans-serif',
      borderRadius: '3px',
      spacingUnit: '4px',
    },
    rules: {
      '.Input': { border: '1px solid #e0e0e0', padding: '12px 14px' },
      '.Input:focus': { border: '1px solid #0a0a0a', boxShadow: 'none' },
      '.Label': { fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888' },
    }
  }

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '40px 0', color: '#888', fontSize: '14px' }}>
      <div style={{ width: '18px', height: '18px', border: '2px solid #e0e0e0', borderTopColor: '#0a0a0a', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      Preparing secure checkout...
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )

  return clientSecret ? (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
      <CheckoutForm price={price} label={label} fields={fields} product={product} />
    </Elements>
  ) : (
    <div style={{ padding: '20px', background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '3px', fontSize: '14px', color: '#c53030' }}>
      Unable to load checkout. Please refresh the page.
    </div>
  )
}

function CheckoutForm({ price, label, fields, product }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [discord, setDiscord] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const inputStyle = {
    width: '100%', background: '#fff', border: '1px solid #e0e0e0',
    borderRadius: '3px', padding: '12px 14px', color: '#0a0a0a',
    fontFamily: 'DM Sans, sans-serif', fontSize: '15px', outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle = {
    display: 'block', fontSize: '11px', color: '#888',
    letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px',
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError('')

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success?product=${product}`,
        payment_method_data: { billing_details: { name, email } },
      },
    })

    if (error) { setError(error.message); setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Contact details */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', marginBottom: '16px', color: '#0a0a0a' }}>Your details</p>
        <div style={{ display: 'grid', gap: '14px' }}>
          <div>
            <label style={labelStyle}>Full name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" required placeholder="Your name" style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#0a0a0a'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
          </div>
          <div>
            <label style={labelStyle}>Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@email.com" style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#0a0a0a'}
              onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
          </div>
          {fields.includes('discord') && (
            <div>
              <label style={labelStyle}>Discord username</label>
              <input value={discord} onChange={e => setDiscord(e.target.value)} type="text" required placeholder="username" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#0a0a0a'}
                onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
            </div>
          )}
          {fields.includes('phone') && (
            <div>
              <label style={labelStyle}>Phone number</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" required placeholder="04XX XXX XXX" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#0a0a0a'}
                onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
            </div>
          )}
        </div>
      </div>

      {/* Stripe Payment Element */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', marginBottom: '16px', color: '#0a0a0a' }}>Payment details</p>
        <PaymentElement options={{ layout: 'tabs' }} />
      </div>

      {error && (
        <div style={{ background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '3px', padding: '12px 16px', fontSize: '14px', color: '#c53030', marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={!stripe || loading} style={{
        width: '100%', background: loading ? '#888' : '#0a0a0a',
        color: '#fff', border: 'none', padding: '15px',
        borderRadius: '3px', fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '18px', letterSpacing: '1px', cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
      }}>
        {loading ? (
          <>
            <div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            Processing...
          </>
        ) : `Pay ${price} AUD`}
      </button>
      <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', marginTop: '14px' }}>
        Secure checkout powered by Stripe. We never store your card details.
      </p>
    </form>
  )
}
