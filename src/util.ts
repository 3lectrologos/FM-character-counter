export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export function countLetters(text: string): Map<string, number> {
  const letterCount = new Map<string, number>()
  const lettersOnly = text.replace(/[^a-zA-Z]/g, '').toUpperCase()

  for (const char of lettersOnly) {
    letterCount.set(char, (letterCount.get(char) || 0) + 1)
  }

  return new Map([...letterCount.entries()].sort((a, b) => b[1] - a[1]))
}
