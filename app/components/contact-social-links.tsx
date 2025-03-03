import { faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
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
    <ul className="flex flex-wrap justify-center gap-6">
      {socialItems.map((item) => (
        <li key={item.title}>
          <motion.a
            href={item.link}
            title={item.title}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-purple-500/20 
               hover:bg-purple-500  hover:text-white transition-all duration-300 group"
            whileHover={{
              // scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="lg"
              className="text-purple-500 group-hover:text-white transition-colors duration-300"
            />
            <span className="font-medium">{item.title}</span>
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

export default ContactSocialLinks;
