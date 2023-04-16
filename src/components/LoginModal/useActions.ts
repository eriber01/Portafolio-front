import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "./queries";
import { messageError } from "../../utils/messageManage";
import { useAppDispatch } from "../../store/store";
import { signup } from "../../store/slice/Auth/authSlice";
import { toast } from "react-toastify";

interface authInteface {
  userName: string;
  password: string;
  visible: boolean;
}

const initialState: authInteface = {
  visible: false,
  password: "",
  userName: "",
};

export const useActions = () => {
  const [state, setState] = useState(initialState);
  const [signupAction] = useMutation(SIGNUP_USER);
  const dispatch = useAppDispatch();

  const onChange: any = (path: string, value: string | boolean) => {
    console.log("value: ", value);
    console.log("path: ", path);

    setState((prev) => ({
      ...prev,
      [path]: value,
    }));
  };

  const login: any = async (item: {
    id: string;
    userName: string;
    password: string;
  }) => {
    console.log(item);

    try {
      const { data } = await signupAction({
        variables: {
          data: item,
        },
      });

      console.log(data);
      if (data?.signup?.isLogin === true) {
        dispatch(
          signup({ data: { isLogin: data?.signup?.isLogin, isOpen: false } })
        );
        sessionStorage.setItem("token", data?.signup?.token);
        toast.success('Login Success')
        setState(initialState);
      } else {
        messageError(data?.signup?.message || "");
      }
    } catch (error) {
      console.log(error);
      setState(initialState);
      messageError("Error to Login");
    }
  };

  const resetState: any = () => {
    setState({
      password: "",
      userName: "",
      visible: false,
    });
  };

  return [{ state }, { login, onChange, signup, dispatch, resetState }];
};
