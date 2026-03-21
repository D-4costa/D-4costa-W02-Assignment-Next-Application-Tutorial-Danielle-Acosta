import type { Metadata } from 'next';

import { fetchFilteredCustomers } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

type CustomersPageProps = {
  searchParams?: {
    query?: string;
  };
};

export default async function CustomersPage({ searchParams }: CustomersPageProps) {
  const query = searchParams?.query ?? '';
  const customersRaw = await fetchFilteredCustomers(query);

  const customers = customersRaw.map((customer) => ({
    ...customer,
    total_invoices: Number(customer.total_invoices ?? 0),
    total_pending: formatCurrency(Number(customer.total_pending ?? 0)),
    total_paid: formatCurrency(Number(customer.total_paid ?? 0)),
  }));

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
