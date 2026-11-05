import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves an asset path considering Vite's base URL configuration.
 * Handles absolute URLs, relative URLs, and /Portfolio2025/ prefixed paths.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const clean = path.startsWith('/') ? path : `/${path}`;

  if (clean.startsWith('/Portfolio2025/')) {
    const subPath = clean.replace(/^\/Portfolio2025/, '');
    return `${base}${subPath}`;
  }

  return `${base}${clean}`;
}
