import Link from 'next/link';

import type { Breadcrumb } from '@/app/lib/definitions';

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav style={{ marginBottom: '16px' }}>
      <ol style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: 0, margin: 0 }}>
        {breadcrumbs?.map((breadcrumb, index) => (
          <li key={breadcrumb.label} style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              href={breadcrumb.href}
              style={{
                textDecoration: 'none',
                color:
                  index === breadcrumbs.length - 1
                    ? '#7a2a55'
                    : '#d63384',
                fontWeight: index === breadcrumbs.length - 1 ? 700 : 500,
              }}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && <span style={{ margin: '0 6px' }}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
