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
          <p className="mb-12 text-center text-lg text-stone-600 dark:text-stone-400">
            Have a question or want to work together? I'm always open to new
            opportunities and interesting conversations.
          </p>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-red-500/10 dark:from-purple-500/20 dark:to-red-500/20" />

            {/* Content */}
            <div className="relative p-8 md:p-12 bg-white/80 dark:bg-black/40 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-8">
                <div className="text-center">
                  <h4 className="font-bold text-2xl mb-2 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                    Connect With Me
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 mb-8">
                    Let's build something amazing together
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
