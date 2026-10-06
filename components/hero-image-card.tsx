import Image from "next/image"

export function HeroImageCard() {
  return (
    <figure className="flex w-full justify-center py-4">
      <div className="relative w-56 sm:w-64">
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-[24px] bg-primary/25 blur-2xl"
        />
        <div className="relative overflow-hidden rounded-xl border border-primary/30 shadow-[0_0_44px_-10px_var(--primary)]">
          <Image
            src="https://i.postimg.cc/bwHKyx2X/Gemini-Generated-Image-jlmqu1jlmqu1jlmq.jpg"
            alt="Atomic Habits by James Clear — Tiny Changes, Remarkable Results book cover"
            width={600}
            height={900}
            sizes="(max-width: 640px) 224px, 256px"
            priority
            className="aspect-[2/3] w-full object-cover"
          />
        </div>
      </div>
    </figure>
  )
}
