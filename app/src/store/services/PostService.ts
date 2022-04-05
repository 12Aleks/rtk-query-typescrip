//RTK QUERY

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
  //javno ukazywajem @reduxjs/toolkit kuda dobawlat dannyje, mozem ukazat neskolko tegow
  tagTypes: ['Post'],
  endpoints: (builder) => ({
      //wtoroj jenerik - tip argumenta kotoryj my dobawlaem (limit)
      getPosts: builder.query<IPost[], number>({
          query: (limit: number = 20) => ({
              url: '/posts',
              params: {
                  _limit: limit
              }
          }),
          //javno ukazywajem @reduxjs/toolkit kuda dobawlaet dannyje
          providesTags: result => ['Post']
      }),
      //ima endpointa dajot nazwanie sozdawajemoj funkcii useCreatePostMutation()
      createPost: builder.mutation<IPost, IPost>({
          query: (post) => ({
              url: '/posts',
              method: 'POST',
              body: post
          }),
          //ukazywajem javno czto etot endpoint obespecziwajet konkretnuju dostawku opredelonnych dannych ['Post]
          invalidatesTags: ['Post']
      })
  })
})