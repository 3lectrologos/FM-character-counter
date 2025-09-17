import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import CheckIcon from '@/assets/images/icon-check.svg?react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer size-4 shrink-0 rounded-4 border border-neutral-900 outline-none hover:border-neutral-600 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-purple-400 data-[state=checked]:bg-purple-400 data-[state=checked]:text-neutral-900 dark:border-neutral-200 dark:bg-input/30 dark:focus-visible:ring-offset-neutral-900 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:border-purple-400 dark:data-[state=checked]:bg-purple-400',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
