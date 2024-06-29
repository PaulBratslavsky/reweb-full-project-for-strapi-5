import { Check } from "lucide-react";
import Image from "next/image";

export function FeatureWithImageRight() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
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
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">Get started quickly with templates.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">See your changes in real-time.</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">Export code for full customization.</span>
          </li>
        </ul>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/dashboard.png"
          alt="SaaS Dashboard"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
    </section>
  );
}
