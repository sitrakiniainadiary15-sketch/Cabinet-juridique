import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  nom: String,
  email: String,
  telephone: String,
  sujet: String,
  message: String,
  lu: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)