import Counters from '@/components/Counters.tsx'
import Density from '@/components/Density.tsx'

export default function Stats({
  text,
  excludeSpaces,
}: {
  text: string
  excludeSpaces?: boolean
}) {
  return (
    <div className="flex flex-col gap-300">
      <Counters text={text} excludeSpaces={excludeSpaces} />
      <Density text={text} />
    </div>
  )
}
