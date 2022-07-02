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
                for large client project. Lead the following efforts:
                <ul className="list-disc ml-8">
                  <li>
                    Implement a design system across a program with over 100
                    team members using React and SCSS.
                  </li>
                  <li>
                    UI for a new login flow for multiple applications using
                    OAuth2. This included the React login page and supporting
                    client libraries.
                  </li>
                  <li>
                    React UI for administration of customer accounts utilizing
                    microfrontend architecture with Single-Spa.
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
            <p className="my-2">
              Working at Domino's gave me a lot of experience working with
              teams, interviewing, and hiring.
            </p>
            <p className="my-2">
              It also helped me to find my passion in building tools to help
              people live better and be more successful.
            </p>
            <p className="my-2">
              While working on food ordering and staffing, I found the tools
              lacking. So I built myself solutions using Excel and VBA to
              generate food orders and staffing requirements that resulted in
              less waste and improved profitability.
            </p>
            <p className="my-2">
              The tools were so easy to use I was able to share them across my
              teams region to improve all of the stores in the area.
            </p>
            <p className="my-2">
              This success lead me to make the career change I did and I
              couldn't be happier.
            </p>
          </Tab>
        </TabGroup>
      </div>
    </motion.section>
  );
}
