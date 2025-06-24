"use client";

import { CreditCard, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hajj Assistance Service",
      nameEn: "Hajj Assistance Service",
      price: 150,
      quantity: 1,
      image: "/assets/logo.png",
      description: "Comprehensive service to assist pilgrims",
    },
    {
      id: 2,
      name: "Mosque Guide",
      nameEn: "Mosque Guide",
      price: 75,
      quantity: 2,
      image: "/assets/logo.png",
      description: "A comprehensive guide to the mosques of Mecca",
    },
    {
      id: 3,
      name: "Feeding Service",
      nameEn: "Feeding Service",
      price: 200,
      quantity: 1,
      image: "/assets/logo.png",
      description: "Catering service for pilgrims and Umrah performers",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + change);
            return newQuantity === 0
              ? null
              : { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Cart</h1>
        <div className="bg-purple-100 px-3 py-1 rounded-full">
          <span className="text-purple-800 font-medium text-sm">
            {totalItems} items
          </span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            The basket is empty
          </h3>
          <p className="text-gray-500 mb-6">
            You have not added any items to your cart yet.
          </p>
          <NavLink
            to="/mecca-mosques"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            Browse Services
          </NavLink>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-right mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{item.nameEn}</p>
                    <p className="text-xs text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-600">
                        {item.price} USD
                      </span>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-purple-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4 text-right">
              Application Summary
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>{totalAmount} USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tax</span>
                <span>{Math.round(totalAmount * 0.15)} USD</span>
              </div>
              <div className="border-t border-purple-400 pt-3">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>{Math.round(totalAmount * 1.15)} USD</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-purple-800 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
              <CreditCard className="w-5 h-5" />
              <span>Follow up on payment</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
