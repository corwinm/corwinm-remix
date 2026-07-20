import {
  faLinkedin,
  faGithub,
  faFacebook,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useReducedMotion } from "motion/react";
import React, { Fragment } from "react";
import { publicProfile } from "~/content/profile";

const focusRingClassName =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950";

const socialItems = [
  {
    link: publicProfile.links.linkedin,
    title: `LinkedIn`,
    icon: faLinkedin,
  },
  {
    link: publicProfile.links.github,
    title: `GitHub`,
    icon: faGithub,
  },
  {
    link: publicProfile.links.bluesky,
    title: `Bluesky`,
    icon: faBluesky,
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
        title: publicProfile.name,
        text: "Check out Corwin's website!",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      `${publicProfile.name} website`,
    )}&body=${encodeURIComponent(
      "Check out Corwin's website at: " + window.location.href,
    )}`;
  }
};

const SocialLinks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ul className="flex w-64 m-auto justify-between md:flex-row md:w-80 md:absolute md:right-0 md:-bottom-6">
      {socialItems.map((item) => (
        <Fragment key={item.title}>
          <li className="contents">
            <motion.a
              href={item.link}
              title={item.title}
              aria-label={item.title}
              rel="noopener noreferrer"
              target="_blank"
              className={`hover:text-blue-600 focus:text-blue-600 dark:hover:text-blue-400 dark:focus:text-blue-400 inline-block ${focusRingClassName}`}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.1, transition: { duration: 0.2 } }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="p-0" />
            </motion.a>
            <span className="w-px inline-block bg-black dark:bg-white" />
          </li>
        </Fragment>
      ))}
      <li className="contents">
        <motion.button
          onClick={share}
          title="Share"
          aria-label="Share this page"
          className={`hover:text-blue-600 focus:text-blue-600 dark:hover:text-blue-400 dark:focus:text-blue-400 inline-block ${focusRingClassName}`}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.1, transition: { duration: 0.2 } }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
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
