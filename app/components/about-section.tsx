import { motion } from "framer-motion";
import { ProfileLink } from "./profile-link";

export default function AboutSection() {
  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, translateY: 64 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.6, delay: 0.6 }}
    >
      <h2 className="font-bold text-4xl text-center">A little about me</h2>
      <div className="md:flex mt-16">
        <div className="md:col-span-6">
          <p className="mb-2">
            {"Hi! I'm Corwin. Welcome to my personal site!"}
          </p>
          <p className="my-2">
            I am a{" "}
            <ProfileLink href="https://www.slalombuild.com/">
              Slalom Build
            </ProfileLink>{" "}
            Software Engineering Architect in Seattle.
          </p>
          <p className="my-2">
            {
              "I like to try new technologies and apply that learning to aid my professional life."
            }
          </p>
          <p className="my-2">{"I'm currently learning:"}</p>
          <ul className="my-2 ml-8 list-disc">
            <li>
              <ProfileLink href="https://remix.run/">Remix</ProfileLink>
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
        <div className="md:col-span-6">
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
              <ProfileLink href="https://reactjs.org/">React</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://react-query.tanstack.com/">
                React Query
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://single-spa.js.org/">
                Single-Spa
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://storybook.js.org/">
                Storybook
              </ProfileLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="my-4 text-center">
        Feel free to check out my links below to get to know me better.
      </p>
    </motion.section>
  );
}
