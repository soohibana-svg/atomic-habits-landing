'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    _yk?: () => void
    _CJ?: () => void
    CPABuildLock?: () => void
    xfLock?: () => void
    xfContentLocker?: { openLocker?: () => void }
  }
}

export function CtaSection() {
  const handleClick = () => {
    if (typeof window === 'undefined') return
    const w = window as unknown as Record<string, unknown>
    if (typeof w['_yk'] === 'function') return (w['_yk'] as () => void)()
    if (typeof w['CPABuildLock'] === 'function') return (w['CPABuildLock'] as () => void)()
    if (typeof w['xfLock'] === 'function') return (w['xfLock'] as () => void)()
    if (w['xfContentLocker'] && typeof (w['xfContentLocker'] as Record<string, unknown>)['openLocker'] === 'function')
      return ((w['xfContentLocker'] as Record<string, unknown>)['openLocker'] as () => void)()
    if (typeof w['_CJ'] === 'function') return (w['_CJ'] as () => void)()
    for (const k in window) {
      if (/^_[A-Za-z]{1,4}$/.test(k) && typeof (w as Record<string, unknown>)[k] === 'function') {
        try {
          return ((w as Record<string, unknown>)[k] as () => void)()
        } catch {}
      }
    }
    alert('Locker loading... disable AdBlock and refresh')
  }

  return (
    <section
      className="rise-in flex w-full flex-col items-center gap-4"
      style={{ animationDelay: '600ms' }}
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="sr-only">
        Download Atomic Habits PDF
      </h2>
      <Button
        onClick={handleClick}
        type="button"
        size="lg"
        className="h-[70px] w-full cursor-pointer rounded-[20px] bg-primary text-base font-black uppercase tracking-wide text-primary-foreground shadow-[0_8px_30px_-6px_var(--primary)] hover:bg-primary/90"
      >
        <Download className="size-5" aria-hidden="true" />
        Complete 1 Offer To Download
      </Button>
      <p className="text-center text-sm leading-relaxed text-muted-foreground text-pretty">
        Access conditions apply. Complete the required offer to unlock the file link.
      </p>
    </section>
  )
}
