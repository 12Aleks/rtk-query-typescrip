//asinchronnoje poluczenie dannych
import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../models/IUser";
import {userSlice} from "./userSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

//Pervyj varian
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// };

//S Redux Thunk
const dataType:string = 'users';

export const fetchUsers = createAsyncThunk(
    'user/fetchAll', //nazwanie proizwolnoje thunka

    async (_ , thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }//callback s dejstwijami

)