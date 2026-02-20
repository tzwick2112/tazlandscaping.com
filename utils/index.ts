import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paramsToObject(entries: any) {
  const result: any = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}
