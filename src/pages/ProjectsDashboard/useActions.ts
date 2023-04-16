import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Project, getProjects } from "../../store/slice/Project/projectSlice";
import { getTechs } from "../../store/slice/Tech/techSlice";
import { useAppDispatch } from "../../store/store";
import { messageError } from "../../utils/messageManage";
import { validateForm } from "../../utils/validateForm";
import {
  CREATED_PROJECT,
  DELETE_PROJECT,
  ENABLED_PROJECT,
  GET_PROJECTS,
  GET_TECH,
} from "./queries";
import { validateLoginFn } from "../Dashboard/useActions";

interface techs {
  id: number | null;
  name: string;
}

export interface projects {
  project: Project;
  activeTab: string;
  techSelected: {
    id: number | null;
    name: string;
  };
  techs: techs[];
}

const initialState: projects = {
  project: {
    id: null,
    name: "",
    descriptions: "",
    enabled: true,
    gitUrl: "",
    publicId: "",
    url: "",
    projectImg: [],
  },
  activeTab: "1",
  techSelected: {
    id: null,
    name: "",
  },
  techs: [],
};

export const useActions = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();
  const client = useApolloClient();

  const onChange: any = (value: any, path: string, type: string) => {
    console.log("path: ", path);
    console.log("value: ", value);

    if (type === "tap") {
      setState((prev) => ({
        ...prev,
        activeTab: value,
      }));
      return;
    }

    if (path === "projectImg") {
      setState((prev) => ({
        ...prev,
        project: {
          ...prev.project,
          projectImg: value[0],
        },
      }));

      return;
    } else if (path === "techSelected") {
      const obj = {
        value: value.id,
        label: value.name,
        ...value,
      };

      console.log("el objeto: ", obj);

      setState((prev) => ({
        ...prev,
        techSelected: { ...obj },
      }));
    }

    setState((prev) => ({
      ...prev,
      project: {
        ...prev.project,
        [path]: value,
      },
    }));
  };

  const addTechs: any = () => {
    const tech = [...state?.techs];

    console.log("tech: ", tech);

    const validate = tech?.find((item) => item.id === state.techSelected.id);

    const obj = {
      id: state.techSelected.id,
      name: state.techSelected.name,
    };

    console.log(obj);

    if (validate?.id) {
      setState((prev) => ({
        ...prev,
        techSelected: { id: null, name: "" },
      }));

      messageError("This Tech Exist");
      return;
    }
    tech?.push(obj);

    setState((prev) => ({
      ...prev,
      techs: tech /* [obj] */,
    }));

    setState((prev) => ({
      ...prev,
      techSelected: { id: null, name: "" },
    }));
  };

  const deleteTechs: any = (id: number) => {
    const arr = state.techs.filter((item) => item.id !== id);

    setState((prev) => ({
      ...prev,
      techs: arr,
    }));
  };

  const { data: tech, loading } = useQuery(GET_TECH, {
    fetchPolicy: "network-only",
    variables: {
      where: { enabled: true },
    },
  });

  const {
    data,
    loading: loadingProject,
    refetch,
  } = useQuery(GET_PROJECTS, {
    fetchPolicy: "network-only",
    variables: {
      where: {},
    },
  });

  const [saveProject] = useMutation(CREATED_PROJECT);

  const onSave: any = async () => {
    const validate = validateForm(state, "project");

    const validateLogin = await validateLoginFn(client);

    if (!validateLogin) {
      return;
    }

    if (validate) {
      const ids = state.techs.map((item) => {
        return { id: item.id };
      });

      console.log("los ids: ", state.techs);

      const payload = {
        id: state.project.id,
        name: state.project.name,
        descriptions: state.project.descriptions,
        url: state.project.url,
        file: state.project.projectImg,
        gitUrl: state.project.gitUrl,
        publicId: state.project.publicId,
        techId: ids,
        enabled: true,
      };

      console.log("el payload: ", payload);

      try {
        toast.loading("Saving the Project");
        await saveProject({
          variables: {
            data: { ...payload },
          },
          onCompleted() {
            setTimeout(() => {
              toast.dismiss();
              toast.success("Project Saved");

              setState(initialState);
              onChange([], "projectImg");

              refetch();
            }, 2000);
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (tech && !loading && !loadingProject && data) {
      dispatch(getTechs(tech?.getTech || []));
      dispatch(getProjects(data?.getProjects || []));
    }
  }, [tech, loading, data, loadingProject, dispatch]);

  const [enabledProjects] = useMutation(ENABLED_PROJECT);
  const enabledProject: any = async (id: number) => {
    const validateLogin = await validateLoginFn(client);

    if (!validateLogin) {
      return;
    }

    try {
      await enabledProjects({
        variables: { where: { id: id } },
      });

      refetch();
    } catch (error) {}
  };

  const [deleteProjectAction] = useMutation(DELETE_PROJECT);
  const deleteProject: any = async (id: number) => {
    const validateLogin = await validateLoginFn(client);

    if (!validateLogin) {
      return;
    }

    try {
      toast.loading("Deleting the Project");
      await deleteProjectAction({
        variables: {
          where: { id },
        },
        onCompleted: (data) => {
          refetch();
          console.log(data);

          setTimeout(() => {
            toast.dismiss();
            toast.success(data?.deleteProject || "");
          }, 2000);
        },
      });
    } catch (error) {
      messageError("The Project not Found");
    }
  };

  const getProjectUnique: any = async (id: number) => {
    try {
      const validateLogin = await validateLoginFn(client);

      if (!validateLogin) {
        return;
      }

      const { data, loading } = await client.query({
        query: GET_PROJECTS,
        fetchPolicy: "network-only",
        variables: {
          where: {
            id,
          },
        },
      });

      console.log(data?.getProjects[0]);

      if (data && !loading) {
        const project: Project = {
          ...data?.getProjects[0],
        };

        setState((prev) => ({
          ...prev,
          project: {
            id: project.id,
            gitUrl: project.gitUrl,

            descriptions: project.descriptions,
            name: project.name,
            // techImg: [],
            publicId: project.publicId,
            url: project.url,
            enabled: project.enabled,
          },
          activeTab: "1",
          techs: project.techData || [],
        }));
      }
    } catch (error) {
      messageError("The Project not Found");
    }
  };

  return [
    { state },
    {
      setState,
      onChange,
      addTechs,
      deleteTechs,
      onSave,
      enabledProject,
      deleteProject,
      getProjectUnique,
    },
  ];
};
