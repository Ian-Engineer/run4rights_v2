export default function formatDateLongUS(dateInput: Date | string | number): string {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid date");

  const month = date.toLocaleString("en-US", { month: "long" }); // February
  const day = String(date.getDate()).padStart(2, "0");           // 02
  const year = String(date.getFullYear());                       // 2026

  return `${month} ${day} ${year}`;
}