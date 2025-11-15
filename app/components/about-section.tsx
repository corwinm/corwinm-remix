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
            in Seattle as a Senior Architect Software Engineer.
          </p>
        </div>
        <div>
          <p>
            I am a fullstack developer with passion for all things frontend.
          </p>
          <p className="my-2">
            Here are a few of the technologies I work with and love.
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
              <ProfileLink href="https://opencode.ai/">OpenCode</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://reactrouter.com/">
                React Router 7
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://tailwindcss.com/">
                Tailwindcss
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://ui.shadcn.com/">shadcn/ui</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://tanstack.com/query/latest/">
                Tanstack Query
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://vitejs.dev/">Vite</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://vercel.com/">Vercel</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://neovim.io/">Neovim</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://playwright.dev/">
                Playwright
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
              <ProfileLink href="https://tanstack.com/start/latest">
                TanStack Start
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://modelcontextprotocol.io/docs/getting-started/intro">
                MCP
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://mcpui.dev/">MCP-UI</ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://developers.openai.com/apps-sdk/">
                OpenAI Apps SDK
              </ProfileLink>
            </li>
            <li>
              <ProfileLink href="https://go.dev/">Go</ProfileLink>
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
