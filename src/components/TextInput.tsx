import { Textarea } from '@/components/ui/textarea.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { countWords } from '@/util.ts'

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
    readingTimeText = '< 1 minute'
  } else if (readingTime >= 1) {
    readingTimeText = `${Math.round(readingTime)} minute${Math.round(readingTime) > 1 ? 's' : ''}`
  }

  return (
    <div className="flex flex-col gap-250">
      <Textarea
        className="h-[200px] resize-none txt-preset-3"
        placeholder="Start typing here... (or paste your text)"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div className="flex flex-col gap-150">
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="exclude-spaces"
            checked={excludeSpaces}
            onCheckedChange={onExcludeSpacesChange}
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
          />
          <Label className="pt-0.5 txt-preset-4" htmlFor="set-character-limit">
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
        <span className="txt-preset-4">Reading time: {readingTimeText}</span>
      </div>
    </div>
  )
}
