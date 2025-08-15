import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'rounded-md flex h-8 w-16 border bg-transparent transition-colors outline-none selection:bg-purple-400 selection:text-neutral-0 placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        'rounded-6 border border-neutral-600 px-150 py-050 pr-050 txt-preset-4',
        className
      )}
      {...props}
    />
  )
}

export { Input }
