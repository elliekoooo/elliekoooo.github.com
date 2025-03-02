import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { scrollPosition } from "./types";



const scrollReducer = createSlice({
    name: "scroll",
    initialState: {type: "", currentPosition: 0, point: 0} as scrollPosition,
    reducers: {
        set: (state, action: PayloadAction<scrollPosition>) => {
            if(action.payload.type == "up")
                state.currentPosition = state.currentPosition - action.payload.point;
            else if(action.payload.type == "down")
                state.currentPosition = state.currentPosition + action.payload.point;

        },
        get: (state) => {
            return state;
        }
    }
});



const store = configureStore({
    reducer: {
        scroll: scrollReducer.reducer
    }
});

export const { set, get } = scrollReducer.actions;


export default store;