interface HeadingProps {
  heading: string;
  subHeading: string;
  text: string;
}

export function Heading({ heading, subHeading, text }: Readonly<HeadingProps>) {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 py-12">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">{subHeading}</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">{heading}</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">{text}</p>
    </section>
  );
}
