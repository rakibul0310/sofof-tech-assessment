"use client";

import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const MeccaMosques = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("SAR");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const currencies = [
    { code: "SAR", symbol: "ر.س", label: "Saudi Riyal" },
    { code: "USD", symbol: "$", label: "US Dollar" },
    { code: "EUR", symbol: "€", label: "Euro" },
  ];

  const statusOptions = [
    { value: "all", label: "All Products", count: 0 },
    { value: "available", label: "Available", count: 0 },
    { value: "limited", label: "Limited Stock", count: 0 },
    { value: "out_of_stock", label: "Out of Stock", count: 0 },
  ];

  const allProducts = [
    {
      id: 1,
      name: "5 Cartons Premium",
      description: "330 ml • 20 bottles",
      price: 50.0,
      status: "available",
      stock: 100,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "5 Cartons Standard",
      description: "330 ml • 20 bottles",
      price: 45.0,
      status: "available",
      stock: 85,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "10 Cartons Bulk",
      description: "330 ml • 40 bottles",
      price: 95.0,
      status: "limited",
      stock: 15,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "3 Cartons Mini",
      description: "330 ml • 12 bottles",
      price: 30.0,
      status: "available",
      stock: 200,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "7 Cartons Family",
      description: "330 ml • 28 bottles",
      price: 65.0,
      status: "out_of_stock",
      stock: 0,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 6,
      name: "5 Cartons Eco",
      description: "330 ml • 20 bottles",
      price: 48.0,
      status: "limited",
      stock: 8,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 7,
      name: "12 Cartons Wholesale",
      description: "330 ml • 48 bottles",
      price: 110.0,
      status: "available",
      stock: 50,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 8,
      name: "5 Cartons Deluxe",
      description: "330 ml • 20 bottles",
      price: 55.0,
      status: "available",
      stock: 75,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 9,
      name: "8 Cartons Special",
      description: "330 ml • 32 bottles",
      price: 80.0,
      status: "limited",
      stock: 12,
      image: "/placeholder.svg?height=120&width=120",
    },
  ];

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((product) => product.status === statusFilter);
    }

    return filtered;
  }, [searchQuery, statusFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Update status counts
  const updatedStatusOptions = statusOptions.map((option) => ({
    ...option,
    count:
      option.value === "all"
        ? allProducts.length
        : allProducts.filter((p) => p.status === option.value).length,
  }));

  const currentCurrency = currencies.find((c) => c.code === currency);

  const getStatusBadge = (status, stock) => {
    switch (status) {
      case "available":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            Available
          </span>
        );
      case "limited":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            Limited ({stock})
          </span>
        );
      case "out_of_stock":
        return (
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  const addToCart = (product, e) => {
    e.stopPropagation();
    if (product.status === "out_of_stock") return;
    console.log("Added to cart:", product);
  };

  const goBack = () => {
    navigate(-1);
  };

  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setCurrentPage(1);
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

      {/* Search and Filter Section */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Filter and Results Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4 text-gray-500" />
                <span>Status</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {showFilterDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  {updatedStatusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setStatusFilter(option.value);
                        setCurrentPage(1);
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        statusFilter === option.value
                          ? "bg-purple-50 text-purple-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-gray-500">
                        ({option.count})
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear Filters */}
            {(searchQuery || statusFilter !== "all") && (
              <button
                onClick={clearFilters}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing {paginatedProducts.length} of {filteredProducts.length}{" "}
            products
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {paginatedProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer ${
                product.status === "out_of_stock" ? "opacity-60" : ""
              }`}
              onClick={() =>
                product.status !== "out_of_stock" &&
                viewProductDetails(product.id)
              }
            >
              {/* Product Image */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4 flex items-center justify-center h-32 relative">
                <div className="w-20 h-24 bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg flex items-center justify-center relative">
                  {/* Water bottle carton mockup */}
                  <div className="w-16 h-20 bg-white rounded border-2 border-purple-400 flex flex-col items-center justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full mb-1"></div>
                    <div className="text-xs font-bold text-purple-600">
                      قطرات
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Water</div>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  {getStatusBadge(product.status, product.stock)}
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
                disabled={product.status === "out_of_stock"}
                className={`w-full py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 ${
                  product.status === "out_of_stock"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>
                  {product.status === "out_of_stock"
                    ? "Out of Stock"
                    : "Add to Cart"}
                </span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-colors ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-colors ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

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
