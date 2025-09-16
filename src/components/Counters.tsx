import { cn } from '@/lib/utils.ts'
import { countWords } from '@/util.ts'

import characterCountPatternUrl from '@/assets/images/pattern-character-count.svg'
import wordCountPatternUrl from '@/assets/images/pattern-word-count.svg'
import sentenceCountPatternUrl from '@/assets/images/pattern-sentence-count.svg'

export default function Counters({
  text,
  excludeSpaces,
}: {
  text: string
  excludeSpaces?: boolean
}) {
  const numCharacters = excludeSpaces
    ? text.replace(/\s+/g, '').length
    : text.length
  const numWords = countWords(text)
  const numSentences = text.split(/[.!?]+\s+/).filter(Boolean).length

  return (
    <div className="flex flex-col gap-200">
      <Counter
        label="Total Characters"
        sublabel={excludeSpaces ? '(no spaces)' : undefined}
        value={numCharacters}
        patternUrl={characterCountPatternUrl}
        className="bg-purple-400"
      />
      <Counter
        label="Word Count"
        value={numWords}
        patternUrl={wordCountPatternUrl}
        className="bg-yellow-500"
      />
      <Counter
        label="Sentence Count"
        value={numSentences}
        patternUrl={sentenceCountPatternUrl}
        className="bg-orange-500"
      />
    </div>
  )
}

function Counter({
  label,
  sublabel,
  value,
  patternUrl,
  className,
}: {
  label: string
  sublabel?: string
  value: number
  patternUrl: string
  className?: string
}) {
  const formattedValue = value < 10 ? `0${value}` : value

  return (
    <div
      className={cn(
        'relative flex h-[130px] flex-col justify-center gap-100 overflow-hidden rounded-12 px-250',
        className
      )}
    >
      <p className="txt-preset-1 dark:text-neutral-900">{formattedValue}</p>
      <p className="txt-preset-3 dark:text-neutral-900">
        {label} {sublabel && <span className="txt-preset-4">{sublabel}</span>}
      </p>
      <img
        src={patternUrl}
        alt=""
        className="absolute top-1/2 -right-[50px] h-[150px] w-[150px] -translate-y-1/2"
      />
    </div>
  )
}
