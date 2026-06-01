import Footer from "./footer";
import Header from "./header";
import StarryBackground from "./starry-background";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header siteTitle="Corwin W. Marsh" />
      <main className="my-0 mb-16 mx-auto w-full max-w-4xl min-w-0 px-4 pb-5 flex flex-col md:mb-8 grow print:m-0 print:p-0">
        <StarryBackground />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
