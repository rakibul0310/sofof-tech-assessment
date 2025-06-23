"use client";

import {
  Award,
  Bell,
  Camera,
  Edit,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  Star,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "أحمد محمد",
    nameEn: "Ahmed Mohammed",
    email: "ahmed@example.com",
    phone: "+966 50 123 4567",
    avatar: "/placeholder.svg?height=100&width=100",
    memberSince: "2023-01-15",
    isPremium: true,
    stats: {
      orders: 12,
      points: 450,
      level: "Gold",
    },
  });

  const menuItems = [
    {
      icon: <Edit className="w-5 h-5" />,
      title: "تعديل الملف الشخصي",
      subtitle: "تحديث معلوماتك الشخصية",
      action: () => console.log("Edit profile"),
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "الإشعارات",
      subtitle: "إدارة إعدادات الإشعارات",
      action: () => console.log("Notifications"),
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "الخصوصية والأمان",
      subtitle: "إعدادات الحساب والأمان",
      action: () => console.log("Privacy"),
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "الإعدادات",
      subtitle: "إعدادات التطبيق العامة",
      action: () => console.log("Settings"),
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "المساعدة والدعم",
      subtitle: "الحصول على المساعدة",
      action: () => console.log("Help"),
    },
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="w-20 h-20 rounded-full border-4 border-white/20"
            />
            <button className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Camera className="w-4 h-4 text-purple-600" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
            <p className="text-purple-100 mb-2">{user.nameEn}</p>
            <div className="flex items-center space-x-2">
              {user.isPremium && (
                <span className="bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  <span>Premium</span>
                </span>
              )}
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                عضو منذ {new Date(user.memberSince).getFullYear()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">{user.stats.orders}</div>
            <div className="text-purple-200 text-sm">طلب</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">{user.stats.points}</div>
            <div className="text-purple-200 text-sm">نقطة</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Award className="w-6 h-6 text-yellow-400 mr-1" />
              <span className="text-lg font-bold">{user.stats.level}</span>
            </div>
            <div className="text-purple-200 text-sm">المستوى</div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-right">معلومات الاتصال</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">البريد الإلكتروني</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">رقم الهاتف</span>
            <span className="font-medium">{user.phone}</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                {item.icon}
              </div>
              <div className="flex-1 text-right">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
              <div className="text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <button className="w-full bg-red-50 text-red-600 rounded-2xl p-4 font-semibold flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors">
        <LogOut className="w-5 h-5" />
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );
};

export default Profile;
