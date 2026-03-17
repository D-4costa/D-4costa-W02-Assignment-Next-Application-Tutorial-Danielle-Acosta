export default function RevenueChart() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f0f9ff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Revenue Chart</h3>

      <div
        style={{
          height: "200px",
          display: "flex",
          alignItems: "flex-end",
          gap: "10px"
        }}
      >
        {[40, 80, 60, 100, 75, 50].map((h, i) => (
          <div
            key={i}
            style={{
              width: "30px",
              height: `${h}%`,
              background: "#c4b5fd",
              borderRadius: "6px"
            }}
          />
        ))}
      </div>
    </div>
  );
}
