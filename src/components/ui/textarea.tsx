import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'rounded-md flex field-sizing-fixed min-h-16 w-full rounded-12 border-2 border-neutral-200 bg-neutral-100 p-150 text-neutral-700 placeholder-neutral-700 transition-colors outline-none hover:bg-neutral-200 focus-visible:border-purple-500 focus-visible:shadow-[0_0_10px_0_#D3A0FA] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
