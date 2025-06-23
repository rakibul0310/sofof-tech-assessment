"use client";

import {
  Bell,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Play,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  User,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const mainMenuItems = [
    { path: "/", icon: Home, label: "الرئيسية", labelEn: "Home" },
    { path: "/cart", icon: ShoppingCart, label: "السلة", labelEn: "Cart" },
    { path: "/orders", icon: FileText, label: "الطلبات", labelEn: "Orders" },
    { path: "/media", icon: Play, label: "الوسائط", labelEn: "Media" },
    { path: "/profile", icon: User, label: "الملف الشخصي", labelEn: "Profile" },
  ];

  const settingsMenuItems = [
    {
      icon: Settings,
      label: "الإعدادات",
      labelEn: "Settings",
      action: () => console.log("Settings"),
    },
    {
      icon: Bell,
      label: "الإشعارات",
      labelEn: "Notifications",
      action: () => console.log("Notifications"),
    },
    {
      icon: Shield,
      label: "الخصوصية",
      labelEn: "Privacy",
      action: () => console.log("Privacy"),
    },
    {
      icon: HelpCircle,
      label: "المساعدة",
      labelEn: "Help",
      action: () => console.log("Help"),
    },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <h2 className="font-bold text-lg">قطرات</h2>
                  <p className="text-purple-200 text-sm">Qatarat</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-white/30"
              />
              <div>
                <h3 className="font-semibold">أحمد محمد</h3>
                <div className="flex items-center space-x-1">
                  <Star
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                  />
                  <span className="text-purple-200 text-sm">عضو مميز</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Menu */}
            <div className="p-4">
              <h4 className="text-gray-500 text-sm font-medium mb-3 text-right">
                القائمة الرئيسية
              </h4>
              <nav className="space-y-1">
                {mainMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                        isActive
                          ? "bg-purple-100 text-purple-600 border-r-4 border-purple-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="flex-1 text-right">
                        <span className="font-medium">{item.label}</span>
                        <p className="text-xs text-gray-400">{item.labelEn}</p>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mx-4"></div>

            {/* Settings Menu */}
            <div className="p-4">
              <h4 className="text-gray-500 text-sm font-medium mb-3 text-right">
                الإعدادات
              </h4>
              <nav className="space-y-1">
                {settingsMenuItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <div className="flex-1 text-right">
                        <span className="font-medium">{item.label}</span>
                        <p className="text-xs text-gray-400">{item.labelEn}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5" />
              <div className="flex-1 text-right">
                <span className="font-medium">تسجيل الخروج</span>
                <p className="text-xs text-red-400">Logout</p>
              </div>
            </button>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">الإصدار 1.0.0</p>
              <p className="text-xs text-gray-400">© 2024 Qatarat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
