import { Link } from "@remix-run/react";
import type { FunctionComponent } from "react";

type HeaderProps = {
  siteTitle: string;
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle = `` }) => (
  <header className="sticky top-0 z-50 bg-opacity-80 bg-white dark:bg-opacity-80 dark:bg-stone-800 mb-6 shadow-red">
    <div className="flex p-4">
      <span className="text-3xl md:text-4xl font-bold font-sans m-0 mr-auto md:mx-auto">
        <Link to="/" className="hover:text-blue-400">
          {siteTitle}
        </Link>
      </span>
    </div>
  </header>
);

export default Header;
