import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, json, useLocation } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    title: "Corwin Marsh",
    path: "/",
  });
};

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
