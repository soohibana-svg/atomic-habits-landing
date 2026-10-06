import { BrandHeader } from '@/components/brand-header'
import { Hero } from '@/components/hero'
import { HeroImageCard } from '@/components/hero-image-card'
import { FeaturesList } from '@/components/features-list'
import { StatusRow } from '@/components/status-row'
import { AvailabilityBar } from '@/components/availability-bar'
import { StepsList } from '@/components/steps-list'
import { BonusGift } from '@/components/bonus-gift'
import { CtaSection } from '@/components/cta-section'

export default function Page() {
  return (
    <main className="flex min-h-svh justify-center bg-[#080C0F] text-foreground">
      <div className="flex w-full max-w-[520px] flex-col items-center gap-7 px-4 pb-16 pt-10 sm:px-6">
        <BrandHeader />
        <Hero />
        <section
          className="rise-in flex w-full flex-col gap-5 rounded-[24px] bg-gradient-to-b from-[#1E160E] via-[#1A180F] to-card p-4 shadow-2xl ring-1 ring-border sm:p-5"
          style={{ animationDelay: '240ms' }}
          aria-label="Atomic Habits PDF details"
        >
          <HeroImageCard />
          <FeaturesList />
          <BonusGift />
          <StatusRow />
        </section>
        <div className="rise-in w-full" style={{ animationDelay: '360ms' }}>
          <AvailabilityBar />
        </div>
        <div className="rise-in w-full" style={{ animationDelay: '480ms' }}>
          <StepsList />
        </div>
        <CtaSection />
      </div>
    </main>
  )
}
