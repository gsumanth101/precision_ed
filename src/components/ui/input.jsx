import { cn } from '../../lib/utils'

export function Field({ className, label, multiline = false, ...props }) {
  const Control = multiline ? 'textarea' : 'input'

  return (
    <label className="group relative block">
      <Control
        className={cn(
          'peer w-full rounded-2xl border border-amber-100/90 bg-white/72 px-4 pb-3 pt-6 text-sm text-stone-950 shadow-inner shadow-amber-100/55 outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-transparent focus:border-amber-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(251,191,36,0.2)]',
          multiline && 'min-h-36 resize-none',
          className,
        )}
        placeholder={label}
        {...props}
      />
      <span className="pointer-events-none absolute left-4 top-2.5 text-xs font-medium text-stone-500 transition-all duration-300 peer-focus:text-amber-700">
        {label}
      </span>
    </label>
  )
}
