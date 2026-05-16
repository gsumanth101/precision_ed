import { Badge } from './ui/badge'

export function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
