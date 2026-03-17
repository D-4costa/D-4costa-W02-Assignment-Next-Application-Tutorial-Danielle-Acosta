// app/utils/metadata.js
export function getPageMetadata(page) {
  const titles = {
    dashboard: "Dashboard - My Next.js App",
    invoices: "Invoices - My Next.js App",
    customers: "Customers - My Next.js App",
    "create-invoice": "Create Invoice - My Next.js App",
    "edit-invoice": "Edit Invoice - My Next.js App"
  };
  const descriptions = {
    dashboard: "Overview of your dashboard",
    invoices: "List of invoices",
    customers: "Customer management page",
    "create-invoice": "Create a new invoice",
    "edit-invoice": "Edit existing invoice"
  };
  return {
    title: titles[page] || "Next.js App",
    description: descriptions[page] || "Next.js Dashboard",
  };
}
