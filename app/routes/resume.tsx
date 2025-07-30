import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  //   faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  //   faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type MetaFunction } from "react-router";
import { ExperienceItem } from "~/components/experience-item";
import { PrintButton } from "~/components/print-button";
import ResumeLayout from "~/components/resume-layout";

export const meta: MetaFunction = () => [
  {
    title: "Resume - Corwin W. Marsh",
  },
  {
    name: "description",
    content: "Corwin Marsh's professional resume",
  },
];

export function headers() {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

const professionalSummary = `
Senior Software Architect with 10+ years of experience designing and
delivering scalable web applications and leading engineering teams.
Expertise in React, TypeScript, and cloud architectures with a
passion for creating maintainable, user-focused solutions. Proven
track record of architecting enterprise applications, mentoring
development teams, and driving technical excellence across diverse
client projects.
`;

// Experience data based on the actual resume
const experiences = [
  {
    title: "Sr. Software Architect",
    company: "Slalom Build",
    duration: "Aug 2015 - Present",
    location: "Seattle, WA",
    description: [
      "Architect and deliver software applications for a wide variety of clients",
      "Lead scrum teams to take sometimes ambiguous client requirements to fully realized products and features",
      "Provide code review and guidance for engineers with an emphasis on helping everyone to learn and improve",
      "Support production applications and build new production ready products and features with a focus on maintainability and observability",
    ],
    projects: [
      "Ionic Hybrid Mobile App for Insurance Company with supporting AWS Lambda Serverless backend to integrate with various legacy systems",
      "React Web Applications and supporting design system libraries for large client project - Architected and implemented design system libraries using React and SCSS for a program with over 100 team members",
      "UI for a new login flow for multiple applications using OAuth2. Including a login page React single page application and supporting client libraries to streamline adoption across the program",
      "Architected and implemented React Single-Spa microfrontend application for administration of customer accounts across to support multiple product teams",
      "iOS App for Energy Company's internal operations",
      "Angular 2 Web Application with AWS Serverless APIs for database provider client",
      "Inventory tracking and ordering for clothing company client",
      "C# REST api for user management for storage company client",
      "C# Web Application order form for title insurance company client",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "Intellicheck Mobilisa",
    duration: "Jul 2014 - Aug 2015",
    location: "Port Townsend, WA",
    description: [
      "Assisted in the design and development of Identity Verification Solutions",
    ],
  },
];

// Skills organized by category based on the actual resume
const skillsData = {
  Frontend: ["TypeScript", "React", "React Router 7", "Next.js"],
  Backend: ["Node.js", "Python", "Java", "Go", "C#"],
  "Tools & Platforms": ["AWS", "Terraform", "Docker", "GitHub", "Vercel"],
};

const keySkills = [
  "Leading scrum teams to deliver timely software features.",
  "Operate in high ambiguity context, identifying and providing solutions to problems across tech, process, product, and design practices.",
  "Detailed knowledge of building performant, accessible, and well tested web applications.",
  "Deploying application with AWS Serverless Lambda, AWS CloudFront and S3, AWS ECS and Docker, and AWS EC2.",
  "Infrastructure as code (AWS CloudFormation and Terraform) deployed by CI/CD Pipelines (GitHub Actions, Jenkins, AWS CodePipeline).",
  "Designing and implementing RESTful APIs and RPC Services with Node.js and C# ASP.NET with SQL and NoSQL databases.",
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

export default function Resume() {
  return (
    <>
      <ResumeLayout>
        <div className="print:shadow-none print:max-w-none print:mx-0 print:my-0 print:h-max">
          {/* Two-column layout */}
          <div className="grid grid-cols-5 gap-8 print:gap-6 print:h-max">
            {/* Left column - 2/5 width */}
            <div className="col-span-2 p-4 px-5 bg-[#3476A3] text-slate-200">
              {/* Contact Information */}
              <div className="print-section">
                <h2 className="text-2xl font-bold">Corwin Marsh</h2>
                <p className="text-sm mt-2">
                  Senior Architect - Software Engineer
                </p>
                <div className="space-y-2 text-xs mt-4 ml-2">
                  {/* <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className="w-4 pr-1.5"
                  />{" "}
                  example@example.com
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    className="w-4 pr-1.5"
                  />{" "}
                    (123) 456-7890
                </p> */}
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
                    linkedin.com/in/corwinmarsh
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

              {/* Key Skills */}
              <div className="print-section mt-4">
                <h2 className="text-xl font-bold">Key Skills</h2>
                <ul className="space-y-1 text-sm mt-2 pl-5 list-outset list-disc">
                  {keySkills.map((skill, index) => (
                    <li key={index} className="pl-0.5 text-xs">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="print-section mt-2">
                <h2 className="text-lg font-bold">Technical Skills</h2>
                <div className="space-y-0.5">
                  {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="flex flex-col">
                      <h3 className="font-semibold text-sm">{category}: </h3>
                      <p className="text-xs inline-block">
                        {skills.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="print-section mt-2 mb-3">
                <h2 className="text-lg font-bold">Education</h2>
                <div className="mt-1">
                  {education.map((edu, index) => (
                    <div key={index} className="">
                      {edu.result && (
                        <h3 className="font-semibold text-sm print:text-xs mt-1.5">
                          {edu.result}
                        </h3>
                      )}
                      <p className="text-sm print:text-xs">{edu.school}</p>
                      <p className="text-sm print:text-xs">{edu.dateRange}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - 3/5 width */}
            <div className="col-span-3 space-y-6 print:space-y-4 print:min-h-full">
              {/* Professional Summary */}
              <div className="print-section mt-5">
                <h2 className="text-xl font-bold mb-4 print:text-lg">
                  Professional Summary
                </h2>
                <p className="text-gray-700 print:text-black text-xs leading-relaxed">
                  {professionalSummary.trim()}
                </p>
              </div>

              {/* Experience Section */}
              <div className="print-section">
                <h2 className="text-xl font-bold mb-4 print:text-lg">
                  Professional Experience
                </h2>
                <div className="space-y-6 print:space-y-4">
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
            </div>
          </div>

          {/* Print button for web view */}
        </div>
      </ResumeLayout>
      <PrintButton />
    </>
  );
}
