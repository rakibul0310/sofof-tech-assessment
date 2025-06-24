import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", src: "/assets/home-solid.png", label: "Home" },
    { path: "/cart", src: "/assets/cart.png", label: "Cart" },
    { path: "/orders", src: "/assets/order.png", label: "Orders" },
    { path: "/media", src: "/assets/media.png", label: "Media" },
    { path: "/profile", src: "/assets/profile.png", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-5 left-0 right-0 z-30">
      <div className="max-w-sm mx-auto lg:max-w-xl bg-white border-t border-gray-200 rounded-full shadow-lg">
        <div className="flex justify-around py-2 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors min-w-0 ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-400 hover:text-purple-600"
                }`}
              >
                <img src={item.src} alt={item.label} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-8 h-1 bg-purple-600 rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
