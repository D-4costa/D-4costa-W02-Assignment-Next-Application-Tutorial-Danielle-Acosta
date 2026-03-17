export default function Table() {
    const invoices = [
      { id: 1, customer: "Juan Perez", amount: "$120", status: "Paid" },
      { id: 2, customer: "Maria Gomez", amount: "$350", status: "Pending" },
      { id: 3, customer: "Carlos Diaz", amount: "$220", status: "Paid" },
    ];
  
    return (
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Invoices</h2>
  
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th align="left">Customer</th>
              <th align="left">Amount</th>
              <th align="left">Status</th>
            </tr>
          </thead>
  
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.customer}</td>
                <td>{inv.amount}</td>
                <td>{inv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }