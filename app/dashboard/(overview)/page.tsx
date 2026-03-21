import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { fetchCardData, fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  const [latestInvoices, cardData] = await Promise.all([
    fetchLatestInvoices(),
    fetchCardData(),
  ]);

  return (
    <main style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Dashboard</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <CardWrapper data={cardData} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '20px',
        }}
      >
        <RevenueChart />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
