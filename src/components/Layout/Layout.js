import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import FloatingWhatsApp from "../UI/FloatingWhatsApp";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 pb-24">
        <div className="max-w-sm mx-auto bg-gray-100 min-h-screen lg:max-w-4xl lg:px-8">
          {children}
        </div>
      </main>
      <BottomNavigation />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
