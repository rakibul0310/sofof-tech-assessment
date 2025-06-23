"use client";

import { ArrowLeft, ChevronDown, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MeccaMosques = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("SAR");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const currencies = [
    { code: "SAR", symbol: "ر.س", label: "Saudi Riyal" },
    { code: "USD", symbol: "$", label: "US Dollar" },
    { code: "EUR", symbol: "€", label: "Euro" },
  ];

  const products = [
    {
      id: 1,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 6,
      name: "5 Cartons",
      description: "330 ml • 20 bottles",
      price: 50.0,
      image: "/placeholder.svg?height=120&width=120",
    },
  ];

  const currentCurrency = currencies.find((c) => c.code === currency);

  const addToCart = (product, e) => {
    e.stopPropagation();
    console.log("Added to cart:", product);
    // Here you would typically dispatch to a cart context or state management
  };

  const goBack = () => {
    navigate(-1);
  };

  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Mecca mosques most needed
            </h1>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            <span>{currency}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showCurrencyDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr.code);
                    setShowCurrencyDropdown(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    currency === curr.code
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-700"
                  }`}
                >
                  <span className="font-medium">{curr.code}</span>
                  <span className="text-xs text-gray-500">{curr.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Badge */}
      <div className="flex">
        <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
          Providing Water
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => viewProductDetails(product.id)}
          >
            {/* Product Image */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex items-center justify-center h-32">
              <div className="w-20 h-24 bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg flex items-center justify-center relative">
                {/* Water bottle carton mockup */}
                <div className="w-16 h-20 bg-white rounded border-2 border-purple-400 flex flex-col items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mb-1"></div>
                  <div className="text-xs font-bold text-purple-600">قطرات</div>
                  <div className="text-xs text-gray-500 mt-1">Water</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-4">
              <span className="text-xl font-bold text-gray-900">
                {currentCurrency?.symbol} {product.price.toFixed(1)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => addToCart(product, e)}
              className="w-full bg-gray-800 text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
        <h3 className="font-bold text-purple-800 mb-3 text-right">
          معلومات المشروع
        </h3>
        <div className="space-y-2 text-sm text-purple-700">
          <p className="text-right">
            • توفير المياه للمساجد الأكثر احتياجاً في مكة المكرمة
          </p>
          <p className="text-right">• مياه عالية الجودة ومعبأة بطريقة صحية</p>
          <p className="text-right">• توزيع مباشر على المساجد المحددة</p>
          <p className="text-right">• تقارير دورية عن حالة التوزيع</p>
        </div>
      </div>
    </div>
  );
};

export default MeccaMosques;
