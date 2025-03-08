import { faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "./ui/button";

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
          <Button asChild variant="outline">
            <a
              href={item.link}
              title={item.title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                className="text-inherit"
              />
              <span>{item.title}</span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactSocialLinks;
