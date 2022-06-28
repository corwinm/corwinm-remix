import React from "react";

import Header from "./header";
import SocialLinks from "./social-links";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header siteTitle="Corwin W. Marsh" />
      <main className="my-0 mb-16 mx-auto max-w-4xl px-4 pb-5 flex flex-col md:flex-row md:m-bottom-8">
        {children}
      </main>
      <footer className="sticky bottom-0 left-0 right-0 p-2 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 md:fixed">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Layout;
