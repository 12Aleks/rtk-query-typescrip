import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../types";

export const fetchPosts = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['POSTS'],
    endpoints: build => ({
        getPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: "posts",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['POSTS']
        })
    })
})