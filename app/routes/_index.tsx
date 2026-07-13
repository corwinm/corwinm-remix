import { type LoaderFunctionArgs, useLoaderData } from "react-router";
import AboutSection from "~/components/about-section";
import ContactSection from "~/components/contact-section";
import ExperienceSection from "~/components/experience-section";
import Hero from "~/components/hero";
import ProjectsSection from "~/components/projects-section";
import { buildProfilePageStructuredData } from "~/lib/profile-structured-data";

export function headers() {
  return {
    "Cache-Control":
      "s-maxage=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

export function loader({ request }: LoaderFunctionArgs) {
  return { origin: new URL(request.url).origin };
}

const IndexPage = () => {
  const { origin } = useLoaderData<typeof loader>();
  const structuredData = buildProfilePageStructuredData(origin);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default IndexPage;
