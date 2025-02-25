import { type FunctionComponent } from "react";
import { Link, useLocation, useMatches } from "react-router";

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
  const location = useLocation();
  const titlePath =
    (
      matches
        .reverse()
        .find((match) => (match.data as DataWithTitleOrPath)?.path)
        ?.data as DataWithTitleOrPath
    )?.path ?? location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-opacity-80 bg-white dark:bg-opacity-80 dark:bg-stone-800 mb-6 shadow-red">
      <div className="flex p-4">
        <span className="text-3xl md:text-4xl font-bold font-sans m-0 mr-auto md:mx-auto">
          <Link
            to={titlePath}
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
