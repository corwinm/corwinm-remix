import AboutSection from "~/components/about-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";

export function headers() {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

const IndexPage = (): JSX.Element => (
  <>
    <Hero />
    <AboutSection />
    <ExperienceSection />
  </>
);

export default IndexPage;
