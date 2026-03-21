'use client';

import Link from 'next/link';

import type { CustomerField } from '@/app/lib/definitions';
import { createInvoice } from '@/app/lib/actions';

type FormProps = {
  customers: CustomerField[];
};

export default function Form({ customers }: FormProps) {
  return (
    <form action={createInvoice} style={{ display: 'grid', gap: '16px' }}>
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
            defaultValue=""
            required
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #f3c4d7' }}
          >
            <option value="" disabled>
              Select a customer
            </option>
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
            required
            placeholder="Enter USD amount"
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #f3c4d7' }}
          />
        </label>

        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: '8px' }}>Status</legend>
          <div style={{ display: 'flex', gap: '12px' }}>
            <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <input type="radio" name="status" value="pending" required />
              Pending
            </label>
            <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <input type="radio" name="status" value="paid" required />
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
          Create Invoice
        </button>
      </div>
    </form>
  );
}
