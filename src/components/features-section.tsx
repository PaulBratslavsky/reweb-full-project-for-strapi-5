import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          src="/images/dashboard.png"
          alt="SaaS Dashboard"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">Build fast</span>
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-left">
            Designed to build fast
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-lg text-left">
          Build at the speed of no-code and then export to Next.js, Tailwind &amp; Shadcn UI code
          for full customization.
        </p>
        <p className="text-lg text-muted-foreground max-w-lg text-left">
          Build at the speed of no-code and then export to Next.js, Tailwind &amp; Shadcn UI code
          for full customization.
        </p>
      </div>
    </section>
  );
}
