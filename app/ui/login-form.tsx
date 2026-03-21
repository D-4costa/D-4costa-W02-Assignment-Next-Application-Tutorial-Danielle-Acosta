'use client';

import { useSearchParams } from 'next/navigation';

import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const errorCode = searchParams.get('error');

  return (
    <form action={authenticate} style={{ display: 'grid', gap: '12px' }}>
      <h2 style={{ margin: 0, color: '#7a2a55' }}>Please log in to continue</h2>

      <label style={{ display: 'grid', gap: '6px' }}>
        <span>Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="user@nextmail.com"
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #f3c4d7',
          }}
        />
      </label>

      <label style={{ display: 'grid', gap: '6px' }}>
        <span>Password</span>
        <input
          name="password"
          type="password"
          required
          minLength={6}
          placeholder="******"
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #f3c4d7',
          }}
        />
      </label>

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <button
        type="submit"
        style={{
          background: '#d63384',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Log in
      </button>

      {errorCode ? (
        <p style={{ color: '#b42318', margin: 0 }}>Invalid credentials.</p>
      ) : null}
    </form>
  );
}
