import AboutSection from "~/components/about-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";
import StarryBackground from "~/components/starry-background";

export function headers() {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

const IndexPage = () => (
  <>
    <StarryBackground />
    <Hero />
    <AboutSection />
    <ExperienceSection />
  </>
);

export default IndexPage;
