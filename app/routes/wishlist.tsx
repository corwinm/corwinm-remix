import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MetaFunction } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import { json } from "@vercel/remix";
import { ProfileLink } from "~/components/profile-link";
import ProfileSection from "~/components/profile-section";

export const config = { runtime: "edge" };

export function headers() {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
}

export const meta: MetaFunction = () => [
  {
    title: `Wishlists`,
  },
  {
    name: "description",
    content: `Corwin Marsh's family wishlists.`,
  },
  {
    name: "author",
    content: `Corwin W. Marsh`,
  },
  {
    property: "og:title",
    content: `Wishlists`,
  },
  {
    property: "og:description",
    content: `Corwin Marsh's family wishlists.`,
  },
  {
    property: "og:type",
    content: "website",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    title: "Wishlists",
    path: "/wishlist",
  });
};

const wishLists = [
  {
    name: "Corwin",
    links: [
      {
        label: "Amazon",
        icon: faAmazon,
        href: "https://www.amazon.com/hz/wishlist/ls/8LUIV79W3JTK",
      },
      {
        label: "Home Depot",
        icon: faHome,
        href: "https://www.homedepot.com/list/view/details/shared/ce78b3a0-0459-11ec-8f0b-87c07d1a232d",
      },
    ],
  },
  {
    name: "Carly",
    links: [
      {
        label: "Amazon",
        icon: faAmazon,
        href: "https://www.amazon.com/hz/wishlist/ls/1JB8BVVZ4X45M",
      },
    ],
  },
  {
    name: "Mayme",
    links: [
      {
        label: "Amazon",
        icon: faAmazon,
        href: "https://www.amazon.com/hz/wishlist/ls/23YHQCRCT7HYY",
      },
    ],
  },
];

export default function Wishlist() {
  return (
    <div className="lg:w-[56rem]">
      <ProfileSection>
        <div className="md:grid md:grid-cols-3 md:gap-4 mt-4">
          {wishLists.map(({ name, links }) => (
            <div key={name}>
              <h2> {name} </h2>
              <ul className="my-2">
                {links.map(({ label, icon, href }) => (
                  <li key={label}>
                    <ProfileLink href={href}>
                      <FontAwesomeIcon icon={icon} className="w-6" />- {label}
                    </ProfileLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ProfileSection>
    </div>
  );
}
