import { fetchRevenue } from '@/app/lib/data';
import { generateYAxis } from '@/app/lib/utils';

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  if (!revenue?.length) {
    return (
      <div
        style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          backgroundColor: '#f0f9ff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <h3 style={{ marginBottom: '10px' }}>Revenue Chart</h3>
        <p style={{ margin: 0, color: '#555' }}>No data available.</p>
      </div>
    );
  }

  const chartHeight = 260;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  return (
    <div
      style={{
        background: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#f0f9ff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>Revenue Chart</h3>

      <div
        style={{
          height: `${chartHeight + 30}px`,
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        <div
          style={{
            height: `${chartHeight}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#6b7280',
            paddingBottom: '22px',
            minWidth: '32px',
          }}
        >
          {yAxisLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
          {revenue.map((item) => (
            <div
              key={item.month}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: `${Math.max((chartHeight / topLabel) * item.revenue, 8)}px`,
                  background: '#c4b5fd',
                  borderRadius: '6px',
                }}
              />
              <span style={{ fontSize: '12px', color: '#555' }}>{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
