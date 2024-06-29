import { Frame, Download, Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Frame size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Visual builder</h4>
              <p className="text-muted-foreground">
                Edit HTML, Tailwind &amp; React components with a visual builder and see your
                changes in real-time.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Download size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Code Export</h4>
              <p className="text-muted-foreground">
                Once you're done building, export your project to a fully functional Next.js &amp;
                Tailwind app.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Globe size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">No lock-in</h4>
              <p className="text-muted-foreground">
                You own the code. Customize with full flexibility and host it anywhere you want.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
