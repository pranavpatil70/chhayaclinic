import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { Stats } from "@/components/site/Stats";
import { DoctorInfo } from "@/components/site/DoctorInfo";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Chhaya Clinic and Dental Care",
  image: "https://chhayaclinic.in/og-cover.jpg",
  "@id": "https://chhayaclinic.in",
  url: "https://chhayaclinic.in",
  telephone: "+91-99999-99999",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Bhaji Mandai, Katraj",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411046",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.4575, longitude: 73.8651 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "40",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Best Dental Clinic in Katraj Pune | Chhaya Clinic & Dental Care",
      },
      {
        name: "description",
        content:
          "Chhaya Clinic & Dental Care, Katraj's most trusted dentist. 18 advanced treatments, 4.8★ Google rating, transparent pricing. Book a free consultation today.",
      },
      {
        property: "og:title",
        content: "Chhaya Clinic & Dental Care — Katraj, Pune",
      },
      {
        property: "og:description",
        content:
          "Trusted by 2600+ families. Advanced dental care at fair prices. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <DoctorInfo />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTASection />
    </SiteShell>
  );
}
