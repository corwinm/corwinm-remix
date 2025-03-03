import { type FunctionComponent } from "react";
import { Link, useMatches } from "react-router";

type HeaderProps = {
  siteTitle: string;
};

type DataWithTitleOrPath = {
  title?: string;
  path?: string;
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle = `` }) => {
  const matches = useMatches();
  const title =
    (
      matches
        .reverse()
        .find((match) => (match.data as DataWithTitleOrPath)?.title)
        ?.data as DataWithTitleOrPath
    )?.title ?? siteTitle;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-stone-800/30 mb-6 shadow-[0_4px_6px_-1px_rgba(147,51,234,0.1),0_2px_4px_-2px_rgba(239,68,68,0.1)]">
      <div className="flex p-4">
        <span className="text-3xl md:text-4xl font-bold font-sans m-0 mr-auto md:mx-auto">
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {title}
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
