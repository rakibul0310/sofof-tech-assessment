import { FileText, Home, Play, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/cart", icon: ShoppingCart, label: "Cart" },
    { path: "/orders", icon: FileText, label: "Orders" },
    { path: "/media", icon: Play, label: "Media" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
      <div className="max-w-sm mx-auto lg:max-w-4xl">
        <div className="flex justify-around py-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
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
                <Icon
                  className="w-6 h-6 mb-1"
                  strokeWidth={isActive ? 2 : 1.5}
                />
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
