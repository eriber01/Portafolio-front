import { useState } from "react";
import { validateForm } from "../../utils/validateForm";
import { sendEmail } from "../../utils/sendEmail";

export interface emailInterface {
  name: string;
  email: string;
  message: string;
}

const InitialState: emailInterface = {
  name: "",
  email: "",
  message: "",
};

export const useActions = () => {
  const [state, setState] = useState(InitialState);

  const onChange: any = (value: string, path: string) => {
    setState((prev) => ({
      ...prev,
      [path]: value,
    }));
  };

  const onSave: any = async () => {

    if (validateForm(state, "sendEmail")) {
      await sendEmail(state);
      setState(InitialState);
      return;
    }
  };

  return [{ state }, { setState, onChange, onSave }];
};
