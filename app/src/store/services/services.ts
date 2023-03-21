import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPhoto} from "../type";


export const fetchPhotos = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: builder => ({
        fetchPhotos: builder.query<IPhoto[], number>({
            query: (limit) => ({
                url: '/photos',
                _limit: limit
            })
        })
    })
})