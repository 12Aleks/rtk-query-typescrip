//RTK QUERY

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
  //javno ukazywajem @reduxjs/toolkit kuda dobawlat dannyje, mozem ukazat neskolko tegow, w endpointach eto toze nuzno sdelat
  tagTypes: ['Post'],
  endpoints: (build) => ({
      //wtoroj jenerik - tip argumenta kotoryj my dobawlaem (limit)
      //w jenerik nachoditsa to czto my ojydajem wernotsa iz get zaprosa i number - kolliczestwo postow na stranice
      getPosts: build.query<IPost[], number>({
          query: (limit: number = 20) => ({
              url: '/posts',
              params: {
                  _limit: limit
              }
          }),
          //javno ukazywajem @reduxjs/toolkit kuda dobawlaet dannyje
          providesTags: (result) => ['Post']
      }),
      //ima endpointa dajot nazwanie sozdawajemoj funkcii useCreatePostMutation()
      // w jenerik tip objekta kotoryj vernotsa i tip objekta kotoryj my peredajom parametrom
      createPost: build.mutation<IPost, IPost>({
          query: (post) => ({
              url: '/posts',
              method: 'POST',
              body: post
          }),
          //ukazywajem javno czto etot endpoint obespecziwajet konkretnuju dostawku opredelonnych dannych ['Post]
          invalidatesTags: ['Post']
      }),
      updatePost: build.mutation<IPost, IPost>({
          query: (post) => ({
            url: `/posts/${post.id}`,
            method: 'PUT',
            body: post
          }),
          invalidatesTags: ['Post']
      }),
      deletePost: build.mutation<IPost, IPost>({
          query: (post) => ({
              url:`/posts/${post.id}`,
              method: 'DELETE'
          }),
          invalidatesTags: ['Post']
      })
  })
})