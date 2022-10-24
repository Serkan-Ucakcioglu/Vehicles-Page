import { apiSlice } from "./apiSlice";

export const vehiclesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => "/vehicles",
      providesTags: ["vehicles"],
    }),

    detailVehicles: builder.query({
      query: (id) => `/vehicles/${id}`,
      providesTags: ["vehicles"],
    }),
    addVehicles: builder.mutation({
      query: (data) => ({
        url: "/vehicles",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["vehicles"],
    }),
    updateVehicles: builder.mutation({
      query: (data) => ({
        url: `/vehicles/${data.id}`,
        method: "PUT",
        body: data.req,
      }),
      invalidatesTags: ["vehicles"],
    }),
    deleteVehicles: builder.mutation({
      query: (id) => ({
        url: `/vehicles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vehicles"],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useDetailVehiclesQuery,
  useAddVehiclesMutation,
  useUpdateVehiclesMutation,
  useDeleteVehiclesMutation,
} = vehiclesApi;
