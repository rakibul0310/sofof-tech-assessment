import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), // Replace with your json-server URL
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
    }),
    updateUser: builder.mutation({
      query: (updatedUser) => ({
        url: `/user`,
        method: "PUT",
        body: updatedUser,
      }),
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    getOrders: builder.query({
      query: () => "/orders",
    }),
    getMedia: builder.query({
      query: () => "/media",
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetProductsQuery,
  useGetOrdersQuery,
  useGetMediaQuery,
} = apiSlice;
