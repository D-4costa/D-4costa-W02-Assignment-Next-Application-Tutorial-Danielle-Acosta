import type { LatestInvoice } from '@/app/lib/definitions';

type LatestInvoicesProps = {
  latestInvoices: LatestInvoice[];
};

export default function LatestInvoices({ latestInvoices }: LatestInvoicesProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#fef9c3',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h3 style={{ marginBottom: '20px' }}>Latest Invoices</h3>

      {latestInvoices.map((invoice) => (
        <div
          key={invoice.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #eee',
          }}
        >
          <span>{invoice.name}</span>
          <span>{invoice.amount}</span>
        </div>
      ))}
    </div>
  );
}
