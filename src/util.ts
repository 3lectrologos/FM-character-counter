export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}
