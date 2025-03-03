import { faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import React from "react";

const socialItems = [
  {
    link: `https://www.linkedin.com/in/corwin-marsh/`,
    title: `LinkedIn`,
    icon: faLinkedin,
  },
  {
    link: `https://bsky.app/profile/corwinmarsh.com`,
    title: `Bluesky`,
    icon: faBluesky,
  },
];

const ContactSocialLinks: React.FC = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-8">
      {socialItems.map((item) => (
        <li key={item.title}>
          <motion.a
            href={item.link}
            title={item.title}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-blue-600 focus:text-blue-600 dark:hover:text-blue-400 dark:focus:text-blue-400 inline-block"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={item.icon} size="2x" className="p-0" />
            <span className="ml-2 font-medium">{item.title}</span>
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

export default ContactSocialLinks;
