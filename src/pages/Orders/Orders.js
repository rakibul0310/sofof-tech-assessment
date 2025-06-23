"use client";

import { Package, Clock, CheckCircle, XCircle, Eye } from "lucide-react";
import { useState } from "react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "completed",
      total: 425,
      items: [
        { name: "خدمة مساعدة الحج", quantity: 1, price: 150 },
        { name: "دليل المساجد", quantity: 2, price: 75 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "pending",
      total: 200,
      items: [{ name: "خدمة الإطعام", quantity: 1, price: 200 }],
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "cancelled",
      total: 150,
      items: [{ name: "خدمة مساعدة الحج", quantity: 1, price: 150 }],
    },
    {
      id: "ORD-004",
      date: "2024-01-01",
      status: "processing",
      total: 300,
      items: [
        { name: "دليل المساجد", quantity: 2, price: 75 },
        { name: "خدمة الإطعام", quantity: 1, price: 150 },
      ],
    },
  ]);

  const tabs = [
    { id: "all", label: "الكل", count: orders.length },
    {
      id: "completed",
      label: "مكتملة",
      count: orders.filter((o) => o.status === "completed").length,
    },
    {
      id: "pending",
      label: "معلقة",
      count: orders.filter((o) => o.status === "pending").length,
    },
    {
      id: "processing",
      label: "قيد المعالجة",
      count: orders.filter((o) => o.status === "processing").length,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "processing":
        return <Package className="w-5 h-5 text-blue-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "مكتمل";
      case "pending":
        return "معلق";
      case "processing":
        return "قيد المعالجة";
      case "cancelled":
        return "ملغي";
      default:
        return "غير معروف";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Orders</h1>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-white text-purple-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-16">
          <Package className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            لا توجد طلبات
          </h3>
          <p className="text-gray-500">لم تقم بإنشاء أي طلبات بعد</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(order.status)}
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      طلب #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString("ar-SA")}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      {item.price * item.quantity} ر.س
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">عرض التفاصيل</span>
                </button>
                <div className="text-right">
                  <span className="text-sm text-gray-500">المجموع: </span>
                  <span className="font-bold text-lg text-purple-600">
                    {order.total} ر.س
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
