import * as React from "react";

export const ProfileLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => (
  <a
    className="underline hover:text-red-600"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
