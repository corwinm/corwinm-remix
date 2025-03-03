import Footer from "./footer";
import Header from "./header";
import StarryBackground from "./starry-background";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header siteTitle="Corwin W. Marsh" />
      <main className="my-0 mb-16 mx-auto max-w-4xl px-4 pb-5 flex flex-col md:m-bottom-8 grow">
        <StarryBackground />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
