"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [language, setLanguage] = useState("عربي");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "مرحباً بك في قطرات",
      message: "تم تفعيل حسابك بنجاح",
      time: "منذ 5 دقائق",
      read: false,
    },
    {
      id: 2,
      title: "تحديث جديد",
      message: "تم إضافة خدمات جديدة للتطبيق",
      time: "منذ ساعة",
      read: false,
    },
    {
      id: 3,
      title: "تذكير",
      message: "لا تنس تجديد اشتراكك المميز",
      time: "منذ يومين",
      read: true,
    },
  ]);

  const notificationRef = useRef(null);
  const languageRef = useRef(null);

  const languages = [
    { code: "عربي", label: "العربية", flag: "🇸🇦" },
    { code: "Eng", label: "English", flag: "🇺🇸" },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowLanguageDropdown(false);
    setShowSidebar(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    setShowNotifications(false);
    setShowSidebar(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowNotifications(false);
    setShowLanguageDropdown(false);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang.code);
    setShowLanguageDropdown(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-sm mx-auto lg:max-w-4xl">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Left - Menu Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>

            {/* Center - Logo */}
            <div className="flex items-center">
              <div className="text-center">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-800 font-medium text-lg">
                    قطرات
                  </span>
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 -mt-1">Qatarat</div>
              </div>
            </div>

            {/* Right - Controls */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={toggleNotifications}
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800">
                          الإشعارات
                        </h3>
                        {notifications.length > 0 && (
                          <button
                            onClick={clearAllNotifications}
                            className="text-sm text-red-500 hover:text-red-600 transition-colors"
                          >
                            مسح الكل
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                          <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                          <p>لا توجد إشعارات</p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                              !notification.read ? "bg-blue-50" : ""
                            }`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 text-sm mb-1">
                                  {notification.title}
                                </h4>
                                <p className="text-gray-600 text-xs mb-2">
                                  {notification.message}
                                </p>
                                <span className="text-gray-400 text-xs">
                                  {notification.time}
                                </span>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Dropdown */}
              <div className="relative" ref={languageRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="text-lg">{currentLanguage?.flag}</span>
                  <span className="font-medium">{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Language Dropdown Menu */}
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        className={`w-full flex items-center space-x-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          language === lang.code
                            ? "bg-purple-50 text-purple-600"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && (
                          <div className="w-2 h-2 bg-purple-600 rounded-full ml-auto"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Logout Button - More Rounded */}
              <button className="bg-purple-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-purple-900 transition-colors shadow-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
    </>
  );
};

export default Header;
