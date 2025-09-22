import { Textarea } from '@/components/ui/textarea.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { countCharacters, countWords } from '@/util.ts'
import { FaCircleInfo } from 'react-icons/fa6'
import { cn } from '@/lib/utils.ts'

export default function TextInput({
  text,
  onTextChange,
  excludeSpaces,
  onExcludeSpacesChange,
  characterLimitEnabled,
  onCharacterLimitEnabledChange,
  characterLimit,
  onCharacterLimitChange,
}: {
  text: string
  onTextChange: (text: string) => void
  excludeSpaces: boolean
  onExcludeSpacesChange: (checked: boolean) => void
  characterLimitEnabled: boolean
  onCharacterLimitEnabledChange: (checked: boolean) => void
  characterLimit: number
  onCharacterLimitChange: (limit: number) => void
}) {
  const readingTime = countWords(text) / 200
  let readingTimeText = '0 minutes'
  if (readingTime > 0 && readingTime < 1) {
    readingTimeText = '<1 minute'
  } else if (readingTime >= 1) {
    readingTimeText = `${Math.round(readingTime)} minute${Math.round(readingTime) > 1 ? 's' : ''}`
  }
  const exceedsLimit =
    characterLimitEnabled &&
    countCharacters(text, excludeSpaces) > characterLimit

  return (
    <div className="flex flex-col gap-250">
      <div className="flex flex-col gap-150">
        <Textarea
          className={cn(
            'h-[200px] resize-none txt-preset-3',
            exceedsLimit &&
              'border-1 border-orange-800 shadow-[0_0_8px_0_#DA3701] focus-visible:border-orange-800 focus-visible:shadow-[0_0_8px_0_#DA3701]',
            exceedsLimit &&
              'dark:border-1 dark:border-orange-500 dark:shadow-[0_0_8px_0_#FE8159] dark:focus-visible:border-orange-500 dark:focus-visible:shadow-[0_0_8px_0_#FE8159]'
          )}
          placeholder="Start typing here... (or paste your text)"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
        />
        {exceedsLimit && (
          <div className="flex items-center gap-100">
            <FaCircleInfo className="text-orange-500" />
            <span className="txt-preset-4 text-orange-500">
              {`Limit reached! Your text exceeds ${characterLimit} characters.`}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-150 tablet:flex-row tablet:justify-between">
        <div className="flex flex-col gap-150 tablet:flex-row">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="exclude-spaces"
              checked={excludeSpaces}
              onCheckedChange={onExcludeSpacesChange}
              aria-labelledby="exclude-spaces"
            />
            <Label className="txt-preset-4" htmlFor="exclude-spaces">
              Exclude Spaces
            </Label>
          </div>
          <div className="flex h-8 items-center gap-2.5">
            <Checkbox
              id="set-character-limit"
              checked={characterLimitEnabled}
              onCheckedChange={onCharacterLimitEnabledChange}
              aria-labelledby="set-character-limit"
            />
            <Label
              className="pt-0.5 txt-preset-4"
              htmlFor="set-character-limit"
            >
              Set Character Limit
            </Label>
            {characterLimitEnabled && (
              <Input
                id="set-character-limit"
                type="number"
                value={characterLimit}
                onChange={(e) => onCharacterLimitChange(Number(e.target.value))}
              />
            )}
          </div>
        </div>
        <span className="txt-preset-4">Reading time: {readingTimeText}</span>
      </div>
    </div>
  )
}
