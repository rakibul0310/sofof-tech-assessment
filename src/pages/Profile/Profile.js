"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Award, Camera, CheckCircle, LogOut, Star } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Ahmed Mohammed",
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

  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[0-9\s\-]+$/, "Invalid phone number"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Form submitted:", values);
      setUser((prev) => ({ ...prev, ...values }));
      setSubmitting(false);

      // Show success toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }, 1000);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 relative">
      <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src={avatarPreview}
              alt={user.name}
              className="w-20 h-20 rounded-full border-4 border-white/20"
            />
            <label
              htmlFor="avatar"
              className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Camera className="w-4 h-4 text-purple-600" />
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
            <p className="text-purple-100 mb-2">{user.email}</p>
            <div className="flex items-center space-x-2">
              {user.isPremium && (
                <span className="bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  <span>Premium</span>
                </span>
              )}
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                Member since {new Date(user.memberSince).getFullYear()}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">{user.stats.orders}</div>
            <div className="text-purple-200 text-sm">Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">{user.stats.points}</div>
            <div className="text-purple-200 text-sm">Points</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Award className="w-6 h-6 text-yellow-400 mr-1" />
              <span className="text-lg font-bold">{user.stats.level}</span>
            </div>
            <div className="text-purple-200 text-sm">Level</div>
          </div>
        </div>
      </div>

      {/* Update Profile Form */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-4">Update Profile</h3>
        <Formik
          initialValues={{
            name: user.name,
            email: user.email,
            phone: user.phone,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white rounded-2xl p-4 font-semibold flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Logout Button */}
      <button className="w-full bg-red-50 text-red-600 rounded-2xl p-4 font-semibold flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>Profile updated successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
