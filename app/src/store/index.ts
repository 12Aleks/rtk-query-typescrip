import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {fetchPosts} from "./apiSlice/post.rtk";

const reducer = combineReducers({
   [fetchPosts.reducerPath] : fetchPosts.reducer
})

export const RootStore = () => configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fetchPosts.middleware)
})

export type AppStore = ReturnType<typeof RootStore>
export type AppState = ReturnType<typeof reducer>
export type AppDispatch = AppStore['dispatch']