import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuerys = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_MY_API_URL,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  prepareHeaders: (headers) => {
    const token = process.env.REACT_APP_MY_API_KEY;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQuerys,
  tagTypes: ["vehicles"],
  endpoints: (builder) => ({}),
});
