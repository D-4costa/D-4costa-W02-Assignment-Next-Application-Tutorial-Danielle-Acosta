'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Customers', href: '/dashboard/customers' },
  { name: 'Invoices', href: '/dashboard/invoices' },
] as const;

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        // Keep parent section active on nested routes like /dashboard/invoices/create
        <Link
          key={link.name}
          href={link.href}
          className={`navlink${
            pathname === link.href || pathname.startsWith(`${link.href}/`)
              ? ' active'
              : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
