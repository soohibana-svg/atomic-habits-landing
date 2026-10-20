"use client"

import { useState } from 'react'
import { Gift, Check, Calendar, BarChart3, Table2 } from 'lucide-react'

export function BonusGift() {
  const [imgError, setImgError] = useState(false)
  // ← CHANGE THIS LINK to your Google Sheets / preview URL
  const previewUrl = "https://drive.google.com/file/d/1vrepaCeyJHT2yH_aHN6NQgUQZJCwKaAa/view?usp=sharing"
  return (
    <section
      aria-labelledby="bonus-heading"
      className="flex w-full flex-col gap-2.5 rounded-2xl border border-primary/15 bg-[#1A140D]/70 p-3 shadow-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary-foreground">
          <Gift className="size-3" aria-hidden="true" />
          Free Bonus
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-[11px] font-bold leading-none">
          <span className="text-[11px] text-muted-foreground line-through decoration-muted-foreground/40">$12.00</span>
          <span className="font-black text-success">FREE</span>
        </span>
      </div>
      <div className="px-0.5">
        <h2 id="bonus-heading" className="text-[15px] font-black leading-none tracking-tight text-foreground">
          HABIT TRACKER <span className="text-primary">Spreadsheet</span>
        </h2>
        <p className="mt-1 text-[11.5px] leading-none text-muted-foreground">
          Included <span className="font-bold text-success">FREE</span> with your Atomic Habits PDF
        </p>
      </div>

      <a
        href={previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Preview Habit Tracker spreadsheet - opens in new tab"
        className="group block overflow-hidden rounded-xl border border-white/[0.07] bg-[#0F1419] transition hover:border-primary/30 hover:ring-1 hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
      {imgError ? (
        <div className="p-2.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-white">
              <span className="flex size-5 items-center justify-center rounded-md bg-success text-white">
                <Table2 className="size-3" />
              </span>
              HABIT TRACKER
            </span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              2026 • Daily
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03]">
            <div className="grid grid-cols-[1.2fr_repeat(7,1fr)] gap-px bg-white/[0.06] text-center text-[9px] font-bold uppercase tracking-wider">
              <div className="bg-[#161E26] px-1.5 py-1.5 text-left text-[10px] normal-case tracking-normal text-muted-foreground">
                Habit
              </div>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => (
                <div key={d} className="bg-[#161E26] py-1.5 text-muted-foreground">
                  {d}
                </div>
              ))}
            </div>
            {[
              { name: 'Prayer', checks: [1, 1, 1, 1, 0, 1, 1] },
              { name: 'Reading', checks: [1, 1, 0, 1, 1, 1, 0] },
              { name: 'Workout', checks: [1, 0, 1, 1, 1, 0, 1] },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-[1.2fr_repeat(7,1fr)] gap-px bg-white/[0.06] text-[11px]">
                <div className="bg-[#0F1419] px-2 py-1.5 text-left font-medium text-foreground/90">{row.name}</div>
                {row.checks.map((c, i) => (
                  <div key={i} className="flex items-center justify-center bg-[#0F1419] py-1.5">
                    {c ? (
                      <span className="flex size-4 items-center justify-center rounded-full bg-success text-[10px] leading-none text-white">
                        ✓
                      </span>
                    ) : (
                      <span className="size-4 rounded-full border border-white/10 bg-white/[0.02]" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-3 text-[10px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3 text-primary" /> Calendar
            </span>
            <span className="size-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1">
              <BarChart3 className="size-3 text-success" /> Analysis
            </span>
            <span className="size-1 rounded-full bg-white/20" />
            <span>Google Sheets • Excel</span>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/habit-tracker-preview.svg"
            alt="Habit Tracker spreadsheet preview"
            className="max-h-[195px] w-full object-cover object-top"
            loading="lazy"
            onError={() => setImgError(true)}
          />
          {/* hover overlay hint */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#080C0F] shadow-lg">
              View Preview ↗
            </span>
          </span>
        </div>
      )}
      </a>
      <ul className="grid grid-cols-2 gap-2 rounded-xl border border-white/[0.05] bg-white/[0.03] p-2.5">
        {['Daily Tracking', 'Charts & Stats', 'Calendar & Goals', 'Sheets & Excel'].map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-success text-white">
              <Check className="size-2.5" strokeWidth={3.5} aria-hidden="true" />
            </span>
            <span className="text-[11.5px] font-medium leading-none text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-1.5 rounded-full bg-success/[0.07] py-1.5 text-[11.5px] ring-1 ring-success/15">
        <span className="font-black tracking-wide text-success">FREE TODAY ✓</span>
      </div>
    </section>
  )
}

