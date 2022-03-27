import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userReducer from "./reducers/userSlice";
const rootReducers = combineReducers({
     userReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    })
};

//get types: first - typ state, second - typ store, third - typ dispatch store
export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']