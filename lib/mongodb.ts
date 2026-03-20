import mongoose from 'mongoose'

const MONGODB_URI = process.env.DATABASE_URL as string

if (!MONGODB_URI) throw new Error('DATABASE_URL manquant dans .env')

let cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectDB() {
  if (cached.conn) return cached.conn
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI)
  cached.conn = await cached.promise
  return cached.conn
}