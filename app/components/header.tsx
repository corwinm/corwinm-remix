import { type FunctionComponent } from "react";
import { Link, useMatches } from "react-router";

type HeaderProps = {
  siteTitle: string;
};

type DataWithTitleOrPath = {
  title?: string;
  path?: string;
};

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Notes", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

const Header: FunctionComponent<HeaderProps> = ({ siteTitle = `` }) => {
  const matches = useMatches();
  const title =
    (
      [...matches]
        .reverse()
        .find((match) => (match.data as DataWithTitleOrPath)?.title)
        ?.data as DataWithTitleOrPath
    )?.title ?? siteTitle;

  return (
    <header className="sticky top-0 z-50 mb-6 border-b border-slate-200/80 bg-slate-100/70 print:hidden shadow-sm backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-800/30 dark:shadow-none">
      <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center">
        <span className="text-3xl md:text-4xl font-bold font-sans m-0 mr-auto md:mx-auto">
          <Link
            to="/"
            viewTransition
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {title}
          </Link>
        </span>
        <nav aria-label="Main navigation" className="md:absolute md:right-4">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  viewTransition={!item.href.includes("#")}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
