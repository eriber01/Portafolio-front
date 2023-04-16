import { useEffect } from "react";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { CREATE_UPDATE_USER, GET_PROFILE } from "./queries";
import { getProfileData } from "../../store/slice/Profile/profileSlice";
import { validateForm } from "../../utils/validateForm";
import { toast } from "react-toastify";
import { validateLoginFn } from "../Dashboard/useActions";



export const useActions = () => {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const client = useApolloClient();

  const { data, loading } = useQuery(GET_PROFILE, {
    fetchPolicy: "network-only",
  });

  console.log("data", data);

  useEffect(() => {
    if (data && !loading) {
      dispatch(getProfileData({ data: data?.getUser[0], loading }));
    }
  }, [data, loading, dispatch]);


  const [saveUser] = useMutation(CREATE_UPDATE_USER);
  const onSave = async () => {
    const validate = validateForm(profile, "profile");

    if (!validate) {
      return;
    }

    const validateLogin = await validateLoginFn(client);

    if (!validateLogin) {
      return;
    }

    const payload = {
      ...profile,
    };

    delete payload.profileLoading;

    try {
      toast.loading("Saving the Profile");
      await saveUser({
        variables: { data: payload },
        onCompleted: (dat) => {
          console.log("completado: ", dat);
          setTimeout(() => {
            toast.dismiss();
            toast.success("Profile Saved");
          }, 2000);
        },
      });
    } catch (error) {
      toast.error("Error to Save the Profile");
    }

    console.log("validate", validate);
  };

  return { onSave };
};
