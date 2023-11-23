import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkHeader from "~/components/link-header";
import { ProfileLink } from "~/components/profile-link";
import ProfileSection from "~/components/profile-section";

export const config = { runtime: "edge" };

export function headers() {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

export default function Wishlist() {
  return (
    <div className="lg:w-[56rem]">
      <ProfileSection>
        <LinkHeader id="wishlists">Wishlists:</LinkHeader>
        <div className="md:grid md:grid-cols-3 md:gap-4 mt-4">
          <div>
            <h2> Corwin </h2>
            <ul className="my-2">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/8LUIV79W3JTK">
                  <FontAwesomeIcon icon={faAmazon} className="w-6" />- Amazon
                </ProfileLink>
              </li>
              <li>
                <ProfileLink href="https://www.homedepot.com/list/view/details/shared/ce78b3a0-0459-11ec-8f0b-87c07d1a232d">
                  <FontAwesomeIcon icon={faHome} className="w-6" />- Home Depot
                </ProfileLink>
              </li>
            </ul>
          </div>
          <div>
            <h2> Carly </h2>
            <ul className="my-2">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/1JB8BVVZ4X45M">
                  <FontAwesomeIcon icon={faAmazon} className="w-6" />- Amazon
                </ProfileLink>
              </li>
            </ul>
          </div>
          <div>
            <h2> Mayme </h2>
            <ul className="my-2">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/23YHQCRCT7HYY">
                  <FontAwesomeIcon icon={faAmazon} className="w-6" />- Amazon
                </ProfileLink>
              </li>
            </ul>
          </div>
        </div>
      </ProfileSection>
    </div>
  );
}
