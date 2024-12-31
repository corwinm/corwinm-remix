import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router";

export default function Blog() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/blog" && (
        <Link to="/blog">
          <FontAwesomeIcon icon={faArrowLeft} size="sm" /> Back to overview
        </Link>
      )}
      <Outlet />
    </>
  );
}
