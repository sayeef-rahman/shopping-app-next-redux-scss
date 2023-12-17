"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string | null;
  email: string | null;
}

const initialState: IUser = {
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUserToState: (state, action: PayloadAction<IUser>) => {
      if (state.name === null) {
        state.name = action.payload.name;
        state.email = action.payload.email;
      }
    },
    removeUserFromState: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { addUserToState, removeUserFromState } = userSlice.actions;
export default userSlice.reducer;
