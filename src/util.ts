export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export function countCharacters(text: string, excludeSpaces: boolean): number {
  return excludeSpaces ? text.replace(/\s+/g, '').length : text.length
}

export type LetterCountResult = {
  counts: Map<string, number>
  total: number
}

export function countLetters(text: string): LetterCountResult {
  const letterCount = new Map<string, number>()
  const lettersOnly = text.replace(/[^a-zA-Z]/g, '').toUpperCase()

  for (const char of lettersOnly) {
    letterCount.set(char, (letterCount.get(char) || 0) + 1)
  }

  return {
    counts: new Map([...letterCount.entries()].sort((a, b) => b[1] - a[1])),
    total: lettersOnly.length,
  }
}
