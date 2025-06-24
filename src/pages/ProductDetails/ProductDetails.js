"use client";

import { ChevronDown, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currency, setCurrency] = useState("USD");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const currencies = [
    { code: "SAR", symbol: "ر.س", label: "Saudi Riyal" },
    { code: "USD", symbol: "$", label: "US Dollar" },
    { code: "EUR", symbol: "€", label: "Euro" },
  ];

  const product = {
    id: 1,
    name: "5 Cartons",
    description: "330 ml • 20 bottles",
    price: 50.0,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    overview:
      "For this items it will be distribute in Haram and Around Haram from 1 Ramadan to 10 Ramadan",
    features: [
      "100% natural spring water source",
      "Advanced multi-stage filtration",
      "BPA-free recyclable packaging",
      "Perfect pH balance (7.0-7.5)",
      "Convenient bulk packaging",
    ],
  };

  const suggestedProducts = [
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
  ];

  const currentCurrency = currencies.find((c) => c.code === currency);

  const addToCart = () => {
    console.log("Added to cart:", { ...product, quantity });
    // Here you would typically dispatch to a cart context or state management
  };

  const goBack = () => {
    navigate(-1);
  };

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const ProductImage = ({ isMain = false, className = "", imgSrc }) => (
    <div
      className={`bg-[#f5f2f8] rounded-xl flex items-center justify-center ${className}`}
    >
      <img src={imgSrc} alt={product.name} />
    </div>
  );

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <img src="/assets/back_btn.png" alt="Back" />
          </button>
          <div>
            <h1 className="text-[24px] md:text-[40px] w-[12rem] md:w-[32rem] leading-[1] font-bold text-gray-900">
              Product Details
            </h1>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className="flex items-center space-x-2 bg-[#3f2057] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
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

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <ProductImage
            isMain
            className="h-80 p-8"
            imgSrc={"/assets/product_image_277x196.png"}
          />

          {/* Thumbnail Images */}
          <div className="grid grid-cols-2 gap-4">
            <ProductImage
              className="h-32 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
              imgSrc={"/assets/product_image_134x88.png"}
            />
            <ProductImage
              className="h-32 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
              imgSrc={"/assets/product_image_134x88.png"}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-1">{product.description}</p>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {currentCurrency?.symbol} {(product.price * quantity).toFixed(1)}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-1">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(-1)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-12 text-center font-medium text-lg">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(1)}
                className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
              >
                <Plus className="w-4 h-4 text-purple-600" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full bg-gray-800 text-white py-4 rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>

          {/* Product Overview */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              Product Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">{product.overview}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              Key Features
            </h3>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 text-gray-600"
                >
                  <span className="text-purple-600 mt-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Suggested Similar Products */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">
            Suggested Similar Products
          </h3>
          <NavLink
            to="/mecca-mosques"
            className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
          >
            <span>See All</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {suggestedProducts.map((suggestedProduct) => (
            <div
              key={suggestedProduct.id}
              className="bg-[#f5f2f8] rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/${suggestedProduct.id}`)}
            >
              {/* Product Image */}
              <ProductImage
                className="h-24 p-2 mb-4"
                imgSrc={"/assets/product_image_134x88.png"}
              />

              {/* Product Info */}
              <div className="text-center mb-4">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                  {suggestedProduct.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {suggestedProduct.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-lg font-bold text-gray-900">
                  {currentCurrency?.symbol} {suggestedProduct.price.toFixed(1)}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Added to cart:", suggestedProduct);
                }}
                className="w-full bg-gray-800 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
