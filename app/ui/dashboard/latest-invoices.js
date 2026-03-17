export default function LatestInvoices() {
  const invoices = [
    { name: "Juan Perez", amount: "$120" },
    { name: "Maria Gomez", amount: "$350" },
    { name: "Carlos Diaz", amount: "$220" },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fef9c3",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Latest Invoices</h3>

      {invoices.map((inv, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid #eee"
          }}
        >
          <span>{inv.name}</span>
          <span>{inv.amount}</span>
        </div>
      ))}
    </div>
  );
}
