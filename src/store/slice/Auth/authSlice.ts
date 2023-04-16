import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthInterface {
  isLogin: boolean;
  isOpen: boolean;
}

const initialState: AuthInterface = {
  isLogin: false,
  isOpen: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (
      state,
      { payload: { data } }: PayloadAction<{ data: AuthInterface }>
    ) => {
      console.log(data);
      state.isOpen = data.isOpen;
      state.isLogin = data.isLogin;
    },
    toggle: (
      state,
      { payload: { data } }: PayloadAction<{ data: AuthInterface }>
    ) => {
      console.log(data);
      state.isOpen = data.isOpen;
      state.isLogin = data.isLogin;
    },
  },
});

export default AuthSlice.reducer;

export const { signup, toggle } = AuthSlice.actions;
