import { cn } from '../../lib/utils'

const variants = {
  primary:
    'bg-[#18120a] text-white shadow-[0_20px_45px_rgba(180,83,9,0.24)] hover:-translate-y-0.5 hover:bg-[#2a1d0c]',
  secondary:
    'border border-amber-100/80 bg-white/75 text-[#211a10] shadow-[0_12px_35px_rgba(217,119,6,0.15)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white',
  ghost: 'text-stone-700 hover:bg-white/70 hover:text-stone-950',
}

export function Button({ className, variant = 'primary', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
