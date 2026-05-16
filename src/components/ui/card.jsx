import { cn } from '../../lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-2xl transition-all duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
