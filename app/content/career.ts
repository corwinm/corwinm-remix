export interface CareerRole {
  id: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  duration: string;
  location?: string;
  homepage: {
    summary: string;
    highlights: string[];
  };
  resume?: {
    description: string[];
    projects?: string[];
  };
}

export type ResumeCareerRole = CareerRole & {
  location: string;
  resume: NonNullable<CareerRole["resume"]>;
};

export const careerRoles: CareerRole[] = [
  {
    id: "slalom",
    title: "Sr. Software Architect",
    company: {
      name: "Slalom",
      url: "https://www.slalom.com/",
    },
    duration: "Aug 2015 - Present",
    location: "Seattle, WA",
    homepage: {
      summary:
        "Partner with clients and engineering teams to turn ambiguous requirements into production-ready software, with a focus on frontend architecture, developer experience, people leadership, maintainability, and confident delivery.",
      highlights: [
        "Manage 4 direct reports through regular 1:1s, career guidance, technical mentorship, and professional-development support.",
        "Led classes and coaching sessions that helped engineers adopt AI tools and workflows, including context engineering, agentic development, and spec-driven development.",
        "Helped teams define practical guardrails for AI-assisted delivery, including clearer context, smaller reviewable changes, and human-in-the-loop workflows.",
        "Led delivery across web, mobile, and serverless projects for clients in multiple industries.",
        "Architected React design system foundations for a program with more than 100 team members.",
        "Built shared OAuth2 login experiences and client libraries used across multiple applications.",
        "Implemented a React Single-Spa microfrontend for administration workflows spanning multiple product teams.",
      ],
    },
    resume: {
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
  },
  {
    id: "intellicheck-mobilisa",
    title: "Jr. Software Engineer",
    company: {
      name: "Intellicheck Mobilisa",
    },
    duration: "Jul 2014 - Aug 2015",
    location: "Port Townsend, WA",
    homepage: {
      summary:
        "Contributed to identity verification products across internal tools, web applications, backend services, and mobile integrations.",
      highlights: [
        "Delivered bug fixes and features for internal C# applications.",
        "Improved an ASP.NET management tool used in military access control workflows.",
        "Strengthened backend services and iOS integrations for identity verification products.",
      ],
    },
    resume: {
      description: [
        "Built and maintained features for identity-verification products, contributing across development, debugging, and product support",
      ],
    },
  },
  {
    id: "dominos-pizza",
    title: "General Manager",
    company: {
      name: "Domino's Pizza",
    },
    duration: "Oct 2009 - Jun 2014",
    homepage: {
      summary:
        "Built a foundation in leadership, hiring, and operations while learning how useful software can be for everyday teams.",
      highlights: [
        "Led teams, hired staff, and managed day-to-day store operations.",
        "Built Excel and VBA tools for food ordering and staffing that reduced waste and improved profitability.",
        "Shared those tools across the region, helping spark my transition into software engineering.",
      ],
    },
  },
];

function getCareerRole(id: string) {
  const role = careerRoles.find((candidate) => candidate.id === id);

  if (!role) {
    throw new Error(`Missing career role: ${id}`);
  }

  return role;
}

export const currentCareerRole = getCareerRole("slalom");
export const previousCareerRoles = [
  getCareerRole("intellicheck-mobilisa"),
  getCareerRole("dominos-pizza"),
];
export const resumeCareerRoles = careerRoles.filter(
  (role): role is ResumeCareerRole => Boolean(role.location && role.resume),
);
