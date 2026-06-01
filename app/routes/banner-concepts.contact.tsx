import AboutSection from "~/components/about-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";
import {
  ConceptPreviewLinks,
  PnwContactSection,
} from "~/components/pnw-banner-concepts";
import ProjectsSection from "~/components/projects-section";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";
import { type Route } from "./+types/banner-concepts.contact";

export const meta: Route.MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/banner-concepts/contact",
    title: "Contact banner concept - Corwin W. Marsh",
    description:
      "Preview the PNW stars banner as the final homepage contact section treatment.",
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
      <ConceptPreviewLinks active="contact" />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <PnwContactSection />
    </>
  );
}
