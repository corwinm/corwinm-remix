import AboutSection from "~/components/about-section";
import ContactSection from "~/components/contact-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";
// import ProjectsSection from "~/components/projects-section";
import SkillsSection from "~/components/skills-section";
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
    <SkillsSection />
    {/* <ProjectsSection /> */}
    <ExperienceSection />
    <ContactSection />
  </>
);

export default IndexPage;
