import { Button } from '@/components/ui/button.tsx'
import MoonIcon from '@/assets/images/icon-moon.svg?react'
import SunIcon from '@/assets/images/icon-sun.svg?react'
import { useTheme } from '@/components/theme-provider.tsx'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className="size-8 rounded-6 bg-neutral-100 px-0 py-0 hover:bg-neutral-100 tablet:size-11 dark:bg-neutral-700 dark:hover:bg-neutral-700"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="size-5 tablet:size-[22px]" />
      ) : (
        <SunIcon className="size-5 tablet:size-[22px]" />
      )}
    </Button>
  )
}
