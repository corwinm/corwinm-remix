import AboutSection from "~/components/about-section";
import ContactSection from "~/components/contact-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";
import { ConceptPreviewLinks } from "~/components/pnw-banner-concepts";
import ProjectsSection from "~/components/projects-section";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";
import { type Route } from "./+types/banner-concepts.contact";

export const meta: Route.MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/banner-concepts/contact",
    title: "Selected contact banner preview - Corwin W. Marsh",
    description:
      "Preview the selected PNW stars banner treatment on the homepage contact section.",
    image: "/pnw-stars-banner.png",
    imageAlt: "A starry Pacific Northwest mountain banner.",
    imageWidth: 3000,
    imageHeight: 1000,
    imageType: "image/png",
    noIndex: true,
  }),
];

export default function ContactBannerConceptPage() {
  return (
    <>
      <ConceptPreviewLinks />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
