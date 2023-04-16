import { toast } from "react-toastify";

export const messageError = (text: string) => {
  toast.error(text);
};
