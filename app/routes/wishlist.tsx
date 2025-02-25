import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faHome, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import type { MetaFunction } from "react-router";
import { ProfileLink } from "~/components/profile-link";
import ProfileSection from "~/components/profile-section";

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

export const loader = async () => {
  return {
    title: "Wishlists",
    path: "/wishlist",
  };
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

const share = async (name: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${name}'s Wishlist`,
        text: `Check out ${name}'s wishlist!`,
        url: window.location.href,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  }
};

export default function Wishlist() {
  return (
    <div className="lg:w-[56rem]">
      <ProfileSection>
        <div className="text-center mb-8">
          <p className="text-stone-600 dark:text-stone-400">
            Browse gift ideas for the whole family
          </p>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-6 mt-4">
          {wishLists.map(({ name, links }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 md:mb-0 bg-stone-100 dark:bg-stone-900 rounded-lg shadow-md p-6 
                hover:shadow-xl hover:scale-102 hover:bg-stone-50 dark:hover:bg-stone-600 
                transform transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <motion.button
                  onClick={() => share(name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                  title="Share wishlist"
                >
                  <FontAwesomeIcon icon={faShare} />
                </motion.button>
              </div>

              <div className="text-sm text-stone-500 dark:text-stone-400 mb-4">
                {links.length} {links.length === 1 ? "list" : "lists"} available
              </div>

              <ul className="space-y-3">
                {links.map(({ label, icon, href }) => (
                  <motion.li key={label} whileHover={{ scale: 1.02 }}>
                    <ProfileLink href={href}>
                      <div
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-stone-200 
                        dark:hover:bg-stone-700 transition-colors"
                      >
                        <div
                          className="w-8 h-8 flex items-center justify-center 
                          bg-stone-200 dark:bg-stone-700 rounded-full"
                        >
                          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{label}</span>
                      </div>
                    </ProfileLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </ProfileSection>
    </div>
  );
}
