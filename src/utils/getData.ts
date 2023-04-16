import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../pages/Profile/queries";

export const GetProfile = async () => {
  const { data, loading } = await useQuery(GET_PROFILE, {
    fetchPolicy: "network-only",
  });

  // console.log("aqui la data: ", data);

  return { data, loading };
};
