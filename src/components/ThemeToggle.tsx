import { Button } from '@/components/ui/button.tsx'
import MoonIcon from '@/assets/images/icon-moon.svg?react'
// TODO import SunIcon from '@/assets/images/icon-sun.svg?react'

export default function ThemeToggle() {
  return (
    <Button className="size-8 rounded-6 bg-neutral-100 px-0 py-0 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-900">
      <MoonIcon className="size-5" />
    </Button>
  )
}
