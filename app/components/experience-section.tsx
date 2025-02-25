import { type ReactNode } from "react";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";
import TabGroup, { Tab } from "./tab-group";

function ExperienceTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl">{children}</h3>;
}

function ExperienceDuration({ children }: { children: ReactNode }) {
  return (
    <p className="my-2 text-slate-600 dark:text-slate-400 text-sm italic">
      {children}
    </p>
  );
}

const SlalomTab = (
  <Tab name="slalom_build">
    <ExperienceTitle>
      Sr. Software Architect&nbsp;
      <ProfileLink href="https://www.slalombuild.com/">
        @ slalom_build
      </ProfileLink>
    </ExperienceTitle>
    <ExperienceDuration>Aug 2015 - Present</ExperienceDuration>
    <div className="mt-2">
      <p>
        Architect and deliver software applications for a wide variety of
        clients.
      </p>
      <p>
        Lead scrum teams to take sometimes ambiguous client requirement to fully
        realized products and features.
      </p>
      <p>
        Provide code review and guidance for engineers with an emphasis on
        helping everyone to learn and improve.
      </p>
      <p>
        Support production applications and build new production ready products
        and features with a focus on maintainability and observability.
      </p>
      <p className="font-bold">Projects:</p>
    </div>
    <ul className="list-disc ml-8">
      <li>
        Ionic Hybrid Mobile App for Insurance Company with supporting AWS Lambda
        Serverless backend to integrate with various legacy systems.
      </li>
      <li>
        React Web Applications and supporting design system libraries for large
        client project.
        <ul className="list-disc ml-8">
          <li>
            Architected and implement design system libraries using React and
            SCSS for a program with over 100 team members.
          </li>
          <li>
            UI for a new login flow for multiple applications using OAuth2.
            Including a login page React single page application and supporting
            client libraries to streamline adoption across the program.
          </li>
          <li>
            Architected and implemented React Single-Spa microfrontend
            application for administration of customer accounts across to
            support multiple product teams.
          </li>
        </ul>
      </li>
      <li>{`iOS App for Energy Company's internal operations.`}</li>
      <li>
        Angular 2 Web Application with AWS Serverless APIs for database provider
        client.
      </li>
      <li>Inventory tracking and ordering for clothing company client.</li>
      <li>C# REST api for user management for storage company client.</li>
      <li>C# Web Application order form for title insurance company client.</li>
    </ul>
  </Tab>
);

const MobilisaTab = (
  <Tab name="Intellicheck Mobilisa">
    <ExperienceTitle>
      Jr. Software Engineer @ Intellicheck Mobilisa
    </ExperienceTitle>
    <ExperienceDuration>Jul 2014 - Aug 2015</ExperienceDuration>
    <p>
      Assisted in the design and development of Identity Verification Solutions.
    </p>
    <ul className="list-disc ml-8">
      <li>
        Implemented bug fixes and new features for internal C# applications.
      </li>
      <li>
        {`Implemented bug fixes and designed and implemented new features for a
        Military Access Control product's ASP.NET Web Management Tool.`}
      </li>
      <li>
        {`Implemented bug fixes and designed and implemented improved security for
        an identity verification phone app's WCF Web Service back-end.`}
      </li>
      <li>
        Implemented HTTP driven JSON Communication layer for Objective C iOS
        phone app to communicate with Web API 2 back-end.
      </li>
    </ul>
  </Tab>
);

const DominosTab = (
  <Tab name="Domino's Pizza">
    <ExperienceTitle>{`General Manager @ Domino's Pizza`}</ExperienceTitle>
    <ExperienceDuration>Oct 2009 - Jun 2014</ExperienceDuration>
    <p className="my-2">
      {`Working at Domino's gave me a lot of experience working with teams,
      interviewing, and hiring.`}
    </p>
    <p className="my-2">
      It also helped me to find my passion in building tools to help people live
      better and be more successful.
    </p>
    <p className="my-2">
      While working on food ordering and staffing, I found the tools lacking. So
      I built myself solutions using Excel and VBA to generate food orders and
      staffing requirements that resulted in less waste and improved
      profitability.
    </p>
    <p className="my-2">
      The tools were so easy to use I was able to share them across my teams
      region to improve all of the stores in the area.
    </p>
    <p className="my-2">
      {`This success lead me to make the career change I did and I couldn't be
      happier.`}
    </p>
  </Tab>
);

export default function ExperienceSection() {
  return (
    <ProfileSection>
      <LinkHeader id="experience">My experience:</LinkHeader>
      <TabGroup label="Job tabs" className="mt-16">
        {SlalomTab}
        {MobilisaTab}
        {DominosTab}
      </TabGroup>
    </ProfileSection>
  );
}
