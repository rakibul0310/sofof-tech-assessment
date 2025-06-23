"use client";

import { Play, Download, Share2, Heart, Eye } from "lucide-react";
import { useState } from "react";

const Media = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mediaItems] = useState([
    {
      id: 1,
      title: "دليل الحج والعمرة",
      titleEn: "Hajj & Umrah Guide",
      type: "video",
      duration: "15:30",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 1250,
      likes: 89,
      category: "educational",
    },
    {
      id: 2,
      title: "جولة في المسجد الحرام",
      titleEn: "Tour of Masjid al-Haram",
      type: "video",
      duration: "8:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 2100,
      likes: 156,
      category: "tour",
    },
    {
      id: 3,
      title: "أدعية الحج",
      titleEn: "Hajj Prayers",
      type: "audio",
      duration: "12:20",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 890,
      likes: 67,
      category: "spiritual",
    },
    {
      id: 4,
      title: "تاريخ مكة المكرمة",
      titleEn: "History of Makkah",
      type: "video",
      duration: "25:15",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 1680,
      likes: 134,
      category: "educational",
    },
    {
      id: 5,
      title: "مناسك العمرة",
      titleEn: "Umrah Rituals",
      type: "video",
      duration: "18:30",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 3200,
      likes: 245,
      category: "educational",
    },
    {
      id: 6,
      title: "أصوات الحرم",
      titleEn: "Sounds of Haram",
      type: "audio",
      duration: "45:00",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: 1450,
      likes: 98,
      category: "spiritual",
    },
  ]);

  const categories = [
    { id: "all", label: "الكل", count: mediaItems.length },
    {
      id: "educational",
      label: "تعليمي",
      count: mediaItems.filter((item) => item.category === "educational")
        .length,
    },
    {
      id: "spiritual",
      label: "روحاني",
      count: mediaItems.filter((item) => item.category === "spiritual").length,
    },
    {
      id: "tour",
      label: "جولات",
      count: mediaItems.filter((item) => item.category === "tour").length,
    },
  ];

  const filteredMedia =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Media</h1>

      {/* Categories */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex-shrink-0 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-white text-purple-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                  <Play className="w-6 h-6 text-purple-600" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                {item.duration}
              </div>
              <div className="absolute top-2 left-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === "video"
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {item.type === "video" ? "فيديو" : "صوت"}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1 text-right line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{item.titleEn}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                  تشغيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-16">
          <Play className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            لا توجد وسائط
          </h3>
          <p className="text-gray-500">لا توجد وسائط في هذه الفئة</p>
        </div>
      )}
    </div>
  );
};

export default Media;
