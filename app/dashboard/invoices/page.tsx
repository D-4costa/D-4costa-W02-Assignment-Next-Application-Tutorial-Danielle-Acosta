import type { Metadata } from 'next';
import { Suspense } from 'react';

import { fetchInvoicesPages } from '../../lib/data';
import Pagination from '../../ui/invoices/pagination';
import Table from '../../ui/invoices/table';
import Search from '../../ui/search';
import { InvoicesTableSkeleton } from '../../ui/skeletons';
import { CreateInvoice } from '../../ui/invoices/buttons';

type InvoicesPageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function InvoicesPage({ searchParams }: InvoicesPageProps) {
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          gap: '12px',
        }}
      >
        <h1 style={{ fontSize: '28px', margin: 0 }}>Invoices</h1>
        <CreateInvoice />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Search placeholder="Search invoices..." />
      </div>

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div style={{ marginTop: '20px' }}>
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
