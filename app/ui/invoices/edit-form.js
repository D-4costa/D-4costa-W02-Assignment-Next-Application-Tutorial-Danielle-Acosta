'use client';

export default function EditForm({ invoice, customers }) {
  return (
    <form>

      <select name="customerId" defaultValue={invoice.customer_id}>
        {customers?.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="amount"
        defaultValue={invoice.amount}
      />

      <button type="submit">
        Update Invoice
      </button>

    </form>
  );
}
