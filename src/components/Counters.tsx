import { cn } from '@/lib/utils.ts'
import { countWords } from '@/util.ts'

import characterCountPatternUrl from '@/assets/images/pattern-character-count.svg'
import wordCountPatternUrl from '@/assets/images/pattern-word-count.svg'
import sentenceCountPatternUrl from '@/assets/images/pattern-sentence-count.svg'

export default function Counters({ text }: { text: string }) {
  const numCharacters = text.length
  const numWords = countWords(text)
  const numSentences = text.split(/[.!?]+\s+/).filter(Boolean).length

  return (
    <div className="flex flex-col gap-200">
      <Counter
        label="Total Characters"
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
  value,
  patternUrl,
  className,
}: {
  label: string
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
      <span className="txt-preset-1">{formattedValue}</span>
      <span className="txt-preset-3">{label}</span>
      <img
        src={patternUrl}
        alt=""
        className="absolute top-1/2 -right-[50px] h-[150px] w-[150px] -translate-y-1/2"
      />
    </div>
  )
}
