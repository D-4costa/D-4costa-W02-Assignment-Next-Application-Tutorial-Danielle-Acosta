import Image from 'next/image';

import type { FormattedCustomersTable } from '@/app/lib/definitions';
import Search from '@/app/ui/search';

type CustomersTableProps = {
  customers: FormattedCustomersTable[];
};

export default function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Customers</h1>

      <div style={{ marginBottom: '16px' }}>
        <Search placeholder="Search customers..." />
      </div>

      <div style={{ overflowX: 'auto' }}>
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
              <th style={{ textAlign: 'left', padding: '12px' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Email</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Invoices</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Pending</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Paid</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} style={{ borderTop: '1px solid #f3c4d7' }}>
                <td style={{ padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Image
                    src={customer.image_url}
                    alt={`${customer.name} profile`}
                    width={28}
                    height={28}
                    style={{ borderRadius: '999px' }}
                  />
                  <span>{customer.name}</span>
                </td>
                <td style={{ padding: '12px' }}>{customer.email}</td>
                <td style={{ padding: '12px' }}>{customer.total_invoices}</td>
                <td style={{ padding: '12px' }}>{customer.total_pending}</td>
                <td style={{ padding: '12px' }}>{customer.total_paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
