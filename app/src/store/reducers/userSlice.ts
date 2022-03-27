import {IUser} from "../models/IUser";
import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error?: string | unknown ;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       usersFetching(state) {
          state.isLoading = true
       },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
           state.isLoading = false;
           state.error = '';
           state.users = action.payload

        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});


export default userSlice.reducer
