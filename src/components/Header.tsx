import LightLogo from '@/assets/images/logo-light-theme.svg?react'
import ThemeToggle from '@/components/ThemeToggle.tsx'
// TODO import DarkLogo from '@/assets/images/logo-dark-theme.svg?react'

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="w-[184.4px]">
        <LightLogo />
      </div>
      <ThemeToggle />
    </div>
  )
}
