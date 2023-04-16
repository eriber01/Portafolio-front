import { toast } from "react-toastify";
import { emailInterface } from "../pages/Contacts/useActions";
import { messageError } from "./messageManage";
import emailjs from "@emailjs/browser";

export const sendEmail = async (data: emailInterface) => {
  toast.loading("Sending Message");

  const templateParams = {
    ...data,
  };

  await emailjs
    .send(
      `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    )
    .then(
      (response) => {
        if (response.status === 200) {
          toast.dismiss();
          toast.success("Send Email");
        }
      },
      (err) => {
        messageError(`Error Send Email ${err}`);
      }
    );
};
