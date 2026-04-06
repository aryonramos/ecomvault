import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PRODUCTS = {
  'supplier': { amount: 69900, label: 'Supplier Introduction' },
  'custom-store': { amount: 59700, label: 'Custom Built Store + Selected Product' },
  'launch-bundle': { amount: 99900, label: 'The Launch Bundle — Supplier + Custom Built Store' },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { product } = req.body
  const item = PRODUCTS[product]
  if (!item) return res.status(400).json({ error: 'Invalid product' })

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: item.amount,
      currency: 'aud',
      automatic_payment_methods: { enabled: true },
      metadata: { product, label: item.label },
    })
    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
