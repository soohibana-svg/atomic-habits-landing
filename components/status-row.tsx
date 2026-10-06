export function StatusRow() {
  return (
    <div className="flex items-end justify-between border-t border-border/60 pt-5">
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">File Status</p>
        <p className="flex items-center gap-2 text-[15px] font-semibold text-success">
          <span aria-hidden="true" className="size-2 rounded-full bg-success shadow-[0_0_6px_var(--success)]" />
          Instant PDF Access
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Retail Price</p>
        <p className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-muted-foreground line-through">$27.00</span>
          <span className="text-2xl font-black uppercase text-success">Free</span>
        </p>
      </div>
    </div>
  )
}
