import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userReducer from "./reducers/userSlice";
import {postAPI} from "./services/PostService";


const rootReducers = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
};

//get types: first - typ state, second - typ store, third - typ dispatch store
export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']