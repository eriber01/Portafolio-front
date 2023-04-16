import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTechs, Tech } from "../../store/slice/Tech/techSlice";
import { useAppDispatch } from "../../store/store";
import { messageError } from "../../utils/messageManage";
import { validateForm } from "../../utils/validateForm";
import {
  CREATED_TECH,
  DELETE_TECH,
  ENABLED_TECH,
  GET_TECH,
  GET_TECH_UNIQUE,
} from "./tabs/queries";

interface tech {
  techs: Tech[];
  tech: Tech;
  activeTab: string;
}

const initialState: tech = {
  tech: {
    id: null,
    name: "",
    descriptions: "",
    techImg: [],
    publicId: "",
    url: "",
    enabled: true,
  },
  techs: [],
  activeTab: "1",
};

export const useActions = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();
  const client = useApolloClient();

  const { data, loading, refetch } = useQuery(GET_TECH, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data && !loading) {
      // onChange("techs", data.getTech);
      console.log("data.getTech: ", data.getTech);

      setState((prev) => ({
        ...prev,
        techs: data.getTech,
      }));

      dispatch(getTechs(data.getTech));
    }
  }, [data, loading, dispatch]);

  const onChange: any = (value: any, path: string, type: string) => {
    if (type === "tap") {
      setState((prev) => ({
        ...prev,
        activeTab: value,
      }));
      return;
    }

    if (path === "techImg") {
      setState((prev) => ({
        ...prev,
        tech: {
          ...prev.tech,
          [path]: value[0],
        },
      }));

      return;
    }

    setState((prev) => ({
      ...prev,
      tech: {
        ...prev.tech,
        [path]: value,
      },
    }));
  };

  const [saveTech] = useMutation(CREATED_TECH);
  const onSave: any = async () => {
    const validate = validateForm(state.tech, "tech");

    if (validate) {
      if (!state?.tech?.techImg) {
        messageError("I need the Image Tech");
        return;
      }
      try {
        toast.loading("Saving the Tech");
        await saveTech({
          variables: {
            data: {
              id: state.tech.id,
              name: state.tech.name,
              file: state.tech.techImg,
              descriptions: state.tech.descriptions,
              publicId: state.tech.publicId,
            },
          },
          onCompleted: (dat: any) => {
            setTimeout(() => {
              toast.dismiss();
              toast.success("Tech Saved");

              setState(initialState);
              onChange([], "techImg");

              refetch();
            }, 2000);
          },
        });
      } catch (error) {
        messageError("Error to save the Tech");
      }
    }
  };

  const [deleteTechAction] = useMutation(DELETE_TECH);
  const deleteTech: any = async (id: number) => {
    try {
      toast.loading("Deleting the Tech");
      await deleteTechAction({
        variables: {
          where: { id },
        },
        onCompleted: (data) => {
          refetch();
          setTimeout(() => {
            toast.dismiss();
            toast.success(data?.deleteTech || "");
          }, 2000);
        },
      });
    } catch (error) {
      messageError("The tech not Found");
    }
  };

  const getTechUnique: any = async (id: number) => {
    try {
      const { data, loading } = await client.query({
        query: GET_TECH_UNIQUE,
        fetchPolicy: "network-only",
        variables: {
          where: {
            id,
          },
        },
      });

      if (data && !loading) {
        const tech: Tech = {
          ...data.getTechUnique,
        };

        setState((prev) => ({
          ...prev,
          tech: {
            id: tech.id,
            descriptions: tech.descriptions,
            name: tech.name,
            techImg: [],
            publicId: tech.publicId,
            url: tech.url,
            enabled: tech.enabled,
          },
          activeTab: "1",
          techs: state.techs,
        }));
      }
    } catch (error) {
      messageError("The tech not Found");
    }
  };

  const [enabledTechs] = useMutation(ENABLED_TECH);
  const enabledTech: any = async (id: number) => {
    try {
      await enabledTechs({
        variables: { where: { id: id } },
      });

      refetch();
    } catch (error) {}
  };

  return [
    { state },
    { setState, onChange, onSave, deleteTech, getTechUnique, enabledTech },
  ];
};
