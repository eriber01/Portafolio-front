import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ProfileSlice } from "./slice/Profile/profileSlice";
import { TechSlice } from "./slice/Tech/techSlice";
import { ProjectSlice } from "./slice/Project/projectSlice";
import { AuthSlice } from "./slice/Auth/authSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileSlice.reducer,
    tech: TechSlice.reducer,
    projects: ProjectSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
