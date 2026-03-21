import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditForm from '@/app/ui/invoices/edit-form';

type EditInvoicePageProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: EditInvoicePageProps) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(params.id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customers} />
    </main>
  );
}
