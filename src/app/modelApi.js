import { apiSlice } from "./apiSlice";

export const modelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocation: builder.query({
      query: () => "/locations",
    }),
    modelControllers: builder.query({
      query: () => "/models",
    }),
    detailControllers: builder.query({
      query: (name) => `/models/brand/${name}`,
    }),
  }),
});

export const {
  useGetLocationQuery,
  useModelControllersQuery,
  useDetailControllersQuery,
} = modelApi;
