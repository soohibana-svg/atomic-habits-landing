export function Hero() {
  return (
    <section className="rise-in flex flex-col items-center gap-4 text-center" style={{ animationDelay: '120ms' }}>
      <h1 className="text-balance px-2 text-[34px] font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-[40px]">
        <span className="text-foreground">Download</span> <span className="text-primary">Atomic</span>
        <br />
        <span className="text-primary">Habits</span>
        <br />
        <span className="text-foreground">PDF Edition</span>
      </h1>
      <p className="max-w-[480px] text-pretty text-[15px] leading-relaxed text-muted-foreground">
        Discover Atomic Habits by James Clear. Learn how to build good habits, break bad ones, and master the tiny
        behaviors that lead to remarkable results.
      </p>
    </section>
  )
}
