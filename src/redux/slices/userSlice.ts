"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  name: string | null;
}

const initialState: IUser = {
  name: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUserToState: (state, action: PayloadAction<IUser>) => {
      state.name = action.payload.name;
      localStorage.setItem("user", JSON.stringify(action.payload.name));
    },
    removeUserFromState: (state) => {
      state.name = null;
    },
  },
});

export const { addUserToState, removeUserFromState } = userSlice.actions;
export default userSlice.reducer;
