import CardWrapper from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <CardWrapper />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px"
        }}
      >
        <RevenueChart />
        <LatestInvoices />
      </div>
    </main>
  );
}
