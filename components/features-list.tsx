import { Check } from 'lucide-react'

const features = [
  { label: 'Full Uncut Edition:', value: 'Complete 320 pages.' },
  { label: 'Step-by-Step Framework:', value: 'Proven habit systems.' },
  { label: 'Universal Compatibility:', value: 'iOS, Android, Kindle & PC.' },
]

export function FeaturesList() {
  return (
    <ul className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-5">
      {features.map((feature) => (
        <li key={feature.label} className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Check className="size-3 text-primary-foreground" strokeWidth={3} />
          </span>
          <p className="text-[15px] leading-relaxed text-foreground">
            <span className="font-bold">{feature.label}</span>{' '}
            <span className="text-foreground/90">{feature.value}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}
