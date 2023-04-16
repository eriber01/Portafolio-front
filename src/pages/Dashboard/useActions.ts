import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { VALIDATE_TOKEN } from "../../useInitialActions";
import { useAppDispatch } from "../../store/store";
import { signup } from "../../store/slice/Auth/authSlice";
import { useNavigate } from "react-router-dom";

interface navDashboardState {
  tabActive: number;
  toggle: boolean;
}

const initialState: navDashboardState = {
  tabActive: 1,
  toggle: true,
};

export const validateLoginFn = async (client: any) => {
  const token = sessionStorage.getItem("token");

  const { data, loading } = await client.query({
    query: VALIDATE_TOKEN,
    fetchPolicy: "network-only",
    variables: {
      data: {
        token,
      },
    },
  });

  if (data && !loading) {
    console.log(data.validateToken);
    return data.validateToken.isLogin;
  }
};

export const useActions = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const onChangeNav: any = (path: string, value: number | boolean) => {
    setState((prev) => ({
      ...prev,
      [path]: value,
    }));
  };

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
    if (dataToken && !loadingToken) {
      console.log("data.validateToken: ", dataToken.validateToken);

      if (dataToken?.validateToken?.isLogin) {
      } else {
        sessionStorage.removeItem("token");
        history("/page-not-found");
        dispatch(signup({ data: { isLogin: false, isOpen: false } }));
      }
    }
  }, [dataToken, loadingToken, dispatch, history]);

  return [{ state }, { setState, onChangeNav, dispatch }];
};
