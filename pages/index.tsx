import AboutSection from "@/components/AboutSection/AboutSection";
import BannerSection from "@/components/BannerSection/BannerSection";
import ProtfolioSection from "@/components/ProtfolioSection/ProtfolioSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import WeSection from "@/components/WeSection/WeSection";
import WhySection from "@/components/WhySection/WhySection";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <BannerSection />
      <AboutSection />
      <WeSection />
      <ServiceSection />
      <WhySection />
      <ProtfolioSection />
      <TeamSection />
      <TestimonialSection />
    </Wrapper>
  );
}
