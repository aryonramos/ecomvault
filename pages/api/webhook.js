import Stripe from 'stripe'
import { buffer } from 'micro'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export const config = { api: { bodyParser: false } }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const sig = req.headers['stripe-signature']
  const buf = await buffer(req)

  let event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return res.status(400).json({ error: `Webhook error: ${err.message}` })
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object
    console.log(`Payment succeeded: ${pi.metadata.label} — $${pi.amount / 100} AUD`)
  }

  res.json({ received: true })
}
