"use client";

import { useNavigate } from "react-router-dom";
import Carousel from "../../components/UI/Carousel";
import ServiceCard from "../../components/UI/ServiceCard";
import PremiumBanner from "../../components/UI/PremiumBanner";
import LiveBanner from "../../components/UI/LiveBanner";

const Home = () => {
  const navigate = useNavigate();

  const handleServiceCardClick = (serviceType) => {
    switch (serviceType) {
      case "mecca-mosques":
        navigate("/mecca-mosques");
        break;
      case "help":
        console.log("Navigate to help page");
        break;
      case "feeding":
        console.log("Navigate to feeding page");
        break;
      default:
        console.log("Service not implemented yet");
    }
  };

  const carouselSlides = [
    <div
      key="slide1"
      className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden h-44"
    >
      <div className="flex items-center justify-between h-full">
        <div className="rtl text-right flex-1">
          <h2 className="text-2xl font-bold mb-1 leading-tight">نخدم</h2>
          <p className="text-base mb-1 text-purple-100">أكثر من</p>
          <p className="text-4xl font-bold text-yellow-400 mb-2">1000</p>
          <p className="text-sm text-purple-200 leading-tight">مسجد في مكة</p>
          <p className="text-sm text-purple-200 leading-tight">
            داخل حدود الحرم
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 text-6xl font-bold">
        قطرات
      </div>
    </div>,

    <div
      key="slide2"
      className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden h-44"
    >
      <div className="flex items-center justify-between h-full">
        <div className="rtl text-right flex-1">
          <h2 className="text-2xl font-bold mb-1 leading-tight">نعمل</h2>
          <p className="text-base mb-1 text-purple-100">على مدار</p>
          <p className="text-base text-purple-100">الأسبوع</p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-24 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-20 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-amber-400 rounded-t-lg"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-amber-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 text-6xl font-bold">
        قطرات
      </div>
    </div>,

    <div
      key="slide3"
      className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden h-44"
    >
      <div className="flex items-center justify-between h-full">
        <div className="rtl text-right flex-1">
          <h2 className="text-2xl font-bold mb-1 leading-tight">نخدم</h2>
          <p className="text-base mb-1 text-purple-100">أكثر من</p>
          <p className="text-4xl font-bold text-yellow-400 mb-2">1000</p>
          <p className="text-sm text-purple-200 leading-tight">مسجد في مكة</p>
          <p className="text-sm text-purple-200 leading-tight">
            داخل حدود الحرم
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 text-6xl font-bold">
        قطرات
      </div>
    </div>,

    <div
      key="slide4"
      className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden h-44"
    >
      <div className="flex items-center justify-between h-full">
        <div className="rtl text-right flex-1">
          <h2 className="text-2xl font-bold mb-1 leading-tight">نخدم</h2>
          <p className="text-base mb-1 text-purple-100">أكثر من</p>
          <p className="text-4xl font-bold text-yellow-400 mb-2">1000</p>
          <p className="text-sm text-purple-200 leading-tight">مسجد في مكة</p>
          <p className="text-sm text-purple-200 leading-tight">
            داخل حدود الحرم
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 text-6xl font-bold">
        قطرات
      </div>
    </div>,
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Home</h1>

      {/* Hero Carousel */}
      <div className="mb-6 -mx-4">
        <Carousel slides={carouselSlides} />
      </div>

      {/* Live Banner */}
      <LiveBanner />

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div onClick={() => handleServiceCardClick("help")}>
          <ServiceCard
            icon={
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
            title="مساعدة مكة"
            description=""
          />
        </div>
        <div onClick={() => handleServiceCardClick("mecca-mosques")}>
          <ServiceCard
            icon={
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            title="مسجد مكة المكرمة"
            description=""
          />
        </div>
        <div onClick={() => handleServiceCardClick("feeding")}>
          <ServiceCard
            icon={
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
            title="سقيا وإطعام الحرم"
            description=""
          />
        </div>
      </div>

      {/* Premium Banner */}
      <div className="flex">
        <div className="w-2/3">
          <PremiumBanner />
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default Home;
