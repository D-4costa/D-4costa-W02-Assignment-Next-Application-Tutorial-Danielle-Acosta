import Image from 'next/image';

import { fetchFilteredInvoices } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';

type TableProps = {
  query: string;
  currentPage: number;
};

export default async function Table({ query, currentPage }: TableProps) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div style={{ marginTop: '16px', overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: '#fff',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <thead style={{ background: '#f5f5f5' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px' }}>Customer</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Email</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Amount</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} style={{ borderTop: '1px solid #f3c4d7' }}>
              <td style={{ padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name} profile`}
                    width={28}
                    height={28}
                    style={{ borderRadius: '999px' }}
                  />
                  <span>{invoice.name}</span>
                </div>
              </td>
              <td style={{ padding: '12px' }}>{invoice.email}</td>
              <td style={{ padding: '12px' }}>{formatCurrency(invoice.amount)}</td>
              <td style={{ padding: '12px' }}>{formatDateToLocal(invoice.date)}</td>
              <td style={{ padding: '12px' }}>
                <InvoiceStatus status={invoice.status} />
              </td>
              <td style={{ padding: '12px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <UpdateInvoice id={invoice.id} />
                  <DeleteInvoice id={invoice.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
