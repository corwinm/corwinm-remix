import AboutSection from "~/components/about-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";

export const config = { runtime: "edge" };

const IndexPage = (): JSX.Element => (
  <>
    <Hero />
    <AboutSection />
    <ExperienceSection />
  </>
);

export default IndexPage;
