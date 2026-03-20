import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { connectDB } from '@/lib/mongodb'
import Message from '@/lib/models/Message'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  const session = await getServerSession()
  if (!session) redirect('/admin/login')

  await connectDB()
  const messages = await Message.find().sort({ createdAt: -1 }).lean()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--noir)', padding: '2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}>
          <div>
            <div className="label">Espace admin</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300 }}>
              Dashboard
            </h1>
          </div>
          <LogoutButton />
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {[
            { label: 'Total messages', val: messages.length },
            { label: 'Non lus', val: messages.filter((m: any) => !m.lu).length },
            { label: 'Lus', val: messages.filter((m: any) => m.lu).length },
          ].map(({ label, val }) => (
            <div key={label} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '3rem',
                fontWeight: 300,
                color: 'var(--or)',
                lineHeight: 1,
              }}>
                {val}
              </div>
              <div className="label" style={{ marginTop: '0.5rem' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="label" style={{ marginBottom: '1rem' }}>Messages reçus</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {messages.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', color: 'var(--gris-light)', padding: '3rem' }}>
              Aucun message pour le moment
            </div>
          ) : (
            messages.map((msg: any) => (
              <div key={msg._id.toString()} className="card" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '1.5rem 2rem',
                borderLeft: msg.lu ? '3px solid transparent' : '3px solid var(--or)',
              }}>
                <div>
                  <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{msg.nom}</div>
                  <div style={{ color: 'var(--gris-light)', fontSize: '0.82rem' }}>{msg.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', marginBottom: '0.25rem' }}>{msg.sujet}</div>
                  <div style={{ color: 'var(--gris-light)', fontSize: '0.78rem' }}>
                    {new Date(msg.createdAt).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: msg.lu ? 'var(--gris)' : 'var(--or)',
                  fontWeight: 600,
                }}>
                  {msg.lu ? 'Lu' : 'Nouveau'}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}