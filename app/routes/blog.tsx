import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router";

export default function Blog() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/blog" && (
        <Link
          to="/blog"
          viewTransition
          className="inline-flex items-center gap-2 text-sm"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3 shrink-0" />
          Back to Blog
        </Link>
      )}
      <Outlet />
    </>
  );
}
