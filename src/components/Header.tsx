import LightLogo from '@/assets/images/logo-light-theme.svg?react'
import DarkLogo from '@/assets/images/logo-dark-theme.svg?react'
import ThemeToggle from '@/components/ThemeToggle.tsx'
import { useTheme } from '@/components/theme-provider.tsx'

export default function Header() {
  const { theme } = useTheme()

  return (
    <div className="flex justify-between">
      {theme === 'light' ? (
        <LightLogo className="h-[30px] tablet:h-[40px]" />
      ) : (
        <DarkLogo className="h-[30px] tablet:h-[40px]" />
      )}
      <ThemeToggle />
    </div>
  )
}
