// app/dashboard/error.js
"use client";

export default function DashboardError({ error }) {
  console.error(error);
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message || "Unknown error"}</p>
    </div>
  );
}
