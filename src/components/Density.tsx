import { Button } from '@/components/ui/button.tsx'
import { FaAngleDown } from 'react-icons/fa6'
import { Progress } from '@/components/ui/progress.tsx'
import { countLetters } from '@/util.ts'
import { useState } from 'react'
import { cn } from '@/lib/utils.ts'

const DEFAULT_DENSITY_LENGTH = 5

export default function Density({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const letterCounts = countLetters(text)
  const fullLetterCountArray = Array.from(letterCounts.entries())
  const displayedLetterCountArray = isExpanded
    ? fullLetterCountArray
    : fullLetterCountArray.slice(0, DEFAULT_DENSITY_LENGTH)

  return (
    <div className="flex flex-col gap-250">
      <h2 className="txt-preset-2">Letter Density</h2>
      <div className="flex flex-col gap-150">
        {letterCounts.size === 0 ? (
          <p className="txt-preset-4 text-neutral-600 dark:text-neutral-200">
            No characters found. Start typing to see letter density.
          </p>
        ) : (
          displayedLetterCountArray.map(([letter, count]) => (
            <LetterBar
              key={letter}
              letter={letter}
              count={count}
              total={text.length}
            />
          ))
        )}
      </div>
      {letterCounts.size > DEFAULT_DENSITY_LENGTH && (
        <Button
          className="flex items-center justify-start gap-x-100"
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'See less' : 'See more'}
          <FaAngleDown
            className={cn(
              'size-3.5 text-neutral-900 transition-transform dark:text-neutral-100',
              isExpanded ? 'rotate-180' : 'rotate-0'
            )}
          />
        </Button>
      )}
    </div>
  )
}

function LetterBar({
  letter,
  count,
  total,
}: {
  letter: string
  count: number
  total: number
}) {
  const percentage = total > 0 ? (count / total) * 100 : 0
  return (
    <div className="flex items-center gap-[14px]">
      <span className="w-4 shrink-0 txt-preset-4">{letter}</span>
      <Progress value={percentage} />
      <span className="w-[90px] shrink-0 truncate text-end txt-preset-4">
        {count} ({percentage.toFixed(1) + '%'})
      </span>
    </div>
  )
}
