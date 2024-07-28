"use client";
import { TeamSection } from "../components/ui/team/TeamSection";
import { HomeWrapper } from "@/components/wrappers/HomeWrapper";
import { BannerSection } from "@/components/ui/BannerSection";
import { ExpertiseSection } from "@/components/ui/ExpertiseSection";
import { WhyUsSection } from "@/components/ui/WhyUsSection";
import { PortfolioSection } from "@/components/ui/PortfolioSection";
import { TestimonialSection } from "@/components/ui/testimonial/TestimonialSection";

export default function Home() {
  return (
    <HomeWrapper>
      <main>
        <BannerSection />
        <ExpertiseSection />
        <WhyUsSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialSection />
      </main>
    </HomeWrapper>
  );
}
