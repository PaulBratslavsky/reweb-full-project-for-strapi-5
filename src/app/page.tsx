import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features";
import { FeaturesSection } from "@/components/features-section";
import { FeatureWithImageRight } from "@/components/feature-image-right";
import { TestimonialsSimple } from "@/components/testimonials-simple";
import { TestimonialsSimple2 } from "@/components/testimonials-simple-2";
import { TestimonialsSimple3 } from "@/components/testimonials-simple-3";
import { Pricing } from "@/components/pricing";
import { TestimonialsSimple4 } from "@/components/testimonials-simple-4";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";


async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/landing-page";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero": {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
              buttonLink:{
                populate: "*",
              },
              topLink: {
                populate: "*",
              }
            },
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero":
      console.log(block);
      return <Hero key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await loader();
  const blocks = data?.data?.blocks;
  
  if (!blocks) return null;
  return (
    <div>
      {blocks ? blocks.map((block: any) => blockRenderer(block)) : null}
      <Testimonials />
      <Features />
      <FeaturesSection />
      <FeatureWithImageRight />
      <TestimonialsSimple />
      <TestimonialsSimple2 />
      <TestimonialsSimple3 />
      <Pricing />
      <TestimonialsSimple4 />
      <Faq />
      <CtaSection />
    </div>
  );
}
