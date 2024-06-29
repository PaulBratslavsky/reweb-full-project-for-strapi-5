import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSimple2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  src="/images/testimonial-1.avif"
                  alt="Picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">John</p>
                <p className="mt-1 leading-none text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <p className="text-foreground">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci.
              Vivamus ante arcu, hendrerit bibendum felis a, volutpat feugiat tellus. Aliquam erat
              volutpat."
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  src="/images/testimonial-2.avif"
                  alt="Picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Max</p>
                <p className="mt-1 leading-none text-muted-foreground">@maxcook</p>
              </div>
            </div>
            <p className="text-foreground">
              "Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut
              ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="flex items-center gap-4">
              <div className="relative size-10">
                <Image
                  src="/images/testimonial-3.avif"
                  alt="Picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Bob</p>
                <p className="mt-1 leading-none text-muted-foreground">@thisisbob</p>
              </div>
            </div>
            <p className="text-foreground">
              "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et
              feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
