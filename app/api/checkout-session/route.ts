import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'
import { getAuth } from "@clerk/nextjs/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req)

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { items } = await req.json()

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'No items provided' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'huf',
          product_data: {
            name: item.name,
            images: [item.imageUrl],
          },
          unit_amount: item.price * 100, 
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
      client_reference_id: userId, 
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err: any) {
    console.error('Error creating checkout session:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}