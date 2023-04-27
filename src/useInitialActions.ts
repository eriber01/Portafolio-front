import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_PROFILE } from "./pages/Profile/queries";
import { getProfileData } from "./store/slice/Profile/profileSlice";
import { useAppDispatch } from "./store/store";
import { GET_PROJECTS } from "./pages/ProjectsDashboard/queries";
import { getProjects } from "./store/slice/Project/projectSlice";
import { signup } from "./store/slice/Auth/authSlice";

export const VALIDATE_TOKEN = gql`
  query validateToken($data: validateToken) {
    validateToken(data: $data) {
      token
      message
      isLogin
    }
  }
`;

export const useInitialActions = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useQuery(GET_PROFILE, {
    fetchPolicy: "network-only",
  });

  const { data: Project, loading: loadingProject } = useQuery(GET_PROJECTS, {
    fetchPolicy: "network-only",
    variables: {
      where: {
        enabled: true
      }
    }
  });

  console.log("data", Project);

  const token = sessionStorage.getItem("token");

  const { data: dataToken, loading: loadingToken } = useQuery(VALIDATE_TOKEN, {
    fetchPolicy: "network-only",
    variables: {
      data: {
        token,
      },
    },
  });

  useEffect(() => {
    if (
      data &&
      !loading &&
      Project &&
      !loadingProject &&
      dataToken &&
      !loadingToken
    ) {
      dispatch(getProfileData({ data: data?.getUser[0], loading }));
      dispatch(getProjects(Project?.getProjects || []));
      console.log("data.validateToken: ", dataToken.validateToken);

      if (dataToken?.validateToken?.isLogin) {
        dispatch(
          signup({
            data: { isLogin: dataToken?.validateToken?.isLogin, isOpen: false },
          })
        );
      } else {
        sessionStorage.removeItem("token");
        dispatch(signup({ data: { isLogin: false, isOpen: false } }));
      }
    }
  }, [
    data,
    loading,
    Project,
    loadingProject,
    dispatch,
    dataToken,
    loadingToken,
  ]);
};
