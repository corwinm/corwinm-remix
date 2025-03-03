import { motion } from "motion/react";
import ContactSocialLinks from "./contact-social-links";
import LinkHeader from "./link-header";
import ProfileSection from "./profile-section";

export default function ContactSection() {
  return (
    <ProfileSection>
      <LinkHeader id="contact">Get In Touch</LinkHeader>
      <div className="mt-16">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-center">
            Have a question or want to work together? Feel free to reach out via
            LinkedIn or connect with me on BlueSky.
          </p>

          <div className="bg-purple-100 dark:bg-purple-900/30 p-8 rounded-lg shadow-md">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold text-xl mb-4 text-center">
                  Connect With Me
                </h4>
                <ContactSocialLinks />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ProfileSection>
  );
}
