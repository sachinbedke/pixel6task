import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
    tagTypes: ["api"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["api"]
            })


        }
    }
})

export const { useGetUsersQuery } = Api
