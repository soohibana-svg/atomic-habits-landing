const steps: { id: string; content: React.ReactNode }[] = [
  { id: 'verify', content: <>Click the button below to start instant verification.</> },
  {
    id: 'offer',
    content: (
      <>
        Complete <strong className="font-bold text-foreground">ONE quick &amp; simple offer</strong> to unlock the
        file link.
      </>
    ),
  },
  {
    id: 'activate',
    content: (
      <>
        Your <strong className="font-bold text-foreground">Atomic Habits PDF</strong> download will start
        automatically!
      </>
    ),
  },
]

export function StepsList() {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <li key={step.id} className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30"
          >
            {index + 1}
          </span>
          <p className="text-[15px] leading-relaxed text-foreground/85">{step.content}</p>
        </li>
      ))}
    </ol>
  )
}
