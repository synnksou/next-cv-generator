import { clsx, type ClassValue } from "clsx"
import { ac } from "drizzle-orm/column.d-04875079"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateAcronym = (nameString: string): string => {
  const names = nameString.split(" ")
  const acronym = names
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase()
  return acronym
}
