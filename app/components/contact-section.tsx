import { motion } from "motion/react";
import ContactSocialLinks from "./contact-social-links";
import LinkHeader from "./link-header";
import ProfileSection from "./profile-section";

export default function ContactSection() {
  return (
    <ProfileSection>
      <LinkHeader id="contact">Connect with me</LinkHeader>
      <div className="mt-16">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-12 text-center text-lg text-stone-600 dark:text-stone-400">
            Want to talk software, developer tools, or AI-assisted workflows?
            I’m easiest to find on LinkedIn or Bluesky.
          </p>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-indigo-300/10 dark:from-indigo-400/20 dark:to-indigo-300/20" />

            <div className="relative p-8 md:p-12 bg-white/80 dark:bg-black/40 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-8">
                <div className="text-center">
                  <h4 className="font-bold text-2xl mb-2 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                    Find me online
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 mb-8">
                    I’m always up for a good conversation about building useful
                    things.
                  </p>
                  <ContactSocialLinks />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ProfileSection>
  );
}
