import { motion } from "motion/react";
import ContactSocialLinks from "./contact-social-links";
import LinkHeader from "./link-header";
import ProfileSection from "./profile-section";

const pnwBannerImage = "/pnw-stars-banner.png";

function PnwContactCard() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl shadow-slate-950/30"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={pnwBannerImage}
        alt="Starry Pacific Northwest mountain landscape"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-slate-950/62 backdrop-blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950 to-transparent" />

      <div className="relative p-8 md:p-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h4 className="mb-2 bg-linear-to-r from-sky-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent">
              Find me online
            </h4>
            <p className="mb-8 text-slate-200">
              I’m always up for a good conversation about building useful
              things.
            </p>
            <ContactSocialLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <ProfileSection>
      <LinkHeader id="contact">Connect with me</LinkHeader>
      <div className="mt-16">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-12 text-center text-lg text-stone-600 dark:text-stone-400">
            Want to talk software, developer tools, or AI-assisted workflows?
            I’m easiest to find on LinkedIn or Bluesky.
          </p>

          <PnwContactCard />
        </motion.div>
      </div>
    </ProfileSection>
  );
}
