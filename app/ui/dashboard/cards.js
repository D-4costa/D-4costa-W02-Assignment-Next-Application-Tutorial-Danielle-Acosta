export default function CardWrapper() {
  const cards = [
    { title: "Ingresos", value: "$12,450" },
    { title: "Clientes", value: "245" },
    { title: "Facturas", value: "89" },
    { title: "Pendientes", value: "12" },
  ];

  return (
    <>
      {cards.map((card, i) => (
        <div
          key={i}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            backgroundColor: "#fdf4ff"
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#555" }}>
            {card.title}
          </h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {card.value}
          </p>
        </div>
      ))}
    </>
  );
}
