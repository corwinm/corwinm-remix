import { faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { publicProfile } from "~/content/profile";
import { Button } from "./ui/button";

const socialItems = [
  {
    link: publicProfile.links.linkedin,
    title: `LinkedIn`,
    icon: faLinkedin,
  },
  {
    link: publicProfile.links.bluesky,
    title: `Bluesky`,
    icon: faBluesky,
  },
  {
    link: publicProfile.links.resume,
    title: `Resume`,
    icon: faFilePdf,
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
              target={item.link.startsWith("http") ? "_blank" : undefined}
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
