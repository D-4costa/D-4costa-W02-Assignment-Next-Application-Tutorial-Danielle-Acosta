import { Suspense } from 'react';

import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          display: 'grid',
          gap: '12px',
        }}
      >
        <div
          style={{
            background: '#ffb3d1',
            color: '#fff',
            borderRadius: '12px',
            padding: '18px',
          }}
        >
          <AcmeLogo />
        </div>
        <div
          style={{
            background: '#fff',
            border: '1px solid #f3c4d7',
            borderRadius: '12px',
            padding: '18px',
          }}
        >
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
