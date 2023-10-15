import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const socialItems = [
  {
    link: `https://www.linkedin.com/in/corwin-marsh/`,
    title: `LinkedIn`,
    icon: faLinkedin,
  },
  {
    link: `https://github.com/corwinm`,
    title: `GitHub`,
    icon: faGithub,
  },
  {
    link: `https://twitter.com/CorwinMarsh`,
    title: `Twitter`,
    icon: faXTwitter,
  },
  {
    link: `https://www.facebook.com/CorwinMarsh`,
    title: `Facebook`,
    icon: faFacebook,
  },
];

const share = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Corwin W. Marsh",
        text: "Check out Corwin's website!",
        url: window.location.href,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  } else {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      "Corwin W. Marsh website"
    )}&body=${encodeURIComponent(
      "Check out Corwin's website at: " + window.location.href
    )}`;
  }
};

const SocialLinks: React.FC = () => {
  return (
    <ul className="flex w-64 m-auto justify-between md:flex-row md:w-80 md:absolute md:right-0 md:-bottom-6">
      {socialItems.map((item) => (
        <Fragment key={item.title}>
          <li>
            <motion.a
              href={item.link}
              title={item.title}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-red-600 focus:text-red-600 inline-block"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="p-0" />
            </motion.a>
          </li>
          <span className="w-px bg-white" />
        </Fragment>
      ))}
      <li>
        <motion.button
          onClick={share}
          title="Share"
          className="hover:text-red-600 focus:text-red-600 inline-block"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            icon={faExternalLinkSquareAlt}
            size="2x"
            className="p-0"
          />
        </motion.button>
      </li>
    </ul>
  );
};

export default SocialLinks;
