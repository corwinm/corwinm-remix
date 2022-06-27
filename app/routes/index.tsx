import Layout from "~/components/layout";
import ProfileImage from "~/components/profile-image";
import { ProfileLink } from "~/components/profile-link";

const IndexPage = (): JSX.Element => (
  <Layout>
    <ProfileImage />
    <section>
      <h1 className="text-2xl font-bold mt-4 mb-6">
        Software Engineer. Husband. Father.
      </h1>
      <p className="my-2">{"Hi! I'm Corwin. Welcome to my personal site!"}</p>
      <p className="my-2">
        I am a{" "}
        <ProfileLink href="https://www.slalombuild.com/">
          Slalom Build
        </ProfileLink>{" "}
        Software Engineering Architect in Seattle.
      </p>
      <p className="my-2">
        {
          "I like to try new technologies and apply that learning to aid my professional life. I'm currently learning:"
        }
      </p>
      <ul className="my-2 ml-8 list-disc">
        <li>
          <ProfileLink href="https://remix.run/">Remix</ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://single-spa.js.org/">
            Single-Spa
          </ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
            Web Accessibility (a11y)
          </ProfileLink>
        </li>
        <li>
          <ProfileLink href="https://react-query.tanstack.com/">
            React Query
          </ProfileLink>
        </li>
      </ul>
      <p className="my-2">
        I spend most of my free time enjoying time with my family, but I have
        been known to play a game or two.
      </p>
      <p className="my-2">
        Feel free to check out my links below to get to know me better.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
