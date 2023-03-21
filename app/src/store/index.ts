import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {fetchPhotos} from "./services/services";

const rootReducer = combineReducers({
    [fetchPhotos.reducerPath]: fetchPhotos.reducer
});

export const RootStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchPhotos.middleware)

})

export type AppStore = ReturnType<typeof RootStore>
export type AppState = ReturnType<typeof rootReducer>
export type  AppDispatch = AppStore['dispatch']