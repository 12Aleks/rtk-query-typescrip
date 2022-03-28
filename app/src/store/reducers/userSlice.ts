import {IUser} from "../models/IUser";
import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {fetchUsers} from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error?: string | unknown;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
     // perwyj wariant realizacii
    //reducers: {
        //naczalas zagruzka dannych
    //     usersFetching(state) {
    //         state.isLoading = true
    //     },
    //     //zagruzka dannych i jejo uspesznoje okonczanie
    //     usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //         state.isLoading = false;
    //         state.error = '';
    //         state.users = action.payload
    //
    //     },
    //     //oszybka pri zagruzkie dannych
    //     usersFetchingError(state, action: PayloadAction<string>) {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     }
    // },
    //


    // pri ispolzowanii Thunk
    reducers: {},
    extraReducers: {
        //ozydanie
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },

        //uspesznaja zagruzka
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },

        //oszybka
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});


export default userSlice.reducer
