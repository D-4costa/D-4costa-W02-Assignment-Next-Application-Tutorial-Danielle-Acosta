import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

type InvoiceButtonProps = {
  id: string;
};

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: '#d63384',
        color: '#fff',
        borderRadius: '8px',
        padding: '10px 14px',
        textDecoration: 'none',
        fontWeight: 600,
      }}
    >
      <span>Create Invoice</span>
      <PlusIcon style={{ width: '18px' }} />
    </Link>
  );
}

export function UpdateInvoice({ id }: InvoiceButtonProps) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        border: '1px solid #f3c4d7',
      }}
    >
      <PencilIcon style={{ width: '16px' }} />
    </Link>
  );
}

export function DeleteInvoice({ id }: InvoiceButtonProps) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button
        type="submit"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          border: '1px solid #f3c4d7',
          background: '#fff',
          cursor: 'pointer',
        }}
      >
        <TrashIcon style={{ width: '16px' }} />
      </button>
    </form>
  );
}
