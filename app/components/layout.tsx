import Footer from "./footer";
import Header from "./header";
import StarryBackground from "./starry-background";
import { publicProfile } from "~/content/profile";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 print:hidden"
      >
        Skip to main content
      </a>
      <Header siteTitle={publicProfile.name} />
      <main
        id="main-content"
        tabIndex={-1}
        className="my-0 mb-16 mx-auto w-full max-w-4xl min-w-0 px-4 pb-5 flex flex-col md:mb-8 grow print:m-0 print:p-0"
      >
        <StarryBackground />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
