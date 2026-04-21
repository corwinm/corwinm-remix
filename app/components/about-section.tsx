import { Code2, ExternalLink, Sparkles, MapPin, Briefcase } from "lucide-react";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

export default function AboutSection() {
  return (
    <ProfileSection>
      <LinkHeader id="about">A little about me:</LinkHeader>
      <div className="mt-16 space-y-8">
        {/* Intro Section - Full Width */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-2xl">
            Hi! I'm{" "}
            <span className="text-purple-500 font-semibold">Corwin</span>.
            Welcome to my personal site!
          </p>
          <p className="my-2 text-lg">
            I work at{" "}
            <ProfileLink href="https://www.slalom.com/">Slalom</ProfileLink> in
            Seattle as a Senior Architect Software Engineer.
          </p>
          <div className="flex items-center justify-center gap-4 my-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Greater Seattle Area</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>Since 2014</span>
            </div>
          </div>
        </div>

        {/* Technologies Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-purple-500" />
              <p className="font-semibold">Technologies I love</p>
            </div>
            <p className="my-2">
              I am a fullstack developer with passion for all things frontend.
            </p>
            <p className="my-2">
              Here are a few of the technologies I work with and love.
            </p>
            <ul className="my-2 ml-8 list-none space-y-1 grid grid-cols-2 gap-x-4">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://www.typescriptlang.org/">
                  TypeScript
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://react.dev/">React</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://opencode.ai/">OpenCode</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://reactrouter.com/">
                  React Router 7
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://tailwindcss.com/">
                  Tailwindcss
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://ui.shadcn.com/">
                  shadcn/ui
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://tanstack.com/query/latest/">
                  Tanstack Query
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://vitejs.dev/">Vite</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://vercel.com/">Vercel</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://neovim.io/">Neovim</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://playwright.dev/">
                  Playwright
                </ProfileLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <p className="font-semibold">Currently learning</p>
            </div>
            <p className="my-2">
              One of the things I love the most about software engineering is
              that there is always something new to learn.
            </p>
            <ul className="my-2 ml-8 list-none space-y-1 grid grid-cols-2 gap-x-4">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://tanstack.com/start/latest">
                  TanStack Start
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://modelcontextprotocol.io/docs/getting-started/intro">
                  MCP
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://mcpui.dev/">MCP-UI</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://developers.openai.com/apps-sdk/">
                  OpenAI Apps SDK
                </ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://pi.dev/">pi</ProfileLink>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-gray-400" />
                <ProfileLink href="https://go.dev/">Go</ProfileLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="my-4 text-center">
        Feel free to check out my links below to get to know me better.
      </p>
    </ProfileSection>
  );
}
