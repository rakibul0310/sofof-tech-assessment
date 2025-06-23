"use client";

import { useState } from "react";
import { Menu, RotateCcw, ChevronDown } from "lucide-react";

const Header = () => {
  const [language, setLanguage] = useState("Eng");

  const toggleLanguage = () => {
    setLanguage(language === "Eng" ? "عربي" : "Eng");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      <div className="max-w-sm mx-auto lg:max-w-4xl">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left - Menu Button */}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Center - Logo */}
          <div className="flex items-center">
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <span className="text-gray-800 font-medium text-lg">قطرات</span>
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 -mt-1">Qatarat</div>
            </div>
          </div>

          {/* Right - Controls */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <RotateCcw className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
            >
              <div className="w-5 h-3 bg-red-500 rounded-sm flex items-center justify-center">
                <div className="w-3 h-2 bg-blue-600 rounded-sm"></div>
              </div>
              <span className="text-sm">{language}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-900 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
