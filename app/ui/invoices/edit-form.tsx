'use client';

import Link from 'next/link';

import type { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice } from '@/app/lib/actions';

type EditFormProps = {
  invoice: InvoiceForm;
  customers: CustomerField[];
};

export default function EditForm({ invoice, customers }: EditFormProps) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId} style={{ display: 'grid', gap: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #f3c4d7',
          borderRadius: '12px',
          padding: '16px',
          display: 'grid',
          gap: '12px',
        }}
      >
        <label style={{ display: 'grid', gap: '6px' }}>
          <span>Choose customer</span>
          <select
            name="customerId"
            defaultValue={invoice.customer_id}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #f3c4d7' }}
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: 'grid', gap: '6px' }}>
          <span>Amount</span>
          <input
            name="amount"
            type="number"
            step="0.01"
            defaultValue={invoice.amount}
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #f3c4d7' }}
          />
        </label>

        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: '8px' }}>Status</legend>
          <div style={{ display: 'flex', gap: '12px' }}>
            <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <input
                type="radio"
                name="status"
                value="pending"
                defaultChecked={invoice.status === 'pending'}
                required
              />
              Pending
            </label>
            <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <input
                type="radio"
                name="status"
                value="paid"
                defaultChecked={invoice.status === 'paid'}
                required
              />
              Paid
            </label>
          </div>
        </fieldset>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <Link
          href="/dashboard/invoices"
          style={{
            background: '#ffd6e7',
            color: '#7a2a55',
            borderRadius: '8px',
            padding: '10px 14px',
            textDecoration: 'none',
          }}
        >
          Cancel
        </Link>
        <button
          type="submit"
          style={{
            background: '#d63384',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 14px',
            cursor: 'pointer',
          }}
        >
          Edit Invoice
        </button>
      </div>
    </form>
  );
}
