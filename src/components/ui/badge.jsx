import { cn } from '../../lib/utils'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-amber-200 bg-white/82 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700 shadow-sm shadow-amber-100/60',
        className,
      )}
    >
      {children}
    </span>
  )
}
