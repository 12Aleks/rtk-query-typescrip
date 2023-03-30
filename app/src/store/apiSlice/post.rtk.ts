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
        }),
        getPost: build.query<IPost, number>({
            query: (num: number) => ({
                url: `posts/${num}`
            }),
            providesTags: result => ['POSTS']
        }),
        createPost: build.mutation<IPost[], IPost>({
            query: (post: IPost) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags:  ['POSTS']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['POSTS']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['POSTS']
        })
    })
})

export const {useCreatePostMutation} = fetchPosts