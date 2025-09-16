import Counters from '@/components/Counters.tsx'

export default function Stats({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-300">
      <Counters text={text} />
    </div>
  )
}
