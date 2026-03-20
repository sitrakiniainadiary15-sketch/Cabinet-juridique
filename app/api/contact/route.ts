import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Message from '@/lib/models/Message'

export async function POST(req: NextRequest) {
  try {
    const { nom, email, telephone, message } = await req.json()

    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    await connectDB()
    const nouveauMessage = await Message.create({
      nom,
      email,
      telephone: telephone || '',
      message,
    })

    return NextResponse.json({ success: true, id: nouveauMessage._id }, { status: 201 })
  } catch (error) {
    console.error('Erreur création message:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}