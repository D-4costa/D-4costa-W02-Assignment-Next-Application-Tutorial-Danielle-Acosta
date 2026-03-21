import Link from 'next/link';

import { signOut } from '@/auth';
import NavLinks from './nav-links';
import AcmeLogo from '../acme-logo';

export default function SideNav() {
  return (
    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          background: '#ffb3d1',
          color: '#fff',
          borderRadius: '10px',
          padding: '14px',
          display: 'block',
        }}
      >
        <AcmeLogo />
      </Link>
      <NavLinks />
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
        style={{ marginTop: 'auto' }}
      >
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #f3c4d7',
            background: '#fff',
            color: '#7a2a55',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
