export function BrandHeader() {
  return (
    <header className="rise-in flex items-center gap-3">
      <span className="text-[17px] font-black uppercase leading-none tracking-[-0.04em] text-foreground sm:text-[18px]">
        Atomic Habits
      </span>
      <span aria-hidden="true" className="h-5 w-px bg-border" />
      <span className="rounded-full border border-primary/20 bg-[#2A1F14] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
        Digital Edition
      </span>
    </header>
  )
}
