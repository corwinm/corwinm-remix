import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type MetaFunction } from "react-router";
import { ExperienceItem } from "~/components/experience-item";
import { Button } from "~/components/ui/button";
import { PrintButton } from "~/components/print-button";
import ResumeLayout from "~/components/resume-layout";
import { resumeProjects } from "~/content/projects";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";

export const meta: MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/resume",
    title: "Resume - Corwin W. Marsh",
    description:
      "Corwin Marsh's professional resume, including software architecture experience, technical skills, and selected developer tooling projects.",
  }),
];

export function headers() {
  return {
    "Cache-Control":
      "s-maxage=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

const professionalSummary = `
Senior Software Architect with 10+ years of experience designing and
delivering enterprise web applications, frontend platforms, cloud-backed
systems, and developer tooling. I specialize in turning ambiguous
requirements into maintainable products, mentoring engineering teams,
and improving workflows through practical AI-assisted development and
strong architecture fundamentals.
`;

const experiences = [
  {
    title: "Sr. Software Architect",
    company: "Slalom",
    duration: "Aug 2015 - Present",
    location: "Seattle, WA",
    description: [
      "Architect production web, mobile, and cloud applications across enterprise clients, turning ambiguous stakeholder needs into shipped systems",
      "Lead scrum teams through discovery, planning, implementation, and delivery while balancing product goals, quality, and delivery risk",
      "Manage 4 direct reports through regular 1:1s, career guidance, technical mentorship, and professional-development support",
      "Coach engineers on reviewable AI-assisted development workflows: context engineering, spec-driven implementation, agentic development, and human-in-the-loop review",
      "Support production applications with a focus on maintainability, observability, and long-term ownership",
    ],
    projects: [
      "Built React and SCSS design system libraries for a large client program with 100+ team members",
      "Built OAuth2 login UI, React SPA, and shared npm packages for adoption across multiple applications",
      "Architected React single-spa microfrontend administration platform for multiple product teams",
      "Delivered Ionic hybrid mobile app with AWS Lambda backend integrations for legacy insurance systems",
      "Built AWS serverless APIs, C# REST APIs, and web applications across database, storage, title insurance, and energy clients",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "Intellicheck Mobilisa",
    duration: "Jul 2014 - Aug 2015",
    location: "Port Townsend, WA",
    description: [
      "Built and maintained features for identity-verification products, contributing across development, debugging, and product support",
    ],
  },
];

const skillsData = {
  Frontend: ["TypeScript", "React", "React Router 7", "Next.js"],
  Backend: ["Node.js", "Python", "Java", "Go", "C#"],
  "Tools & Platforms": ["AWS", "Terraform", "Docker", "GitHub", "Cloudflare"],
  "AI Development": [
    "Pi",
    "OpenCode",
    "Claude Code",
    "Codex",
    "GitHub Copilot",
    "Spec-Driven Development",
  ],
};

const keySkills = [
  "Lead scrum teams to deliver timely software features while using generative AI development tools intentionally and reviewably.",
  "Mentor engineers through technical growth, code review, architecture decisions, and career-development conversations.",
  "Operate in high-ambiguity contexts, identifying and providing solutions across tech, process, product, developer experience, and design practices.",
  "Detailed knowledge of building performant, accessible, and well-tested web applications.",
  "Deploying applications with AWS Lambda, CloudFront and S3, ECS, and Docker.",
  "Infrastructure as code (AWS CloudFormation and Terraform) deployed by CI/CD pipelines (GitHub Actions, Jenkins, AWS CodePipeline).",
  "Designing and implementing RESTful APIs and RPC Services with SQL and NoSQL databases.",
];

const education = [
  {
    result: "Graduate Certificate in Software Design & Development",
    dateRange: "Sept 2013 – June 2014",
    school: "University of Washington - Bothell",
    location: "Bothell, WA",
  },

  {
    result: "BA in Business Administration - Finance",
    dateRange: "Jan 2007 - June 2009",
    school: "Western Washington University",
    location: "Bellingham, WA",
  },
  {
    dateRange: "Sept 2005 - Dec 2006",
    school: "Bellevue College",
    location: "Bellevue, WA",
  },
];

function MobileResumeDownload() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 text-center shadow-xl backdrop-blur-sm md:hidden print:hidden dark:border-stone-700/80 dark:bg-black/30">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Resume
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-slate-600 dark:text-slate-300">
        The web resume is formatted for desktop and print. Download the PDF for
        the best mobile experience.
      </p>
      <Button asChild variant="gradient" className="mt-8">
        <a href="/resume.pdf" download>
          Download resume PDF
        </a>
      </Button>
    </section>
  );
}

export default function Resume() {
  return (
    <>
      <MobileResumeDownload />
      <ResumeLayout>
        <div className="print:shadow-none print:max-w-none print:mx-0 print:my-0 print:h-max">
          <div className="grid grid-cols-5 gap-8 print:gap-6 print:h-max">
            <div className="col-span-2 p-4 px-5 print:min-h-[10.2in] print:px-4 print:py-3 bg-[#3476A3] text-slate-200">
              <div className="print-section">
                <h2 className="text-2xl font-bold">Corwin Marsh</h2>
                <p className="text-sm mt-2 print:mt-1">Senior Software Architect</p>
                <div className="space-y-2 print:space-y-1 text-xs mt-4 print:mt-3 ml-2">
                  <p>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="lg"
                      className="w-4 pr-1.5"
                    />{" "}
                    Greater Seattle Area
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      className="w-4 pr-1.5"
                    />{" "}
                    linkedin.com/in/corwin-marsh
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="w-4 pr-1.5"
                    />{" "}
                    github.com/corwinm
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="lg"
                      className="w-4 pr-1.5"
                    />{" "}
                    corwinmarsh.com
                  </p>
                </div>
              </div>

              <div className="print-section mt-4 print:mt-3">
                <h2 className="text-xl font-bold">Key Skills</h2>
                <ul className="space-y-1 print:space-y-0.5 text-sm mt-2 print:mt-1.5 pl-5 list-outset list-disc">
                  {keySkills.map((skill, index) => (
                    <li key={index} className="pl-0.5 text-xs print:leading-tight">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="print-section mt-2 print:mt-1.5">
                <h2 className="text-lg font-bold">Technical Skills</h2>
                <div className="space-y-0.5">
                  {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="flex flex-col">
                      <h3 className="font-semibold text-sm">{category}: </h3>
                      <p className="text-[.7rem] inline-block">
                        {skills.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="print-section mt-2 print:mt-1.5 mb-0">
                <h2 className="text-lg font-bold">Education</h2>
                <div className="mt-1">
                  {education.map((edu, index) => (
                    <div key={index} className="">
                      {edu.result && (
                        <h3 className="font-semibold text-sm print:text-xs mt-1.5 print:mt-1">
                          {edu.result}
                        </h3>
                      )}
                      <p className="text-[.7rem]">{edu.school}</p>
                      <p className="text-[.7rem]">{edu.dateRange}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-3 space-y-3 print:space-y-2 print:min-h-full">
              <div className="print-section mt-5">
                <h2 className="text-xl font-bold mb-2 print:text-lg">
                  Professional Summary
                </h2>
                <p className="text-gray-700 print:text-black text-xs leading-loose print:leading-[1.35]">
                  {professionalSummary.trim()}
                </p>
              </div>

              <div className="print-section">
                <h2 className="text-xl font-bold mb-2 print:text-lg">
                  Professional Experience
                </h2>
                <div className="space-y-6 print:space-y-3">
                  {experiences.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      duration={exp.duration}
                      location={exp.location}
                      description={exp.description}
                      projects={exp.projects}
                    />
                  ))}
                </div>
              </div>

              <div className="print-section mb-[9px]">
                <h2 className="text-xl font-bold mb-2 print:text-lg">
                  Open Source Projects
                </h2>
                <div className="space-y-2 print:space-y-1">
                  {resumeProjects.map((project, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-xs print:text-xs">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 print:text-black text-[.7rem] mt-0.5">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResumeLayout>
      <PrintButton />
    </>
  );
}
