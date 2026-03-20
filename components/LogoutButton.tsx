'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/admin/login' })}
      style={{
        padding: '0.7rem 1.5rem',
        background: 'transparent',
        border: '1px solid rgba(201,168,76,0.4)',
        color: 'var(--or)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--or)'
        e.currentTarget.style.color = 'var(--noir)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = 'var(--or)'
      }}
    >
      Se déconnecter
    </button>
  )
}