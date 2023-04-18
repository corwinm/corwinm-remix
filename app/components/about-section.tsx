import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

export default function AboutSection() {
  return (
    <ProfileSection>
      <LinkHeader id="about">A little about me:</LinkHeader>
      <div className="md:grid md:grid-cols-3 md:gap-4 mt-16">
        <div>
          <p className="mb-2">
            {"Hi! I'm Corwin. Welcome to my personal site!"}
          </p>
          <p className="my-2">
            I work at a{" "}
            <ProfileLink href="https://www.slalombuild.com/">
              Slalom Build
            </ProfileLink>{" "}
            in Seattle as a  Senior Architect Software Engineer.
          </p>
        </div>
        <div>
          <p>
            I am a fullstack developer with passion for all things frontend.
          </p>
          <p className="my-2">
            {"Here are a few of the technologies I work with and 😍"}
          </p>
          <ul className="my-2 ml-8 list-disc">
            <li>
              <ProfileLink href="https://www.typescriptlang.org/">
                TypeScript
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://react.dev/">React</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://tanstack.com/query/latest/">
                React Query
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://single-spa.js.org/">
                Single-Spa
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://vitejs.dev/">Vite</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://storybook.js.org/">
                Storybook
              </ProfileLink>
            </li>
          </ul>
        </div>
        <div>
          <p>
            One of the things I love the most about software engineering is that
            there is always something new to learn.
          </p>
          <p className="my-2">{"I'm currently learning:"}</p>
          <ul className="my-2 ml-8 list-disc">
            <li>
              <ProfileLink href="https://remix.run/">Remix</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://tailwindcss.com/">
                Tailwindcss
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://vercel.com/">Vercel</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://planetscale.com/">
                PlanetScale
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
                Web Accessibility (a11y)
              </ProfileLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="my-4 text-center">
        Feel free to check out my links below to get to know me better.
      </p>
    </ProfileSection>
  );
}
