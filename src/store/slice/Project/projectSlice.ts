import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface techs {
  id: number | null;
  name: string;
  techId: number;
  url: string;
}

export interface Project {
  id: number | null;
  name: string;
  descriptions: string;
  url?: string;
  gitUrl: string;
  publicId?: string;
  enabled: boolean;
  techData?: techs[];
  img?: string;
  projectImg?: any;
}

interface projectState {
  projects: Project[];
}

const initialState: projectState = {
  projects: [],
};

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getProjects: (state, actions: PayloadAction<Project[]>) => {
      // state.projects.push()

      console.log(actions.payload);
      actions.payload.map((item) => {
        return {
          id: item.id,
          name: item.name,
          descriptions: item.descriptions,
          url: item.url,
          gitUrl: item.gitUrl,
          publicId: item.publicId,
          enabled: item.enabled,
          techData: item.techData,
          img: item.img,
        };
      });
      state.projects = [...actions.payload];
    },
  },
});

export default ProjectSlice.caseReducers;

export const { getProjects } = ProjectSlice.actions;
