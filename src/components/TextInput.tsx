import { Textarea } from '@/components/ui/textarea.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { countWords } from '@/util.ts'

export default function TextInput({
  text,
  onChange,
}: {
  text: string
  onChange: (text: string) => void
}) {
  const readingTime = countWords(text) / 200
  let readingTimeText = '0 minutes'
  if (readingTime > 0 && readingTime < 1) {
    readingTimeText = '< 1 minute'
  } else if (readingTime >= 1) {
    readingTimeText = `${Math.round(readingTime)} minute${Math.round(readingTime) > 1 ? 's' : ''}`
  }

  return (
    <div className="flex flex-col gap-200">
      <Textarea
        className="h-[200px] resize-none txt-preset-3"
        placeholder="Start typing here... (or paste your text)"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex flex-col gap-150">
        <div className="flex items-center gap-2.5">
          <Checkbox id="exclude-spaces" />
          <Label className="txt-preset-4" htmlFor="exclude-spaces">
            Exclude Spaces
          </Label>
        </div>
        <div className="flex items-center gap-2.5">
          <Checkbox id="set-character-limit" />
          <Label className="pt-0.5 txt-preset-4" htmlFor="set-character-limit">
            Set Character Limit
          </Label>
          <Input id="set-character-limit" type="number" />
        </div>
        <span className="txt-preset-4">Reading time: {readingTimeText}</span>
      </div>
    </div>
  )
}
