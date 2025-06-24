import FloatingWhatsApp from "../UI/FloatingWhatsApp";
import BottomNavigation from "./BottomNavigation";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pb-16">
        <div className="max-w-sm mx-auto lg:max-w-4xl lg:px-8">{children}</div>
      </main>
      <BottomNavigation />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
