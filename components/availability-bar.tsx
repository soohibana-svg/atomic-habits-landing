type AvailabilityBarProps = {
  remaining?: number
  claimedPercent?: number
  /**
   * When false, the scarcity bar is hidden.
   * Per spec: do not show fake scarcity numbers without real backend data.
   * Pass `hidden` or conditionally avoid rendering this component.
   */
  hidden?: boolean
}

export function AvailabilityBar({ remaining = 18, claimedPercent = 82, hidden = false }: AvailabilityBarProps) {
  if (hidden) return null

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
          Free Downloads Left: {remaining} Copies
        </p>
        <p className="text-sm font-semibold text-muted-foreground">{claimedPercent}% Claimed</p>
      </div>
      <div
        role="progressbar"
        aria-valuenow={claimedPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Downloads claimed"
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
          style={{ width: `${claimedPercent}%` }}
        />
      </div>
    </div>
  )
}
