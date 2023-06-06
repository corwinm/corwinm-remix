import React from "react";
import Footer from "./footer";

import Header from "./header";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="min-h-screen">
      <Header siteTitle="Corwin W. Marsh" />
      <main className="my-0 mb-16 mx-auto max-w-4xl px-4 pb-5 flex flex-col md:m-bottom-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
