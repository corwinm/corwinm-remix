import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

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
    icon: faTwitter,
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
        <>
          <li key={item.title}>
            <a
              href={item.link}
              title={item.title}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-red-600"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="p-0" />
            </a>
          </li>
          <span className="w-px bg-white" />
        </>
      ))}
      <li>
        <button onClick={share} title="Share" className="hover:text-red-600">
          <FontAwesomeIcon
            icon={faExternalLinkSquareAlt}
            size="2x"
            className="p-0"
          />
        </button>
      </li>
    </ul>
  );
};

export default SocialLinks;
