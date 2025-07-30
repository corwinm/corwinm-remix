import { type MetaFunction } from "react-router";
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

// Experience data
const experiences = [
  {
    title: "Sr. Software Architect",
    company: "Slalom Build",
    duration: "Aug 2015 - Present",
    location: "Seattle, WA",
    description: [
      "Architect and deliver software applications for a wide variety of clients",
      "Lead scrum teams to take ambiguous client requirements to fully realized products",
      "Support production applications and build new production ready products with focus on maintainability",
      "Built Ionic Hybrid Mobile App for Insurance Company with AWS Lambda Serverless backend",
      "Architected React Web Applications and design system libraries for large client projects",
      "Implemented React Single-Spa microfrontend applications for customer account administration",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "Intellicheck Mobilisa",
    duration: "Jul 2014 - Aug 2015",
    location: "Jericho, NY",
    description: ["Designed and developed Identity Verification Solutions"],
  },
];

// Skills data organized by category
const skillsData = {
  Frontend: [
    "TypeScript",
    "React",
    "React Router 7",
    "Next.js",
    "TailwindCSS",
    "Tanstack React Query",
    "Angular",
    "Single-Spa",
    "Vite",
  ],
  Backend: ["Node.js", "Python", "Java", "Go", "C#"],
  "Tools & Platforms": [
    "AWS",
    "Terraform",
    "Docker",
    "GitHub",
    "Vercel",
    "Neovim",
    "VSCode",
  ],
};

export default function Resume() {
  return (
    <ResumeLayout>
      <div className="print:shadow-none print:max-w-none print:mx-0 print:my-0">
        {/* Print-specific styles */}
        <style>
          {`
            @media print {
              @page {
                margin: 0.5in;
                size: letter;
              }
              
              body {
                font-size: 11px;
                line-height: 1.3;
                color: #000 !important;
                background: white !important;
              }
              
              .no-print {
                display: none !important;
              }
              
              /* Force black text for print */
              h1, h2, h3, h4, h5, h6, p, span, div, li, a {
                color: #000 !important;
              }
              
              /* Remove backgrounds and shadows */
              * {
                background: transparent !important;
                box-shadow: none !important;
              }
              
              /* Ensure proper spacing */
              .print-section {
                margin-bottom: 1rem;
                page-break-inside: avoid;
              }
              
              .print-item {
                margin-bottom: 0.75rem;
                page-break-inside: avoid;
              }
              
              header, footer {
                display: none;
              }
            }
          `}
        </style>

        {/* Header with contact information */}
        <section className="text-center mb-8 print-section print:mb-4">
          <h1 className="text-4xl font-bold mb-2 print:text-2xl">
            Corwin W. Marsh
          </h1>
          <p className="text-xl text-gray-600 mb-3 print:text-base print:text-black">
            Senior Software Architect
          </p>
          <div className="text-sm print:text-xs space-y-1">
            <p>Seattle, WA</p>
            <div className="flex justify-center space-x-4 print:space-x-2">
              <span>corwinmarsh.com</span>
              <span>•</span>
              <span>github.com/corwinm</span>
              <span>•</span>
              <span>linkedin.com/in/corwinmarsh</span>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-8 print-section print:mb-4">
          <h2 className="text-2xl font-bold mb-3 border-b-2 border-gray-300 pb-1 print:text-lg print:mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 print:text-black print:text-sm leading-relaxed">
            Senior Software Architect with 9+ years of experience designing and
            delivering scalable web applications and leading engineering teams.
            Expertise in React, TypeScript, and cloud architectures with a
            passion for creating maintainable, user-focused solutions. Proven
            track record of architecting enterprise applications and mentoring
            development teams.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8 print-section print:mb-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-1 print:text-lg print:mb-3">
            Professional Experience
          </h2>
          <div className="space-y-6 print:space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="print-item">
                <div className="flex justify-between items-start mb-2 print:mb-1">
                  <div>
                    <h3 className="text-lg font-semibold print:text-base">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 print:text-black font-medium print:text-sm">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <p className="text-gray-500 print:text-black text-sm print:text-xs italic">
                    {exp.duration}
                  </p>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 print:text-black print:text-sm print:space-y-0.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 print-section print:mb-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-1 print:text-lg print:mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-2">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="print-item">
                <h3 className="text-lg font-semibold mb-2 print:text-base print:mb-1">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1 print:text-xs">
                  {skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className="text-gray-700 print:text-black"
                    >
                      {skill}
                      {idx < skills.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 print-section print:mb-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-1 print:text-lg print:mb-3">
            Education
          </h2>
          <div className="print-item">
            <h3 className="text-lg font-semibold print:text-base">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 print:text-black print:text-sm">
              University of Washington, Seattle, WA
            </p>
          </div>
        </section>

        {/* Print button for web view */}
        <div className="no-print text-center mt-8 pt-4 border-t">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Print Resume
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Use your browser's print function to save as PDF
          </p>
        </div>
      </div>
    </ResumeLayout>
  );
}
