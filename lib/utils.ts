import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateString(input: string) {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, "0"); // 15
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 01
  const year = date.getFullYear(); // 2024
  return `${day}/${month}/${year}`; // "15/01/2024"
}
