'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { generatePagination } from '@/app/lib/utils';

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
      <PageButton
        href={createPageURL(currentPage - 1)}
        label="Previous"
        disabled={currentPage <= 1}
      />

      {allPages.map((page, index) =>
        page === '...' ? (
          <span key={`${page}-${index}`} style={{ padding: '8px 10px' }}>
            ...
          </span>
        ) : (
          <PageButton
            key={`${page}-${index}`}
            href={createPageURL(page)}
            label={String(page)}
            active={currentPage === page}
          />
        ),
      )}

      <PageButton
        href={createPageURL(currentPage + 1)}
        label="Next"
        disabled={currentPage >= totalPages}
      />
    </div>
  );
}

type PageButtonProps = {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

function PageButton({ href, label, active, disabled }: PageButtonProps) {
  const style = {
    padding: '8px 10px',
    borderRadius: '8px',
    textDecoration: 'none',
    border: '1px solid #f3c4d7',
    background: active ? '#d63384' : '#fff',
    color: active ? '#fff' : '#7a2a55',
    pointerEvents: disabled ? 'none' : 'auto',
    opacity: disabled ? 0.5 : 1,
  } as const;

  return (
    <Link href={href} style={style}>
      {label}
    </Link>
  );
}
