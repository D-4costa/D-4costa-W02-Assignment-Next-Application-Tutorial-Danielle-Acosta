import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function InvoiceStatus({ status }: { status: string }) {
  const isPaid = status === 'paid';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        borderRadius: '999px',
        padding: '4px 8px',
        fontSize: '12px',
        background: isPaid ? '#22c55e' : '#f3f4f6',
        color: isPaid ? '#fff' : '#374151',
      }}
    >
      {isPaid ? (
        <>
          Paid
          <CheckIcon style={{ width: '14px' }} />
        </>
      ) : (
        <>
          Pending
          <ClockIcon style={{ width: '14px' }} />
        </>
      )}
    </span>
  );
}
