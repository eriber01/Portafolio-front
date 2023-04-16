import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
  id: number | null;
  name: string;
  descriptions: string;
  phone: string;
  email: string;
  linkedin: string;
  position: string;
  cvUrl: string;
  github: string;
  aboutProgramming: string;
  aboutGaming: string;
  aboutSeries: string;
  profileLoading: boolean;
}

// export interface profileState {
//   profile: Profile[];
// }

const initialState: Profile | any = {
  id: null,
  name: "",
  descriptions: "",
  phone: "",
  email: "",
  linkedin: "",
  position: "",
  github: "",
  cvUrl: "",
  aboutProgramming: "",
  aboutGaming: "",
  aboutSeries: "",
  profileLoading: true
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    onChange: (
      state,
      actions: PayloadAction<{ value: string; path: string }>
    ) => {
      console.log(actions.payload);

      state[actions.payload.path] = actions.payload.value;
    },
    getProfileData: (
      state,
      actions: PayloadAction<{ data: any; loading: boolean }>
    ) => {
      console.log(actions.payload.loading);

      state.id = actions?.payload?.data?.id;
      state.name = actions?.payload?.data?.name;
      state.descriptions = actions?.payload?.data?.descriptions;
      state.phone = actions?.payload?.data?.phone;
      state.email = actions?.payload?.data?.email;
      state.github = actions?.payload?.data?.github;
      state.linkedin = actions?.payload?.data?.linkedin;
      state.position = actions?.payload?.data?.position;
      state.cvUrl = actions?.payload?.data?.cvUrl;
      state.aboutProgramming = actions?.payload?.data?.aboutProgramming;
      state.aboutGaming = actions?.payload?.data?.aboutGaming;
      state.aboutSeries = actions?.payload?.data?.aboutSeries;
      state.profileLoading = actions?.payload?.loading;
    },
  },
});

export default ProfileSlice.reducer;

export const { onChange, getProfileData } = ProfileSlice.actions;
