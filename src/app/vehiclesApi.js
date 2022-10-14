import { apiSlice } from "./apiSlice";

export const vehiclesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => "/vehicles",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Post", id })), "Post"]
          : ["Post"],
    }),

    detailVehicles: builder.query({
      query: (id) => `/vehicles/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
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
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
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
