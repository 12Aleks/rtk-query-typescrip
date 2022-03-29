//RTK QUERY

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
      fetchAllPost: builder.query({
          query: () => ({
              url: '/posts'
          })
      })
  })
})