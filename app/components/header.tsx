import { Link } from "@remix-run/react";
import React from "react";

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle = ``, children }) => (
  <header className="sticky top-0 z-50 bg-opacity-80 bg-white dark:bg-opacity-80 dark:bg-black mb-6 shadow-red">
    <div className="flex p-4">
      <span className="text-3xl md:text-4xl font-bold font-sans m-0 mr-auto md:mx-auto">
        <Link to="/" className="hover:text-red-600">
          {siteTitle}
        </Link>
      </span>
      {children}
    </div>
  </header>
);

export default Header;
