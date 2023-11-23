import LinkHeader from "~/components/link-header";
import { ProfileLink } from "~/components/profile-link";
import ProfileSection from "~/components/profile-section";

export default function Wishlist() {
  return (
    <div className="lg:w-[56rem]">
      <ProfileSection>
        <LinkHeader id="wishlists">Wishlists:</LinkHeader>
        <div className="md:grid md:grid-cols-3 md:gap-4 mt-4">
          <div>
            <h2> Corwin </h2>
            <ul className="my-2 ml-8 list-disc">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/8LUIV79W3JTK">
                  Amazon
                </ProfileLink>
              </li>
              <li>
                <ProfileLink href="https://www.homedepot.com/list/view/details/shared/ce78b3a0-0459-11ec-8f0b-87c07d1a232d">
                  Home Depot
                </ProfileLink>
              </li>
            </ul>
          </div>
          <div>
            <h2> Carly </h2>
            <ul className="my-2 ml-8 list-disc">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/1JB8BVVZ4X45M">
                  Amazon
                </ProfileLink>
              </li>
            </ul>
          </div>
          <div>
            <h2> Mayme </h2>
            <ul className="my-2 ml-8 list-disc">
              <li>
                <ProfileLink href="https://www.amazon.com/hz/wishlist/ls/23YHQCRCT7HYY">
                  Amazon
                </ProfileLink>
              </li>
            </ul>
          </div>
        </div>
      </ProfileSection>
    </div>
  );
}
