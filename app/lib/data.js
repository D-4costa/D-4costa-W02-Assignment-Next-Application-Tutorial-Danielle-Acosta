// app/lib/data.js

let invoices = [
  { id: 1, customer: "Juan Perez", amount: 120, status: "Paid" },
  { id: 2, customer: "Maria Gomez", amount: 350, status: "Pending" },
  { id: 3, customer: "Carlos Diaz", amount: 220, status: "Paid" },
];

let customers = [
  { id: 1, name: "Emily Johnson", email: "emily@email.com", company: "TechCorp" },
  { id: 2, name: "Carlos Ramirez", email: "carlos@email.com", company: "MarketPro" },
  { id: 3, name: "Sophia Lee", email: "sophia@email.com", company: "DataVision" },
  { id: 4, name: "Daniel Smith", email: "daniel@email.com", company: "CloudBase" },
];

// FETCH
export async function fetchInvoicesPages(query) {
  const ITEMS_PER_PAGE = 3;
  const filtered = invoices.filter(inv => inv.customer.toLowerCase().includes(query?.toLowerCase() || ""));
  return Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
}

export async function fetchInvoiceById(id) {
  return invoices.find(inv => inv.id === Number(id));
}

export async function fetchCustomers() {
  return customers;
}

// CREATE
export async function createInvoice(newInvoice) {
  const id = invoices.length + 1;
  invoices.push({ id, ...newInvoice });
  return id;
}

// UPDATE
export async function updateInvoice(id, updatedData) {
  invoices = invoices.map(inv => inv.id === Number(id) ? { ...inv, ...updatedData } : inv);
  return invoices.find(inv => inv.id === Number(id));
}

// DELETE
export async function deleteInvoice(id) {
  invoices = invoices.filter(inv => inv.id !== Number(id));
  return true;
}
