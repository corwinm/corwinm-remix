import { motion } from "framer-motion";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import TabGroup, { Tab } from "./tab-group";

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 64 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.6, delay: 0.6 }}
    >
      <LinkHeader id="experience">My experience:</LinkHeader>
      <div className="mt-16">
        <TabGroup label="Job tabs">
          <Tab name="slalom_build">
            <h3 className="text-2xl">
              Sr. Software Architect&nbsp;
              <ProfileLink href="https://www.slalombuild.com/">
                @ slalom_build
              </ProfileLink>
            </h3>
            <p className="my-2 text-slate-400 text-sm">Aug 2015 - Present</p>
            <div className="mt-2">
              <p>
                Deliver software applications for a wide variety of clients.
              </p>
              <p>
                Lead scrum teams to take client needs from requirement to fully
                realized products and features.
              </p>
              <p>
                Provided code review and guidance for engineers with an emphasis
                on helping everyone to learn and improve.
              </p>
              <p className="font-bold">Projects:</p>
            </div>
            <ul className="list-disc ml-8">
              <li>
                React Web Applications and supporting design system libraries
                for large client project.
                <ul className="list-disc ml-8">
                  <li>
                    Lead the effort to implement a design system across a
                    program with over 100 team members using React and SCSS.
                  </li>
                  <li>
                    Lead the effort to implement the UI for a new login flow for
                    multiple applications using OAuth2. This included the React
                    login page and supporting client libraries.
                  </li>
                  <li>
                    Lead the effort to implement the React UI for administration
                    of customer accounts utilizing microfrontend architecture
                    with Single-Spa.
                  </li>
                </ul>
              </li>
              <li>iOS App for Energy Company's internal operations.</li>
              <li>
                Angular 2 Web Application with AWS Serverless APIs for database
                provider client.
              </li>
              <li>
                Inventory tracking and ordering for clothing company client.
              </li>
              <li>
                C# REST api for user management for storage company client.
              </li>
              <li>
                C# Web Application order form for title insurance company
                client.
              </li>
            </ul>
          </Tab>
          <Tab name="Intellicheck Mobilisa">
            <h3 className="text-2xl">
              Jr. Software Engineer @ Intellicheck Mobilisa
            </h3>
            <p className="my-2 text-slate-400 text-sm">Jul 2014 - Aug 2015</p>
            <p>
              Assisted in the design and development of Identity Verification
              Solutions
            </p>
            <ul className="list-disc ml-8">
              <li>
                Implemented bug fixes and new features for internal C#
                applications.
              </li>
              <li>
                Implemented bug fixes and designed and implemented new features
                for a Military Access Control product's ASP.NET Web Management
                Tool.
              </li>
              <li>
                Implemented bug fixes and designed and implemented improved
                security for an identity verification phone app's WCF Web
                Service back-end.
              </li>
              <li>
                Implemented HTTP driven JSON Communication layer for Objective C
                iOS phone app to communicate with Web API 2 back-end.
              </li>
            </ul>
          </Tab>
          <Tab name="Domino's Pizza">
            <h3 className="text-2xl">General Manager @ Domino's Pizza</h3>
            <p className="my-2 text-slate-400 text-sm">Oct 2009 - Jun 2014</p>
            <ul className="list-disc ml-8">
              <li>
                Tracked and managed operating costs to within company goals
                through labor scheduling, inventory analysis and food ordering.
              </li>
              <li>
                Conducted interviews and effectively developed new team members
                and advanced current team members to new levels. Having upwards
                to 30 employees working under my supervision.
              </li>
              <li>
                Interacted with customers in person and over the phone.
                Communicated with customers to resolve concerns and deliver the
                WOW experience they deserve as our customer.
              </li>
              <li>
                Grew sales through community involvement, business relations and
                local level marketing.
              </li>
              <li>
                Gained area supervisor experience while our supervisor was on
                vacation. Conducted store visits and provided feedback to
                Managers and Assistant Managers using motivating techniques.
              </li>
            </ul>
          </Tab>
        </TabGroup>
      </div>
    </motion.section>
  );
}
