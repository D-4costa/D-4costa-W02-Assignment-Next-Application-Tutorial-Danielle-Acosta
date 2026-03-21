import type { CardData } from '@/app/lib/definitions';

type CardWrapperProps = {
  data: CardData;
};

export default function CardWrapper({ data }: CardWrapperProps) {
  const cards = [
    { title: 'Ingresos pagados', value: data.totalPaidInvoices },
    { title: 'Clientes', value: data.numberOfCustomers.toLocaleString() },
    { title: 'Facturas', value: data.numberOfInvoices.toLocaleString() },
    { title: 'Pendientes', value: data.totalPendingInvoices },
  ];

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            backgroundColor: '#fdf4ff',
          }}
        >
          <h3 style={{ marginBottom: '10px', color: '#555' }}>{card.title}</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{card.value}</p>
        </div>
      ))}
    </>
  );
}
