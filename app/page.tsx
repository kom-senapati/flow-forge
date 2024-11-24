"use client"

import { Banner } from "@/components/landing-page/Banner";
import { CallToAction } from "@/components/landing-page/CallToAction";
import { FAQs } from "@/components/landing-page/FAQs";
import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { LogoTicker } from "@/components/landing-page/LogoTicker";
import { Navbar } from "@/components/landing-page/Navbar";
import { Pricing } from "@/components/landing-page/Pricingdemo";
import { ProductShowcase } from "@/components/landing-page/ProductShowcase";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />

        <Features />

        <ProductShowcase />
        <FAQs />
        <Pricing />

        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
