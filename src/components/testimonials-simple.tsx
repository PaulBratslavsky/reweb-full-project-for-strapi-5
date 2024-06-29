export function TestimonialsSimple() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-12">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Testimonials</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          What our users say
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        Here's what developers and founders of top companies around the internet are saying about
        us.
      </p>
    </section>
  );
}
