import Link from 'next/link';

import AcmeLogo from '@/app/ui/acme-logo';

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', padding: '24px' }}>
      <div
        style={{
          background: '#ffb3d1',
          color: '#fff',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '16px',
        }}
      >
        <AcmeLogo />
      </div>

      <section
        style={{
          display: 'grid',
          gap: '12px',
          maxWidth: '640px',
          background: '#fff',
          borderRadius: '12px',
          border: '1px solid #f3c4d7',
          padding: '20px',
        }}
      >
        <h1 style={{ margin: 0, color: '#d63384' }}>Welcome to Acme Dashboard</h1>
        <p style={{ margin: 0 }}>
          This project now follows the final example structure and features.
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
          <Link
            href="/login"
            style={{
              background: '#d63384',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            style={{
              background: '#ffd6e7',
              color: '#7a2a55',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
